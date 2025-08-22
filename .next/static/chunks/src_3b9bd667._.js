(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/crmTypes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// CRM Data Types and Interfaces
__turbopack_context__.s({
    "ActivityType": (()=>ActivityType),
    "ActivityTypeLabels": (()=>ActivityTypeLabels),
    "OpportunityStatus": (()=>OpportunityStatus),
    "OpportunityStatusLabels": (()=>OpportunityStatusLabels),
    "formatCurrency": (()=>formatCurrency),
    "formatDate": (()=>formatDate),
    "generateId": (()=>generateId)
});
var OpportunityStatus = /*#__PURE__*/ function(OpportunityStatus) {
    OpportunityStatus["NUEVO"] = "nuevo";
    OpportunityStatus["EN_PROGRESO"] = "en_progreso";
    OpportunityStatus["GANADO"] = "ganado";
    OpportunityStatus["PERDIDO"] = "perdido";
    return OpportunityStatus;
}({});
var ActivityType = /*#__PURE__*/ function(ActivityType) {
    ActivityType["LLAMADA"] = "llamada";
    ActivityType["CORREO"] = "correo";
    ActivityType["REUNION"] = "reunion";
    ActivityType["TAREA"] = "tarea";
    return ActivityType;
}({});
const OpportunityStatusLabels = {
    ["nuevo"]: 'Nuevo',
    ["en_progreso"]: 'En Progreso',
    ["ganado"]: 'Ganado',
    ["perdido"]: 'Perdido'
};
const ActivityTypeLabels = {
    ["llamada"]: 'Llamada',
    ["correo"]: 'Correo',
    ["reunion"]: 'Reunión',
    ["tarea"]: 'Tarea'
};
const generateId = ()=>{
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
};
const formatDate = (date)=>{
    return new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useCRMStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CRMProvider": (()=>CRMProvider),
    "useCRMStore": (()=>useCRMStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crmTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crmTypes.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// Initial state
const initialState = {
    contacts: [],
    opportunities: [],
    activities: []
};
// Reducer function
function crmReducer(state, action) {
    switch(action.type){
        case 'LOAD_DATA':
            return action.payload;
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload
                ]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map((contact)=>contact.id === action.payload.id ? action.payload : contact)
            };
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter((contact)=>contact.id !== action.payload)
            };
        case 'ADD_OPPORTUNITY':
            return {
                ...state,
                opportunities: [
                    ...state.opportunities,
                    action.payload
                ]
            };
        case 'UPDATE_OPPORTUNITY':
            return {
                ...state,
                opportunities: state.opportunities.map((opportunity)=>opportunity.id === action.payload.id ? action.payload : opportunity)
            };
        case 'DELETE_OPPORTUNITY':
            return {
                ...state,
                opportunities: state.opportunities.filter((opportunity)=>opportunity.id !== action.payload)
            };
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [
                    ...state.activities,
                    action.payload
                ]
            };
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: state.activities.filter((activity)=>activity.id !== action.payload)
            };
        default:
            return state;
    }
}
// Context
const CRMContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CRMProvider({ children }) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(crmReducer, initialState);
    // Load data from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CRMProvider.useEffect": ()=>{
            const savedData = localStorage.getItem('crm-data');
            if (savedData) {
                try {
                    const parsedData = JSON.parse(savedData);
                    // Convert date strings back to Date objects
                    const processedData = {
                        contacts: parsedData.contacts?.map({
                            "CRMProvider.useEffect": (contact)=>({
                                    ...contact,
                                    createdAt: new Date(contact.createdAt),
                                    updatedAt: new Date(contact.updatedAt)
                                })
                        }["CRMProvider.useEffect"]) || [],
                        opportunities: parsedData.opportunities?.map({
                            "CRMProvider.useEffect": (opportunity)=>({
                                    ...opportunity,
                                    estimatedClosingDate: new Date(opportunity.estimatedClosingDate),
                                    createdAt: new Date(opportunity.createdAt),
                                    updatedAt: new Date(opportunity.updatedAt)
                                })
                        }["CRMProvider.useEffect"]) || [],
                        activities: parsedData.activities?.map({
                            "CRMProvider.useEffect": (activity)=>({
                                    ...activity,
                                    date: new Date(activity.date),
                                    createdAt: new Date(activity.createdAt)
                                })
                        }["CRMProvider.useEffect"]) || []
                    };
                    dispatch({
                        type: 'LOAD_DATA',
                        payload: processedData
                    });
                } catch (error) {
                    console.error('Error loading CRM data from localStorage:', error);
                }
            }
        }
    }["CRMProvider.useEffect"], []);
    // Save data to localStorage whenever state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CRMProvider.useEffect": ()=>{
            localStorage.setItem('crm-data', JSON.stringify(state));
        }
    }["CRMProvider.useEffect"], [
        state
    ]);
    // Helper functions
    const addContact = (contactData)=>{
        const now = new Date();
        const contact = {
            ...contactData,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crmTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            createdAt: now,
            updatedAt: now
        };
        dispatch({
            type: 'ADD_CONTACT',
            payload: contact
        });
    };
    const updateContact = (contact)=>{
        const updatedContact = {
            ...contact,
            updatedAt: new Date()
        };
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: updatedContact
        });
    };
    const deleteContact = (id)=>{
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    };
    const addOpportunity = (opportunityData)=>{
        const now = new Date();
        const opportunity = {
            ...opportunityData,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crmTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            createdAt: now,
            updatedAt: now
        };
        dispatch({
            type: 'ADD_OPPORTUNITY',
            payload: opportunity
        });
    };
    const updateOpportunity = (opportunity)=>{
        const updatedOpportunity = {
            ...opportunity,
            updatedAt: new Date()
        };
        dispatch({
            type: 'UPDATE_OPPORTUNITY',
            payload: updatedOpportunity
        });
    };
    const deleteOpportunity = (id)=>{
        dispatch({
            type: 'DELETE_OPPORTUNITY',
            payload: id
        });
    };
    const addActivity = (activityData)=>{
        const activity = {
            ...activityData,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crmTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateId"])(),
            createdAt: new Date()
        };
        dispatch({
            type: 'ADD_ACTIVITY',
            payload: activity
        });
    };
    const deleteActivity = (id)=>{
        dispatch({
            type: 'DELETE_ACTIVITY',
            payload: id
        });
    };
    // Search and filter functions
    const searchContacts = (query)=>{
        const lowercaseQuery = query.toLowerCase();
        return state.contacts.filter((contact)=>contact.name.toLowerCase().includes(lowercaseQuery) || contact.email.toLowerCase().includes(lowercaseQuery) || contact.company.toLowerCase().includes(lowercaseQuery) || contact.tags.some((tag)=>tag.toLowerCase().includes(lowercaseQuery)));
    };
    const getContactsByCompany = (company)=>{
        return state.contacts.filter((contact)=>contact.company.toLowerCase() === company.toLowerCase());
    };
    const getContactsByTag = (tag)=>{
        return state.contacts.filter((contact)=>contact.tags.some((t)=>t.toLowerCase() === tag.toLowerCase()));
    };
    const getOpportunitiesByStatus = (status)=>{
        return state.opportunities.filter((opportunity)=>opportunity.status === status);
    };
    const getActivitiesByType = (type)=>{
        return state.activities.filter((activity)=>activity.type === type);
    };
    const getActivitiesByDateRange = (startDate, endDate)=>{
        return state.activities.filter((activity)=>{
            const activityDate = new Date(activity.date);
            return activityDate >= startDate && activityDate <= endDate;
        });
    };
    const value = {
        state,
        dispatch,
        addContact,
        updateContact,
        deleteContact,
        addOpportunity,
        updateOpportunity,
        deleteOpportunity,
        addActivity,
        deleteActivity,
        searchContacts,
        getContactsByCompany,
        getContactsByTag,
        getOpportunitiesByStatus,
        getActivitiesByType,
        getActivitiesByDateRange
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CRMContext.Provider, {
        value
    }, children);
}
_s(CRMProvider, "GUSXxL/WUElrtHc/X73NyHNRMdw=");
_c = CRMProvider;
function useCRMStore() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CRMContext);
    if (!context) {
        throw new Error('useCRMStore must be used within a CRMProvider');
    }
    return context;
}
_s1(useCRMStore, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CRMProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/crm/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CRMLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCRMStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCRMStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navigation = [
    {
        name: 'Contactos',
        href: '/crm/contacts'
    },
    {
        name: 'Oportunidades',
        href: '/crm/opportunities'
    },
    {
        name: 'Actividades',
        href: '/crm/activities'
    }
];
function CRMLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCRMStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRMProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-white border-b border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-2xl font-bold text-slate-900",
                                            children: "CRM Simple"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/crm/layout.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:block w-px h-6 bg-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/crm/layout.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "hidden md:flex space-x-1",
                                            children: navigation.map((item)=>{
                                                const isActive = pathname === item.href;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: isActive ? "default" : "ghost",
                                                        size: "sm",
                                                        className: isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/crm/layout.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 25
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/app/crm/layout.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/crm/layout.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/crm/layout.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        children: "Inicio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crm/layout.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/crm/layout.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/crm/layout.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/crm/layout.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/crm/layout.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden bg-white border-b border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex space-x-1",
                            children: navigation.map((item)=>{
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: isActive ? "default" : "ghost",
                                        size: "sm",
                                        className: `w-full ${isActive ? "bg-slate-900 text-white" : "text-slate-600"}`,
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crm/layout.tsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this)
                                }, item.name, false, {
                                    fileName: "[project]/src/app/crm/layout.tsx",
                                    lineNumber: 67,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/crm/layout.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/crm/layout.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/crm/layout.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/crm/layout.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/crm/layout.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/crm/layout.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(CRMLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = CRMLayout;
var _c;
__turbopack_context__.k.register(_c, "CRMLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3b9bd667._.js.map