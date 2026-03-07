module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const express = (()=>{
    const e = new Error("Cannot find module 'express'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const cors = __turbopack_context__.r("[project]/node_modules/cors/lib/index.js [app-rsc] (ecmascript)");
const dotenv = (()=>{
    const e = new Error("Cannot find module 'dotenv'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const multer = (()=>{
    const e = new Error("Cannot find module 'multer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Ensure uploads directory exists
const uploadsDir = path.join(("TURBOPACK compile-time value", "/ROOT/app"), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}
// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: function(req, file, cb) {
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// Health check endpoint
app.get('/api/health', (req, res)=>{
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'Inventory App API'
    });
});
// File upload endpoint
app.post('/api/upload', upload.single('image'), (req, res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'No file uploaded'
            });
        }
        console.log('File uploaded successfully:', req.file.filename);
        res.json({
            success: true,
            filename: req.file.filename,
            originalName: req.file.originalname,
            size: req.file.size
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
// 404 handler
app.use((req, res)=>{
    res.status(404).json({
        error: 'Not Found',
        message: `Route ${req.url} not found`
    });
});
// Error handler
app.use((err, req, res, next)=>{
    console.error(err.stack);
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                error: 'File size too large. Maximum size is 10MB.'
            });
        }
        return res.status(400).json({
            success: false,
            error: err.message
        });
    }
    res.status(500).json({
        success: false,
        error: err.message
    });
});
// Start server
app.listen(PORT, ()=>{
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    console.log(`📁 Uploads directory: ${uploadsDir}`);
});
}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdaee3f3._.js.map