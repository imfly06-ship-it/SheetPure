module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/frontend/app/page.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/frontend/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/app/page.module.css [app-ssr] (css module)");
'use client';
;
;
;
const API_BASE = ("TURBOPACK compile-time value", "http://192.168.40.114:5000") || 'http://localhost:5000';
// Inject spinner keyframe once
if (typeof document !== 'undefined' && !document.getElementById('spin-style')) {
    const style = document.createElement('style');
    style.id = 'spin-style';
    style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
    document.head.appendChild(style);
}
const VIEW_HOME = 'home';
const VIEW_SESSION = 'session';
const VIEW_AREA = 'area';
const getDefaultSessionName = ()=>`Inventory - ${new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })}`;
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
    // ─── Navigation ──────────────────────────────────────────────────────────────
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(VIEW_HOME);
    const [currentSession, setCurrentSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentArea, setCurrentArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ─── Home ─────────────────────────────────────────────────────────────────────
    const [businessId, setBusinessId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('demo-business');
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingSessions, setLoadingSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSessionName, setNewSessionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showNewSessionInput, setShowNewSessionInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creatingSession, setCreatingSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ─── Session ──────────────────────────────────────────────────────────────────
    const [areas, setAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAreas, setLoadingAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newAreaName, setNewAreaName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showNewAreaInput, setShowNewAreaInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [creatingArea, setCreatingArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [areaStatuses, setAreaStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // ─── Area / extraction ───────────────────────────────────────────────────────
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imagePreviews, setImagePreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imageStatuses, setImageStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageIds, setImageIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploadedFilePath, setUploadedFilePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [ocrText, setOcrText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [runningOCR, setRunningOCR] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inventory, setInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editedRows, setEditedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set()); // indexes of rows user has edited
    const [parsingInventory, setParsingInventory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [extractionProgress, setExtractionProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ─── Template ─────────────────────────────────────────────────────────────────
    const [templateFile, setTemplateFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [templateFileName, setTemplateFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [uploadingTemplate, setUploadingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTemplate, setCurrentTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const galleryInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (view === VIEW_HOME) loadSessions();
    }, [
        businessId,
        view
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCurrentTemplate();
    }, [
        businessId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (view === VIEW_SESSION && currentSession) loadAreas(currentSession.id);
    }, [
        view,
        currentSession
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            fetch(`${API_BASE}/api/areas/${currentArea.id}/items`).then((res)=>res.json()).then((data)=>{
                if (data.success && data.items.length > 0) {
                    // Items from DB have no _confidence — they've already been reviewed/saved
                    setInventory(data.items);
                }
            }).catch((err)=>console.error('Failed to load area items:', err));
        }
    }, [
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
            const [areasRes, statusesRes] = await Promise.all([
                fetch(`${API_BASE}/api/sessions/${sessionId}/areas`),
                fetch(`${API_BASE}/api/sessions/${sessionId}/image-statuses`)
            ]);
            const areasData = await areasRes.json();
            const statusesData = await statusesRes.json();
            if (areasData.success) setAreas(areasData.areas);
            if (statusesData.success) setAreaStatuses(statusesData.statuses);
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
        const files = Array.from(event.target.files);
        if (!files.length) return;
        setSelectedFiles((prev)=>[
                ...prev,
                ...files
            ]);
        files.forEach((file)=>{
            const reader = new FileReader();
            reader.onload = (ev)=>{
                setImagePreviews((prev)=>[
                        ...prev,
                        {
                            name: file.name,
                            src: ev.target.result
                        }
                    ]);
            };
            reader.readAsDataURL(file);
        });
        event.target.value = '';
    };
    const updateImageStatus = async (idx, imageId, status)=>{
        setImageStatuses((prev)=>({
                ...prev,
                [idx]: status
            }));
        if (imageId) {
            try {
                await fetch(`${API_BASE}/api/images/${imageId}/status`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status
                    })
                });
            } catch (err) {
                console.error(`Failed to persist status for image ${idx}:`, err);
            }
        }
    };
    const handleUploadClick = async ()=>{
        if (!selectedFiles.length) {
            alert('Please select at least one image first');
            return;
        }
        setParsingInventory(true);
        setExtractionProgress('');
        let allItems = [];
        for(let i = 0; i < selectedFiles.length; i++){
            const file = selectedFiles[i];
            // Create image record in Supabase
            let imageId = imageIds[i] || null;
            if (!imageId) {
                try {
                    const regRes = await fetch(`${API_BASE}/api/areas/${currentArea.id}/images`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            fileName: file.name
                        })
                    });
                    const regData = await regRes.json();
                    if (regData.success) {
                        imageId = regData.image.id;
                        setImageIds((prev)=>({
                                ...prev,
                                [i]: imageId
                            }));
                    }
                } catch (err) {
                    console.error(`Failed to register image ${i}:`, err);
                }
            }
            setExtractionProgress(`Processing image ${i + 1} of ${selectedFiles.length}: ${file.name}`);
            await updateImageStatus(i, imageId, 'processing');
            try {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('businessId', businessId);
                formData.append('areaId', currentArea.id);
                formData.append('sessionId', currentSession.id);
                const res = await fetch(`${API_BASE}/api/parse-inventory`, {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (data.success && data.inventory?.length > 0) {
                    allItems = [
                        ...allItems,
                        ...data.inventory
                    ];
                    await updateImageStatus(i, imageId, 'complete');
                } else {
                    await updateImageStatus(i, imageId, 'failed');
                }
            } catch (err) {
                console.error(`Extraction failed for image ${i + 1}:`, err);
                await updateImageStatus(i, imageId, 'failed');
            }
        }
        setInventory((prev)=>[
                ...prev,
                ...allItems
            ]);
        setExtractionProgress(`Done — extracted ${allItems.length} items from ${selectedFiles.length} image${selectedFiles.length > 1 ? 's' : ''}.`);
        setParsingInventory(false);
        // Refresh area statuses
        try {
            const statusRes = await fetch(`${API_BASE}/api/sessions/${currentSession.id}/image-statuses`);
            const statusData = await statusRes.json();
            if (statusData.success) setAreaStatuses(statusData.statuses);
        } catch (err) {
            console.error('Failed to refresh area statuses:', err);
        }
    };
    const handleRetryImage = async (idx)=>{
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
            const res = await fetch(`${API_BASE}/api/parse-inventory`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success && data.inventory?.length > 0) {
                setInventory((prev)=>[
                        ...prev,
                        ...data.inventory
                    ]);
                await updateImageStatus(idx, imageId, 'complete');
            } else {
                await updateImageStatus(idx, imageId, 'failed');
            }
        } catch (err) {
            console.error(`Retry failed for image ${idx + 1}:`, err);
            await updateImageStatus(idx, imageId, 'failed');
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
        if (!selectedFiles.length) {
            alert('Please select an image file first');
            return;
        }
        setParsingInventory(true);
        setExtractionProgress('');
        let allItems = [];
        for(let i = 0; i < selectedFiles.length; i++){
            const file = selectedFiles[i];
            setExtractionProgress(`Parsing image ${i + 1} of ${selectedFiles.length}: ${file.name}`);
            try {
                const formData = new FormData();
                formData.append('image', file);
                formData.append('businessId', businessId);
                formData.append('areaId', currentArea.id);
                formData.append('sessionId', currentSession.id);
                const res = await fetch(`${API_BASE}/api/parse-inventory`, {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (data.success && data.inventory?.length > 0) allItems = [
                    ...allItems,
                    ...data.inventory
                ];
                else if (data.error) console.error(`Parse failed for image ${i + 1}:`, data.error);
            } catch (err) {
                console.error(`Parse error for image ${i + 1}:`, err);
            }
        }
        setInventory((prev)=>[
                ...prev,
                ...allItems
            ]);
        setExtractionProgress(`Done — extracted ${allItems.length} items from ${selectedFiles.length} image${selectedFiles.length > 1 ? 's' : ''}.`);
        setParsingInventory(false);
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
                    inventory: getExportInventory(),
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
    // A row is only flagged if BOTH conditions are true:
    // 1. Claude's confidence is below 75 (genuinely uncertain)
    // 2. At least one numeric field looks garbled (not a clean number, decimal, fraction word, or known text value)
    const CONFIDENCE_THRESHOLD = 75;
    const KNOWN_TEXT_VALUES = new Set([
        'check',
        'x',
        '-',
        'n/a',
        'tbd',
        ''
    ]);
    const numericFields = [
        'par_level',
        'on_hand',
        'order_amount'
    ];
    const isGarbled = (value)=>{
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
    const isRowFlagged = (item, idx)=>{
        if (editedRows.has(idx)) return false;
        if (item._confidence === undefined) return false;
        if (item._confidence >= CONFIDENCE_THRESHOLD) return false;
        // Low confidence — only flag if a numeric field actually looks garbled
        const hasGarbledField = numericFields.some((field)=>isGarbled(item[field]));
        return hasGarbledField;
    };
    const getColumns = ()=>{
        if (currentTemplate && currentTemplate.columns) return currentTemplate.columns;
        if (inventory.length > 0) return Object.keys(inventory[0]).filter((k)=>k !== '_confidence');
        return [
            'item_category',
            'item_description',
            'unit',
            'par_level',
            'on_hand',
            'order_amount'
        ];
    };
    // Strip _confidence before any export
    const getExportInventory = ()=>inventory.map(({ _confidence, ...rest })=>rest);
    // ═══════════════════════════════════════════════════════════════════════════════
    // STATUS HELPERS
    // ═══════════════════════════════════════════════════════════════════════════════
    const getAreaStatusBadge = (areaId)=>{
        const status = areaStatuses[areaId];
        const badges = {
            complete: {
                label: 'Complete',
                bg: '#dcfce7',
                color: '#15803d',
                dot: '#16a34a'
            },
            processing: {
                label: 'Processing',
                bg: '#eff6ff',
                color: '#1d4ed8',
                dot: '#3b82f6'
            },
            failed: {
                label: 'Failed',
                bg: '#fef2f2',
                color: '#dc2626',
                dot: '#ef4444'
            },
            pending: {
                label: 'Pending',
                bg: '#f3f4f6',
                color: '#6b7280',
                dot: '#9ca3af'
            }
        };
        const b = badges[status] || badges.pending;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                background: b.bg,
                color: b.color,
                borderRadius: '12px',
                padding: '3px 10px',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: b.dot,
                        display: 'inline-block'
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 511,
                    columnNumber: 9
                }, this),
                b.label
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 507,
            columnNumber: 7
        }, this);
    };
    const getImageStatusIcon = (idx)=>{
        const status = imageStatuses[idx] || 'pending';
        if (status === 'processing') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    background: 'rgba(79,70,229,0.85)',
                    borderRadius: '10px',
                    width: '22px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '12px',
                        height: '12px',
                        border: '2px solid #fff',
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite'
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 526,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/page.js",
                lineNumber: 521,
                columnNumber: 9
            }, this);
        }
        if (status === 'complete') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    background: '#16a34a',
                    borderRadius: '10px',
                    width: '22px',
                    height: '22px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 900
                },
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/frontend/app/page.js",
                lineNumber: 536,
                columnNumber: 9
            }, this);
        }
        if (status === 'failed') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    background: '#dc2626',
                    borderRadius: '10px',
                    width: '22px',
                    height: '22px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 900
                },
                children: "!"
            }, void 0, false, {
                fileName: "[project]/frontend/app/page.js",
                lineNumber: 545,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'absolute',
                top: '3px',
                left: '3px',
                background: '#4f46e5',
                color: '#fff',
                borderRadius: '10px',
                padding: '1px 6px',
                fontSize: '0.7rem',
                fontWeight: 700
            },
            children: idx + 1
        }, void 0, false, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 553,
            columnNumber: 7
        }, this);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                style: {
                    paddingBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Inventory Tool"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: '#374151'
                                },
                                children: "Business ID"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 583,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '14px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: 0,
                                            fontSize: '1.1rem'
                                        },
                                        children: "Inventory Sessions"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 587,
                                columnNumber: 13
                            }, this),
                            showNewSessionInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: '14px',
                                    padding: '12px',
                                    background: '#f0f4ff',
                                    borderRadius: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newSessionName,
                                        onChange: (e)=>setNewSessionName(e.target.value),
                                        style: inputStyle,
                                        onKeyDown: (e)=>e.key === 'Enter' && handleCreateSession(),
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 599,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 595,
                                columnNumber: 15
                            }, this),
                            loadingSessions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#9ca3af',
                                    textAlign: 'center'
                                },
                                children: "Loading sessions..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 612,
                                columnNumber: 15
                            }, this) : sessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#9ca3af',
                                    textAlign: 'center',
                                    padding: '20px 0'
                                },
                                children: "No sessions yet. Create one to get started."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 614,
                                columnNumber: 15
                            }, this) : sessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        fontWeight: 700,
                                                        fontSize: '0.95rem'
                                                    },
                                                    children: session.name
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 619,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: '2px 0 0',
                                                        fontSize: '0.78rem',
                                                        color: '#6b7280'
                                                    },
                                                    children: [
                                                        new Date(session.created_at).toLocaleDateString(),
                                                        " ·",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: session.status === 'completed' ? '#16a34a' : '#d97706',
                                                                fontWeight: 600
                                                            },
                                                            children: session.status === 'completed' ? 'Completed' : 'In Progress'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 622,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 620,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 618,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 628,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteSession(session.id),
                                                    style: dangerButtonStyle,
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 631,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 627,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, session.id, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 617,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                style: {
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontSize: '1rem'
                                },
                                children: "Template Management"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '12px'
                                },
                                children: [
                                    currentTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        lineNumber: 642,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#6b7280',
                                            fontSize: '0.9rem'
                                        },
                                        children: "No template uploaded yet."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        id: "templateInput",
                                        accept: ".xlsx,.xls,.csv",
                                        onChange: handleTemplateSelect,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileInput,
                                        disabled: uploadingTemplate
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "templateInput",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileLabel,
                                        children: templateFileName || 'Choose template file (.xlsx or .csv)'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, this),
                                    templateFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleTemplateUpload,
                                        style: primaryButtonStyle,
                                        disabled: uploadingTemplate,
                                        children: uploadingTemplate ? 'Uploading...' : 'Upload Template'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 649,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/page.js",
                        lineNumber: 638,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/page.js",
                lineNumber: 578,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 577,
            columnNumber: 7
        }, this);
    }
    // ═══════════════════════════════════════════════════════════════════════════════
    // RENDER: SESSION
    // ═══════════════════════════════════════════════════════════════════════════════
    if (view === VIEW_SESSION) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: stickyBarStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 668,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 667,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                    style: {
                        paddingBottom: '90px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: backButtonStyle,
                            onClick: ()=>{
                                setView(VIEW_HOME);
                                setCurrentSession(null);
                                setAreas([]);
                            },
                            children: "← All Sessions"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 674,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '4px'
                            },
                            children: currentSession.name
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 678,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6b7280',
                                fontSize: '0.85rem',
                                marginTop: 0,
                                marginBottom: '20px'
                            },
                            children: new Date(currentSession.created_at).toLocaleDateString()
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                margin: 0,
                                                fontSize: '1.1rem'
                                            },
                                            children: "Areas"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 685,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 684,
                                    columnNumber: 13
                                }, this),
                                showNewAreaInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '14px',
                                        padding: '12px',
                                        background: '#f0f4ff',
                                        borderRadius: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '8px',
                                                marginBottom: '10px'
                                            },
                                            children: AREA_SUGGESTIONS.filter((s)=>!areas.find((a)=>a.name.toLowerCase() === s.toLowerCase())).map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 698,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newAreaName,
                                            onChange: (e)=>setNewAreaName(e.target.value),
                                            placeholder: "Or type a custom area name...",
                                            style: inputStyle,
                                            onKeyDown: (e)=>e.key === 'Enter' && handleCreateArea()
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 703,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 705,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                    lineNumber: 708,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, this),
                                loadingAreas ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#9ca3af',
                                        textAlign: 'center'
                                    },
                                    children: "Loading areas..."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, this) : areas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#9ca3af',
                                        textAlign: 'center',
                                        padding: '20px 0'
                                    },
                                    children: "No areas yet. Add one to start capturing inventory."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 718,
                                    columnNumber: 15
                                }, this) : areas.map((area)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            margin: 0,
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem'
                                                        },
                                                        children: area.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 723,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: '4px'
                                                        },
                                                        children: getAreaStatusBadge(area.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 722,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteArea(area.id),
                                                        style: dangerButtonStyle,
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 730,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, area.id, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 721,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 673,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 666,
            columnNumber: 7
        }, this);
    }
    // ═══════════════════════════════════════════════════════════════════════════════
    // RENDER: AREA
    // ═══════════════════════════════════════════════════════════════════════════════
    if (view === VIEW_AREA) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: stickyBarStyle,
                    children: inventory.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 750,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 754,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 748,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                    style: {
                        paddingBottom: '90px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 761,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            style: {
                                fontSize: '1.5rem',
                                marginBottom: '20px'
                            },
                            children: currentArea.name
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 765,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#f0f4ff',
                                border: '2px solid #c7d2fe',
                                borderRadius: '16px',
                                padding: '20px',
                                marginBottom: '20px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        marginTop: 0,
                                        marginBottom: '16px',
                                        fontSize: '1.1rem'
                                    },
                                    children: "Capture or Upload Images"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 769,
                                    columnNumber: 13
                                }, this),
                                imagePreviews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: '0 0 8px',
                                                fontSize: '0.82rem',
                                                color: '#6b7280',
                                                fontWeight: 600
                                            },
                                            children: [
                                                imagePreviews.length,
                                                " image",
                                                imagePreviews.length > 1 ? 's' : '',
                                                " — in upload order:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 774,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px',
                                                overflowX: 'auto',
                                                paddingBottom: '4px'
                                            },
                                            children: imagePreviews.map((preview, idx)=>{
                                                const status = imageStatuses[idx] || 'pending';
                                                const borderColor = status === 'complete' ? '#86efac' : status === 'failed' ? '#fca5a5' : status === 'processing' ? '#93c5fd' : '#c7d2fe';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'relative',
                                                        flexShrink: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: preview.src,
                                                            alt: `Image ${idx + 1}`,
                                                            style: {
                                                                width: '80px',
                                                                height: '80px',
                                                                objectFit: 'cover',
                                                                borderRadius: '8px',
                                                                border: `2px solid ${borderColor}`,
                                                                display: 'block',
                                                                opacity: status === 'processing' ? 0.7 : 1
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 783,
                                                            columnNumber: 25
                                                        }, this),
                                                        getImageStatusIcon(idx),
                                                        status !== 'processing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setSelectedFiles((prev)=>prev.filter((_, i)=>i !== idx));
                                                                setImagePreviews((prev)=>prev.filter((_, i)=>i !== idx));
                                                                setImageStatuses((prev)=>{
                                                                    const next = {};
                                                                    Object.entries(prev).forEach(([k, v])=>{
                                                                        const ki = parseInt(k);
                                                                        if (ki < idx) next[ki] = v;
                                                                        else if (ki > idx) next[ki - 1] = v;
                                                                    });
                                                                    return next;
                                                                });
                                                                setImageIds((prev)=>{
                                                                    const next = {};
                                                                    Object.entries(prev).forEach(([k, v])=>{
                                                                        const ki = parseInt(k);
                                                                        if (ki < idx) next[ki] = v;
                                                                        else if (ki > idx) next[ki - 1] = v;
                                                                    });
                                                                    return next;
                                                                });
                                                            },
                                                            style: {
                                                                position: 'absolute',
                                                                top: '3px',
                                                                right: '3px',
                                                                background: '#6b7280',
                                                                color: '#fff',
                                                                border: 'none',
                                                                borderRadius: '10px',
                                                                width: '18px',
                                                                height: '18px',
                                                                fontSize: '0.65rem',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontWeight: 700
                                                            },
                                                            children: "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 786,
                                                            columnNumber: 27
                                                        }, this),
                                                        status === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleRetryImage(idx),
                                                            style: {
                                                                marginTop: '4px',
                                                                width: '80px',
                                                                background: '#fef2f2',
                                                                color: '#dc2626',
                                                                border: '1px solid #fca5a5',
                                                                borderRadius: '6px',
                                                                padding: '3px 0',
                                                                fontSize: '0.7rem',
                                                                fontWeight: 700,
                                                                cursor: 'pointer',
                                                                display: 'block'
                                                            },
                                                            children: "Retry"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 813,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 782,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 777,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 773,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px',
                                        marginBottom: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 825,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 828,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            children: "Choose Photos"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 830,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: galleryInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            multiple: true,
                                            style: {
                                                display: 'none'
                                            },
                                            onChange: handleFileSelect
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/page.js",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this),
                                extractionProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: parsingInventory ? '#eff6ff' : '#f0fdf4',
                                        border: `1px solid ${parsingInventory ? '#bfdbfe' : '#bbf7d0'}`,
                                        borderRadius: '8px',
                                        padding: '10px 12px',
                                        marginBottom: '10px',
                                        fontSize: '0.85rem',
                                        color: parsingInventory ? '#1d4ed8' : '#15803d',
                                        fontWeight: 600
                                    },
                                    children: [
                                        parsingInventory ? '⏳ ' : '✅ ',
                                        extractionProgress
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 837,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUploadClick,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadButton,
                                    disabled: !selectedFiles.length || parsingInventory,
                                    style: {
                                        width: '100%',
                                        marginTop: '4px'
                                    },
                                    children: parsingInventory ? extractionProgress || 'Processing...' : selectedFiles.length > 1 ? `Upload & Extract ${selectedFiles.length} Images` : 'Upload & Extract'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 842,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 768,
                            columnNumber: 11
                        }, this),
                        uploadedFilePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleOCRClick,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ocrButton,
                            disabled: runningOCR,
                            children: runningOCR ? 'Running OCR...' : 'Run OCR'
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 848,
                            columnNumber: 13
                        }, this),
                        uploadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: uploadStatus.includes('success') ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successStatus : __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorStatus,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: uploadStatus
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/page.js",
                                lineNumber: 855,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 854,
                            columnNumber: 13
                        }, this),
                        ocrText && ocrText !== 'Running OCR...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ocrResult,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "OCR Result:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 861,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    children: ocrText
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 862,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 860,
                            columnNumber: 13
                        }, this),
                        ocrText && ocrText !== 'Running OCR...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleParseInventory,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].parseButton,
                            disabled: parsingInventory,
                            children: parsingInventory ? 'Parsing...' : 'Parse Inventory with AI'
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this),
                        inventory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inventoryResult,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        "Items in ",
                                        currentArea.name,
                                        " (",
                                        inventory.length,
                                        " total):"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 874,
                                    columnNumber: 15
                                }, this),
                                (()=>{
                                    const flagged = inventory.filter((item, idx)=>isRowFlagged(item, idx));
                                    return flagged.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.85rem',
                                            color: '#b45309',
                                            background: '#fffbeb',
                                            border: '1px solid #fcd34d',
                                            borderRadius: '8px',
                                            padding: '8px 12px',
                                            marginTop: '-4px',
                                            marginBottom: '8px',
                                            fontWeight: 600
                                        },
                                        children: [
                                            "⚠ ",
                                            flagged.length,
                                            " row",
                                            flagged.length > 1 ? 's' : '',
                                            " flagged for review — highlighted below"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 878,
                                        columnNumber: 19
                                    }, this) : null;
                                })(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        marginTop: '-4px',
                                        marginBottom: '8px'
                                    },
                                    children: "Click any cell to edit before exporting"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 883,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportArea,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exportButton,
                                    children: "Export to Excel"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 886,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tableWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inventoryTable,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: getColumns().map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            children: col
                                                        }, idx, false, {
                                                            fileName: "[project]/frontend/app/page.js",
                                                            lineNumber: 890,
                                                            columnNumber: 57
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/page.js",
                                                    lineNumber: 890,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 889,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: inventory.map((item, index)=>{
                                                    const isFlagged = isRowFlagged(item, index);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: isFlagged ? '#fffbeb' : 'transparent'
                                                        },
                                                        children: getColumns().map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    position: 'relative'
                                                                },
                                                                children: [
                                                                    idx === 0 && isFlagged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            position: 'absolute',
                                                                            left: '2px',
                                                                            top: '50%',
                                                                            transform: 'translateY(-50%)',
                                                                            fontSize: '0.65rem',
                                                                            color: '#b45309'
                                                                        },
                                                                        children: "⚠"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/app/page.js",
                                                                        lineNumber: 900,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: item[col] !== undefined && item[col] !== null ? item[col] : '',
                                                                        onChange: (e)=>{
                                                                            const updated = [
                                                                                ...inventory
                                                                            ];
                                                                            updated[index] = {
                                                                                ...updated[index],
                                                                                [col]: e.target.value
                                                                            };
                                                                            setInventory(updated);
                                                                            setEditedRows((prev)=>new Set([
                                                                                    ...prev,
                                                                                    index
                                                                                ]));
                                                                        },
                                                                        style: {
                                                                            width: '100%',
                                                                            border: 'none',
                                                                            background: 'transparent',
                                                                            padding: idx === 0 ? '4px 4px 4px 16px' : '4px',
                                                                            fontSize: 'inherit',
                                                                            fontFamily: 'inherit',
                                                                            textAlign: typeof item[col] === 'number' ? 'right' : 'left'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/app/page.js",
                                                                        lineNumber: 902,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/frontend/app/page.js",
                                                                lineNumber: 898,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, index, false, {
                                                        fileName: "[project]/frontend/app/page.js",
                                                        lineNumber: 896,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/app/page.js",
                                                lineNumber: 892,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/page.js",
                                        lineNumber: 888,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/page.js",
                                    lineNumber: 887,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/page.js",
                            lineNumber: 873,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/page.js",
                    lineNumber: 760,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.js",
            lineNumber: 747,
            columnNumber: 7
        }, this);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3fa24a26._.js.map