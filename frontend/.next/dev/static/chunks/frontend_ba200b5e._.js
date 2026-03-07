(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "businessIdInput": "page-module__wtSYKa__businessIdInput",
  "container": "page-module__wtSYKa__container",
  "currentTemplate": "page-module__wtSYKa__currentTemplate",
  "errorStatus": "page-module__wtSYKa__errorStatus",
  "exportButton": "page-module__wtSYKa__exportButton",
  "fileInfo": "page-module__wtSYKa__fileInfo",
  "fileInput": "page-module__wtSYKa__fileInput",
  "fileInputWrapper": "page-module__wtSYKa__fileInputWrapper",
  "fileLabel": "page-module__wtSYKa__fileLabel",
  "inventoryResult": "page-module__wtSYKa__inventoryResult",
  "inventoryTable": "page-module__wtSYKa__inventoryTable",
  "main": "page-module__wtSYKa__main",
  "noTemplate": "page-module__wtSYKa__noTemplate",
  "ocrButton": "page-module__wtSYKa__ocrButton",
  "ocrResult": "page-module__wtSYKa__ocrResult",
  "parseButton": "page-module__wtSYKa__parseButton",
  "status": "page-module__wtSYKa__status",
  "successStatus": "page-module__wtSYKa__successStatus",
  "tableWrapper": "page-module__wtSYKa__tableWrapper",
  "templateSection": "page-module__wtSYKa__templateSection",
  "templateUpload": "page-module__wtSYKa__templateUpload",
  "textInput": "page-module__wtSYKa__textInput",
  "title": "page-module__wtSYKa__title",
  "uploadButton": "page-module__wtSYKa__uploadButton",
  "uploadSection": "page-module__wtSYKa__uploadSection",
});
}),
"[project]/frontend/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/app/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const API_BASE = ("TURBOPACK compile-time value", "http://192.168.40.114:5000") || 'http://localhost:5000';
const VIEW_HOME = 'home';
const VIEW_SESSION = 'session';
const VIEW_AREA = 'area';
// Default session name — today's date formatted nicely
const getDefaultSessionName = ()=>{
    return `Inventory - ${new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })}`;
};
// Suggested area names for restaurants
const AREA_SUGGESTIONS = [
    'Bar',
    'Dry Storage',
    'Walk-In',
    'Produce',
    'Freezer',
    'Prep Kitchen',
    'Front of House',
    'Cellar'
];
function Home() {
    _s();
    // ─── Navigation state ───────────────────────────────────────────────────────
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(VIEW_HOME);
    const [currentSession, setCurrentSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentArea, setCurrentArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ─── Home screen state ──────────────────────────────────────────────────────
    const [businessId, setBusinessId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('demo-business');
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSessions, setLoadingSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSessionName, setNewSessionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showNewSessionInput, setShowNewSessionInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creatingSession, setCreatingSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ─── Session screen state ───────────────────────────────────────────────────
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAreas, setLoadingAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAreaName, setNewAreaName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showNewAreaInput, setShowNewAreaInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creatingArea, setCreatingArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ─── Area / extraction state ─────────────────────────────────────────────────
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploadedFilePath, setUploadedFilePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [ocrText, setOcrText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [runningOCR, setRunningOCR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [parsingInventory, setParsingInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ─── Template state ──────────────────────────────────────────────────────────
    const [templateFile, setTemplateFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [templateFileName, setTemplateFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploadingTemplate, setUploadingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTemplate, setCurrentTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const galleryInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (view === VIEW_HOME) loadSessions();
        }
    }["Home.useEffect"], [
        businessId,
        view
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loadCurrentTemplate();
        }
    }["Home.useEffect"], [
        businessId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (view === VIEW_SESSION && currentSession) loadAreas(currentSession.id);
        }
    }["Home.useEffect"], [
        view,
        currentSession
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (view === VIEW_AREA) {
                setSelectedFile(null);
                setFileName('');
                setImagePreview(null);
                setOcrText('');
                setUploadStatus('');
                setUploadedFilePath('');
                setInventory([]);
            }
        }
    }["Home.useEffect"], [
        currentArea
    ]);
    // ═══════════════════════════════════════════════════════════════════════════════
    // SESSION HANDLERS
    // ═══════════════════════════════════════════════════════════════════════════════
    const loadSessions = async ()=>{
        setLoadingSessions(true);
        try {
            const res = await fetch(`${API_BASE}/api/sessions/${businessId}`);
            const data = await res.json();
            if (data.success) setSessions(data.sessions);
        } catch (err) {
            console.error('Failed to load sessions:', err);
        } finally{
            setLoadingSessions(false);
        }
    };
    const handleOpenNewSessionInput = ()=>{
        setNewSessionName(getDefaultSessionName());
        setShowNewSessionInput(true);
    };
    const handleCreateSession = async ()=>{
        if (!newSessionName.trim()) return;
        setCreatingSession(true);
        try {
            const res = await fetch(`${API_BASE}/api/sessions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newSessionName.trim(),
                    businessId
                })
            });
            const data = await res.json();
            if (data.success) {
                setNewSessionName('');
                setShowNewSessionInput(false);
                setCurrentSession(data.session);
                setView(VIEW_SESSION);
            }
        } catch (err) {
            console.error('Failed to create session:', err);
        } finally{
            setCreatingSession(false);
        }
    };
    const handleDeleteSession = async (sessionId)=>{
        if (!confirm('Delete this session and all its data?')) return;
        try {
            const res = await fetch(`${API_BASE}/api/sessions/${sessionId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) setSessions((prev)=>prev.filter((s)=>s.id !== sessionId));
        } catch (err) {
            console.error('Failed to delete session:', err);
        }
    };
    const handleContinueSession = (session)=>{
        setCurrentSession(session);
        setView(VIEW_SESSION);
    };
    // ═══════════════════════════════════════════════════════════════════════════════
    // AREA HANDLERS
    // ═══════════════════════════════════════════════════════════════════════════════
    const loadAreas = async (sessionId)=>{
        setLoadingAreas(true);
        try {
            const res = await fetch(`${API_BASE}/api/sessions/${sessionId}/areas`);
            const data = await res.json();
            if (data.success) setAreas(data.areas);
        } catch (err) {
            console.error('Failed to load areas:', err);
        } finally{
            setLoadingAreas(false);
        }
    };
    const handleCreateArea = async ()=>{
        if (!newAreaName.trim()) return;
        setCreatingArea(true);
        try {
            const res = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/areas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newAreaName.trim(),
                    position: areas.length
                })
            });
            const data = await res.json();
            if (data.success) {
                setNewAreaName('');
                setShowNewAreaInput(false);
                setAreas((prev)=>[
                        ...prev,
                        data.area
                    ]);
            }
        } catch (err) {
            console.error('Failed to create area:', err);
        } finally{
            setCreatingArea(false);
        }
    };
    const handleDeleteArea = async (areaId)=>{
        if (!confirm('Delete this area and all its items?')) return;
        try {
            const res = await fetch(`${API_BASE}/api/areas/${areaId}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) setAreas((prev)=>prev.filter((a)=>a.id !== areaId));
        } catch (err) {
            console.error('Failed to delete area:', err);
        }
    };
    const handleEnterArea = (area)=>{
        setCurrentArea(area);
        setView(VIEW_AREA);
    };
    // ═══════════════════════════════════════════════════════════════════════════════
    // TEMPLATE HANDLERS
    // ═══════════════════════════════════════════════════════════════════════════════
    const loadCurrentTemplate = async ()=>{
        try {
            const res = await fetch(`${API_BASE}/api/templates/${businessId}`);
            const data = await res.json();
            if (data.success) setCurrentTemplate(data.template);
            else setCurrentTemplate(null);
        } catch (err) {
            setCurrentTemplate(null);
        }
    };
    const handleTemplateSelect = (event)=>{
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
    const handleTemplateUpload = async ()=>{
        if (!templateFile) return;
        setUploadingTemplate(true);
        try {
            const formData = new FormData();
            formData.append('template', templateFile);
            formData.append('businessId', businessId);
            const res = await fetch(`${API_BASE}/api/templates/upload`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                alert(`Template uploaded!\nColumns: ${data.columns.join(', ')}`);
                setCurrentTemplate({
                    id: data.templateId,
                    columns: data.columns,
                    business_id: businessId
                });
                setTemplateFile(null);
                setTemplateFileName('');
            } else {
                alert(`Template upload failed: ${data.error}`);
            }
        } catch (err) {
            alert(`Template upload error: ${err.message}`);
        } finally{
            setUploadingTemplate(false);
        }
    };
    // ═══════════════════════════════════════════════════════════════════════════════
    // EXTRACTION HANDLERS
    // ═══════════════════════════════════════════════════════════════════════════════
    const handleFileSelect = (event)=>{
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
            setUploadStatus('');
            setOcrText('');
            setInventory([]);
            const reader = new FileReader();
            reader.onload = (ev)=>setImagePreview(ev.target.result);
            reader.readAsDataURL(file);
        }
    };
    const handleUploadClick = async ()=>{
        if (!selectedFile) {
            alert('Please select an image file first');
            return;
        }
        setParsingInventory(true);
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('businessId', businessId);
            formData.append('areaId', currentArea.id);
            formData.append('sessionId', currentSession.id);
            const res = await fetch(`${API_BASE}/api/parse-inventory`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) setInventory((prev)=>[
                    ...prev,
                    ...data.inventory
                ]);
        } catch (err) {
            console.error('Upload error:', err);
        } finally{
            setParsingInventory(false);
        }
    };
    const handleOCRClick = async ()=>{
        if (!uploadedFilePath) {
            alert('Please upload an image first');
            return;
        }
        setRunningOCR(true);
        setOcrText('Running OCR...');
        try {
            const res = await fetch(`${API_BASE}/api/ocr`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    imagePath: uploadedFilePath
                })
            });
            const data = await res.json();
            if (data.success) setOcrText(data.text || 'No text detected');
            else setOcrText(`Error: ${data.error}`);
        } catch (err) {
            setOcrText(`Error: ${err.message}`);
        } finally{
            setRunningOCR(false);
        }
    };
    const handleParseInventory = async ()=>{
        if (!selectedFile) {
            alert('Please select an image file first');
            return;
        }
        setParsingInventory(true);
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('businessId', businessId);
            formData.append('areaId', currentArea.id);
            formData.append('sessionId', currentSession.id);
            const res = await fetch(`${API_BASE}/api/parse-inventory`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) setInventory((prev)=>[
                    ...prev,
                    ...data.inventory
                ]);
            else alert(`Parse failed: ${data.error}`);
        } catch (err) {
            alert(`Parse error: ${err.message}`);
        } finally{
            setParsingInventory(false);
        }
    };
    const handleExportArea = async ()=>{
        if (inventory.length === 0) {
            alert('No inventory to export');
            return;
        }
        try {
            const res = await fetch(`${API_BASE}/api/export`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inventory,
                    businessId,
                    templateId: currentTemplate?.id,
                    areaName: currentArea.name
                })
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
            } else {
                alert('Export failed');
            }
        } catch (err) {
            alert(`Export error: ${err.message}`);
        }
    };
    const handleExportSession = async ()=>{
        try {
            const res = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/export`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    businessId,
                    templateId: currentTemplate?.id
                })
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
            } else {
                alert('Session export failed');
            }
        } catch (err) {
            alert(`Export error: ${err.message}`);
        }
    };
    const getColumns = ()=>{
        if (currentTemplate && currentTemplate.columns) return currentTemplate.columns;
        if (inventory.length > 0) return Object.keys(inventory[0]);
        return [
            'Item',
            'Category',
            'Quantity',
            'Unit Price',
            'Total Value',
            'Condition'
        ];
    };
    // ═══════════════════════════════════════════════════════════════════════════════
    // SHARED STYLES
    // ═══════════════════════════════════════════════════════════════════════════════
    const cardStyle = {
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '14px',
        padding: '16px',
        marginBottom: '14px'
    };
    const backButtonStyle = {
        background: 'none',
        border: 'none',
        color: '#4f46e5',
        fontWeight: 600,
        fontSize: '0.95rem',
        cursor: 'pointer',
        padding: '8px 0',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
    };
    const primaryButtonStyle = {
        background: '#4f46e5',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        padding: '12px 20px',
        fontWeight: 700,
        fontSize: '0.95rem',
        cursor: 'pointer',
        width: '100%',
        marginTop: '8px'
    };
    const dangerButtonStyle = {
        background: 'none',
        border: '1px solid #fca5a5',
        color: '#dc2626',
        borderRadius: '8px',
        padding: '6px 12px',
        fontSize: '0.85rem',
        cursor: 'pointer',
        fontWeight: 600
    };
    const inputStyle = {
        width: '100%',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '10px 12px',
        fontSize: '0.95rem',
        boxSizing: 'border-box',
        marginBottom: '8px'
    };
    const stickyBarStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#fff',
        borderTop: '2px solid #e5e7eb',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        padding: '12px 16px'
    };
    // ═══════════════════════════════════════════════════════════════════════════════
    // RENDER: HOME
    // ═══════════════════════════════════════════════════════════════════════════════
    if (view === VIEW_HOME) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                style: {
                    paddingBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Inventory Tool"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: '#374151'
                                },
                                children: "Business ID"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 486,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: businessId,
                                onChange: (e)=>setBusinessId(e.target.value),
                                style: {
                                    ...inputStyle,
                                    marginTop: '6px'
                                },
                                placeholder: "Enter your business ID"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '14px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0,
                                            fontSize: '1.1rem'
                                        },
                                        children: "Inventory Sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleOpenNewSessionInput,
                                        style: {
                                            background: '#4f46e5',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: '8px 14px',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            fontSize: '0.9rem'
                                        },
                                        children: "+ New Session"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this),
                            showNewSessionInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '14px',
                                    padding: '12px',
                                    background: '#f0f4ff',
                                    borderRadius: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            fontSize: '0.82rem',
                                            color: '#6b7280',
                                            fontWeight: 600,
                                            marginBottom: '6px',
                                            display: 'block'
                                        },
                                        children: "Session name — edit or keep the default"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newSessionName,
                                        onChange: (e)=>setNewSessionName(e.target.value),
                                        style: inputStyle,
                                        onKeyDown: (e)=>e.key === 'Enter' && handleCreateSession(),
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 518,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCreateSession,
                                                disabled: creatingSession || !newSessionName.trim(),
                                                style: {
                                                    ...primaryButtonStyle,
                                                    width: 'auto',
                                                    flex: 1,
                                                    marginTop: 0
                                                },
                                                children: creatingSession ? 'Creating...' : 'Create Session'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 527,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowNewSessionInput(false);
                                                    setNewSessionName('');
                                                },
                                                style: {
                                                    ...dangerButtonStyle,
                                                    marginTop: 0
                                                },
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 514,
                                columnNumber: 15
                            }, this),
                            loadingSessions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#9ca3af',
                                    textAlign: 'center'
                                },
                                children: "Loading sessions..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this) : sessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#9ca3af',
                                    textAlign: 'center',
                                    padding: '20px 0'
                                },
                                children: "No sessions yet. Create one to get started."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 548,
                                columnNumber: 15
                            }, this) : sessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '10px',
                                        padding: '12px 14px',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        fontWeight: 700,
                                                        fontSize: '0.95rem'
                                                    },
                                                    children: session.name
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 559,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '2px 0 0',
                                                        fontSize: '0.78rem',
                                                        color: '#6b7280'
                                                    },
                                                    children: [
                                                        new Date(session.created_at).toLocaleDateString(),
                                                        " ·",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: session.status === 'completed' ? '#16a34a' : '#d97706',
                                                                fontWeight: 600
                                                            },
                                                            children: session.status === 'completed' ? 'Completed' : 'In Progress'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 558,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleContinueSession(session),
                                                    style: {
                                                        background: '#4f46e5',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        padding: '7px 14px',
                                                        fontWeight: 700,
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem'
                                                    },
                                                    children: session.status === 'completed' ? 'View' : 'Continue'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteSession(session.id),
                                                    style: dangerButtonStyle,
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 578,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 567,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, session.id, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 553,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 497,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                style: {
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                },
                                children: "Template Management"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '12px'
                                },
                                children: [
                                    currentTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#16a34a',
                                            fontWeight: 600,
                                            fontSize: '0.9rem'
                                        },
                                        children: [
                                            "Template active: ",
                                            currentTemplate.columns.join(', ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6b7280',
                                            fontSize: '0.9rem'
                                        },
                                        children: "No template uploaded yet."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 598,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        id: "templateInput",
                                        accept: ".xlsx,.xls,.csv",
                                        onChange: handleTemplateSelect,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput,
                                        disabled: uploadingTemplate
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "templateInput",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileLabel,
                                        children: templateFileName || 'Choose template file (.xlsx or .csv)'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 608,
                                        columnNumber: 15
                                    }, this),
                                    templateFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleTemplateUpload,
                                        style: primaryButtonStyle,
                                        disabled: uploadingTemplate,
                                        children: uploadingTemplate ? 'Uploading...' : 'Upload Template'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 612,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 588,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/page.js",
                lineNumber: 481,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 480,
            columnNumber: 7
        }, this);
    }
    // ═══════════════════════════════════════════════════════════════════════════════
    // RENDER: SESSION
    // ═══════════════════════════════════════════════════════════════════════════════
    if (view === VIEW_SESSION) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: stickyBarStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExportSession,
                        style: {
                            width: '100%',
                            background: '#16a34a',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '14px',
                            cursor: 'pointer'
                        },
                        children: "Export Full Session to Excel"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 633,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 632,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    style: {
                        paddingBottom: '90px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: backButtonStyle,
                            onClick: ()=>{
                                setView(VIEW_HOME);
                                setCurrentSession(null);
                                setAreas([]);
                            },
                            children: "← All Sessions"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 647,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '4px'
                            },
                            children: currentSession.name
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6b7280',
                                fontSize: '0.85rem',
                                marginTop: 0,
                                marginBottom: '20px'
                            },
                            children: new Date(currentSession.created_at).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontSize: '1.1rem'
                                            },
                                            children: "Areas"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 660,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowNewAreaInput((v)=>!v),
                                            style: {
                                                background: '#4f46e5',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '8px 14px',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                fontSize: '0.9rem'
                                            },
                                            children: "+ Add Area"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 661,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 659,
                                    columnNumber: 13
                                }, this),
                                showNewAreaInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '14px',
                                        padding: '12px',
                                        background: '#f0f4ff',
                                        borderRadius: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                fontSize: '0.82rem',
                                                color: '#6b7280',
                                                fontWeight: 600,
                                                marginBottom: '6px',
                                                display: 'block'
                                            },
                                            children: "Type a name or tap a suggestion"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '8px',
                                                marginBottom: '10px'
                                            },
                                            children: AREA_SUGGESTIONS.filter((s)=>!areas.find((a)=>a.name.toLowerCase() === s.toLowerCase())).map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setNewAreaName(suggestion),
                                                    style: {
                                                        background: newAreaName === suggestion ? '#4f46e5' : '#e0e7ff',
                                                        color: newAreaName === suggestion ? '#fff' : '#3730a3',
                                                        border: 'none',
                                                        borderRadius: '20px',
                                                        padding: '6px 14px',
                                                        fontSize: '0.85rem',
                                                        fontWeight: 600,
                                                        cursor: 'pointer'
                                                    },
                                                    children: suggestion
                                                }, suggestion, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 683,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 681,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newAreaName,
                                            onChange: (e)=>setNewAreaName(e.target.value),
                                            placeholder: "Or type a custom area name...",
                                            style: inputStyle,
                                            onKeyDown: (e)=>e.key === 'Enter' && handleCreateArea()
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 702,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCreateArea,
                                                    disabled: creatingArea || !newAreaName.trim(),
                                                    style: {
                                                        ...primaryButtonStyle,
                                                        width: 'auto',
                                                        flex: 1,
                                                        marginTop: 0
                                                    },
                                                    children: creatingArea ? 'Adding...' : 'Add Area'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setShowNewAreaInput(false);
                                                        setNewAreaName('');
                                                    },
                                                    style: {
                                                        ...dangerButtonStyle,
                                                        marginTop: 0
                                                    },
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this),
                                loadingAreas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#9ca3af',
                                        textAlign: 'center'
                                    },
                                    children: "Loading areas..."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this) : areas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#9ca3af',
                                        textAlign: 'center',
                                        padding: '20px 0'
                                    },
                                    children: "No areas yet. Add one to start capturing inventory."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this) : areas.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '10px',
                                            padding: '12px 14px',
                                            marginBottom: '10px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem'
                                                },
                                                children: area.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEnterArea(area),
                                                        style: {
                                                            background: '#4f46e5',
                                                            color: '#fff',
                                                            border: 'none',
                                                            borderRadius: '8px',
                                                            padding: '7px 14px',
                                                            fontWeight: 700,
                                                            cursor: 'pointer',
                                                            fontSize: '0.85rem'
                                                        },
                                                        children: "Open"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 743,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteArea(area.id),
                                                        style: dangerButtonStyle,
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 753,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 742,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, area.id, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 736,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 645,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 630,
            columnNumber: 7
        }, this);
    }
    // ═══════════════════════════════════════════════════════════════════════════════
    // RENDER: AREA
    // ═══════════════════════════════════════════════════════════════════════════════
    if (view === VIEW_AREA) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: stickyBarStyle,
                    children: inventory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExportArea,
                        style: {
                            width: '100%',
                            background: '#16a34a',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '1rem',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '14px',
                            cursor: 'pointer'
                        },
                        children: [
                            "Export ",
                            currentArea.name,
                            " to Excel (",
                            inventory.length,
                            " items)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 777,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            color: '#9ca3af',
                            fontSize: '0.9rem',
                            padding: '10px',
                            fontWeight: 500
                        },
                        children: "Export will appear here after extraction"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 788,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 775,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    style: {
                        paddingBottom: '90px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: backButtonStyle,
                            onClick: ()=>{
                                setView(VIEW_SESSION);
                                setCurrentArea(null);
                            },
                            children: [
                                "← ",
                                currentSession.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 796,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '20px'
                            },
                            children: currentArea.name
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 800,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#f0f4ff',
                                border: '2px solid #c7d2fe',
                                borderRadius: '16px',
                                padding: '20px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        marginTop: 0,
                                        marginBottom: '16px',
                                        fontSize: '1.1rem'
                                    },
                                    children: "Capture or Upload Image"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 809,
                                    columnNumber: 13
                                }, this),
                                imagePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '14px',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        border: '1px solid #c7d2fe'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imagePreview,
                                            alt: "Selected",
                                            style: {
                                                width: '100%',
                                                maxHeight: '220px',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                padding: '6px 10px',
                                                background: '#f8fafc',
                                                fontSize: '0.8rem',
                                                color: '#64748b'
                                            },
                                            children: fileName
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 812,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px',
                                        marginBottom: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>cameraInputRef.current?.click(),
                                            style: {
                                                background: '#4f46e5',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '12px',
                                                padding: '18px 8px',
                                                fontSize: '0.95rem',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: "Take Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 819,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: cameraInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            capture: "environment",
                                            style: {
                                                display: 'none'
                                            },
                                            onChange: handleFileSelect
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>galleryInputRef.current?.click(),
                                            style: {
                                                background: '#e0e7ff',
                                                color: '#3730a3',
                                                border: 'none',
                                                borderRadius: '12px',
                                                padding: '18px 8px',
                                                fontSize: '0.95rem',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: '8px'
                                            },
                                            children: "Choose Photo"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 831,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: galleryInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            style: {
                                                display: 'none'
                                            },
                                            onChange: handleFileSelect
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 841,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 818,
                                    columnNumber: 13
                                }, this),
                                selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Selected: ",
                                                selectedFile.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Size: ",
                                                (selectedFile.size / 1024).toFixed(2),
                                                " KB"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 847,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 845,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUploadClick,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadButton,
                                    disabled: !selectedFile || parsingInventory,
                                    style: {
                                        width: '100%',
                                        marginTop: '4px'
                                    },
                                    children: parsingInventory ? 'Processing...' : 'Upload & Extract'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 851,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 805,
                            columnNumber: 11
                        }, this),
                        uploadedFilePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleOCRClick,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ocrButton,
                            disabled: runningOCR,
                            children: runningOCR ? 'Running OCR...' : 'Run OCR'
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 863,
                            columnNumber: 13
                        }, this),
                        uploadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: uploadStatus.includes('success') ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successStatus : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorStatus,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: uploadStatus
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 870,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 869,
                            columnNumber: 13
                        }, this),
                        ocrText && ocrText !== 'Running OCR...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ocrResult,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "OCR Result:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    children: ocrText
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 877,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 875,
                            columnNumber: 13
                        }, this),
                        ocrText && ocrText !== 'Running OCR...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleParseInventory,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parseButton,
                            disabled: parsingInventory,
                            children: parsingInventory ? 'Parsing...' : 'Parse Inventory with AI'
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 882,
                            columnNumber: 13
                        }, this),
                        inventory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inventoryResult,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        "Items in ",
                                        currentArea.name,
                                        " (",
                                        inventory.length,
                                        " total):"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 890,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        marginTop: '-8px',
                                        marginBottom: '8px'
                                    },
                                    children: "Click any cell to edit before exporting"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 891,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportArea,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].exportButton,
                                    children: "Export to Excel"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 894,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inventoryTable,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: getColumns().map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            children: col
                                                        }, idx, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 900,
                                                            columnNumber: 57
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 900,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 899,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: inventory.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: getColumns().map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: item[col] !== undefined && item[col] !== null ? item[col] : '',
                                                                    onChange: (e)=>{
                                                                        const updated = [
                                                                            ...inventory
                                                                        ];
                                                                        updated[index][col] = e.target.value;
                                                                        setInventory(updated);
                                                                    },
                                                                    style: {
                                                                        width: '100%',
                                                                        border: 'none',
                                                                        background: 'transparent',
                                                                        padding: '4px',
                                                                        fontSize: 'inherit',
                                                                        fontFamily: 'inherit',
                                                                        textAlign: typeof item[col] === 'number' ? 'right' : 'left'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/app/page.js",
                                                                    lineNumber: 907,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, idx, false, {
                                                                fileName: "[project]/frontend/app/page.js",
                                                                lineNumber: 906,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, index, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 904,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 902,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 897,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 794,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 773,
            columnNumber: 7
        }, this);
    }
}
_s(Home, "/oVdzgH6qGFi/3YsHD9YviBbhf8=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=frontend_ba200b5e._.js.map