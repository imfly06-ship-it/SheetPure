'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'https://sheetpure.onrender.com';

// Inject spinner keyframe once
if (typeof document !== 'undefined' && !document.getElementById('spin-style')) {
  const style = document.createElement('style');
  style.id = 'spin-style';
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

const VIEW_HOME = 'home';
const VIEW_SESSION = 'session';
const VIEW_AREA = 'area';

const getDefaultSessionName = () =>
  `Inventory - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

const AREA_SUGGESTIONS = ['Bar', 'Dry Storage', 'Walk-In', 'Produce', 'Freezer', 'Prep Kitchen', 'Front of House', 'Cellar'];

export default function InventoryTool({ userId = 'demo-business' }) {

  // ─── Navigation ──────────────────────────────────────────────────────────────
  const [view, setView] = useState(VIEW_HOME);
  const [currentSession, setCurrentSession] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);

  // ─── Home ─────────────────────────────────────────────────────────────────────
  const [businessId, setBusinessId] = useState(userId || 'demo-business');
  const [sessions, setSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [newSessionName, setNewSessionName] = useState('');
  const [showNewSessionInput, setShowNewSessionInput] = useState(false);
  const [creatingSession, setCreatingSession] = useState(false);

  // ─── Session ──────────────────────────────────────────────────────────────────
  const [areas, setAreas] = useState([]);
  const [loadingAreas, setLoadingAreas] = useState(false);
  const [newAreaName, setNewAreaName] = useState('');
  const [showNewAreaInput, setShowNewAreaInput] = useState(false);
  const [creatingArea, setCreatingArea] = useState(false);
  const [areaStatuses, setAreaStatuses] = useState({});

  // ─── Area / extraction ───────────────────────────────────────────────────────
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageStatuses, setImageStatuses] = useState({});
  const [imageIds, setImageIds] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadedFilePath, setUploadedFilePath] = useState('');
  const [ocrText, setOcrText] = useState('');
  const [runningOCR, setRunningOCR] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [editedRows, setEditedRows] = useState(new Set()); // indexes of rows user has edited
  const [parsingInventory, setParsingInventory] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState('');

  // ─── Template ─────────────────────────────────────────────────────────────────
  const [templateFile, setTemplateFile] = useState(null);
  const [templateFileName, setTemplateFileName] = useState('');
  const [uploadingTemplate, setUploadingTemplate] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);

  useEffect(() => { if (view === VIEW_HOME) loadSessions(); }, [businessId, view]);
  useEffect(() => { loadCurrentTemplate(); }, [businessId]);
  useEffect(() => { if (view === VIEW_SESSION && currentSession) loadAreas(currentSession.id); }, [view, currentSession]);
  useEffect(() => {
    if (view === VIEW_AREA && currentArea) {
      // Reset UI state but load existing items from Supabase
      setSelectedFiles([]);
      setImagePreviews([]);
      setImageStatuses({});
      setImageIds({});
      setOcrText('');
      setUploadStatus('');
      setUploadedFilePath('');
      setExtractionProgress('');
      setInventory([]); // clear first, then load
      setEditedRows(new Set());

      // Load any previously extracted items for this area
      fetch(`${API_BASE}/api/areas/${currentArea.id}/items`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.items.length > 0) {
            // Items from DB have no _confidence — they've already been reviewed/saved
            setInventory(data.items);
          }
        })
        .catch(err => console.error('Failed to load area items:', err));
    }
  }, [currentArea]);

  // ═══════════════════════════════════════════════════════════════════════════════
  // SESSION HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const loadSessions = async () => {
    setLoadingSessions(true);
    try {
      const res = await fetch(`${API_BASE}/api/sessions/${businessId}`);
      const data = await res.json();
      if (data.success) setSessions(data.sessions);
    } catch (err) { console.error('Failed to load sessions:', err); }
    finally { setLoadingSessions(false); }
  };

  const handleOpenNewSessionInput = () => {
    setNewSessionName(getDefaultSessionName());
    setShowNewSessionInput(true);
  };

  const handleCreateSession = async () => {
    if (!newSessionName.trim()) return;
    setCreatingSession(true);
    try {
      const res = await fetch(`${API_BASE}/api/sessions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newSessionName.trim(), businessId }),
      });
      const data = await res.json();
      if (data.success) {
        setNewSessionName('');
        setShowNewSessionInput(false);
        setCurrentSession(data.session);
        setView(VIEW_SESSION);
      }
    } catch (err) { console.error('Failed to create session:', err); }
    finally { setCreatingSession(false); }
  };

  const handleDeleteSession = async (sessionId) => {
    if (!confirm('Delete this session and all its data?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/sessions/${sessionId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    } catch (err) { console.error('Failed to delete session:', err); }
  };

  const handleContinueSession = (session) => {
    setCurrentSession(session);
    setView(VIEW_SESSION);
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // AREA HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const loadAreas = async (sessionId) => {
    setLoadingAreas(true);
    try {
      const [areasRes, statusesRes] = await Promise.all([
        fetch(`${API_BASE}/api/sessions/${sessionId}/areas`),
        fetch(`${API_BASE}/api/sessions/${sessionId}/image-statuses`),
      ]);
      const areasData = await areasRes.json();
      const statusesData = await statusesRes.json();
      if (areasData.success) setAreas(areasData.areas);
      if (statusesData.success) setAreaStatuses(statusesData.statuses);
    } catch (err) { console.error('Failed to load areas:', err); }
    finally { setLoadingAreas(false); }
  };

  const handleCreateArea = async () => {
    if (!newAreaName.trim()) return;
    setCreatingArea(true);
    try {
      const res = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/areas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newAreaName.trim(), position: areas.length }),
      });
      const data = await res.json();
      if (data.success) {
        setNewAreaName('');
        setShowNewAreaInput(false);
        setAreas((prev) => [...prev, data.area]);
      }
    } catch (err) { console.error('Failed to create area:', err); }
    finally { setCreatingArea(false); }
  };

  const handleDeleteArea = async (areaId) => {
    if (!confirm('Delete this area and all its items?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/areas/${areaId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) setAreas((prev) => prev.filter((a) => a.id !== areaId));
    } catch (err) { console.error('Failed to delete area:', err); }
  };

  const handleEnterArea = (area) => { setCurrentArea(area); setView(VIEW_AREA); };

  // ═══════════════════════════════════════════════════════════════════════════════
  // TEMPLATE HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const loadCurrentTemplate = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/templates/${businessId}`);
      const data = await res.json();
      if (data.success) setCurrentTemplate(data.template);
      else setCurrentTemplate(null);
    } catch (err) { setCurrentTemplate(null); }
  };

  const handleTemplateSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const ext = file.name.toLowerCase();
      if (ext.endsWith('.xlsx') || ext.endsWith('.xls') || ext.endsWith('.csv')) {
        setTemplateFile(file);
        setTemplateFileName(file.name);
      } else {
        alert('Please select a .xlsx or .csv file');
      }
    }
  };

  const handleTemplateUpload = async () => {
    if (!templateFile) return;
    setUploadingTemplate(true);
    try {
      const formData = new FormData();
      formData.append('template', templateFile);
      formData.append('businessId', businessId);
      const res = await fetch(`${API_BASE}/api/templates/upload`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        alert(`Template uploaded!\nColumns: ${data.columns.join(', ')}`);
        setCurrentTemplate({ id: data.templateId, columns: data.columns, business_id: businessId });
        setTemplateFile(null);
        setTemplateFileName('');
      } else {
        alert(`Template upload failed: ${data.error}`);
      }
    } catch (err) { alert(`Template upload error: ${err.message}`); }
    finally { setUploadingTemplate(false); }
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // EXTRACTION HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;
    setSelectedFiles((prev) => [...prev, ...files]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagePreviews((prev) => [...prev, { name: file.name, src: ev.target.result }]);
      };
      reader.readAsDataURL(file);
    });
    event.target.value = '';
  };

  const updateImageStatus = async (idx, imageId, status) => {
    setImageStatuses((prev) => ({ ...prev, [idx]: status }));
    if (imageId) {
      try {
        await fetch(`${API_BASE}/api/images/${imageId}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status }),
        });
      } catch (err) { console.error(`Failed to persist status for image ${idx}:`, err); }
    }
  };

  const normalize = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');

const mergeWithDedup = (existing, incoming) => {
  const master = [...existing];
  incoming.forEach(item2 => {
    const norm2 = normalize(item2.item_description || item2.item || '');
    const existingIndex = master.findIndex(item1 => 
      normalize(item1.item_description || item1.item || '') === norm2
    );
    if (existingIndex > -1) {
      if ((item2._confidence || 0) > (master[existingIndex]._confidence || 0)) {
        master[existingIndex] = item2;
      }
    } else {
      master.push(item2);
    }
  });
  return master;
};

  const handleUploadClick = async () => {
    if (!selectedFiles.length) { alert('Please select at least one image first'); return; }
    setParsingInventory(true);
    setExtractionProgress('');
    let allItems = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];

      // Create image record in Supabase
      let imageId = imageIds[i] || null;
      if (!imageId) {
        try {
          const regRes = await fetch(`${API_BASE}/api/areas/${currentArea.id}/images`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileName: file.name }),
          });
          const regData = await regRes.json();
          if (regData.success) {
            imageId = regData.image.id;
            setImageIds((prev) => ({ ...prev, [i]: imageId }));
          }
        } catch (err) { console.error(`Failed to register image ${i}:`, err); }
      }

      setExtractionProgress(`Processing image ${i + 1} of ${selectedFiles.length}: ${file.name}`);
      await updateImageStatus(i, imageId, 'processing');

      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('businessId', businessId);
        formData.append('areaId', currentArea.id);
        formData.append('sessionId', currentSession.id);
        const res = await fetch(`${API_BASE}/api/parse-inventory`, { method: 'POST', body: formData });
        const data = await res.json();
        if (data.success && data.inventory?.length > 0) {
          allItems = [...allItems, ...data.inventory];
          await updateImageStatus(i, imageId, 'complete');
        } else {
          await updateImageStatus(i, imageId, 'failed');
        }
      } catch (err) {
        console.error(`Extraction failed for image ${i + 1}:`, err);
        await updateImageStatus(i, imageId, 'failed');
      }
    }

    setInventory((prev) => mergeWithDedup(prev,allItems));
    setExtractionProgress(`Done — extracted ${allItems.length} items from ${selectedFiles.length} image${selectedFiles.length > 1 ? 's' : ''}.`);
    setParsingInventory(false);

    // Refresh area statuses
    try {
      const statusRes = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/image-statuses`);
      const statusData = await statusRes.json();
      if (statusData.success) setAreaStatuses(statusData.statuses);
    } catch (err) { console.error('Failed to refresh area statuses:', err); }
  };

  const handleRetryImage = async (idx) => {
    const file = selectedFiles[idx];
    if (!file) return;
    const imageId = imageIds[idx] || null;
    await updateImageStatus(idx, imageId, 'processing');
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('businessId', businessId);
      formData.append('areaId', currentArea.id);
      formData.append('sessionId', currentSession.id);
      const res = await fetch(`${API_BASE}/api/parse-inventory`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success && data.inventory?.length > 0) {
        setInventory((prev) => [...prev, ...data.inventory]);
        await updateImageStatus(idx, imageId, 'complete');
      } else {
        await updateImageStatus(idx, imageId, 'failed');
      }
    } catch (err) {
      console.error(`Retry failed for image ${idx + 1}:`, err);
      await updateImageStatus(idx, imageId, 'failed');
    }
  };

  const handleOCRClick = async () => {
    if (!uploadedFilePath) { alert('Please upload an image first'); return; }
    setRunningOCR(true);
    setOcrText('Running OCR...');
    try {
      const res = await fetch(`${API_BASE}/api/ocr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imagePath: uploadedFilePath }),
      });
      const data = await res.json();
      if (data.success) setOcrText(data.text || 'No text detected');
      else setOcrText(`Error: ${data.error}`);
    } catch (err) { setOcrText(`Error: ${err.message}`); }
    finally { setRunningOCR(false); }
  };

  const handleParseInventory = async () => {
    if (!selectedFiles.length) { alert('Please select an image file first'); return; }
    setParsingInventory(true);
    setExtractionProgress('');
    let allItems = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      setExtractionProgress(`Parsing image ${i + 1} of ${selectedFiles.length}: ${file.name}`);
      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('businessId', businessId);
        formData.append('areaId', currentArea.id);
        formData.append('sessionId', currentSession.id);
        const res = await fetch(`${API_BASE}/api/parse-inventory`, { method: 'POST', body: formData });
        const data = await res.json();
        if (data.success && data.inventory?.length > 0) allItems = [...allItems, ...data.inventory];
        else if (data.error) console.error(`Parse failed for image ${i + 1}:`, data.error);
      } catch (err) { console.error(`Parse error for image ${i + 1}:`, err); }
    }
    setInventory((prev) => [...prev, ...allItems]);
    setExtractionProgress(`Done — extracted ${allItems.length} items from ${selectedFiles.length} image${selectedFiles.length > 1 ? 's' : ''}.`);
    setParsingInventory(false);
  };

  const handleExportArea = async () => {
    if (inventory.length === 0) { alert('No inventory to export'); return; }
    try {
      const res = await fetch(`${API_BASE}/api/export`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inventory: getExportInventory(), businessId, templateId: currentTemplate?.id, areaName: currentArea.name }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentArea.name}-inventory.xlsx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else { alert('Export failed'); }
    } catch (err) { alert(`Export error: ${err.message}`); }
  };

  const handleExportSession = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/export`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId, templateId: currentTemplate?.id }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${currentSession.name}-full-inventory.xlsx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else { alert('Session export failed'); }
    } catch (err) { alert(`Export error: ${err.message}`); }
  };

  // A row is only flagged if BOTH conditions are true:
  // 1. Claude's confidence is below 75 (genuinely uncertain)
  // 2. At least one numeric field looks garbled (not a clean number, decimal, fraction word, or known text value)
  const CONFIDENCE_THRESHOLD = 75;
  const KNOWN_TEXT_VALUES = new Set(['check', 'x', '-', 'n/a', 'tbd', '']);

  const numericFields = ['par_level', 'on_hand', 'order_amount'];

  const isGarbled = (value) => {
    if (value === null || value === undefined) return false;
    const str = String(value).trim().toLowerCase();
    if (KNOWN_TEXT_VALUES.has(str)) return false;
    // Allow clean numbers and decimals: 3, 1.5, 0.25, etc.
    if (/^\d+(\.\d+)?$/.test(str)) return false;
    // Allow simple fractions: 1/2, 3/4
    if (/^\d+\/\d+$/.test(str)) return false;
    // Allow fraction + unit combos like "1/2 roll", "1/2 full" — these are legitimate
    if (/^\d+\/\d+\s+\w+$/.test(str)) return false;
    // If none of the above — it looks garbled
    return true;
  };

  const isRowFlagged = (item, idx) => {
    if (editedRows.has(idx)) return false;
    if (item._confidence === undefined) return false;
    if (item._confidence >= CONFIDENCE_THRESHOLD) return false;
    // Low confidence — only flag if a numeric field actually looks garbled
    const hasGarbledField = numericFields.some(field => isGarbled(item[field]));
    return hasGarbledField;
  };

  const getColumns = () => {
    if (currentTemplate && currentTemplate.columns) return currentTemplate.columns;
    if (inventory.length > 0) return Object.keys(inventory[0]).filter(k => k !== '_confidence');
    return ['item_category', 'item_description', 'unit', 'par_level', 'on_hand', 'order_amount'];
  };

  // Strip _confidence before any export
  const getExportInventory = () => inventory.map(({ _confidence, ...rest }) => rest);

  // ═══════════════════════════════════════════════════════════════════════════════
  // STATUS HELPERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const getAreaStatusBadge = (areaId) => {
    const status = areaStatuses[areaId];
    const badges = {
      complete:   { label: 'Complete',   bg: '#dcfce7', color: '#15803d', dot: '#16a34a' },
      processing: { label: 'Processing', bg: '#eff6ff', color: '#1d4ed8', dot: '#3b82f6' },
      failed:     { label: 'Failed',     bg: '#fef2f2', color: '#dc2626', dot: '#ef4444' },
      pending:    { label: 'Pending',    bg: '#f3f4f6', color: '#6b7280', dot: '#9ca3af' },
    };
    const b = badges[status] || badges.pending;
    return (
      <span style={{
        background: b.bg, color: b.color, borderRadius: '12px', padding: '3px 10px',
        fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px',
      }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: b.dot, display: 'inline-block' }} />
        {b.label}
      </span>
    );
  };

  const getImageStatusIcon = (idx) => {
    const status = imageStatuses[idx] || 'pending';
    if (status === 'processing') {
      return (
        <div style={{
          position: 'absolute', top: '3px', left: '3px',
          background: 'rgba(79,70,229,0.85)', borderRadius: '10px',
          width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '12px', height: '12px', border: '2px solid #fff',
            borderTopColor: 'transparent', borderRadius: '50%',
            animation: 'spin 0.7s linear infinite',
          }} />
        </div>
      );
    }
    if (status === 'complete') {
      return (
        <div style={{
          position: 'absolute', top: '3px', left: '3px', background: '#16a34a',
          borderRadius: '10px', width: '22px', height: '22px', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900,
        }}>✓</div>
      );
    }
    if (status === 'failed') {
      return (
        <div style={{
          position: 'absolute', top: '3px', left: '3px', background: '#dc2626',
          borderRadius: '10px', width: '22px', height: '22px', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 900,
        }}>!</div>
      );
    }
    return (
      <div style={{
        position: 'absolute', top: '3px', left: '3px', background: '#4f46e5', color: '#fff',
        borderRadius: '10px', padding: '1px 6px', fontSize: '0.7rem', fontWeight: 700,
      }}>{idx + 1}</div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // SHARED STYLES
  // ═══════════════════════════════════════════════════════════════════════════════

  const cardStyle = { background: '#fff', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '16px', marginBottom: '14px' };
  const backButtonStyle = { background: 'none', border: 'none', color: '#4f46e5', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', padding: '8px 0', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' };
  const primaryButtonStyle = { background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px 20px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', width: '100%', marginTop: '8px' };
  const dangerButtonStyle = { background: 'none', border: '1px solid #fca5a5', color: '#dc2626', borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 };
  const inputStyle = { width: '100%', border: '1px solid #d1d5db', borderRadius: '8px', padding: '10px 12px', fontSize: '0.95rem', boxSizing: 'border-box', marginBottom: '8px' };
  const stickyBarStyle = { position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: '#fff', borderTop: '2px solid #e5e7eb', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', padding: '12px 16px' };

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDER: HOME
  // ═══════════════════════════════════════════════════════════════════════════════

  if (view === VIEW_HOME) {
    return (
      <div className={styles.container}>
        <main className={styles.main} style={{ paddingBottom: '40px' }}>
          <h1 className={styles.title}>Inventory Tool</h1>

          <div style={cardStyle}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>Business ID</label>
            <input type="text" value={businessId} onChange={(e) => setBusinessId(e.target.value)} style={{ ...inputStyle, marginTop: '6px' }} placeholder="Enter your business ID" />
          </div>

          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Inventory Sessions</h2>
              <button onClick={handleOpenNewSessionInput} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 14px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
                + New Session
              </button>
            </div>

            {showNewSessionInput && (
              <div style={{ marginBottom: '14px', padding: '12px', background: '#f0f4ff', borderRadius: '10px' }}>
                <label style={{ fontSize: '0.82rem', color: '#6b7280', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                  Session name — edit or keep the default
                </label>
                <input type="text" value={newSessionName} onChange={(e) => setNewSessionName(e.target.value)} style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && handleCreateSession()} autoFocus />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={handleCreateSession} disabled={creatingSession || !newSessionName.trim()} style={{ ...primaryButtonStyle, width: 'auto', flex: 1, marginTop: 0 }}>
                    {creatingSession ? 'Creating...' : 'Create Session'}
                  </button>
                  <button onClick={() => { setShowNewSessionInput(false); setNewSessionName(''); }} style={{ ...dangerButtonStyle, marginTop: 0 }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {loadingSessions ? (
              <p style={{ color: '#9ca3af', textAlign: 'center' }}>Loading sessions...</p>
            ) : sessions.length === 0 ? (
              <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0' }}>No sessions yet. Create one to get started.</p>
            ) : (
              sessions.map((session) => (
                <div key={session.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px 14px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>{session.name}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '0.78rem', color: '#6b7280' }}>
                      {new Date(session.created_at).toLocaleDateString()} &middot;{' '}
                      <span style={{ color: session.status === 'completed' ? '#16a34a' : '#d97706', fontWeight: 600 }}>
                        {session.status === 'completed' ? 'Completed' : 'In Progress'}
                      </span>
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleContinueSession(session)} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', padding: '7px 14px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                      {session.status === 'completed' ? 'View' : 'Continue'}
                    </button>
                    <button onClick={() => handleDeleteSession(session.id)} style={dangerButtonStyle}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <details style={cardStyle}>
            <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1rem' }}>Template Management</summary>
            <div style={{ marginTop: '12px' }}>
              {currentTemplate ? (
                <p style={{ color: '#16a34a', fontWeight: 600, fontSize: '0.9rem' }}>Template active: {currentTemplate.columns.join(', ')}</p>
              ) : (
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>No template uploaded yet.</p>
              )}
              <input type="file" id="templateInput" accept=".xlsx,.xls,.csv" onChange={handleTemplateSelect} className={styles.fileInput} disabled={uploadingTemplate} />
              <label htmlFor="templateInput" className={styles.fileLabel}>{templateFileName || 'Choose template file (.xlsx or .csv)'}</label>
              {templateFile && (
                <button onClick={handleTemplateUpload} style={primaryButtonStyle} disabled={uploadingTemplate}>
                  {uploadingTemplate ? 'Uploading...' : 'Upload Template'}
                </button>
              )}
            </div>
          </details>
        </main>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDER: SESSION
  // ═══════════════════════════════════════════════════════════════════════════════

  if (view === VIEW_SESSION) {
    return (
      <div className={styles.container}>
        <div style={stickyBarStyle}>
          <button onClick={handleExportSession} style={{ width: '100%', background: '#16a34a', color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', padding: '14px', cursor: 'pointer' }}>
            Export Full Session to Excel
          </button>
        </div>

        <main className={styles.main} style={{ paddingBottom: '90px' }}>
          <button style={backButtonStyle} onClick={() => { setView(VIEW_HOME); setCurrentSession(null); setAreas([]); }}>
            &larr; All Sessions
          </button>

          <h1 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{currentSession.name}</h1>
          <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: 0, marginBottom: '20px' }}>
            {new Date(currentSession.created_at).toLocaleDateString()}
          </p>

          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Areas</h2>
              <button onClick={() => setShowNewAreaInput((v) => !v)} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 14px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
                + Add Area
              </button>
            </div>

            {showNewAreaInput && (
              <div style={{ marginBottom: '14px', padding: '12px', background: '#f0f4ff', borderRadius: '10px' }}>
                <label style={{ fontSize: '0.82rem', color: '#6b7280', fontWeight: 600, marginBottom: '6px', display: 'block' }}>
                  Type a name or tap a suggestion
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  {AREA_SUGGESTIONS.filter(s => !areas.find(a => a.name.toLowerCase() === s.toLowerCase())).map((suggestion) => (
                    <button key={suggestion} onClick={() => setNewAreaName(suggestion)} style={{ background: newAreaName === suggestion ? '#4f46e5' : '#e0e7ff', color: newAreaName === suggestion ? '#fff' : '#3730a3', border: 'none', borderRadius: '20px', padding: '6px 14px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                      {suggestion}
                    </button>
                  ))}
                </div>
                <input type="text" value={newAreaName} onChange={(e) => setNewAreaName(e.target.value)} placeholder="Or type a custom area name..." style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && handleCreateArea()} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={handleCreateArea} disabled={creatingArea || !newAreaName.trim()} style={{ ...primaryButtonStyle, width: 'auto', flex: 1, marginTop: 0 }}>
                    {creatingArea ? 'Adding...' : 'Add Area'}
                  </button>
                  <button onClick={() => { setShowNewAreaInput(false); setNewAreaName(''); }} style={{ ...dangerButtonStyle, marginTop: 0 }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {loadingAreas ? (
              <p style={{ color: '#9ca3af', textAlign: 'center' }}>Loading areas...</p>
            ) : areas.length === 0 ? (
              <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0' }}>No areas yet. Add one to start capturing inventory.</p>
            ) : (
              areas.map((area) => (
                <div key={area.id} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px 14px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>{area.name}</p>
                    <div style={{ marginTop: '4px' }}>{getAreaStatusBadge(area.id)}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleEnterArea(area)} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', padding: '7px 14px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                      Open
                    </button>
                    <button onClick={() => handleDeleteArea(area.id)} style={dangerButtonStyle}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════════
  // RENDER: AREA
  // ═══════════════════════════════════════════════════════════════════════════════

  if (view === VIEW_AREA) {
    return (
      <div className={styles.container}>
        <div style={stickyBarStyle}>
          {inventory.length > 0 ? (
            <button onClick={handleExportArea} style={{ width: '100%', background: '#16a34a', color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', padding: '14px', cursor: 'pointer' }}>
              Export {currentArea.name} to Excel ({inventory.length} items)
            </button>
          ) : (
            <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem', padding: '10px', fontWeight: 500 }}>
              Export will appear here after extraction
            </div>
          )}
        </div>

        <main className={styles.main} style={{ paddingBottom: '90px' }}>
          <button style={backButtonStyle} onClick={() => { setView(VIEW_SESSION); setCurrentArea(null); }}>
            &larr; {currentSession.name}
          </button>

          <h1 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{currentArea.name}</h1>

          {/* Camera / Upload card */}
          <div style={{ background: '#f0f4ff', border: '2px solid #c7d2fe', borderRadius: '16px', padding: '20px', marginBottom: '20px' }}>
            <h2 style={{ marginTop: 0, marginBottom: '16px', fontSize: '1.1rem' }}>Capture or Upload Images</h2>

            {/* Thumbnail strip */}
            {imagePreviews.length > 0 && (
              <div style={{ marginBottom: '14px' }}>
                <p style={{ margin: '0 0 8px', fontSize: '0.82rem', color: '#6b7280', fontWeight: 600 }}>
                  {imagePreviews.length} image{imagePreviews.length > 1 ? 's' : ''} — in upload order:
                </p>
                <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                  {imagePreviews.map((preview, idx) => {
                    const status = imageStatuses[idx] || 'pending';
                    const borderColor = status === 'complete' ? '#86efac' : status === 'failed' ? '#fca5a5' : status === 'processing' ? '#93c5fd' : '#c7d2fe';
                    return (
                      <div key={idx} style={{ position: 'relative', flexShrink: 0 }}>
                        <img src={preview.src} alt={`Image ${idx + 1}`} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: `2px solid ${borderColor}`, display: 'block', opacity: status === 'processing' ? 0.7 : 1 }} />
                        {getImageStatusIcon(idx)}
                        {status !== 'processing' && (
                          <button
                            onClick={() => {
                              setSelectedFiles((prev) => prev.filter((_, i) => i !== idx));
                              setImagePreviews((prev) => prev.filter((_, i) => i !== idx));
                              setImageStatuses((prev) => {
                                const next = {};
                                Object.entries(prev).forEach(([k, v]) => {
                                  const ki = parseInt(k);
                                  if (ki < idx) next[ki] = v;
                                  else if (ki > idx) next[ki - 1] = v;
                                });
                                return next;
                              });
                              setImageIds((prev) => {
                                const next = {};
                                Object.entries(prev).forEach(([k, v]) => {
                                  const ki = parseInt(k);
                                  if (ki < idx) next[ki] = v;
                                  else if (ki > idx) next[ki - 1] = v;
                                });
                                return next;
                              });
                            }}
                            style={{ position: 'absolute', top: '3px', right: '3px', background: '#6b7280', color: '#fff', border: 'none', borderRadius: '10px', width: '18px', height: '18px', fontSize: '0.65rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}
                          >×</button>
                        )}
                        {status === 'failed' && (
                          <button onClick={() => handleRetryImage(idx)} style={{ marginTop: '4px', width: '80px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '6px', padding: '3px 0', fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer', display: 'block' }}>
                            Retry
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
              <button onClick={() => cameraInputRef.current?.click()} style={{ background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '12px', padding: '18px 8px', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                Take Photo
              </button>
              <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={handleFileSelect} />

              <button onClick={() => galleryInputRef.current?.click()} style={{ background: '#e0e7ff', color: '#3730a3', border: 'none', borderRadius: '12px', padding: '18px 8px', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                Choose Photos
              </button>
              <input ref={galleryInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleFileSelect} />
            </div>

            {extractionProgress && (
              <div style={{ background: parsingInventory ? '#eff6ff' : '#f0fdf4', border: `1px solid ${parsingInventory ? '#bfdbfe' : '#bbf7d0'}`, borderRadius: '8px', padding: '10px 12px', marginBottom: '10px', fontSize: '0.85rem', color: parsingInventory ? '#1d4ed8' : '#15803d', fontWeight: 600 }}>
                {parsingInventory ? '⏳ ' : '✅ '}{extractionProgress}
              </div>
            )}

            <button onClick={handleUploadClick} className={styles.uploadButton} disabled={!selectedFiles.length || parsingInventory} style={{ width: '100%', marginTop: '4px' }}>
              {parsingInventory ? extractionProgress || 'Processing...' : selectedFiles.length > 1 ? `Upload & Extract ${selectedFiles.length} Images` : 'Upload & Extract'}
            </button>
          </div>

          {uploadedFilePath && (
            <button onClick={handleOCRClick} className={styles.ocrButton} disabled={runningOCR}>
              {runningOCR ? 'Running OCR...' : 'Run OCR'}
            </button>
          )}

          {uploadStatus && (
            <div className={uploadStatus.includes('success') ? styles.successStatus : styles.errorStatus}>
              <p>{uploadStatus}</p>
            </div>
          )}

          {ocrText && ocrText !== 'Running OCR...' && (
            <div className={styles.ocrResult}>
              <h3>OCR Result:</h3>
              <pre>{ocrText}</pre>
            </div>
          )}

          {ocrText && ocrText !== 'Running OCR...' && (
            <button onClick={handleParseInventory} className={styles.parseButton} disabled={parsingInventory}>
              {parsingInventory ? 'Parsing...' : 'Parse Inventory with AI'}
            </button>
          )}

          {inventory.length > 0 && (
            <div className={styles.inventoryResult}>
              <h3>Items in {currentArea.name} ({inventory.length} total):</h3>
              {(() => {
                const flagged = inventory.filter((item, idx) => isRowFlagged(item, idx));
                return flagged.length > 0 ? (
                  <p style={{ fontSize: '0.85rem', color: '#b45309', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', padding: '8px 12px', marginTop: '-4px', marginBottom: '8px', fontWeight: 600 }}>
                    ⚠ {flagged.length} row{flagged.length > 1 ? 's' : ''} flagged for review — highlighted below
                  </p>
                ) : null;
              })()}
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '-4px', marginBottom: '8px' }}>
                Click any cell to edit before exporting
              </p>
              <button onClick={handleExportArea} className={styles.exportButton}>Export to Excel</button>
              <div className={styles.tableWrapper}>
                <table className={styles.inventoryTable}>
                  <thead>
                    <tr>{getColumns().map((col, idx) => <th key={idx}>{col}</th>)}</tr>
                  </thead>
                  <tbody>
                    {inventory.map((item, index) => {
                      const isFlagged = isRowFlagged(item, index);
                      return (
                        <tr key={index} style={{ background: isFlagged ? '#fffbeb' : 'transparent' }}>
                          {getColumns().map((col, idx) => (
                            <td key={idx} style={{ position: 'relative' }}>
                              {idx === 0 && isFlagged && (
                                <span style={{ position: 'absolute', left: '2px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.65rem', color: '#b45309' }}>⚠</span>
                              )}
                              <input
                                type="text"
                                value={item[col] !== undefined && item[col] !== null ? item[col] : ''}
                                onChange={(e) => {
                                  const updated = [...inventory];
                                  updated[index] = { ...updated[index], [col]: e.target.value };
                                  setInventory(updated);
                                  setEditedRows((prev) => new Set([...prev, index]));
                                }}
                                style={{ width: '100%', border: 'none', background: 'transparent', padding: idx === 0 ? '4px 4px 4px 16px' : '4px', fontSize: 'inherit', fontFamily: 'inherit', textAlign: typeof item[col] === 'number' ? 'right' : 'left' }}
                              />
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}
