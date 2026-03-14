const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const upload = multer();
const path = require('path');
const fs = require('fs');
const Tesseract = require('tesseract.js');
const sharp = require('sharp');
const { createClient } = require('@supabase/supabase-js');
const ExcelJS = require('exceljs');
const csv = require('csv-parser');
const Anthropic = require('@anthropic-ai/sdk');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const uploadWithFilter = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp|xlsx|xls|csv/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype) ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      file.mimetype === 'application/vnd.ms-excel' ||
      file.mimetype === 'text/csv';

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image and template files (xlsx, csv) are allowed!'));
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Inventory App API'
  });
});

// ===== TEMPLATE ENDPOINTS (unchanged) =====

app.post('/api/templates/upload', uploadWithFilter.single('template'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No template file uploaded' });
    }

    const { businessId } = req.body;
    if (!businessId) {
      return res.status(400).json({ success: false, error: 'businessId is required' });
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    const fileType = path.extname(req.file.originalname).toLowerCase();

    console.log('Parsing template file:', req.file.filename, 'Type:', fileType);

    let columns;
    if (fileType === '.xlsx' || fileType === '.xls') {
      columns = await parseExcelTemplate(filePath);
    } else if (fileType === '.csv') {
      columns = await parseCsvTemplate(filePath);
    } else {
      return res.status(400).json({ success: false, error: 'Unsupported file type. Please upload .xlsx or .csv' });
    }

    console.log('Extracted columns:', columns);

    const fileBuffer = fs.readFileSync(filePath);
    const storageFileName = `${businessId}/${Date.now()}-${req.file.originalname}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('templates')
      .upload(storageFileName, fileBuffer, {
        contentType: req.file.mimetype,
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      return res.status(500).json({ success: false, error: `Failed to upload to storage: ${uploadError.message}` });
    }

    const { data: dbData, error: dbError } = await supabase
      .from('templates')
      .insert({ business_id: businessId, columns: columns, file_path: storageFileName, file_type: fileType })
      .select()
      .single();

    if (dbError) {
      console.error('Supabase database error:', dbError);
      return res.status(500).json({ success: false, error: `Failed to save template: ${dbError.message}` });
    }

    fs.unlinkSync(filePath);
    console.log('Template saved successfully:', dbData.id);

    res.json({ success: true, templateId: dbData.id, columns: columns, message: 'Template uploaded and saved successfully' });

  } catch (error) {
    console.error('Template upload error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/templates/:businessId', async (req, res) => {
  try {
    const { businessId } = req.params;

    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('business_id', businessId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ success: false, error: 'No template found for this business' });
      }
      throw error;
    }

    res.json({ success: true, template: data });

  } catch (error) {
    console.error('Template fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/templates/list/:businessId', async (req, res) => {
  try {
    const { businessId } = req.params;

    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('business_id', businessId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, templates: data || [] });

  } catch (error) {
    console.error('Template list error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== SESSION ENDPOINTS =====

// Get all sessions for a business
app.get('/api/sessions/:businessId', async (req, res) => {
  try {
    const { businessId } = req.params;

    const { data, error } = await supabase
      .from('inventory_sessions')
      .select('*')
      .eq('business_id', businessId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, sessions: data || [] });

  } catch (error) {
    console.error('Sessions fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a new session
app.post('/api/sessions', async (req, res) => {
  try {
    const { name, businessId } = req.body;

    if (!name || !businessId) {
      return res.status(400).json({ success: false, error: 'name and businessId are required' });
    }

    const { data, error } = await supabase
      .from('inventory_sessions')
      .insert({ name, business_id: businessId, status: 'in_progress' })
      .select()
      .single();

    if (error) throw error;

    console.log('Session created:', data.id);
    res.json({ success: true, session: data });

  } catch (error) {
    console.error('Session create error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete a session (cascades to areas, images, items)
app.delete('/api/sessions/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;

    const { error } = await supabase
      .from('inventory_sessions')
      .delete()
      .eq('id', sessionId);

    if (error) throw error;

    console.log('Session deleted:', sessionId);
    res.json({ success: true });

  } catch (error) {
    console.error('Session delete error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update session status (e.g. mark as completed)
app.patch('/api/sessions/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { status } = req.body;

    const { data, error } = await supabase
      .from('inventory_sessions')
      .update({ status })
      .eq('id', sessionId)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, session: data });

  } catch (error) {
    console.error('Session update error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Export full session — all areas combined into one Excel file with one sheet per area
app.post('/api/sessions/:sessionId/export', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { businessId, templateId } = req.body;

    // Fetch session
    const { data: session, error: sessionError } = await supabase
      .from('inventory_sessions')
      .select('*')
      .eq('id', sessionId)
      .single();

    if (sessionError) throw sessionError;

    // Fetch all areas for session
    const { data: areas, error: areasError } = await supabase
      .from('inventory_areas')
      .select('*')
      .eq('session_id', sessionId)
      .order('position', { ascending: true });

    if (areasError) throw areasError;

    // Fetch items for each area
    const { data: items, error: itemsError } = await supabase
      .from('inventory_items')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    if (itemsError) throw itemsError;

    // Get template columns if available
    let columns = null;
    if (templateId) {
      const { data: tmpl } = await supabase
        .from('templates')
        .select('columns')
        .eq('id', templateId)
        .single();
      columns = tmpl?.columns || null;
    }

    // Build Excel workbook — one sheet per area
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Inventory Tool';
    workbook.created = new Date();

    // Summary sheet
    const summarySheet = workbook.addWorksheet('Summary');
    summarySheet.addRow(['Session', session.name]);
    summarySheet.addRow(['Exported', new Date().toLocaleString()]);
    summarySheet.addRow(['Total Areas', areas.length]);
    summarySheet.addRow(['Total Items', items.length]);
    summarySheet.getRow(1).font = { bold: true };

    for (const area of areas) {
      const areaItems = items.filter(i => i.area_id === area.id).map(i => i.item_data);

      if (areaItems.length === 0) continue;

      const sheetColumns = columns || Object.keys(areaItems[0]);
      const sheet = workbook.addWorksheet(area.name.substring(0, 31)); // Excel sheet name limit

      // Header row
      sheet.addRow(sheetColumns);
      sheet.getRow(1).font = { bold: true };
      sheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4F46E5' }
      };
      sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };

      // Data rows
      areaItems.forEach(item => {
        const row = sheetColumns.map(col => item[col] !== undefined ? item[col] : '');
        sheet.addRow(row);
      });

      // Auto-fit columns
      sheet.columns.forEach(col => {
        let maxLen = 10;
        col.eachCell({ includeEmpty: true }, cell => {
          const len = cell.value ? cell.value.toString().length : 0;
          if (len > maxLen) maxLen = len;
        });
        col.width = maxLen + 2;
      });
    }

    const filePath = path.join(__dirname, 'uploads', `session-export-${Date.now()}.xlsx`);
    await workbook.xlsx.writeFile(filePath);

    const safeSessionName = session.name.replace(/[^a-z0-9]/gi, '_');
    res.download(filePath, `${safeSessionName}.xlsx`, (err) => {
      if (err) console.error('Download error:', err);
      fs.unlinkSync(filePath);
    });

  } catch (error) {
    console.error('Session export error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== AREA ENDPOINTS =====

// Get all areas for a session
app.get('/api/sessions/:sessionId/areas', async (req, res) => {
  try {
    const { sessionId } = req.params;

    const { data, error } = await supabase
      .from('inventory_areas')
      .select('*')
      .eq('session_id', sessionId)
      .order('position', { ascending: true });

    if (error) throw error;

    res.json({ success: true, areas: data || [] });

  } catch (error) {
    console.error('Areas fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a new area in a session
app.post('/api/sessions/:sessionId/areas', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { name, position } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, error: 'name is required' });
    }

    const { data, error } = await supabase
      .from('inventory_areas')
      .insert({ session_id: sessionId, name, position: position || 0 })
      .select()
      .single();

    if (error) throw error;

    console.log('Area created:', data.id);
    res.json({ success: true, area: data });

  } catch (error) {
    console.error('Area create error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Delete an area (cascades to images and items)
app.delete('/api/areas/:areaId', async (req, res) => {
  try {
    const { areaId } = req.params;

    const { error } = await supabase
      .from('inventory_areas')
      .delete()
      .eq('id', areaId);

    if (error) throw error;

    console.log('Area deleted:', areaId);
    res.json({ success: true });

  } catch (error) {
    console.error('Area delete error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== IMAGE STATUS ENDPOINTS =====

// Create an image record for an area (call before extraction starts)
app.post('/api/areas/:areaId/images', async (req, res) => {
  try {
    const { areaId } = req.params;
    const { fileName } = req.body;

    if (!fileName) {
      return res.status(400).json({ success: false, error: 'fileName is required' });
    }

    const { data, error } = await supabase
      .from('inventory_images')
      .insert({
        area_id: areaId,
        file_path: fileName,
        status: 'pending',
      })
      .select()
      .single();

    if (error) throw error;

    console.log('Image record created:', data.id);
    res.json({ success: true, image: data });

  } catch (error) {
    console.error('Image create error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update status of an image record
app.patch('/api/images/:imageId/status', async (req, res) => {
  try {
    const { imageId } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'processing', 'complete', 'failed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, error: `status must be one of: ${validStatuses.join(', ')}` });
    }

    const { data, error } = await supabase
      .from('inventory_images')
      .update({ status })
      .eq('id', imageId)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, image: data });

  } catch (error) {
    console.error('Image status update error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all image records for an area (used to restore status on reload)
app.get('/api/areas/:areaId/images', async (req, res) => {
  try {
    const { areaId } = req.params;

    const { data, error } = await supabase
      .from('inventory_images')
      .select('*')
      .eq('area_id', areaId)
      .order('created_at', { ascending: true });

    if (error) throw error;

    res.json({ success: true, images: data || [] });

  } catch (error) {
    console.error('Images fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get image statuses for all areas in a session (used for area-level status on session screen)
app.get('/api/sessions/:sessionId/image-statuses', async (req, res) => {
  try {
    const { sessionId } = req.params;

    // Fetch all areas for the session
    const { data: areas, error: areasError } = await supabase
      .from('inventory_areas')
      .select('id')
      .eq('session_id', sessionId);

    if (areasError) throw areasError;

    if (!areas || areas.length === 0) {
      return res.json({ success: true, statuses: {} });
    }

    const areaIds = areas.map(a => a.id);

    // Fetch all image records for those areas
    const { data: images, error: imagesError } = await supabase
      .from('inventory_images')
      .select('area_id, status')
      .in('area_id', areaIds);

    if (imagesError) throw imagesError;

    // Derive one status per area:
    // - no images → 'pending'
    // - any processing → 'processing'
    // - any failed → 'failed'
    // - all complete → 'complete'
    const statuses = {};
    for (const areaId of areaIds) {
      const areaImages = (images || []).filter(img => img.area_id === areaId);
      if (areaImages.length === 0) {
        statuses[areaId] = 'pending';
      } else if (areaImages.some(img => img.status === 'processing')) {
        statuses[areaId] = 'processing';
      } else if (areaImages.some(img => img.status === 'failed')) {
        statuses[areaId] = 'failed';
      } else if (areaImages.every(img => img.status === 'complete')) {
        statuses[areaId] = 'complete';
      } else {
        statuses[areaId] = 'pending';
      }
    }

    res.json({ success: true, statuses });

  } catch (error) {
    console.error('Image statuses fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all extracted items for an area (used to restore state when re-entering an area)
app.get('/api/areas/:areaId/items', async (req, res) => {
  try {
    const { areaId } = req.params;

    const { data, error } = await supabase
      .from('inventory_items')
      .select('*')
      .eq('area_id', areaId)
      .order('created_at', { ascending: true });

    if (error) throw error;

    // Return item_data arrays unwrapped so frontend gets a flat array of items
    const items = (data || []).map(row => row.item_data);

    res.json({ success: true, items });

  } catch (error) {
    console.error('Area items fetch error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== EXISTING ENDPOINTS (unchanged) =====

app.post('/api/upload', uploadWithFilter.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }
    console.log('File uploaded successfully:', req.file.filename);
    res.json({
      success: true,
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      path: `uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/ocr', async (req, res) => {
  try {
    const { imagePath } = req.body;

    if (!imagePath) {
      return res.status(400).json({ success: false, error: 'imagePath is required' });
    }

    const fullPath = path.join(__dirname, imagePath);

    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ success: false, error: 'Image file not found' });
    }

    console.log('Processing image:', fullPath);

    const originalFilename = path.basename(fullPath);
    const processedFilename = `processed-${originalFilename}`;
    const processedPath = path.join(__dirname, 'uploads', processedFilename);

    await sharp(fullPath)
      .grayscale()
      .normalize()
      .sharpen()
      .toFile(processedPath);

    console.log('Running OCR on processed image...');

    const result = await Tesseract.recognize(processedPath, 'eng', {
      logger: info => console.log(info)
    });

    console.log('OCR completed successfully');

    res.json({
      success: true,
      text: result.data.text,
      confidence: result.data.confidence,
      processedImage: `uploads/${processedFilename}`
    });

  } catch (error) {
    console.error('OCR error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/export', async (req, res) => {
  try {
    const { inventory, businessId, templateId } = req.body;

    if (!inventory || !Array.isArray(inventory)) {
      return res.status(400).json({ success: false, error: 'inventory array is required' });
    }

    // Strip _confidence in case it slipped through from the frontend
    const cleanInventory = inventory.map(({ _confidence, ...rest }) => rest);

    let columns;
    if (templateId) {
      const { data } = await supabase
        .from('templates')
        .select('columns')
        .eq('id', templateId)
        .single();
      columns = data?.columns || Object.keys(cleanInventory[0] || {});
    } else {
      columns = cleanInventory.length > 0 ? Object.keys(cleanInventory[0]).filter(k => k !== '_confidence') : [];
    }

    const filePath = await exportToExcel(cleanInventory, columns);

    res.download(filePath, 'inventory_export.xlsx', (err) => {
      if (err) console.error('Download error:', err);
      fs.unlinkSync(filePath);
    });

  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Parse inventory with Claude Vision — now saves items to Supabase if areaId + sessionId provided
app.post('/api/parse-inventory', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Image file is required' });
    }

    const { businessId, areaId, sessionId } = req.body;
    const fileBuffer = req.file.buffer || fs.readFileSync(req.file.path);
    const mimetype = req.file.mimetype;

    let templateColumns = null;
    if (businessId) {
      try {
        const { data } = await supabase
          .from('templates')
          .select('columns')
          .eq('business_id', businessId)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();
        if (data) templateColumns = data.columns;
      } catch (err) {
        console.log('No template found, using default parsing');
      }
    }

    console.log('Parsing inventory image with Claude Vision...');
    const inventory = await parseInventoryWithClaudeBuffer(fileBuffer, mimetype, templateColumns);

    const normalizedInventory = normalizeUnits(inventory);
    const inventoryWithOrderAmounts = normalizedInventory.map(item => {
  const par = parseFloat(item.par_level);
  const onHand = parseFloat(item.on_hand);
  const expectedOrder = (!isNaN(par) && !isNaN(onHand))
    ? Math.max(0, Math.ceil(par - onHand))
    : null;

  if (!item.order_amount && !item.order) {
    if (expectedOrder !== null) {
      item.order_amount = expectedOrder;
    }
  }

  return item;
});

    // Save items to Supabase if area and session context provided
    // Strip _confidence before saving — it's a UI hint only, not part of inventory data
    if (areaId && sessionId && inventoryWithOrderAmounts.length > 0) {
      const rows = inventoryWithOrderAmounts.map(item => {
        const { _confidence, ...itemWithoutConfidence } = item;
        return {
          session_id: sessionId,
          area_id: areaId,
          item_data: itemWithoutConfidence
        };
      });

      const { error: insertError } = await supabase
        .from('inventory_items')
        .insert(rows);

      if (insertError) {
        console.error('Failed to save items to Supabase:', insertError.message);
        // Don't fail the request — still return the data to the frontend
      } else {
        console.log(`Saved ${rows.length} items to Supabase for area ${areaId}`);
      }
    }

    console.log('Inventory parsed successfully:', inventoryWithOrderAmounts.length, 'items found');
    res.json({ success: true, inventory: inventoryWithOrderAmounts });

  } catch (error) {
    console.error('Parse error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ===== HELPER FUNCTIONS (unchanged) =====

async function parseInventoryWithClaudeBuffer(fileBuffer, mimetype, templateColumns = null) {
  try {
    const compressedBuffer = await sharp(fileBuffer)
  .trim()
  .grayscale()
  .normalize()
  .resize(2000, 2000, { fit: 'inside' })
  .jpeg({ quality: 85 })
  .toBuffer();
    const base64Image = compressedBuffer.toString('base64');

    // sharp always outputs jpeg (we compress with .jpeg()), so media type is always image/jpeg
    const mediaType = 'image/jpeg';

    let prompt;
    if (templateColumns && templateColumns.length > 0) {
      prompt = `You are a restaurant inventory extraction AI. Look at this inventory sheet image and extract all the data.

CRITICAL: You MUST use EXACTLY these columns: ${templateColumns.join(', ')}

Rules:
- Extract only actual inventory items
- item_category must be read directly from the sheet exactly as written - do NOT infer or default to "Produce" or any other category
- Preserve decimal quantities exactly as written (e.g. 3.25, 0.5)
- Order amounts may be numbers, "check", X, or a dash
- Missing values should be null
- If you cannot read an item name with confidence, output "UNCLEAR" instead of guessing. Never substitute or invent item names.
- Return ONLY valid JSON array, no explanations

For each row include a "_confidence" field (0-100) reflecting how clearly you could read that row.
Score based on: handwriting clarity, image quality, ambiguous characters, partially visible text.
90+ = clearly legible, 70-89 = minor ambiguity, below 70 = significant uncertainty.`;
    } else {
      prompt = `You are a restaurant inventory extraction AI. Look at this inventory sheet image and extract all the data.

IMPORTANT: First look at the actual column headers on this sheet and use those exact columns. Do not assume a fixed structure. Common patterns include: Item/Unit/Par/On Hand/Order, or Item Category/Item Description/Unit/Par Level/On Hand/Order Amount, or other variations — always follow what's actually on the sheet. Use the exact column names as your JSON keys (lowercase, underscores for spaces).

Rules:
- Extract every row that has an item, do not skip any
- Preserve all values exactly as written: decimals (3.25), fractions (1/2), mixed (1/4 .65)
- Order amounts may be numbers, "check", X, a dash — preserve exactly as written
- Units should be preserved exactly as written (Case, Box, Bag, Jug, Pail, etc.)
- item_category must be read directly from the sheet — do NOT infer or default to any category
- Only include item_category if the sheet actually has a visible category column
- Missing values should be null
- Do NOT guess item names — use "UNCLEAR" if truly unreadable
- Return ONLY a valid JSON array, no explanations


Return a JSON array where each object has: item_category, item_description, unit, par_level, on_hand, order_amount, _confidence
Only include item_category if the sheet actually has a visible category column. 
If there is no colimn on the sheet, omit item_category entirely.

The _confidence field (0-100) reflects how clearly you could read that row from the image.
Score based on: handwriting clarity, image quality, ambiguous characters, partially visible text.
90+ = clearly legible, 70-89 = minor ambiguity, below 70 = significant uncertainty.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64Image } },
          { type: 'text', text: prompt }
        ]
      }]
    });

    const responseText = response.content[0].text;
    console.log('Claude response:', responseText);

    const jsonMatch = responseText.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Could not extract JSON from Claude response');

    const parsed = JSON.parse(jsonMatch[0]);
    const inventory = Array.isArray(parsed) ? parsed : (parsed.items || []);
    console.log('Claude Vision parsed inventory successfully');
    return inventory;

  } catch (error) {
    console.error('Claude Vision error:', error);
    return [];
  }
}

async function parseExcelTemplate(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  const firstRow = worksheet.getRow(1);
  const columns = [];
  firstRow.eachCell({ includeEmpty: false }, (cell) => {
    if (cell.value) columns.push(String(cell.value).trim());
  });
  return columns;
}

async function parseCsvTemplate(filePath) {
  return new Promise((resolve, reject) => {
    const columns = [];
    let headerParsed = false;
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('headers', (headers) => {
        columns.push(...headers.map(h => h.trim()));
        headerParsed = true;
      })
      .on('end', () => {
        if (!headerParsed || columns.length === 0) {
          const content = fs.readFileSync(filePath, 'utf8');
          const firstLine = content.split('\n')[0];
          const headers = firstLine.split(',').map(h => h.trim().replace(/"/g, ''));
          resolve(headers);
        } else {
          resolve(columns);
        }
      })
      .on('error', reject);
  });
}

async function parseInventoryWithClaude(imagePath, templateColumns = null) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const ext = path.extname(imagePath).toLowerCase();
    const mediaType = ext === '.png' ? 'image/png' : 'image/jpeg';

    let prompt;
    if (templateColumns && templateColumns.length > 0) {
      prompt = `You are a restaurant inventory extraction AI. Look at this inventory sheet image and extract all the data.

CRITICAL: You MUST use EXACTLY these columns: ${templateColumns.join(', ')}

Rules:
- Extract only actual inventory items
- Preserve decimal quantities exactly as written (e.g. 3.25, 0.5)
- Order amounts may be numbers, "check", X, or a dash
- Missing values should be null
- Return ONLY valid JSON array, no explanations

For each row include a "_confidence" field (0-100) reflecting how clearly you could read that row.
Score based on: handwriting clarity, image quality, ambiguous characters, partially visible text.
90+ = clearly legible, 70-89 = minor ambiguity, below 70 = significant uncertainty.`;
    } else {
      prompt = `You are a restaurant inventory extraction AI. Look at this inventory sheet image and extract all the data.

The sheet has these columns: Item Category, Item Description, Unit (Box/Bag/Case), Par Level, On Hand, Order Amount.

Rules:
- Extract only actual inventory items
- Preserve decimal quantities exactly as written (e.g. 3.25, 0.5)
- Order amounts may be numbers, "check", X, or a dash
- Missing values should be null
- Return ONLY valid JSON array, no explanations

Return a JSON array where each object has: item_category, item_description, unit, par_level, on_hand, order_amount, _confidence

The _confidence field (0-100) reflects how clearly you could read that row from the image.
Score based on: handwriting clarity, image quality, ambiguous characters, partially visible text.
90+ = clearly legible, 70-89 = minor ambiguity, below 70 = significant uncertainty.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64Image } },
          { type: 'text', text: prompt }
        ]
      }]
    });

    const responseText = response.content[0].text;
    const jsonMatch = responseText.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Could not extract JSON from Claude response');

    const parsed = JSON.parse(jsonMatch[0]);
    const inventory = Array.isArray(parsed) ? parsed : (parsed.items || []);
    console.log('Claude Vision parsed inventory successfully');
    return inventory;

  } catch (error) {
    console.error('Claude Vision error:', error);
    return [];
  }
}

function normalizeUnits(inventory) {
  const unitMap = {
    'b': 'lb', 'B': 'lb', 'lib': 'lb', 'Lib': 'lb', 'LIB': 'lb',
    'lbs': 'lb', 'LBS': 'lb', 'LB': 'lb',
    'c/b': 'LB', 'cb': 'LB',
    'grl': 'qt', 'GRL': 'qt',
    'Gal': 'gal', 'GAL': 'gal',
    'Oz': 'oz', 'OZ': 'oz',
    'Ea': 'ea', 'EA': 'ea',
    'Case': 'case', 'CASE': 'case',
    'Box': 'box', 'BOX': 'box',
    'Bag': 'bag', 'BAG': 'bag',
    'bt': 'btl', 'bT': 'btl', 'BT': 'btl',
    'Btl': 'btl', 'BTL': 'btl',
  };

  return inventory.map(item => {
    if (item.unit && unitMap[item.unit.trim()]) {
      item.unit = unitMap[item.unit.trim()];
    }
    return item;
  });
}
function parseInventoryTextBasic(text, templateColumns = null) {
  const inventory = [];
  const lines = text.split('\n');

  for (let line of lines) {
    line = line.trim();
    if (!line || line.length < 2) continue;
    if (line.toLowerCase().includes('total') ||
      line.toLowerCase().includes('tax') ||
      line.toLowerCase().includes('subtotal')) continue;

    let quantity = 1;
    let itemName = line;

    const quantityMatch = line.match(/^(\d+)\s+(.+)/);
    if (quantityMatch) {
      quantity = parseInt(quantityMatch[1]);
      itemName = quantityMatch[2];
    }

    itemName = itemName.trim();
    if (itemName.length < 2) continue;

    if (templateColumns && templateColumns.length > 0) {
      const item = {};
      templateColumns.forEach(col => {
        if (col.toLowerCase().includes('quantity') || col.toLowerCase().includes('qty')) {
          item[col] = quantity;
        } else if (col.toLowerCase().includes('item') || col.toLowerCase().includes('name')) {
          item[col] = itemName;
        } else {
          item[col] = null;
        }
      });
      inventory.push(item);
    } else {
      inventory.push({
        item_name: itemName,
        category: 'Other',
        quantity: quantity,
        unit_price: null,
        total_value: null,
        condition: null
      });
    }
  }

  return inventory;
}

async function exportToExcel(data, columns) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Inventory');

  worksheet.addRow(columns);
  worksheet.getRow(1).font = { bold: true };
  worksheet.getRow(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF4CAF50' }
  };

  data.forEach(item => {
    const row = columns.map(col => item[col] !== undefined ? item[col] : '');
    worksheet.addRow(row);
  });

  worksheet.columns.forEach(column => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, cell => {
      const columnLength = cell.value ? cell.value.toString().length : 10;
      if (columnLength > maxLength) maxLength = columnLength;
    });
    column.width = maxLength < 10 ? 10 : maxLength + 2;
  });

  const filePath = path.join(__dirname, 'uploads', `export-${Date.now()}.xlsx`);
  await workbook.xlsx.writeFile(filePath);
  return filePath;
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: `Route ${req.url} not found` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, error: 'File size too large. Maximum size is 10MB.' });
    }
    return res.status(400).json({ success: false, error: err.message });
  }
  res.status(500).json({ success: false, error: err.message });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend server running on port ${PORT}`);
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
  console.log(`🔍 OCR endpoint ready`);
  console.log(`🖼️  Image preprocessing enabled`);
  console.log(`🤖 Claude AI parsing ${process.env.CLAUDE_API_KEY ? 'enabled' : 'disabled'}`);
  console.log(`☁️  Supabase ${process.env.SUPABASE_URL ? 'connected' : 'NOT configured'}`);
});
