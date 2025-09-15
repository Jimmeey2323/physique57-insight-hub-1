import{x as O,r as c,j as e,a7 as pe,y as ie,U as P,T as U,h as Z,z as ge,b as xe,C as be,R,ao as ye}from"./react-vendor-dqSXVcdP.js";import{C as $,c as z,d as I,ab as K,r as le,s as ce,t as de,u as ue,W as me,a4 as E}from"./ui-components-DsfbLwT7.js";import{c as ve,d as we,e as je,f as Ne,g as ke,h as Ce,i as Se,j as De}from"./dashboard-misc-CA4t7ooT.js";import{j as A,t as fe,h as J,m as Le,l as Me,u as ae,e as se,g as Te,r as Ke,c as F,d as He,f as te,k as Ae,v as Pe,w as Ee}from"./utils-BhCMrGmG.js";import{G as he,E as Be}from"./dashboard-executive-yZpGwH-8.js";import{a as _e}from"./dashboard-sales-BB6bL1sr.js";import{F as Fe,a as Oe,b as Ve,E as Re,c as Ye,d as $e,e as ze,f as Ie,g as Qe}from"./dashboard-funnel-CNZC_99K.js";import{c as W,S as ne,U as qe,a as Xe}from"./dashboard-classes-C0LoPzks.js";import{E as Ge,C as Ue,a as We,b as Ze,c as Je,d as et,e as tt,f as at,g as st,h as nt,i as rt}from"./dashboard-clients-Bs0kV6K4.js";import{E as ot}from"./dashboard-trainers-DOnzhu8_.js";import{D as it,a as lt}from"./dashboard-discounts--ueDRMSS.js";import"./vendor-CBk7njWV.js";import{a as ct}from"./dashboard-formats-BPcTNDAn.js";const ee=c.memo(({title:a,subtitle:u})=>e.jsxs("div",{className:"relative p-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent",children:a}),e.jsx("div",{className:"text-xs text-slate-600 font-medium mt-1",children:u})]}),e.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"})]})),dt=()=>{const a=O(),{setLoading:u}=A(),{loading:y,error:g,refetch:h}=fe();c.useEffect(()=>{u(y,"Loading dashboard overview...")},[y,u]);const o=c.useCallback(m=>{m==="class-performance-series"?window.open("https://class-performance-series-001.vercel.app/","_blank"):a(m==="late-cancellations"?"/late-cancellations":`/${m}`)},[a]),w=c.useCallback(()=>{h()},[h]);return y?null:g?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-4",children:e.jsx($,{className:`p-12 ${J.card.background} backdrop-blur-sm ${J.card.shadow} ${J.card.border} rounded-2xl max-w-lg`,children:e.jsxs(z,{className:"text-center space-y-6",children:[e.jsx(pe,{className:"w-16 h-16 text-red-500 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xl font-semibold text-slate-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2",children:g})]}),e.jsxs(I,{onClick:w,className:"gap-2 bg-slate-800 hover:bg-slate-900 text-white",children:[e.jsx(ie,{className:"w-4 h-4"}),"Retry Connection"]})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-rose-50/20 via-purple-50/10 to-pink-50/20"}),e.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full floating-animation stagger-1"}),e.jsx("div",{className:"absolute top-60 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-cyan-200/15 rounded-full floating-animation stagger-3"}),e.jsx("div",{className:"absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full floating-animation stagger-5"}),e.jsx("div",{className:"absolute top-32 right-1/4 w-24 h-24 bg-gradient-to-r from-violet-300/30 to-purple-300/30 rounded-full float-gentle stagger-2"}),e.jsx("div",{className:"absolute bottom-40 right-16 w-32 h-32 bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full float-gentle stagger-4"}),e.jsx("div",{className:"absolute top-3/4 left-20 w-20 h-20 bg-gradient-to-r from-rose-300/35 to-pink-300/35 rounded-full float-gentle stagger-6"}),e.jsx("div",{className:"absolute top-1/4 left-3/4 w-16 h-16 bg-gradient-to-r from-amber-300/40 to-orange-300/40 rounded-full pulse-gentle stagger-1"}),e.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-green-300/45 to-emerald-300/45 rounded-full pulse-gentle stagger-3"}),e.jsx("div",{className:"absolute top-1/2 right-1/3 w-14 h-14 bg-gradient-to-r from-indigo-300/35 to-violet-300/35 rounded-full pulse-gentle stagger-5"}),e.jsx("div",{className:"absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 morph-shape stagger-2"}),e.jsx("div",{className:"absolute bottom-1/3 left-1/4 w-56 h-56 bg-gradient-to-r from-pink-300/10 to-rose-300/10 morph-shape stagger-4"})]}),e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"container mx-auto px-6 py-8",children:[e.jsxs("header",{className:"mb-8 text-center slide-in-from-left",children:[e.jsx("div",{className:"inline-flex items-center justify-center mb-4",children:e.jsx("div",{className:"bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 text-sm font-medium shadow-lg tracking-wide min-w-full w-full fixed top-0 left-0 z-50 rounded-none glass-dark",children:"Business Intelligence Dashboard"})}),e.jsxs("h1",{className:"text-4xl md:text-xl font-light text-slate-900 mb-2 tracking-tight font-serif text-center mb-4 perspective-tilt",children:[e.jsx("span",{className:"font-extralight text-8xl gradient-text-purple",children:"Physique"})," ",e.jsx("span",{className:"font-bold text-9xl animate-dynamic-color",children:"57"}),e.jsx("span",{className:"text-slate-600 font-light text-7xl",children:", India"})]}),e.jsx("p",{className:"text-lg text-slate-600 font-light mb-6 max-w-3xl mx-auto leading-relaxed mt-8 slide-in-right stagger-1",children:"Advanced Business Analytics with Real-time Insights"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[e.jsx("div",{className:"glass-card modern-card-hover soft-bounce stagger-1",children:e.jsx(ee,{title:"Real-time",subtitle:"Data Insights"})}),e.jsx("div",{className:"glass-card modern-card-hover soft-bounce stagger-2",children:e.jsx(ee,{title:"10+",subtitle:"Analytics Modules"})}),e.jsx("div",{className:"glass-card modern-card-hover soft-bounce stagger-3",children:e.jsx(ee,{title:"Precision",subtitle:"Data Accuracy"})})]}),e.jsx("div",{className:"w-16 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mx-auto mb-4 shimmer-effect"})]}),e.jsx("main",{className:"max-w-7xl mx-auto slide-in-from-right stagger-2",children:e.jsx("div",{className:"min-w-full glass-card glow-pulse rounded-2xl p-6",children:e.jsx(ve,{onButtonClick:o})})})]})}),e.jsx(K,{}),e.jsx("style",{children:`
        @keyframes color-cycle {
          0% { color: #3b82f6; }
          25% { color: #ef4444; }
          50% { color: #6366f1; }
          75% { color: #8b5cf6; }
          100% { color: #3b82f6; }
        }
        
        .animate-color-cycle {
          animation: color-cycle 4s infinite ease-in-out;
        }
      `})]})},Ft=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),ut=()=>e.jsx(he,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(Be,{}),e.jsx(K,{})]})}),Ot=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),mt=()=>{const{data:a}=fe();return e.jsx(he,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full floating-animation stagger-1"}),e.jsx("div",{className:"absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-200/15 to-cyan-200/15 rounded-full floating-animation stagger-3"}),e.jsx("div",{className:"absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full morph-shape stagger-2"})]}),e.jsx("div",{className:"relative z-10 slide-in-from-left",children:e.jsx(_e,{data:a})}),e.jsx(K,{})]})})},Vt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"}));function ft(){const{data:a,loading:u,error:y}=Le(),{setLoading:g}=A(),h=O();c.useEffect(()=>{g(u,"Loading funnel and lead conversion data...")},[u,g]);const[o,w]=c.useState("all"),[m,b]=c.useState(!0),[v,x]=c.useState({isOpen:!1,title:"",data:[],type:""}),N=()=>{const n=new Date,C=new Date(n.getFullYear(),n.getMonth()-1,1),H=new Date(n.getFullYear(),n.getMonth(),0),t=s=>{const p=s.getFullYear(),j=String(s.getMonth()+1).padStart(2,"0"),L=String(s.getDate()).padStart(2,"0");return`${p}-${j}-${L}`};return{start:t(C),end:t(H)}},[i,r]=c.useState(()=>({dateRange:N(),location:[],source:[],stage:[],status:[],associate:[],channel:[],trialStatus:[],conversionStatus:[],retentionStatus:[],minLTV:void 0,maxLTV:void 0})),D=c.useMemo(()=>[{id:"all",name:"All Locations",fullName:"All Locations"},{id:"kwality",name:"Kwality House",fullName:"Kwality House, Kemps Corner"},{id:"supreme",name:"Supreme HQ",fullName:"Supreme HQ, Bandra"},{id:"kenkere",name:"Kenkere House",fullName:"Kenkere House"}],[]),M=c.useMemo(()=>!a||o==="all"?a||[]:a.filter(n=>{const C=n.center?.toLowerCase()||"";switch(o){case"kwality":return C.includes("kwality")||C.includes("kemps");case"supreme":return C.includes("supreme")||C.includes("bandra");case"kenkere":return C.includes("kenkere");default:return!0}}),[a,o]),k=c.useMemo(()=>M?M.filter(n=>{if(i.dateRange.start||i.dateRange.end){const C=new Date(n.createdAt);if(i.dateRange.start&&C<new Date(i.dateRange.start)||i.dateRange.end&&C>new Date(i.dateRange.end))return!1}return!(i.location.length>0&&!i.location.some(C=>n.center?.toLowerCase().includes(C.toLowerCase()))||i.source.length>0&&!i.source.includes(n.source)||i.stage.length>0&&!i.stage.includes(n.stage)||i.status.length>0&&!i.status.includes(n.status)||i.associate.length>0&&!i.associate.includes(n.associate)||i.channel.length>0&&!i.channel.includes(n.channel)||i.trialStatus.length>0&&!i.trialStatus.includes(n.trialStatus)||i.conversionStatus.length>0&&!i.conversionStatus.includes(n.conversionStatus)||i.retentionStatus.length>0&&!i.retentionStatus.includes(n.retentionStatus)||i.minLTV&&n.ltv<i.minLTV||i.maxLTV&&n.ltv>i.maxLTV)}):[],[M,i]),B=c.useMemo(()=>a?{locations:[...new Set(a.map(n=>n.center).filter(Boolean))],sources:[...new Set(a.map(n=>n.source).filter(Boolean))],stages:[...new Set(a.map(n=>n.stage).filter(Boolean))],statuses:[...new Set(a.map(n=>n.status).filter(Boolean))],associates:[...new Set(a.map(n=>n.associate).filter(Boolean))],channels:[...new Set(a.map(n=>n.channel).filter(Boolean))],trialStatuses:[...new Set(a.map(n=>n.trialStatus).filter(Boolean))],conversionStatuses:[...new Set(a.map(n=>n.conversionStatus).filter(Boolean))],retentionStatuses:[...new Set(a.map(n=>n.retentionStatus).filter(Boolean))]}:{locations:[],sources:[],stages:[],statuses:[],associates:[],channels:[],trialStatuses:[],conversionStatuses:[],retentionStatuses:[]},[a]),V=n=>{r(n)},S=(n,C,H)=>{x({isOpen:!0,title:n,data:C,type:H})};return y?e.jsx("div",{className:"min-h-screen bg-gray-50/30 flex items-center justify-center p-4",children:e.jsx($,{className:"p-8 bg-white shadow-lg max-w-md",children:e.jsxs(z,{className:"text-center space-y-4",children:[e.jsx(ie,{className:"w-12 h-12 text-red-600 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold text-gray-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:y?.toString()})]})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20",children:[e.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30"}),e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-12 left-12 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"0s"},children:e.jsx(P,{className:"w-8 h-8 text-yellow-300/80 neon-glow"})}),e.jsx("div",{className:"absolute top-32 right-20 animate-float animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2s"},children:e.jsx(P,{className:"w-6 h-6 text-amber-200/70 neon-glow"})}),e.jsx("div",{className:"absolute bottom-24 left-32 animate-float animate-pulse-neon",style:{animationDuration:"7s",animationDelay:"1s"},children:e.jsx(P,{className:"w-10 h-10 text-yellow-400/60 neon-glow"})}),e.jsx("div",{className:"absolute top-20 left-1/3 animate-bounce animate-pulse-neon",style:{animationDuration:"4s",animationDelay:"1s"},children:e.jsx(U,{className:"w-12 h-12 text-orange-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-32 right-32 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"3s"},children:e.jsx(U,{className:"w-8 h-8 text-yellow-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-28 right-12 animate-pulse animate-pulse-neon",style:{animationDuration:"3s"},children:e.jsx(Z,{className:"w-10 h-10 text-emerald-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-16 left-16 animate-bounce animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2.5s"},children:e.jsx(Z,{className:"w-6 h-6 text-green-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-16 right-1/3 animate-float animate-pulse-neon",style:{animationDuration:"4.5s",animationDelay:"0.5s"},children:e.jsx(P,{className:"w-7 h-7 text-orange-200/60 neon-glow"})}),e.jsx("div",{className:"absolute bottom-40 left-1/4 animate-pulse animate-pulse-neon",style:{animationDuration:"3.5s",animationDelay:"1.5s"},children:e.jsx(U,{className:"w-9 h-9 text-yellow-300/70 neon-glow"})}),e.jsx("div",{className:"absolute top-2/3 right-1/4 animate-float animate-pulse-neon",style:{animationDuration:"5.5s",animationDelay:"2.8s"},children:e.jsx(Z,{className:"w-8 h-8 text-amber-300/60 neon-glow"})}),e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse",style:{animationDuration:"8s"}}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-600/25 to-red-700/15 rounded-full blur-3xl animate-pulse",style:{animationDuration:"10s",animationDelay:"3s"}})]}),e.jsx("div",{className:"relative px-8 py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-8",children:e.jsxs(I,{onClick:()=>h("/"),variant:"outline",size:"sm",className:"gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200",children:[e.jsx(ge,{className:"w-4 h-4"}),"Dashboard"]})}),e.jsxs("div",{className:"text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 animate-fade-in-up",children:[e.jsx(U,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Lead Funnel Analysis"})]}),e.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up delay-200",children:"Funnel & Leads"}),e.jsx("p",{className:"text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300",children:"Comprehensive lead funnel analysis and conversion tracking"}),e.jsxs("div",{className:"flex items-center justify-center gap-8 mt-8 animate-fade-in-up delay-500",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:k.length.toLocaleString()}),e.jsx("div",{className:"text-sm text-blue-200",children:"Total Leads"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:k.filter(n=>n.conversionStatus==="Converted").length}),e.jsx("div",{className:"text-sm text-blue-200",children:"Converted"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-3xl font-bold text-white",children:[(k.filter(n=>n.conversionStatus==="Converted").length/k.length*100).toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-blue-200",children:"Conversion Rate"})]})]})]})]})})]}),e.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 space-y-8",children:e.jsx($,{className:"bg-white/80 backdrop-blur-sm shadow-xl border-0 overflow-hidden",children:e.jsx(z,{className:"p-2",children:e.jsxs(le,{value:o,onValueChange:w,className:"w-full",children:[e.jsx(ce,{className:"grid w-full grid-cols-4 bg-gradient-to-r from-slate-100 to-slate-200 p-2 rounded-2xl h-auto gap-2",children:D.map(n=>e.jsx(de,{value:n.id,className:"rounded-xl px-6 py-4 font-semibold text-sm transition-all duration-300",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:n.name}),e.jsx("div",{className:"text-xs opacity-75",children:n.fullName})]})},n.id))}),D.map(n=>e.jsxs(ue,{value:n.id,className:"space-y-8 mt-8",children:[e.jsx($,{className:"bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 w-full",children:e.jsxs(z,{className:"p-6 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Advanced Filters"}),e.jsxs(I,{variant:"ghost",size:"sm",onClick:()=>b(!m),className:"gap-2",children:[m?e.jsx(xe,{className:"w-4 h-4"}):e.jsx(be,{className:"w-4 h-4"}),m?"Show Filters":"Hide Filters"]})]}),!m&&e.jsx("div",{className:"w-full",children:e.jsx(Fe,{filters:i,onFiltersChange:V,uniqueValues:B})})]})}),e.jsx(Oe,{data:k,onCardClick:S}),e.jsx(Ve,{data:k}),e.jsx(Re,{data:k}),e.jsx(Ye,{data:k,onDrillDown:S}),e.jsx($e,{data:M}),e.jsx(ze,{allData:M,onDrillDown:S}),e.jsx(Ie,{data:k})]},n.id))]})})})}),e.jsx(Qe,{isOpen:v.isOpen,onClose:()=>x(n=>({...n,isOpen:!1})),title:v.title,data:v.data,type:v.type}),e.jsx("style",{children:`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `})]})}const Rt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),ht=()=>{const{data:a,loading:u}=Me(),{loading:y}=ae(),{data:g,isLoading:h}=se(),{isLoading:o,setLoading:w}=A();O();const[m,b]=c.useState("All Locations"),[v,x]=c.useState("monthonmonthbytype"),[N,i]=c.useState({isOpen:!1,client:null,title:"",data:null,type:"month"}),[r,D]=c.useState(()=>({dateRange:Te(),location:[],homeLocation:[],trainer:[],paymentMethod:[],retentionStatus:[],conversionStatus:[],isNew:[],minLTV:void 0,maxLTV:void 0}));c.useEffect(()=>{w(u||y||h,"Analyzing client conversion and retention patterns...")},[u,y,h,w]);const M=c.useMemo(()=>{if(!g||g.length===0)return{};let t=g;m!=="All Locations"&&(t=g.filter(p=>{const j=p.location||"";return m==="Kenkere House, Bengaluru"?j.toLowerCase().includes("kenkere")||j.toLowerCase().includes("bengaluru"):j===m}));const s={};return t.forEach(p=>{if(p.monthYear&&p.totalCustomers){const j=p.monthYear;s[j]=(s[j]||0)+p.totalCustomers}}),s},[g,m]),k=R.useMemo(()=>{const t=["Kwality House, Kemps Corner","Supreme HQ, Bandra","Kenkere House, Bengaluru"],s=new Set;return a.forEach(p=>{p.firstVisitLocation&&t.includes(p.firstVisitLocation)&&s.add(p.firstVisitLocation),p.homeLocation&&t.includes(p.homeLocation)&&s.add(p.homeLocation)}),Array.from(s).filter(Boolean)},[a]),B=R.useMemo(()=>{const t=new Set;return a.forEach(s=>{s.trainerName&&t.add(s.trainerName)}),Array.from(t).filter(Boolean)},[a]),V=R.useMemo(()=>{const t=new Set;return a.forEach(s=>{s.membershipUsed&&t.add(s.membershipUsed)}),Array.from(t).filter(Boolean)},[a]),S=R.useMemo(()=>{let t=a;if(a.length>0,r.dateRange.start&&r.dateRange.end){const s=r.dateRange.start?new Date(r.dateRange.start+"T00:00:00"):null,p=r.dateRange.end?new Date(r.dateRange.end+"T23:59:59"):null;t=t.filter(j=>{if(!j.firstVisitDate)return!1;const L=Ke(j.firstVisitDate);return L?(L.setHours(0,0,0,0),(!s||L>=s)&&(!p||L<=p)):!1})}return m!=="All Locations"&&(t.length,m==="Kenkere House, Bengaluru"&&([...new Set(t.map(s=>s.firstVisitLocation).filter(Boolean))],[...new Set(t.map(s=>s.homeLocation).filter(Boolean))]),t=t.filter(s=>{const p=s.firstVisitLocation||"",j=s.homeLocation||"";if(m==="Kenkere House, Bengaluru"){const L=p.toLowerCase().includes("kenkere")||p.toLowerCase().includes("bengaluru")||p==="Kenkere House",T=j.toLowerCase().includes("kenkere")||j.toLowerCase().includes("bengaluru")||j==="Kenkere House";return L||T}return p===m||j===m})),r.location.length>0&&(t=t.filter(s=>r.location.includes(s.firstVisitLocation||"")||r.location.includes(s.homeLocation||""))),r.trainer.length>0&&(t=t.filter(s=>r.trainer.includes(s.trainerName||""))),r.conversionStatus.length>0&&(t=t.filter(s=>r.conversionStatus.includes(s.conversionStatus||""))),r.retentionStatus.length>0&&(t=t.filter(s=>r.retentionStatus.includes(s.retentionStatus||""))),r.paymentMethod.length>0&&(t=t.filter(s=>r.paymentMethod.includes(s.paymentMethod||""))),r.isNew.length>0&&(t=t.filter(s=>r.isNew.includes(s.isNew||""))),r.minLTV!==void 0&&(t=t.filter(s=>(s.ltv||0)>=r.minLTV)),r.maxLTV!==void 0&&(t=t.filter(s=>(s.ltv||0)<=r.maxLTV)),t},[a,m,r]),n=R.useMemo(()=>{let t=a;return m!=="All Locations"&&(t.length,t=t.filter(s=>{const p=s.firstVisitLocation||"",j=s.homeLocation||"";if(m==="Kenkere House, Bengaluru"){const L=p.toLowerCase().includes("kenkere")||p.toLowerCase().includes("bengaluru")||p==="Kenkere House",T=j.toLowerCase().includes("kenkere")||j.toLowerCase().includes("bengaluru")||j==="Kenkere House";return L||T}return p===m||j===m})),r.location.length>0&&(t=t.filter(s=>r.location.includes(s.firstVisitLocation||"")||r.location.includes(s.homeLocation||""))),r.trainer.length>0&&(t=t.filter(s=>r.trainer.includes(s.trainerName||""))),r.conversionStatus.length>0&&(t=t.filter(s=>r.conversionStatus.includes(s.conversionStatus||""))),r.retentionStatus.length>0&&(t=t.filter(s=>r.retentionStatus.includes(s.retentionStatus||""))),r.paymentMethod.length>0&&(t=t.filter(s=>r.paymentMethod.includes(s.paymentMethod||""))),r.isNew.length>0&&(t=t.filter(s=>r.isNew.includes(s.isNew||""))),r.minLTV!==void 0&&(t=t.filter(s=>(s.ltv||0)>=r.minLTV)),r.maxLTV!==void 0&&(t=t.filter(s=>(s.ltv||0)<=r.maxLTV)),t},[a,m,r]),C=c.useMemo(()=>!S||S.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House, Bengaluru",name:"Kenkere"}].map(s=>{const j=S.filter(L=>{const T=L.firstVisitLocation||"",l=L.homeLocation||"";return s.key==="Kenkere House, Bengaluru"?T.toLowerCase().includes("kenkere")||T.toLowerCase().includes("bengaluru")||T==="Kenkere House"||l.toLowerCase().includes("kenkere")||l.toLowerCase().includes("bengaluru")||l==="Kenkere House":T===s.key||l===s.key}).length;return{location:s.name,label:"Filtered Clients",value:F(j)}}),[S]),H=e.jsx(me,{newClientData:S,defaultFileName:`client-conversion-${m.replace(/\s+/g,"-").toLowerCase()}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-white relative overflow-hidden",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full floating-animation stagger-1"}),e.jsx("div",{className:"absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full floating-animation stagger-3"}),e.jsx("div",{className:"absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full morph-shape stagger-2"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"bg-white text-slate-800 slide-in-from-left",children:e.jsx(E,{title:"Client Conversion & Retention",subtitle:"Comprehensive client acquisition and retention analysis across all customer touchpoints",variant:"client",metrics:C,exportButton:H})}),e.jsxs("div",{className:"container mx-auto px-6 py-8 bg-white min-h-screen",children:[e.jsxs("main",{className:"space-y-8 slide-in-from-right stagger-1",children:[e.jsx("div",{className:"glass-card modern-card-hover p-6 rounded-2xl",children:e.jsx(Ge,{filters:r,onFiltersChange:D,locations:k,trainers:B,membershipTypes:V})}),e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("div",{className:"glass-card glow-pulse p-2 rounded-2xl shadow-lg border border-white/30 grid grid-cols-4 w-full max-w-4xl",children:[e.jsxs("button",{onClick:()=>b("All Locations"),className:W("px-6 py-3 rounded-xl transition-all duration-500 font-medium text-sm flex flex-col items-center gap-2 transform hover:scale-105",m==="All Locations"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl":"text-slate-800 hover:text-slate-700 hover:bg-white/20 backdrop-blur-sm"),children:[e.jsx(P,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"All Locations"}),e.jsxs("div",{className:"text-xs opacity-80",children:["(",a.length,")"]})]})]}),e.jsxs("button",{onClick:()=>b("Kwality House, Kemps Corner"),className:W("px-6 py-3 rounded-xl transition-all duration-500 font-medium text-sm flex flex-col items-center gap-2 transform hover:scale-105",m==="Kwality House, Kemps Corner"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl":"text-slate-800 hover:text-slate-700 hover:bg-white/20 backdrop-blur-sm"),children:[e.jsx(P,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kwality House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Kemps Corner (",a.filter(t=>t.firstVisitLocation==="Kwality House, Kemps Corner"||t.homeLocation==="Kwality House, Kemps Corner").length,")"]})]})]}),e.jsxs("button",{onClick:()=>b("Supreme HQ, Bandra"),className:W("px-6 py-3 rounded-xl transition-all duration-500 font-medium text-sm flex flex-col items-center gap-2 transform hover:scale-105",m==="Supreme HQ, Bandra"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl":"text-slate-800 hover:text-slate-700 hover:bg-white/20 backdrop-blur-sm"),children:[e.jsx(P,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Supreme HQ"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bandra (",a.filter(t=>t.firstVisitLocation==="Supreme HQ, Bandra"||t.homeLocation==="Supreme HQ, Bandra").length,")"]})]})]}),e.jsxs("button",{onClick:()=>b("Kenkere House, Bengaluru"),className:W("px-6 py-3 rounded-xl transition-all duration-500 font-medium text-sm flex flex-col items-center gap-2 transform hover:scale-105",m==="Kenkere House"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl":"text-slate-800 hover:text-slate-700 hover:bg-white/20 backdrop-blur-sm"),children:[e.jsx(P,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kenkere House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bengaluru (",a.filter(t=>{const s=(t.firstVisitLocation||"").toLowerCase(),p=(t.homeLocation||"").toLowerCase();return s.includes("kenkere")||p.includes("kenkere")||s.includes("bengaluru")||p.includes("bengaluru")||t.firstVisitLocation==="Kenkere House"||t.homeLocation==="Kenkere House"}).length,")"]})]})]})]})}),e.jsx("div",{className:"glass-card modern-card-hover rounded-2xl p-6 soft-bounce stagger-2",children:e.jsx(Ue,{data:S,onCardClick:(t,s,p)=>i({isOpen:!0,client:null,title:`${t} - Detailed Analysis`,data:{clients:s,metricType:p},type:"metric"})})}),e.jsx("div",{className:"glass-card modern-card-hover rounded-2xl p-6 slide-in-right stagger-3",children:e.jsx(We,{data:S})}),e.jsx("div",{className:"space-y-4 slide-in-left stagger-4",children:e.jsx("div",{className:"glass-card rounded-2xl border-0 shadow-lg",children:e.jsxs("details",{className:"group",children:[e.jsx("summary",{className:"cursor-pointer p-6 font-semibold text-slate-800 border-b border-white/20 group-open:bg-gradient-to-r group-open:from-purple-50/50 group-open:to-pink-50/50 rounded-t-2xl transition-all duration-300",children:"📊 Interactive Charts & Visualizations"}),e.jsx("div",{className:"p-6 bg-gradient-to-br from-white to-slate-50/50",children:e.jsx(Ze,{data:S})})]})})}),e.jsx("div",{className:"glass-card modern-card-hover rounded-2xl p-6 slide-in-right stagger-5",children:e.jsx(Je,{activeTable:v,onTableChange:x,dataLength:S.length})}),e.jsxs("div",{className:"space-y-8",children:[v==="monthonmonthbytype"&&e.jsx(et,{data:S,visitsSummary:M,onRowClick:t=>i({isOpen:!0,client:null,title:`${t.month} - ${t.type} Analysis`,data:t,type:"month"})}),v==="monthonmonth"&&e.jsx(tt,{data:n,visitsSummary:M,onRowClick:t=>i({isOpen:!0,client:null,title:`${t.month} Analysis`,data:t,type:"month"})}),v==="yearonyear"&&e.jsx(at,{data:n,visitsSummary:M,onRowClick:t=>i({isOpen:!0,client:null,title:`${t.month} Year Comparison`,data:t,type:"year"})}),v==="hostedclasses"&&e.jsx(st,{data:S,onRowClick:t=>i({isOpen:!0,client:null,title:`${t.className} - ${t.month}`,data:t,type:"class"})}),v==="memberships"&&e.jsx(nt,{data:S})]})]}),e.jsx(rt,{isOpen:N.isOpen,onClose:()=>i({isOpen:!1,client:null,title:"",data:null,type:"month"}),title:N.title,data:N.data,type:N.type})]})]}),e.jsx(K,{}),e.jsx("style",{children:`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `})]})},Yt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),pt=()=>{const{data:a,isLoading:u}=se(),{isLoading:y,setLoading:g}=A();c.useEffect(()=>{g(u,"Analyzing trainer performance metrics and insights...")},[u,g]);const h=c.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(w=>{const b=a.filter(v=>w.key==="Kenkere House"?v.location?.includes("Kenkere")||v.location==="Kenkere House":v.location===w.key).reduce((v,x)=>v+(x.cycleSessions||0),0);return{location:w.name,label:"Total Sessions",value:b.toString()}}),[a]);return y?null:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20",children:[e.jsx(E,{title:"Trainer Performance Analytics",subtitle:"Comprehensive trainer performance metrics, insights, and development opportunities",variant:"trainer",metrics:h,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ot,{})})}),e.jsx(K,{})]})},$t=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),gt=()=>{const{data:a}=ae(),u=He(a||[]),y=c.useMemo(()=>{if(!u||u.length===0)return[];const g=u.length,h=u.reduce((x,N)=>x+(N.checkedInCount||0),0);u.reduce((x,N)=>x+(N.capacity||0),0);const o=u.reduce((x,N)=>x+(N.totalPaid||0),0),w=g>0?h/g:0,m=[...new Set(u.map(x=>x.location))].filter(Boolean),b=[...new Set(u.map(x=>x.cleanedClass))].filter(Boolean),v=[...new Set(u.map(x=>x.trainerName))].filter(Boolean);return[{location:"Sessions",label:"Total Sessions",value:F(g),subValue:`${b.length} classes`},{location:"Attendance",label:"Total Attendance",value:F(h),subValue:`${F(w)} avg/class`},{location:"Revenue",label:"Earned Revenue",value:te(o),subValue:`${te(o/g)} avg/session`},{location:"Coverage",label:"Locations & Trainers",value:`${m.length} locations`,subValue:`${v.length} trainers`}]},[u]);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(E,{title:"Class Attendance Analytics",subtitle:"Comprehensive class utilization and attendance trend analysis across all sessions",variant:"attendance",metrics:y,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx(qe,{})}),e.jsx(K,{})]})},xt=()=>e.jsx(ne,{children:e.jsx(gt,{})}),zt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),bt=()=>{O();const{setLoading:a}=A(),{data:u,loading:y,error:g}=Ae(),h=c.useMemo(()=>u?u.map(o=>{const w=i=>{if(i==null||i==="")return 0;const r=i.toString().replace(/[₹,\s]/g,""),D=parseFloat(r);return isNaN(D)?0:D},m=w(o.discountAmount||o["Discount Amount -Mrp- Payment Value"]||0),b=w(o.discountPercentage||o["Discount Percentage - discount amount/mrp*100"]||0),v=w(o.paymentValue||o["Payment Value"]||0),x=w(o.mrpPreTax||o["Mrp - Pre Tax"]||0),N=w(o.mrpPostTax||o["Mrp - Post Tax"]||0);return{...o,memberId:o.memberId||o["Member ID"]?.toString()||"",customerName:o.customerName||o["Customer Name"]||"",customerEmail:o.customerEmail||o["Customer Email"]||"",paymentDate:o.paymentDate||o["Payment Date"]||"",paymentValue:v,paymentMethod:o.paymentMethod||o["Payment Method"]||"",calculatedLocation:o.calculatedLocation||o["Calculated Location"]||"",cleanedProduct:o.cleanedProduct||o["Cleaned Product"]||"",cleanedCategory:o.cleanedCategory||o["Cleaned Category"]||"",soldBy:o.soldBy==="-"?"Online/System":o.soldBy||o["Sold By"]||"Unknown",discountAmount:m,discountPercentage:b,mrpPreTax:x,mrpPostTax:N,hasDiscount:m>0||b>0}}):[],[u]);return c.useMemo(()=>{if(!h||h.length===0)return[];const o=new Date,w=new Date(o.getFullYear(),o.getMonth()-1,1),m=new Date(o.getFullYear(),o.getMonth(),0),b=h.filter(x=>{if(!x.paymentDate)return!1;const N=new Date(x.paymentDate);return N>=w&&N<=m});return[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(x=>{const i=b.filter(r=>x.key==="Kenkere House"?r.calculatedLocation?.includes("Kenkere")||r.calculatedLocation==="Kenkere House":r.calculatedLocation===x.key).reduce((r,D)=>r+(D.discountAmount||0),0);return{location:x.name,label:"Previous Month Discounts",value:te(i)}})},[h]),c.useEffect(()=>{a(y,"Loading discount and promotional analysis...")},[y,a]),g?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Connection Error"}),e.jsx("p",{className:"text-gray-600 mb-4",children:g}),e.jsx("button",{onClick:()=>window.location.reload(),className:"bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700",children:"Retry Loading"})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:[e.jsx(it,{data:h}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(lt,{data:h})})}),e.jsx(K,{}),e.jsx("style",{children:`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.08);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-12px) translateX(4px);
          }
          66% {
            transform: translateY(-6px) translateX(-4px);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1) rotate(0deg);
          }
          25% {
            opacity: 0.9;
            transform: scale(1.3) rotate(90deg);
          }
          75% {
            opacity: 0.6;
            transform: scale(0.8) rotate(270deg);
          }
        }
        
        @keyframes drift-left {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(-20px) translateY(-10px);
          }
        }
        
        @keyframes drift-right {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(20px) translateY(-10px);
          }
        }
        
        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        @keyframes gentle-pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes gentle-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gentle-drift {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(10px);
          }
        }
        
        @keyframes gentle-wave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(180deg);
          }
        }
        
        @keyframes gentle-bob {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-4px) translateX(2px);
          }
          66% {
            transform: translateY(-2px) translateX(-2px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-drift-left {
          animation: drift-left 6s ease-in-out infinite;
        }
        
        .animate-drift-right {
          animation: drift-right 6s ease-in-out infinite;
        }
        
        .animate-gentle-float {
          animation: gentle-float 3s ease-in-out infinite;
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 2.5s ease-in-out infinite;
        }
        
        .animate-gentle-pulse {
          animation: gentle-pulse 4s ease-in-out infinite;
        }
        
        .animate-gentle-spin {
          animation: gentle-spin 20s linear infinite;
        }
        
        .animate-gentle-drift {
          animation: gentle-drift 5s ease-in-out infinite;
        }
        
        .animate-gentle-wave {
          animation: gentle-wave 4s ease-in-out infinite;
        }
        
        .animate-gentle-bob {
          animation: gentle-bob 3.5s ease-in-out infinite;
        }
        
        .animate-bounce-delayed {
          animation: bounce-slow 4s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        
        .animate-pulse-delayed {
          animation: pulse-slow 5s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        /* Enhanced Glow effects */
        .glow-purple {
          filter: drop-shadow(0 0 25px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 50px rgba(168, 85, 247, 0.3));
        }
        
        .glow-blue {
          filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 50px rgba(59, 130, 246, 0.3));
        }
        
        .glow-pink {
          filter: drop-shadow(0 0 25px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 50px rgba(236, 72, 153, 0.3));
        }
        
        .glow-green {
          filter: drop-shadow(0 0 25px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 50px rgba(34, 197, 94, 0.3));
        }
        
        .glow-yellow {
          filter: drop-shadow(0 0 25px rgba(234, 179, 8, 0.6)) drop-shadow(0 0 50px rgba(234, 179, 8, 0.3));
        }
        
        .glow-indigo {
          filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.6)) drop-shadow(0 0 50px rgba(99, 102, 241, 0.3));
        }
        
        .glow-orange {
          filter: drop-shadow(0 0 25px rgba(249, 115, 22, 0.6)) drop-shadow(0 0 50px rgba(249, 115, 22, 0.3));
        }
        
        .glow-cyan {
          filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5));
        }
        
        .glow-rose {
          filter: drop-shadow(0 0 20px rgba(244, 63, 94, 0.5));
        }
        
        .glow-emerald {
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
        }
        
        .glow-violet {
          filter: drop-shadow(0 0 20px rgba(139, 69, 228, 0.5));
        }
        
        .glow-amber {
          filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.5));
        }
        
        .glow-teal {
          filter: drop-shadow(0 0 15px rgba(20, 184, 166, 0.4));
        }
        
        .glow-fuchsia {
          filter: drop-shadow(0 0 15px rgba(217, 70, 239, 0.4));
        }
        
        .glow-lime {
          filter: drop-shadow(0 0 15px rgba(132, 204, 22, 0.4));
        }
        
        .glow-sky {
          filter: drop-shadow(0 0 15px rgba(14, 165, 233, 0.4));
        }
        
        .glow-red {
          filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.4));
        }
        
        .glow-blue-light {
          filter: drop-shadow(0 0 12px rgba(147, 197, 253, 0.3));
        }
        
        .glow-purple-light {
          filter: drop-shadow(0 0 12px rgba(196, 181, 253, 0.3));
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `})]})},It=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),yt=()=>{const{data:a,loading:u}=ae(),{setLoading:y}=A();c.useEffect(()=>{y(u,"Loading session analytics...")},[u,y]);const g=c.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(o=>{const m=a.filter(b=>o.key==="Kenkere House"?b.location?.includes("Kenkere")||b.location==="Kenkere House":b.location===o.key).reduce((b,v)=>b+(v.checkedInCount||0),0);return{location:o.name,label:"Total Check-ins",value:F(m)}}),[a]);return e.jsx(ne,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20",children:[e.jsx(E,{title:"Sessions Analytics",subtitle:"Comprehensive analysis of class sessions, attendance patterns, and performance insights",variant:"sessions",metrics:g,onExport:()=>{}}),e.jsx("main",{children:e.jsx(Xe,{})}),e.jsx(K,{})]})})},Qt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),vt=()=>{const{data:a,isLoading:u}=se(),{isLoading:y,setLoading:g}=A();return c.useEffect(()=>{u!==void 0&&g(u,"Loading PowerCycle vs Barre vs Strength performance data...")},[u,g]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20",children:[e.jsx(E,{title:"PowerCycle vs Barre vs Strength",subtitle:"Comprehensive analysis of PowerCycle, Barre, and Strength Lab class performance",variant:"powercycle",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ne,{children:e.jsx(ct,{data:a||[]})})})}),e.jsx(K,{})]})},qt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),wt=()=>{const{data:a,loading:u,error:y}=Pe(),{setLoading:g}=A();return O(),c.useEffect(()=>{g(u,"Loading expirations and churn data...")},[u,g]),y?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-4 max-w-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:"Data Access Issue"}),e.jsx("p",{className:"text-slate-600",children:y}),y.includes("Failed to fetch")&&e.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-left",children:[e.jsx("h3",{className:"font-semibold text-amber-800 mb-2",children:"Development Environment Note:"}),e.jsxs("p",{className:"text-sm text-amber-700",children:["This appears to be a CORS/network restriction in the development environment. The integration is correctly configured for the spreadsheet:",e.jsx("br",{}),e.jsx("code",{className:"text-xs bg-amber-100 px-2 py-1 rounded mt-1 inline-block",children:"1rGMDDvvTbZfNg1dueWtRN3LhOgGQOdLg3Fd7Sn1GCZo"}),e.jsx("br",{}),e.jsx("br",{}),"In a production environment with proper CORS configuration, this should work correctly."]})]}),e.jsx(I,{onClick:()=>window.location.reload(),children:"Retry"})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(E,{title:"Expirations & Churn",subtitle:"Comprehensive analysis of membership expirations and customer retention insights",variant:"expiration",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(we,{data:a||[]})})}),e.jsx(K,{})]})},Xt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),jt=()=>{const{data:a,loading:u}=Ee(),{isLoading:y,setLoading:g}=A();O();const[h,o]=c.useState("all"),[w,m]=c.useState("prev-month"),[b,v]=c.useState("all"),[x,N]=c.useState("all"),[i,r]=c.useState("all"),[D,M]=c.useState("all"),[k,B]=c.useState({start:"",end:""}),[V,S]=c.useState(null),[n,C]=c.useState(!1),H=c.useMemo(()=>{if(!Array.isArray(a))return[];const l=Array.from(new Set(a.map(d=>d?.location).filter(Boolean)));return[{id:"all",name:"All Locations"},{id:"kwality",name:"Kwality House"},{id:"supreme",name:"Supreme HQ"},{id:"kenkere",name:"Kenkere House"}].filter(d=>d.id==="all"||l.some(f=>d.id==="kwality"?f.includes("Kwality"):d.id==="supreme"?f.includes("Supreme"):d.id==="kenkere"?f.includes("Kenkere"):!1))},[a]),t=c.useMemo(()=>{if(!Array.isArray(a))return[];let l=a;if(h!=="all"&&(l=l.filter(d=>{const f=d?.location||"";return h==="kwality"?f.includes("Kwality"):h==="supreme"?f.includes("Supreme"):h==="kenkere"?f.includes("Kenkere"):!0})),b!=="all"&&(l=l.filter(d=>d?.teacherName===b)),x!=="all"&&(l=l.filter(d=>d?.cleanedClass===x)),i!=="all"&&(l=l.filter(d=>d?.cleanedProduct===i)),D!=="all"&&(l=l.filter(d=>{if(!d?.time)return!1;const f=parseInt(d.time.split(":")[0]);switch(D){case"morning":return f>=6&&f<12;case"afternoon":return f>=12&&f<17;case"evening":return f>=17&&f<22;case"late":return f>=22||f<6;default:return!0}})),w!=="all"){const d=new Date;let f=new Date,Q=new Date;switch(w){case"1w":f.setDate(d.getDate()-7);break;case"2w":f.setDate(d.getDate()-14);break;case"1m":f.setMonth(d.getMonth()-1);break;case"prev-month":const _=new Date(d.getFullYear(),d.getMonth()-1,1),q=new Date(d.getFullYear(),d.getMonth(),0);return f=_,Q=q,l=l.filter(X=>{if(!X?.dateIST)return!1;const G=new Date(X.dateIST);return G>=f&&G<=Q}),l;case"3m":f.setMonth(d.getMonth()-3);break;case"6m":f.setMonth(d.getMonth()-6);break;case"1y":f.setFullYear(d.getFullYear()-1);break;case"custom":if(k.start||k.end){const X=k.start?new Date(k.start):new Date("2020-01-01"),G=k.end?new Date(k.end):d;l=l.filter(re=>{if(!re?.dateIST)return!1;const oe=new Date(re.dateIST);return oe>=X&&oe<=G})}return l;default:return l}l=l.filter(_=>{if(!_?.dateIST)return!1;const q=new Date(_.dateIST);return q>=f&&q<=d})}return l},[a,h,w,b,x,i,D,k]),s=()=>{m("prev-month"),v("all"),N("all"),r("all"),M("all"),B({start:"",end:""})},p=l=>{S(l),C(!0)},j=c.useMemo(()=>{if(!Array.isArray(a))return[];let l=a;return h!=="all"&&(l=l.filter(d=>{const f=d?.location||"";return h==="kwality"?f.includes("Kwality"):h==="supreme"?f.includes("Supreme"):h==="kenkere"?f.includes("Kenkere"):!0})),b!=="all"&&(l=l.filter(d=>d?.teacherName===b)),x!=="all"&&(l=l.filter(d=>d?.cleanedClass===x)),i!=="all"&&(l=l.filter(d=>d?.cleanedProduct===i)),D!=="all"&&(l=l.filter(d=>{if(!d?.time)return!1;const f=parseInt(d.time.split(":")[0]);switch(D){case"morning":return f>=6&&f<12;case"afternoon":return f>=12&&f<17;case"evening":return f>=17&&f<22;case"late":return f>=22||f<6;default:return!0}})),l},[a,h,b,x,i,D]),L=c.useMemo(()=>!t||t.length===0?[]:[{key:"Kwality",name:"Kwality"},{key:"Supreme",name:"Supreme"},{key:"Kenkere",name:"Kenkere"}].map(d=>{const Q=t.filter(_=>_.location?.includes(d.key)).length;return{location:d.name,label:"Filtered Cancellations",value:F(Q)}}),[t]);c.useEffect(()=>{g(u,"Loading late cancellations data...")},[u,g]);const T=e.jsx(me,{lateCancellationsData:t,defaultFileName:`late-cancellations-${h}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(E,{title:"Late Cancellations",subtitle:"Comprehensive analysis of late cancellation patterns across locations, classes, trainers, and products",variant:"cancellations",metrics:L,exportButton:T}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsxs(le,{value:h,onValueChange:o,className:"w-full mb-8",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsx(ce,{className:"bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border-0 grid w-full max-w-4xl min-h-16 overflow-hidden",style:{gridTemplateColumns:`repeat(${H.length}, 1fr)`},children:H.map(l=>e.jsx(de,{value:l.id,className:"relative px-4 py-3 font-semibold text-gray-800 transition-all duration-300 ease-out hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50 text-sm rounded-xl",children:l.name},l.id))})}),H.map(l=>e.jsx(ue,{value:l.id,className:"space-y-8",children:e.jsxs("div",{className:"space-y-8",children:[e.jsx(je,{selectedLocation:"all",onLocationChange:()=>{},selectedTimeframe:w,onTimeframeChange:m,selectedTrainer:b,onTrainerChange:v,selectedClass:x,onClassChange:N,selectedProduct:i,onProductChange:r,selectedTimeSlot:D,onTimeSlotChange:M,dateRange:k,onDateRangeChange:B,data:a,onClearFilters:s}),e.jsx(Ne,{data:t,onMetricClick:p}),e.jsx(ke,{data:j}),e.jsx(Ce,{data:t}),e.jsx(Se,{data:t,onDrillDown:p})]})},l.id))]})})}),e.jsx(De,{isOpen:n,onClose:()=>C(!1),data:V}),e.jsx(K,{})]})},Gt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"})),Y=[{key:"sales",title:"Sales Analytics",subtitle:"Comprehensive sales performance insights with advanced metrics and forecasting"},{key:"client",title:"Client Management",subtitle:"Track client engagement, retention rates, and conversion analytics in real-time"},{key:"trainer",title:"Trainer Performance",subtitle:"Monitor trainer effectiveness, client satisfaction, and performance metrics"},{key:"sessions",title:"Session Analytics",subtitle:"Detailed session attendance, booking patterns, and utilization insights"},{key:"discounts",title:"Promotions Hub",subtitle:"Analyze discount effectiveness, promotional campaigns, and pricing strategies"},{key:"funnel",title:"Leads & Funnel",subtitle:"Conversion funnel analysis, lead tracking, and sales pipeline optimization"},{key:"attendance",title:"Class Attendance",subtitle:"Real-time attendance tracking, capacity utilization, and engagement metrics"},{key:"powercycle",title:"Power Cycle vs Barre",subtitle:"Comparative analysis between class formats and performance insights"},{key:"expiration",title:"Membership Expiration",subtitle:"Track membership lifecycles, renewal rates, and retention strategies"},{key:"cancellations",title:"Late Cancellations",subtitle:"Monitor cancellation patterns, policy compliance, and revenue impact"},{key:"summary",title:"Executive Summary",subtitle:"High-level overview of all key performance indicators and business metrics"}];function Nt(){const[a,u]=c.useState(0),y=()=>{};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[e.jsx(E,{title:Y[a].title,subtitle:Y[a].subtitle,variant:Y[a].key,onExport:y}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsx($,{className:"glass-card",children:e.jsxs(z,{className:"p-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",children:"Hero Section Variants"}),e.jsx("p",{className:"text-center text-muted-foreground mb-8",children:"Switch between different variants to see unique gradients and animated icons"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:Y.map((g,h)=>e.jsx(I,{variant:a===h?"default":"outline",onClick:()=>u(h),className:`text-sm font-medium transition-all duration-300 ${a===h?"bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70":"hover:bg-muted/50"}`,children:g.title},g.key))}),e.jsxs("div",{className:"mt-8 p-4 bg-muted/30 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold mb-2",children:["Current Variant: ",Y[a].key]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Each variant features unique dark gradients, themed floating icons, and smooth animations. The corner buttons provide navigation and export functionality."})]})]})})})]})}const Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),kt=()=>{const a=ye();return c.useEffect(()=>{},[a.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},Wt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"}));export{Yt as C,It as D,Ot as E,Rt as F,Ut as H,Ft as I,Gt as L,Wt as N,qt as P,Vt as S,$t as T,zt as a,Qt as b,Xt as c};
