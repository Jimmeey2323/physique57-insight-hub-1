import{x as B,r as d,j as e,ac as ge,y as re,U as T,T as q,h as Z,z as be,b as ye,C as ve,R as X,ap as we}from"./react-vendor-CYideCN0.js";import{W as je,C as F,c as O,d as R,ae as L,r as ie,s as oe,t as le,u as ce,X as te,a8 as K,af as de}from"./ui-components-Cek3D08m.js";import{c as Ne,d as U,e as ke,f as Ce,g as Se,h as De,i as Le,j as Me,k as Te}from"./dashboard-misc-D1HwnLCW.js";import{n as me,e as E,k as Ke,j as He,o as V,g as Pe,p as Ae,b as A,d as ue,u as fe,c as Be,f as ee,i as _e,q as Fe,r as Oe}from"./utils-Bswz-ULp.js";import{G as xe,E as Ee}from"./dashboard-executive-DB_K8f8E.js";import{a as Re}from"./dashboard-sales-Dn9BVdD4.js";import{F as Ve,a as Ye,b as $e,E as ze,c as Ie,d as Qe,e as qe,f as Xe,g as Ge}from"./dashboard-funnel-fINj9L7A.js";import{c as G,S as ae,U as Ue,a as We}from"./dashboard-classes-DkM9eh--.js";import{E as Ze,C as Je,a as et,b as tt,c as at,d as nt,e as st,f as rt,g as it,h as ot,i as lt}from"./dashboard-clients-w6oH9yQt.js";import{E as ct}from"./dashboard-trainers-BqTosOpB.js";import{M as dt,a as mt}from"./dashboard-discounts-DNi2OTTh.js";import{a as ut}from"./dashboard-formats-CxkHsLgb.js";const J=d.memo(({title:a,subtitle:u})=>e.jsxs("div",{className:`${E.card.background} backdrop-blur-sm rounded-xl px-6 py-4 ${E.card.shadow} border border-slate-200/50 transform hover:scale-105 transition-all duration-300`,children:[e.jsx("div",{className:"text-2xl font-bold text-slate-900",children:a}),e.jsx("div",{className:"text-xs text-slate-600 font-medium",children:u})]})),ft=()=>{const a=B(),{loading:u,error:h,refetch:x}=me(),o=d.useCallback(n=>{n==="class-performance-series"?window.open("https://class-performance-series-001.vercel.app/","_blank"):a(n==="late-cancellations"?"/late-cancellations":`/${n}`)},[a]),j=d.useCallback(()=>{x()},[x]);return u?e.jsx("div",{className:"min-h-screen bg-white relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-8 py-8",children:e.jsx(je,{type:"full-page"})})}):h?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-4",children:e.jsx(F,{className:`p-12 ${E.card.background} backdrop-blur-sm ${E.card.shadow} ${E.card.border} rounded-2xl max-w-lg`,children:e.jsxs(O,{className:"text-center space-y-6",children:[e.jsx(ge,{className:"w-16 h-16 text-red-500 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xl font-semibold text-slate-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2",children:h})]}),e.jsxs(R,{onClick:j,className:"gap-2 bg-slate-800 hover:bg-slate-900 text-white",children:[e.jsx(re,{className:"w-4 h-4"}),"Retry Connection"]})]})})}):e.jsxs("div",{className:"min-h-screen bg-white relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-rose-50/20 via-purple-50/10 to-pink-50/20"})}),e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"container mx-auto px-6 py-8",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center mb-4",children:e.jsx("div",{className:"bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 text-sm font-medium shadow-lg tracking-wide min-w-full w-full fixed top-0 left-0 z-50 rounded-none",children:"Business Intelligence Dashboard"})}),e.jsxs("h1",{className:"text-4xl md:text-xl font-light text-slate-900 mb-2 tracking-tight font-serif text-center mb-4",children:[e.jsx("span",{className:"font-extralight text-8xl",children:"Physique"})," ",e.jsx("span",{className:"font-bold animate-color-cycle text-9xl",children:"57"}),e.jsx("span",{className:"text-slate-600 font-light text-7xl",children:", India"})]}),e.jsx("p",{className:"text-lg text-slate-600 font-light mb-6 max-w-3xl mx-auto leading-relaxed mt-8",children:"Advanced Business Analytics"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[e.jsx(J,{title:"Real-time",subtitle:"Data Insights"}),e.jsx(J,{title:"10+",subtitle:"Analytics Modules"}),e.jsx(J,{title:"Precision",subtitle:"Data Accuracy"})]}),e.jsx("div",{className:"w-16 h-px bg-slate-300 mx-auto mb-4"})]}),e.jsx("main",{className:"max-w-7xl mx-auto",children:e.jsx("div",{className:"min-w-full ",children:e.jsx(Ne,{onButtonClick:o})})})]})}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},Rt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),xt=()=>e.jsx(xe,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(Ee,{}),e.jsx(L,{})]})}),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),pt=()=>{const{data:a}=me();return e.jsx(xe,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(Re,{data:a}),e.jsx(L,{})]})})},Yt=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));function ht(){const{data:a,loading:u,error:h}=Ke(),x=B(),[o,j]=d.useState("all"),[n,w]=d.useState(!0),[g,b]=d.useState({isOpen:!1,title:"",data:[],type:""}),r=()=>{const t=new Date,f=new Date(t.getFullYear(),t.getMonth()-1,1),k=new Date(t.getFullYear(),t.getMonth(),0),C=v=>{const M=v.getFullYear(),Y=String(v.getMonth()+1).padStart(2,"0"),W=String(v.getDate()).padStart(2,"0");return`${M}-${Y}-${W}`};return{start:C(f),end:C(k)}},[i,N]=d.useState(()=>({dateRange:r(),location:[],source:[],stage:[],status:[],associate:[],channel:[],trialStatus:[],conversionStatus:[],retentionStatus:[],minLTV:void 0,maxLTV:void 0})),S=d.useMemo(()=>[{id:"all",name:"All Locations",fullName:"All Locations"},{id:"kwality",name:"Kwality House",fullName:"Kwality House, Kemps Corner"},{id:"supreme",name:"Supreme HQ",fullName:"Supreme HQ, Bandra"},{id:"kenkere",name:"Kenkere House",fullName:"Kenkere House"}],[]),y=d.useMemo(()=>!a||o==="all"?a||[]:a.filter(t=>{const f=t.center?.toLowerCase()||"";switch(o){case"kwality":return f.includes("kwality")||f.includes("kemps");case"supreme":return f.includes("supreme")||f.includes("bandra");case"kenkere":return f.includes("kenkere");default:return!0}}),[a,o]),p=d.useMemo(()=>y?y.filter(t=>{if(i.dateRange.start||i.dateRange.end){const f=new Date(t.createdAt);if(i.dateRange.start&&f<new Date(i.dateRange.start)||i.dateRange.end&&f>new Date(i.dateRange.end))return!1}return!(i.location.length>0&&!i.location.some(f=>t.center?.toLowerCase().includes(f.toLowerCase()))||i.source.length>0&&!i.source.includes(t.source)||i.stage.length>0&&!i.stage.includes(t.stage)||i.status.length>0&&!i.status.includes(t.status)||i.associate.length>0&&!i.associate.includes(t.associate)||i.channel.length>0&&!i.channel.includes(t.channel)||i.trialStatus.length>0&&!i.trialStatus.includes(t.trialStatus)||i.conversionStatus.length>0&&!i.conversionStatus.includes(t.conversionStatus)||i.retentionStatus.length>0&&!i.retentionStatus.includes(t.retentionStatus)||i.minLTV&&t.ltv<i.minLTV||i.maxLTV&&t.ltv>i.maxLTV)}):[],[y,i]),D=d.useMemo(()=>a?{locations:[...new Set(a.map(t=>t.center).filter(Boolean))],sources:[...new Set(a.map(t=>t.source).filter(Boolean))],stages:[...new Set(a.map(t=>t.stage).filter(Boolean))],statuses:[...new Set(a.map(t=>t.status).filter(Boolean))],associates:[...new Set(a.map(t=>t.associate).filter(Boolean))],channels:[...new Set(a.map(t=>t.channel).filter(Boolean))],trialStatuses:[...new Set(a.map(t=>t.trialStatus).filter(Boolean))],conversionStatuses:[...new Set(a.map(t=>t.conversionStatus).filter(Boolean))],retentionStatuses:[...new Set(a.map(t=>t.retentionStatus).filter(Boolean))]}:{locations:[],sources:[],stages:[],statuses:[],associates:[],channels:[],trialStatuses:[],conversionStatuses:[],retentionStatuses:[]},[a]),H=t=>{N(t)},s=(t,f,k)=>{b({isOpen:!0,title:t,data:f,type:k})};return u?e.jsx("div",{className:"min-h-screen bg-gray-50/30 flex items-center justify-center"}):h?e.jsx("div",{className:"min-h-screen bg-gray-50/30 flex items-center justify-center p-4",children:e.jsx(F,{className:"p-8 bg-white shadow-lg max-w-md",children:e.jsxs(O,{className:"text-center space-y-4",children:[e.jsx(re,{className:"w-12 h-12 text-red-600 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold text-gray-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:h?.toString()})]})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20",children:[e.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30"}),e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-12 left-12 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"0s"},children:e.jsx(T,{className:"w-8 h-8 text-yellow-300/80 neon-glow"})}),e.jsx("div",{className:"absolute top-32 right-20 animate-float animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2s"},children:e.jsx(T,{className:"w-6 h-6 text-amber-200/70 neon-glow"})}),e.jsx("div",{className:"absolute bottom-24 left-32 animate-float animate-pulse-neon",style:{animationDuration:"7s",animationDelay:"1s"},children:e.jsx(T,{className:"w-10 h-10 text-yellow-400/60 neon-glow"})}),e.jsx("div",{className:"absolute top-20 left-1/3 animate-bounce animate-pulse-neon",style:{animationDuration:"4s",animationDelay:"1s"},children:e.jsx(q,{className:"w-12 h-12 text-orange-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-32 right-32 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"3s"},children:e.jsx(q,{className:"w-8 h-8 text-yellow-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-28 right-12 animate-pulse animate-pulse-neon",style:{animationDuration:"3s"},children:e.jsx(Z,{className:"w-10 h-10 text-emerald-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-16 left-16 animate-bounce animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2.5s"},children:e.jsx(Z,{className:"w-6 h-6 text-green-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-16 right-1/3 animate-float animate-pulse-neon",style:{animationDuration:"4.5s",animationDelay:"0.5s"},children:e.jsx(T,{className:"w-7 h-7 text-orange-200/60 neon-glow"})}),e.jsx("div",{className:"absolute bottom-40 left-1/4 animate-pulse animate-pulse-neon",style:{animationDuration:"3.5s",animationDelay:"1.5s"},children:e.jsx(q,{className:"w-9 h-9 text-yellow-300/70 neon-glow"})}),e.jsx("div",{className:"absolute top-2/3 right-1/4 animate-float animate-pulse-neon",style:{animationDuration:"5.5s",animationDelay:"2.8s"},children:e.jsx(Z,{className:"w-8 h-8 text-amber-300/60 neon-glow"})}),e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse",style:{animationDuration:"8s"}}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-600/25 to-red-700/15 rounded-full blur-3xl animate-pulse",style:{animationDuration:"10s",animationDelay:"3s"}})]}),e.jsx("div",{className:"relative px-8 py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-8",children:e.jsxs(R,{onClick:()=>x("/"),variant:"outline",size:"sm",className:"gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200",children:[e.jsx(be,{className:"w-4 h-4"}),"Dashboard"]})}),e.jsxs("div",{className:"text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 animate-fade-in-up",children:[e.jsx(q,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Lead Funnel Analysis"})]}),e.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up delay-200",children:"Funnel & Leads"}),e.jsx("p",{className:"text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300",children:"Comprehensive lead funnel analysis and conversion tracking"}),e.jsxs("div",{className:"flex items-center justify-center gap-8 mt-8 animate-fade-in-up delay-500",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:p.length.toLocaleString()}),e.jsx("div",{className:"text-sm text-blue-200",children:"Total Leads"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:p.filter(t=>t.conversionStatus==="Converted").length}),e.jsx("div",{className:"text-sm text-blue-200",children:"Converted"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-3xl font-bold text-white",children:[(p.filter(t=>t.conversionStatus==="Converted").length/p.length*100).toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-blue-200",children:"Conversion Rate"})]})]})]})]})})]}),e.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 space-y-8",children:e.jsx(F,{className:"bg-white/80 backdrop-blur-sm shadow-xl border-0 overflow-hidden",children:e.jsx(O,{className:"p-2",children:e.jsxs(ie,{value:o,onValueChange:j,className:"w-full",children:[e.jsx(oe,{className:"grid w-full grid-cols-4 bg-gradient-to-r from-slate-100 to-slate-200 p-2 rounded-2xl h-auto gap-2",children:S.map(t=>e.jsx(le,{value:t.id,className:"rounded-xl px-6 py-4 font-semibold text-sm transition-all duration-300",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:t.name}),e.jsx("div",{className:"text-xs opacity-75",children:t.fullName})]})},t.id))}),S.map(t=>e.jsxs(ce,{value:t.id,className:"space-y-8 mt-8",children:[e.jsx(F,{className:"bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 w-full",children:e.jsxs(O,{className:"p-6 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Advanced Filters"}),e.jsxs(R,{variant:"ghost",size:"sm",onClick:()=>w(!n),className:"gap-2",children:[n?e.jsx(ye,{className:"w-4 h-4"}):e.jsx(ve,{className:"w-4 h-4"}),n?"Show Filters":"Hide Filters"]})]}),!n&&e.jsx("div",{className:"w-full",children:e.jsx(Ve,{filters:i,onFiltersChange:H,uniqueValues:D})})]})}),e.jsx(Ye,{data:p,onCardClick:s}),e.jsx($e,{data:p}),e.jsx(ze,{data:p}),e.jsx(Ie,{data:p,onDrillDown:s}),e.jsx(Qe,{data:y}),e.jsx(qe,{allData:y,onDrillDown:s}),e.jsx(Xe,{data:p})]},t.id))]})})})}),e.jsx(Ge,{isOpen:g.isOpen,onClose:()=>b(t=>({...t,isOpen:!1})),title:g.title,data:g.data,type:g.type}),e.jsx("style",{children:`
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
      `})]})}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),gt=()=>{const{data:a,loading:u}=He(),{isLoading:h,setLoading:x}=V();B();const[o,j]=d.useState("All Locations"),[n,w]=d.useState("monthonmonthbytype"),[g,b]=d.useState({isOpen:!1,client:null,title:"",data:null,type:"month"}),[r,i]=d.useState(()=>({dateRange:Pe(),location:[],homeLocation:[],trainer:[],paymentMethod:[],retentionStatus:[],conversionStatus:[],isNew:[],minLTV:void 0,maxLTV:void 0}));d.useEffect(()=>{x(u,"Analyzing client conversion and retention patterns...")},[u,x]);const N=X.useMemo(()=>{const s=["Kwality House, Kemps Corner","Supreme HQ, Bandra","Kenkere House, Bengaluru"],t=new Set;return a.forEach(f=>{f.firstVisitLocation&&s.includes(f.firstVisitLocation)&&t.add(f.firstVisitLocation),f.homeLocation&&s.includes(f.homeLocation)&&t.add(f.homeLocation)}),Array.from(t).filter(Boolean)},[a]),S=X.useMemo(()=>{const s=new Set;return a.forEach(t=>{t.trainerName&&s.add(t.trainerName)}),Array.from(s).filter(Boolean)},[a]),y=X.useMemo(()=>{const s=new Set;return a.forEach(t=>{t.membershipUsed&&s.add(t.membershipUsed)}),Array.from(s).filter(Boolean)},[a]),p=X.useMemo(()=>{let s=a;if(a.length>0,r.dateRange.start&&r.dateRange.end){const t=r.dateRange.start?new Date(r.dateRange.start+"T00:00:00"):null,f=r.dateRange.end?new Date(r.dateRange.end+"T23:59:59"):null;s=s.filter(k=>{if(!k.firstVisitDate)return!1;const C=Ae(k.firstVisitDate);return C?(C.setHours(0,0,0,0),(!t||C>=t)&&(!f||C<=f)):!1})}return o!=="All Locations"&&(s.length,o==="Kenkere House, Bengaluru"&&([...new Set(s.map(t=>t.firstVisitLocation).filter(Boolean))],[...new Set(s.map(t=>t.homeLocation).filter(Boolean))]),s=s.filter(t=>{const f=t.firstVisitLocation||"",k=t.homeLocation||"";if(o==="Kenkere House, Bengaluru"){const C=f.toLowerCase().includes("kenkere")||f.toLowerCase().includes("bengaluru")||f==="Kenkere House",v=k.toLowerCase().includes("kenkere")||k.toLowerCase().includes("bengaluru")||k==="Kenkere House";return C||v}return f===o||k===o})),r.location.length>0&&(s=s.filter(t=>r.location.includes(t.firstVisitLocation||"")||r.location.includes(t.homeLocation||""))),r.trainer.length>0&&(s=s.filter(t=>r.trainer.includes(t.trainerName||""))),r.conversionStatus.length>0&&(s=s.filter(t=>r.conversionStatus.includes(t.conversionStatus||""))),r.retentionStatus.length>0&&(s=s.filter(t=>r.retentionStatus.includes(t.retentionStatus||""))),r.paymentMethod.length>0&&(s=s.filter(t=>r.paymentMethod.includes(t.paymentMethod||""))),r.isNew.length>0&&(s=s.filter(t=>r.isNew.includes(t.isNew||""))),r.minLTV!==void 0&&(s=s.filter(t=>(t.ltv||0)>=r.minLTV)),r.maxLTV!==void 0&&(s=s.filter(t=>(t.ltv||0)<=r.maxLTV)),s},[a,o,r]),D=d.useMemo(()=>!p||p.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House, Bengaluru",name:"Kenkere"}].map(t=>{const k=p.filter(C=>{const v=C.firstVisitLocation||"",M=C.homeLocation||"";return t.key==="Kenkere House, Bengaluru"?v.toLowerCase().includes("kenkere")||v.toLowerCase().includes("bengaluru")||v==="Kenkere House"||M.toLowerCase().includes("kenkere")||M.toLowerCase().includes("bengaluru")||M==="Kenkere House":v===t.key||M===t.key}).length;return{location:t.name,label:"Filtered Clients",value:A(k)}}),[p]);if(h)return e.jsx(U,{variant:"conversion",subtitle:"Analyzing client conversion and retention patterns..."});const H=e.jsx(te,{newClientData:p,defaultFileName:`client-conversion-${o.replace(/\s+/g,"-").toLowerCase()}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[e.jsx("div",{className:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",children:e.jsx(K,{title:"Client Conversion & Retention",subtitle:"Comprehensive client acquisition and retention analysis across all customer touchpoints",variant:"client",metrics:D,exportButton:H})}),e.jsxs("div",{className:"container mx-auto px-6 py-8 bg-white min-h-screen",children:[e.jsxs("main",{className:"space-y-8",children:[e.jsx(Ze,{filters:r,onFiltersChange:i,locations:N,trainers:S,membershipTypes:y}),e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("div",{className:"bg-white/20 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/30 grid grid-cols-4 w-full max-w-4xl",children:[e.jsxs("button",{onClick:()=>j("All Locations"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",o==="All Locations"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(T,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"All Locations"}),e.jsxs("div",{className:"text-xs opacity-80",children:["(",a.length,")"]})]})]}),e.jsxs("button",{onClick:()=>j("Kwality House, Kemps Corner"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",o==="Kwality House, Kemps Corner"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(T,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kwality House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Kemps Corner (",a.filter(s=>s.firstVisitLocation==="Kwality House, Kemps Corner"||s.homeLocation==="Kwality House, Kemps Corner").length,")"]})]})]}),e.jsxs("button",{onClick:()=>j("Supreme HQ, Bandra"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",o==="Supreme HQ, Bandra"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(T,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Supreme HQ"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bandra (",a.filter(s=>s.firstVisitLocation==="Supreme HQ, Bandra"||s.homeLocation==="Supreme HQ, Bandra").length,")"]})]})]}),e.jsxs("button",{onClick:()=>j("Kenkere House, Bengaluru"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",o==="Kenkere House"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(T,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kenkere House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bengaluru (",a.filter(s=>{const t=(s.firstVisitLocation||"").toLowerCase(),f=(s.homeLocation||"").toLowerCase();return t.includes("kenkere")||f.includes("kenkere")||t.includes("bengaluru")||f.includes("bengaluru")||s.firstVisitLocation==="Kenkere House"||s.homeLocation==="Kenkere House"}).length,")"]})]})]})]})}),e.jsx(Je,{data:p,onCardClick:(s,t,f)=>b({isOpen:!0,client:null,title:`${s} - Detailed Analysis`,data:{clients:t,metricType:f},type:"metric"})}),e.jsx(et,{data:p}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"bg-white rounded-lg border",children:e.jsxs("details",{className:"group",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-semibold text-slate-800 border-b group-open:bg-gray-50",children:"📊 Interactive Charts & Visualizations"}),e.jsx("div",{className:"p-4",children:e.jsx(tt,{data:p})})]})})}),e.jsx(at,{activeTable:n,onTableChange:w,dataLength:p.length}),e.jsxs("div",{className:"space-y-8",children:[n==="monthonmonthbytype"&&e.jsx(nt,{data:p,onRowClick:s=>b({isOpen:!0,client:null,title:`${s.month} - ${s.type} Analysis`,data:s,type:"month"})}),n==="monthonmonth"&&e.jsx(st,{data:a,onRowClick:s=>b({isOpen:!0,client:null,title:`${s.month} Analysis`,data:s,type:"month"})}),n==="yearonyear"&&e.jsx(rt,{data:a,onRowClick:s=>b({isOpen:!0,client:null,title:`${s.month} Year Comparison`,data:s,type:"year"})}),n==="hostedclasses"&&e.jsx(it,{data:p,onRowClick:s=>b({isOpen:!0,client:null,title:`${s.className} - ${s.month}`,data:s,type:"class"})}),n==="memberships"&&e.jsx(ot,{data:p})]})]}),e.jsx(lt,{isOpen:g.isOpen,onClose:()=>b({isOpen:!1,client:null,title:"",data:null,type:"month"}),title:g.title,data:g.data,type:g.type})]}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},zt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),bt=()=>{const{data:a,isLoading:u}=ue(),{isLoading:h,setLoading:x}=V();d.useEffect(()=>{x(u,"Analyzing trainer performance metrics and insights...")},[u,x]);const o=d.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(n=>{const g=a.filter(b=>n.key==="Kenkere House"?b.location?.includes("Kenkere")||b.location==="Kenkere House":b.location===n.key).reduce((b,r)=>b+(r.cycleSessions||0),0);return{location:n.name,label:"Total Sessions",value:g.toString()}}),[a]);return h?e.jsx(U,{variant:"analytics",subtitle:"Analyzing trainer performance metrics and insights..."}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20",children:[e.jsx(K,{title:"Trainer Performance Analytics",subtitle:"Comprehensive trainer performance metrics, insights, and development opportunities",variant:"trainer",metrics:o,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ct,{})})}),e.jsx(L,{})]})},It=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),yt=()=>{const{data:a}=fe(),u=Be(a||[]),h=d.useMemo(()=>{if(!u||u.length===0)return[];const x=u.length,o=u.reduce((r,i)=>r+(i.checkedInCount||0),0);u.reduce((r,i)=>r+(i.capacity||0),0);const j=u.reduce((r,i)=>r+(i.totalPaid||0),0),n=x>0?o/x:0,w=[...new Set(u.map(r=>r.location))].filter(Boolean),g=[...new Set(u.map(r=>r.cleanedClass))].filter(Boolean),b=[...new Set(u.map(r=>r.trainerName))].filter(Boolean);return[{location:"Sessions",label:"Total Sessions",value:A(x),subValue:`${g.length} classes`},{location:"Attendance",label:"Total Attendance",value:A(o),subValue:`${A(n)} avg/class`},{location:"Revenue",label:"Earned Revenue",value:ee(j),subValue:`${ee(j/x)} avg/session`},{location:"Coverage",label:"Locations & Trainers",value:`${w.length} locations`,subValue:`${b.length} trainers`}]},[u]);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(K,{title:"Class Attendance Analytics",subtitle:"Comprehensive class utilization and attendance trend analysis across all sessions",variant:"attendance",metrics:h,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx(Ue,{})}),e.jsx(L,{})]})},vt=()=>e.jsx(ae,{children:e.jsx(yt,{})}),Qt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),wt=()=>{B();const{setLoading:a}=V(),{data:u,loading:h,error:x}=_e(),o=d.useMemo(()=>u?u.map(n=>{const w=S=>{if(S==null||S==="")return 0;const y=S.toString().replace(/[₹,\s]/g,""),p=parseFloat(y);return isNaN(p)?0:p},g=w(n.discountAmount||n["Discount Amount -Mrp- Payment Value"]||0),b=w(n.discountPercentage||n["Discount Percentage - discount amount/mrp*100"]||0),r=w(n.paymentValue||n["Payment Value"]||0),i=w(n.mrpPreTax||n["Mrp - Pre Tax"]||0),N=w(n.mrpPostTax||n["Mrp - Post Tax"]||0);return{...n,memberId:n.memberId||n["Member ID"]?.toString()||"",customerName:n.customerName||n["Customer Name"]||"",customerEmail:n.customerEmail||n["Customer Email"]||"",paymentDate:n.paymentDate||n["Payment Date"]||"",paymentValue:r,paymentMethod:n.paymentMethod||n["Payment Method"]||"",calculatedLocation:n.calculatedLocation||n["Calculated Location"]||"",cleanedProduct:n.cleanedProduct||n["Cleaned Product"]||"",cleanedCategory:n.cleanedCategory||n["Cleaned Category"]||"",soldBy:n.soldBy==="-"?"Online/System":n.soldBy||n["Sold By"]||"Unknown",discountAmount:g,discountPercentage:b,mrpPreTax:i,mrpPostTax:N,hasDiscount:g>0||b>0}}):[],[u]);if(d.useMemo(()=>{if(!o||o.length===0)return[];const n=new Date,w=new Date(n.getFullYear(),n.getMonth()-1,1),g=new Date(n.getFullYear(),n.getMonth(),0),b=o.filter(i=>{if(!i.paymentDate)return!1;const N=new Date(i.paymentDate);return N>=w&&N<=g});return[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(i=>{const S=b.filter(y=>i.key==="Kenkere House"?y.calculatedLocation?.includes("Kenkere")||y.calculatedLocation==="Kenkere House":y.calculatedLocation===i.key).reduce((y,p)=>y+(p.discountAmount||0),0);return{location:i.name,label:"Previous Month Discounts",value:ee(S)}})},[o]),d.useEffect(()=>{a(h,"Loading discount and promotional analysis...")},[h,a]),h)return e.jsx(de,{subtitle:"Loading discount and promotional analysis..."});if(x)return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Connection Error"}),e.jsx("p",{className:"text-gray-600 mb-4",children:x}),e.jsx("button",{onClick:()=>window.location.reload(),className:"bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700",children:"Retry Loading"})]})})});const j=e.jsx(te,{discountData:o,defaultFileName:"discounts-promotions-export",size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:[e.jsx(dt,{children:j}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(mt,{data:o})})}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},qt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),jt=()=>{const{data:a}=fe(),u=d.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(x=>{const j=a.filter(n=>x.key==="Kenkere House"?n.location?.includes("Kenkere")||n.location==="Kenkere House":n.location===x.key).reduce((n,w)=>n+(w.checkedInCount||0),0);return{location:x.name,label:"Total Check-ins",value:A(j)}}),[a]);return e.jsx(ae,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20",children:[e.jsx(K,{title:"Sessions Analytics",subtitle:"Comprehensive analysis of class sessions, attendance patterns, and performance insights",variant:"sessions",metrics:u,onExport:()=>{}}),e.jsx("main",{children:e.jsx(We,{})}),e.jsx(L,{})]})})},Xt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"})),Nt=()=>{const{data:a,isLoading:u}=ue(),{isLoading:h,setLoading:x}=V();return d.useEffect(()=>{u!==void 0&&x(u,"Loading PowerCycle vs Barre vs Strength performance data...")},[u,x]),h?e.jsx(U,{variant:"analytics",subtitle:"Loading PowerCycle vs Barre vs Strength performance data..."}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20",children:[e.jsx(K,{title:"PowerCycle vs Barre vs Strength",subtitle:"Comprehensive analysis of PowerCycle, Barre, and Strength Lab class performance",variant:"powercycle",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ae,{children:e.jsx(ut,{data:a||[]})})})}),e.jsx(L,{})]})},Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),kt=()=>{const{data:a,loading:u,error:h}=Fe();return B(),u?e.jsx(U,{variant:"analytics",subtitle:"Loading expirations and churn data..."}):h?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-4 max-w-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:"Data Access Issue"}),e.jsx("p",{className:"text-slate-600",children:h}),h.includes("Failed to fetch")&&e.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-left",children:[e.jsx("h3",{className:"font-semibold text-amber-800 mb-2",children:"Development Environment Note:"}),e.jsxs("p",{className:"text-sm text-amber-700",children:["This appears to be a CORS/network restriction in the development environment. The integration is correctly configured for the spreadsheet:",e.jsx("br",{}),e.jsx("code",{className:"text-xs bg-amber-100 px-2 py-1 rounded mt-1 inline-block",children:"1rGMDDvvTbZfNg1dueWtRN3LhOgGQOdLg3Fd7Sn1GCZo"}),e.jsx("br",{}),e.jsx("br",{}),"In a production environment with proper CORS configuration, this should work correctly."]})]}),e.jsx(R,{onClick:()=>window.location.reload(),children:"Retry"})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(K,{title:"Expirations & Churn",subtitle:"Comprehensive analysis of membership expirations and customer retention insights",variant:"expiration",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ke,{data:a||[]})})}),e.jsx(L,{})]})},Ut=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Ct=()=>{const{data:a,loading:u}=Oe(),{isLoading:h,setLoading:x}=V();B();const[o,j]=d.useState("all"),[n,w]=d.useState("prev-month"),[g,b]=d.useState("all"),[r,i]=d.useState("all"),[N,S]=d.useState("all"),[y,p]=d.useState("all"),[D,H]=d.useState({start:"",end:""}),[s,t]=d.useState(null),[f,k]=d.useState(!1),C=d.useMemo(()=>{if(!Array.isArray(a))return[];const l=Array.from(new Set(a.map(c=>c?.location).filter(Boolean)));return[{id:"all",name:"All Locations"},{id:"kwality",name:"Kwality House"},{id:"supreme",name:"Supreme HQ"},{id:"kenkere",name:"Kenkere House"}].filter(c=>c.id==="all"||l.some(m=>c.id==="kwality"?m.includes("Kwality"):c.id==="supreme"?m.includes("Supreme"):c.id==="kenkere"?m.includes("Kenkere"):!1))},[a]),v=d.useMemo(()=>{if(!Array.isArray(a))return[];let l=a;if(o!=="all"&&(l=l.filter(c=>{const m=c?.location||"";return o==="kwality"?m.includes("Kwality"):o==="supreme"?m.includes("Supreme"):o==="kenkere"?m.includes("Kenkere"):!0})),g!=="all"&&(l=l.filter(c=>c?.teacherName===g)),r!=="all"&&(l=l.filter(c=>c?.cleanedClass===r)),N!=="all"&&(l=l.filter(c=>c?.cleanedProduct===N)),y!=="all"&&(l=l.filter(c=>{if(!c?.time)return!1;const m=parseInt(c.time.split(":")[0]);switch(y){case"morning":return m>=6&&m<12;case"afternoon":return m>=12&&m<17;case"evening":return m>=17&&m<22;case"late":return m>=22||m<6;default:return!0}})),n!=="all"){const c=new Date;let m=new Date,$=new Date;switch(n){case"1w":m.setDate(c.getDate()-7);break;case"2w":m.setDate(c.getDate()-14);break;case"1m":m.setMonth(c.getMonth()-1);break;case"prev-month":const P=new Date(c.getFullYear(),c.getMonth()-1,1),z=new Date(c.getFullYear(),c.getMonth(),0);return m=P,$=z,l=l.filter(I=>{if(!I?.dateIST)return!1;const Q=new Date(I.dateIST);return Q>=m&&Q<=$}),l;case"3m":m.setMonth(c.getMonth()-3);break;case"6m":m.setMonth(c.getMonth()-6);break;case"1y":m.setFullYear(c.getFullYear()-1);break;case"custom":if(D.start||D.end){const I=D.start?new Date(D.start):new Date("2020-01-01"),Q=D.end?new Date(D.end):c;l=l.filter(ne=>{if(!ne?.dateIST)return!1;const se=new Date(ne.dateIST);return se>=I&&se<=Q})}return l;default:return l}l=l.filter(P=>{if(!P?.dateIST)return!1;const z=new Date(P.dateIST);return z>=m&&z<=c})}return l},[a,o,n,g,r,N,y,D]),M=()=>{w("prev-month"),b("all"),i("all"),S("all"),p("all"),H({start:"",end:""})},Y=l=>{t(l),k(!0)},W=d.useMemo(()=>{if(!Array.isArray(a))return[];let l=a;return o!=="all"&&(l=l.filter(c=>{const m=c?.location||"";return o==="kwality"?m.includes("Kwality"):o==="supreme"?m.includes("Supreme"):o==="kenkere"?m.includes("Kenkere"):!0})),g!=="all"&&(l=l.filter(c=>c?.teacherName===g)),r!=="all"&&(l=l.filter(c=>c?.cleanedClass===r)),N!=="all"&&(l=l.filter(c=>c?.cleanedProduct===N)),y!=="all"&&(l=l.filter(c=>{if(!c?.time)return!1;const m=parseInt(c.time.split(":")[0]);switch(y){case"morning":return m>=6&&m<12;case"afternoon":return m>=12&&m<17;case"evening":return m>=17&&m<22;case"late":return m>=22||m<6;default:return!0}})),l},[a,o,g,r,N,y]),pe=d.useMemo(()=>!v||v.length===0?[]:[{key:"Kwality",name:"Kwality"},{key:"Supreme",name:"Supreme"},{key:"Kenkere",name:"Kenkere"}].map(c=>{const $=v.filter(P=>P.location?.includes(c.key)).length;return{location:c.name,label:"Filtered Cancellations",value:A($)}}),[v]);if(d.useEffect(()=>{x(u,"Loading late cancellations data...")},[u,x]),h)return e.jsx(de,{subtitle:"Loading late cancellations analytics data..."});const he=e.jsx(te,{lateCancellationsData:v,defaultFileName:`late-cancellations-${o}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(K,{title:"Late Cancellations",subtitle:"Comprehensive analysis of late cancellation patterns across locations, classes, trainers, and products",variant:"cancellations",metrics:pe,exportButton:he}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsxs(ie,{value:o,onValueChange:j,className:"w-full mb-8",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsx(oe,{className:"bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border-0 grid w-full max-w-4xl min-h-16 overflow-hidden",style:{gridTemplateColumns:`repeat(${C.length}, 1fr)`},children:C.map(l=>e.jsx(le,{value:l.id,className:"relative px-4 py-3 font-semibold text-gray-800 transition-all duration-300 ease-out hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50 text-sm rounded-xl",children:l.name},l.id))})}),C.map(l=>e.jsx(ce,{value:l.id,className:"space-y-8",children:e.jsxs("div",{className:"space-y-8",children:[e.jsx(Ce,{selectedLocation:"all",onLocationChange:()=>{},selectedTimeframe:n,onTimeframeChange:w,selectedTrainer:g,onTrainerChange:b,selectedClass:r,onClassChange:i,selectedProduct:N,onProductChange:S,selectedTimeSlot:y,onTimeSlotChange:p,dateRange:D,onDateRangeChange:H,data:a,onClearFilters:M}),e.jsx(Se,{data:v,onMetricClick:Y}),e.jsx(De,{data:W}),e.jsx(Le,{data:v}),e.jsx(Me,{data:v,onDrillDown:Y})]})},l.id))]})})}),e.jsx(Te,{isOpen:f,onClose:()=>k(!1),data:s}),e.jsx(L,{})]})},Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"})),_=[{key:"sales",title:"Sales Analytics",subtitle:"Comprehensive sales performance insights with advanced metrics and forecasting"},{key:"client",title:"Client Management",subtitle:"Track client engagement, retention rates, and conversion analytics in real-time"},{key:"trainer",title:"Trainer Performance",subtitle:"Monitor trainer effectiveness, client satisfaction, and performance metrics"},{key:"sessions",title:"Session Analytics",subtitle:"Detailed session attendance, booking patterns, and utilization insights"},{key:"discounts",title:"Promotions Hub",subtitle:"Analyze discount effectiveness, promotional campaigns, and pricing strategies"},{key:"funnel",title:"Leads & Funnel",subtitle:"Conversion funnel analysis, lead tracking, and sales pipeline optimization"},{key:"attendance",title:"Class Attendance",subtitle:"Real-time attendance tracking, capacity utilization, and engagement metrics"},{key:"powercycle",title:"Power Cycle vs Barre",subtitle:"Comparative analysis between class formats and performance insights"},{key:"expiration",title:"Membership Expiration",subtitle:"Track membership lifecycles, renewal rates, and retention strategies"},{key:"cancellations",title:"Late Cancellations",subtitle:"Monitor cancellation patterns, policy compliance, and revenue impact"},{key:"summary",title:"Executive Summary",subtitle:"High-level overview of all key performance indicators and business metrics"}];function St(){const[a,u]=d.useState(0),h=()=>{};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[e.jsx(K,{title:_[a].title,subtitle:_[a].subtitle,variant:_[a].key,onExport:h}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsx(F,{className:"glass-card",children:e.jsxs(O,{className:"p-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",children:"Hero Section Variants"}),e.jsx("p",{className:"text-center text-muted-foreground mb-8",children:"Switch between different variants to see unique gradients and animated icons"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:_.map((x,o)=>e.jsx(R,{variant:a===o?"default":"outline",onClick:()=>u(o),className:`text-sm font-medium transition-all duration-300 ${a===o?"bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70":"hover:bg-muted/50"}`,children:x.title},x.key))}),e.jsxs("div",{className:"mt-8 p-4 bg-muted/30 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold mb-2",children:["Current Variant: ",_[a].key]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Each variant features unique dark gradients, themed floating icons, and smooth animations. The corner buttons provide navigation and export functionality."})]})]})})})]})}const Zt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),Dt=()=>{const a=we();return d.useEffect(()=>{},[a.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));export{zt as C,qt as D,Vt as E,$t as F,Zt as H,Rt as I,Wt as L,Jt as N,Gt as P,Yt as S,It as T,Qt as a,Xt as b,Ut as c};
