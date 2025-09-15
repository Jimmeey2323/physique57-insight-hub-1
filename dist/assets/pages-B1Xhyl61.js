import{x as _,r as c,j as e,ad as pe,y as se,U as K,T as q,h as Z,z as he,b as ge,C as be,R as X,ao as ye}from"./react-vendor-Di6K3Iht.js";import{C as O,c as F,d as V,ab as L,r as re,s as oe,t as ie,u as le,W as ce,a4 as H}from"./ui-components-5QhQq56U.js";import{c as ve,d as we,e as je,f as Ne,g as ke,h as Ce,i as Se,j as De}from"./dashboard-misc-CwOE-gIk.js";import{j as T,s as de,h as R,m as Le,l as Me,g as Te,q as Ke,c as E,e as me,u as ue,d as He,f as ee,k as Pe,t as Ae,v as Ee}from"./utils-pQyXRPC2.js";import{G as fe,E as _e}from"./dashboard-executive-Cq75_o7X.js";import{a as Be}from"./dashboard-sales-BlMKrpbO.js";import{F as Oe,a as Fe,b as Re,E as Ve,c as Ye,d as $e,e as ze,f as Ie,g as Qe}from"./dashboard-funnel-Z4Yi9zKG.js";import{c as G,S as te,U as qe,a as Xe}from"./dashboard-classes-CfAcyr58.js";import{E as Ge,C as Ue,a as We,b as Ze,c as Je,d as et,e as tt,f as at,g as nt,h as st,i as rt}from"./dashboard-clients-CGrDM7KI.js";import{E as ot}from"./dashboard-trainers-CxpAnowu.js";import{D as it,a as lt}from"./dashboard-discounts-Dc5yoikb.js";import"./vendor-BIBqxFVC.js";import{a as ct}from"./dashboard-formats-B45yOpnz.js";const J=c.memo(({title:a,subtitle:u})=>e.jsxs("div",{className:`${R.card.background} backdrop-blur-sm rounded-xl px-6 py-4 ${R.card.shadow} border border-slate-200/50 transform hover:scale-105 transition-all duration-300`,children:[e.jsx("div",{className:"text-2xl font-bold text-slate-900",children:a}),e.jsx("div",{className:"text-xs text-slate-600 font-medium",children:u})]})),dt=()=>{const a=_(),{setLoading:u}=T(),{loading:y,error:x,refetch:l}=de();c.useEffect(()=>{u(y,"Loading dashboard overview...")},[y,u]);const r=c.useCallback(v=>{v==="class-performance-series"?window.open("https://class-performance-series-001.vercel.app/","_blank"):a(v==="late-cancellations"?"/late-cancellations":`/${v}`)},[a]),p=c.useCallback(()=>{l()},[l]);return y?null:x?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-4",children:e.jsx(O,{className:`p-12 ${R.card.background} backdrop-blur-sm ${R.card.shadow} ${R.card.border} rounded-2xl max-w-lg`,children:e.jsxs(F,{className:"text-center space-y-6",children:[e.jsx(pe,{className:"w-16 h-16 text-red-500 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xl font-semibold text-slate-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-slate-600 mt-2",children:x})]}),e.jsxs(V,{onClick:p,className:"gap-2 bg-slate-800 hover:bg-slate-900 text-white",children:[e.jsx(se,{className:"w-4 h-4"}),"Retry Connection"]})]})})}):e.jsxs("div",{className:"min-h-screen bg-white relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-rose-50/20 via-purple-50/10 to-pink-50/20"})}),e.jsx("div",{className:"relative z-10",children:e.jsxs("div",{className:"container mx-auto px-6 py-8",children:[e.jsxs("header",{className:"mb-8 text-center",children:[e.jsx("div",{className:"inline-flex items-center justify-center mb-4",children:e.jsx("div",{className:"bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 py-2 text-sm font-medium shadow-lg tracking-wide min-w-full w-full fixed top-0 left-0 z-50 rounded-none",children:"Business Intelligence Dashboard"})}),e.jsxs("h1",{className:"text-4xl md:text-xl font-light text-slate-900 mb-2 tracking-tight font-serif text-center mb-4",children:[e.jsx("span",{className:"font-extralight text-8xl",children:"Physique"})," ",e.jsx("span",{className:"font-bold animate-color-cycle text-9xl",children:"57"}),e.jsx("span",{className:"text-slate-600 font-light text-7xl",children:", India"})]}),e.jsx("p",{className:"text-lg text-slate-600 font-light mb-6 max-w-3xl mx-auto leading-relaxed mt-8",children:"Advanced Business Analytics"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[e.jsx(J,{title:"Real-time",subtitle:"Data Insights"}),e.jsx(J,{title:"10+",subtitle:"Analytics Modules"}),e.jsx(J,{title:"Precision",subtitle:"Data Accuracy"})]}),e.jsx("div",{className:"w-16 h-px bg-slate-300 mx-auto mb-4"})]}),e.jsx("main",{className:"max-w-7xl mx-auto",children:e.jsx("div",{className:"min-w-full ",children:e.jsx(ve,{onButtonClick:r})})})]})}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},Ot=Object.freeze(Object.defineProperty({__proto__:null,default:dt},Symbol.toStringTag,{value:"Module"})),mt=()=>e.jsx(fe,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(_e,{}),e.jsx(L,{})]})}),Ft=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),ut=()=>{const{data:a}=de();return e.jsx(fe,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(Be,{data:a}),e.jsx(L,{})]})})},Rt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));function ft(){const{data:a,loading:u,error:y}=Le(),{setLoading:x}=T(),l=_();c.useEffect(()=>{x(u,"Loading funnel and lead conversion data...")},[u,x]);const[r,p]=c.useState("all"),[v,h]=c.useState(!0),[g,s]=c.useState({isOpen:!1,title:"",data:[],type:""}),k=()=>{const t=new Date,b=new Date(t.getFullYear(),t.getMonth()-1,1),S=new Date(t.getFullYear(),t.getMonth(),0),N=M=>{const Y=M.getFullYear(),U=String(M.getMonth()+1).padStart(2,"0"),W=String(M.getDate()).padStart(2,"0");return`${Y}-${U}-${W}`};return{start:N(b),end:N(S)}},[i,D]=c.useState(()=>({dateRange:k(),location:[],source:[],stage:[],status:[],associate:[],channel:[],trialStatus:[],conversionStatus:[],retentionStatus:[],minLTV:void 0,maxLTV:void 0})),C=c.useMemo(()=>[{id:"all",name:"All Locations",fullName:"All Locations"},{id:"kwality",name:"Kwality House",fullName:"Kwality House, Kemps Corner"},{id:"supreme",name:"Supreme HQ",fullName:"Supreme HQ, Bandra"},{id:"kenkere",name:"Kenkere House",fullName:"Kenkere House"}],[]),w=c.useMemo(()=>!a||r==="all"?a||[]:a.filter(t=>{const b=t.center?.toLowerCase()||"";switch(r){case"kwality":return b.includes("kwality")||b.includes("kemps");case"supreme":return b.includes("supreme")||b.includes("bandra");case"kenkere":return b.includes("kenkere");default:return!0}}),[a,r]),j=c.useMemo(()=>w?w.filter(t=>{if(i.dateRange.start||i.dateRange.end){const b=new Date(t.createdAt);if(i.dateRange.start&&b<new Date(i.dateRange.start)||i.dateRange.end&&b>new Date(i.dateRange.end))return!1}return!(i.location.length>0&&!i.location.some(b=>t.center?.toLowerCase().includes(b.toLowerCase()))||i.source.length>0&&!i.source.includes(t.source)||i.stage.length>0&&!i.stage.includes(t.stage)||i.status.length>0&&!i.status.includes(t.status)||i.associate.length>0&&!i.associate.includes(t.associate)||i.channel.length>0&&!i.channel.includes(t.channel)||i.trialStatus.length>0&&!i.trialStatus.includes(t.trialStatus)||i.conversionStatus.length>0&&!i.conversionStatus.includes(t.conversionStatus)||i.retentionStatus.length>0&&!i.retentionStatus.includes(t.retentionStatus)||i.minLTV&&t.ltv<i.minLTV||i.maxLTV&&t.ltv>i.maxLTV)}):[],[w,i]),P=c.useMemo(()=>a?{locations:[...new Set(a.map(t=>t.center).filter(Boolean))],sources:[...new Set(a.map(t=>t.source).filter(Boolean))],stages:[...new Set(a.map(t=>t.stage).filter(Boolean))],statuses:[...new Set(a.map(t=>t.status).filter(Boolean))],associates:[...new Set(a.map(t=>t.associate).filter(Boolean))],channels:[...new Set(a.map(t=>t.channel).filter(Boolean))],trialStatuses:[...new Set(a.map(t=>t.trialStatus).filter(Boolean))],conversionStatuses:[...new Set(a.map(t=>t.conversionStatus).filter(Boolean))],retentionStatuses:[...new Set(a.map(t=>t.retentionStatus).filter(Boolean))]}:{locations:[],sources:[],stages:[],statuses:[],associates:[],channels:[],trialStatuses:[],conversionStatuses:[],retentionStatuses:[]},[a]),n=t=>{D(t)},o=(t,b,S)=>{s({isOpen:!0,title:t,data:b,type:S})};return y?e.jsx("div",{className:"min-h-screen bg-gray-50/30 flex items-center justify-center p-4",children:e.jsx(O,{className:"p-8 bg-white shadow-lg max-w-md",children:e.jsxs(F,{className:"text-center space-y-4",children:[e.jsx(se,{className:"w-12 h-12 text-red-600 mx-auto"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold text-gray-800",children:"Connection Error"}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:y?.toString()})]})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20",children:[e.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white",children:[e.jsx("div",{className:"absolute inset-0 bg-black/30"}),e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-12 left-12 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"0s"},children:e.jsx(K,{className:"w-8 h-8 text-yellow-300/80 neon-glow"})}),e.jsx("div",{className:"absolute top-32 right-20 animate-float animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2s"},children:e.jsx(K,{className:"w-6 h-6 text-amber-200/70 neon-glow"})}),e.jsx("div",{className:"absolute bottom-24 left-32 animate-float animate-pulse-neon",style:{animationDuration:"7s",animationDelay:"1s"},children:e.jsx(K,{className:"w-10 h-10 text-yellow-400/60 neon-glow"})}),e.jsx("div",{className:"absolute top-20 left-1/3 animate-bounce animate-pulse-neon",style:{animationDuration:"4s",animationDelay:"1s"},children:e.jsx(q,{className:"w-12 h-12 text-orange-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-32 right-32 animate-float animate-pulse-neon",style:{animationDuration:"6s",animationDelay:"3s"},children:e.jsx(q,{className:"w-8 h-8 text-yellow-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-28 right-12 animate-pulse animate-pulse-neon",style:{animationDuration:"3s"},children:e.jsx(Z,{className:"w-10 h-10 text-emerald-300/80 neon-glow"})}),e.jsx("div",{className:"absolute bottom-16 left-16 animate-bounce animate-pulse-neon",style:{animationDuration:"5s",animationDelay:"2.5s"},children:e.jsx(Z,{className:"w-6 h-6 text-green-200/70 neon-glow"})}),e.jsx("div",{className:"absolute top-16 right-1/3 animate-float animate-pulse-neon",style:{animationDuration:"4.5s",animationDelay:"0.5s"},children:e.jsx(K,{className:"w-7 h-7 text-orange-200/60 neon-glow"})}),e.jsx("div",{className:"absolute bottom-40 left-1/4 animate-pulse animate-pulse-neon",style:{animationDuration:"3.5s",animationDelay:"1.5s"},children:e.jsx(q,{className:"w-9 h-9 text-yellow-300/70 neon-glow"})}),e.jsx("div",{className:"absolute top-2/3 right-1/4 animate-float animate-pulse-neon",style:{animationDuration:"5.5s",animationDelay:"2.8s"},children:e.jsx(Z,{className:"w-8 h-8 text-amber-300/60 neon-glow"})}),e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/30 to-orange-500/20 rounded-full blur-3xl animate-pulse",style:{animationDuration:"8s"}}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-600/25 to-red-700/15 rounded-full blur-3xl animate-pulse",style:{animationDuration:"10s",animationDelay:"3s"}})]}),e.jsx("div",{className:"relative px-8 py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("div",{className:"flex items-center justify-between mb-8",children:e.jsxs(V,{onClick:()=>l("/"),variant:"outline",size:"sm",className:"gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200",children:[e.jsx(he,{className:"w-4 h-4"}),"Dashboard"]})}),e.jsxs("div",{className:"text-center space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 animate-fade-in-up",children:[e.jsx(q,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Lead Funnel Analysis"})]}),e.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up delay-200",children:"Funnel & Leads"}),e.jsx("p",{className:"text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300",children:"Comprehensive lead funnel analysis and conversion tracking"}),e.jsxs("div",{className:"flex items-center justify-center gap-8 mt-8 animate-fade-in-up delay-500",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:j.length.toLocaleString()}),e.jsx("div",{className:"text-sm text-blue-200",children:"Total Leads"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl font-bold text-white",children:j.filter(t=>t.conversionStatus==="Converted").length}),e.jsx("div",{className:"text-sm text-blue-200",children:"Converted"})]}),e.jsx("div",{className:"w-px h-12 bg-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-3xl font-bold text-white",children:[(j.filter(t=>t.conversionStatus==="Converted").length/j.length*100).toFixed(1),"%"]}),e.jsx("div",{className:"text-sm text-blue-200",children:"Conversion Rate"})]})]})]})]})})]}),e.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 space-y-8",children:e.jsx(O,{className:"bg-white/80 backdrop-blur-sm shadow-xl border-0 overflow-hidden",children:e.jsx(F,{className:"p-2",children:e.jsxs(re,{value:r,onValueChange:p,className:"w-full",children:[e.jsx(oe,{className:"grid w-full grid-cols-4 bg-gradient-to-r from-slate-100 to-slate-200 p-2 rounded-2xl h-auto gap-2",children:C.map(t=>e.jsx(ie,{value:t.id,className:"rounded-xl px-6 py-4 font-semibold text-sm transition-all duration-300",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:t.name}),e.jsx("div",{className:"text-xs opacity-75",children:t.fullName})]})},t.id))}),C.map(t=>e.jsxs(le,{value:t.id,className:"space-y-8 mt-8",children:[e.jsx(O,{className:"bg-white/90 backdrop-blur-sm shadow-sm border border-gray-200 w-full",children:e.jsxs(F,{className:"p-6 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Advanced Filters"}),e.jsxs(V,{variant:"ghost",size:"sm",onClick:()=>h(!v),className:"gap-2",children:[v?e.jsx(ge,{className:"w-4 h-4"}):e.jsx(be,{className:"w-4 h-4"}),v?"Show Filters":"Hide Filters"]})]}),!v&&e.jsx("div",{className:"w-full",children:e.jsx(Oe,{filters:i,onFiltersChange:n,uniqueValues:P})})]})}),e.jsx(Fe,{data:j,onCardClick:o}),e.jsx(Re,{data:j}),e.jsx(Ve,{data:j}),e.jsx(Ye,{data:j,onDrillDown:o}),e.jsx($e,{data:w}),e.jsx(ze,{allData:w,onDrillDown:o}),e.jsx(Ie,{data:j})]},t.id))]})})})}),e.jsx(Qe,{isOpen:g.isOpen,onClose:()=>s(t=>({...t,isOpen:!1})),title:g.title,data:g.data,type:g.type}),e.jsx("style",{children:`
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
      `})]})}const Vt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),xt=()=>{const{data:a,loading:u}=Me(),{isLoading:y,setLoading:x}=T();_();const[l,r]=c.useState("All Locations"),[p,v]=c.useState("monthonmonthbytype"),[h,g]=c.useState({isOpen:!1,client:null,title:"",data:null,type:"month"}),[s,k]=c.useState(()=>({dateRange:Te(),location:[],homeLocation:[],trainer:[],paymentMethod:[],retentionStatus:[],conversionStatus:[],isNew:[],minLTV:void 0,maxLTV:void 0}));c.useEffect(()=>{x(u,"Analyzing client conversion and retention patterns...")},[u,x]);const i=X.useMemo(()=>{const n=["Kwality House, Kemps Corner","Supreme HQ, Bandra","Kenkere House, Bengaluru"],o=new Set;return a.forEach(t=>{t.firstVisitLocation&&n.includes(t.firstVisitLocation)&&o.add(t.firstVisitLocation),t.homeLocation&&n.includes(t.homeLocation)&&o.add(t.homeLocation)}),Array.from(o).filter(Boolean)},[a]),D=X.useMemo(()=>{const n=new Set;return a.forEach(o=>{o.trainerName&&n.add(o.trainerName)}),Array.from(n).filter(Boolean)},[a]),C=X.useMemo(()=>{const n=new Set;return a.forEach(o=>{o.membershipUsed&&n.add(o.membershipUsed)}),Array.from(n).filter(Boolean)},[a]),w=X.useMemo(()=>{let n=a;if(a.length>0,s.dateRange.start&&s.dateRange.end){const o=s.dateRange.start?new Date(s.dateRange.start+"T00:00:00"):null,t=s.dateRange.end?new Date(s.dateRange.end+"T23:59:59"):null;n=n.filter(b=>{if(!b.firstVisitDate)return!1;const S=Ke(b.firstVisitDate);return S?(S.setHours(0,0,0,0),(!o||S>=o)&&(!t||S<=t)):!1})}return l!=="All Locations"&&(n.length,l==="Kenkere House, Bengaluru"&&([...new Set(n.map(o=>o.firstVisitLocation).filter(Boolean))],[...new Set(n.map(o=>o.homeLocation).filter(Boolean))]),n=n.filter(o=>{const t=o.firstVisitLocation||"",b=o.homeLocation||"";if(l==="Kenkere House, Bengaluru"){const S=t.toLowerCase().includes("kenkere")||t.toLowerCase().includes("bengaluru")||t==="Kenkere House",N=b.toLowerCase().includes("kenkere")||b.toLowerCase().includes("bengaluru")||b==="Kenkere House";return S||N}return t===l||b===l})),s.location.length>0&&(n=n.filter(o=>s.location.includes(o.firstVisitLocation||"")||s.location.includes(o.homeLocation||""))),s.trainer.length>0&&(n=n.filter(o=>s.trainer.includes(o.trainerName||""))),s.conversionStatus.length>0&&(n=n.filter(o=>s.conversionStatus.includes(o.conversionStatus||""))),s.retentionStatus.length>0&&(n=n.filter(o=>s.retentionStatus.includes(o.retentionStatus||""))),s.paymentMethod.length>0&&(n=n.filter(o=>s.paymentMethod.includes(o.paymentMethod||""))),s.isNew.length>0&&(n=n.filter(o=>s.isNew.includes(o.isNew||""))),s.minLTV!==void 0&&(n=n.filter(o=>(o.ltv||0)>=s.minLTV)),s.maxLTV!==void 0&&(n=n.filter(o=>(o.ltv||0)<=s.maxLTV)),n},[a,l,s]),j=c.useMemo(()=>!w||w.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House, Bengaluru",name:"Kenkere"}].map(o=>{const b=w.filter(S=>{const N=S.firstVisitLocation||"",M=S.homeLocation||"";return o.key==="Kenkere House, Bengaluru"?N.toLowerCase().includes("kenkere")||N.toLowerCase().includes("bengaluru")||N==="Kenkere House"||M.toLowerCase().includes("kenkere")||M.toLowerCase().includes("bengaluru")||M==="Kenkere House":N===o.key||M===o.key}).length;return{location:o.name,label:"Filtered Clients",value:E(b)}}),[w]),P=e.jsx(ce,{newClientData:w,defaultFileName:`client-conversion-${l.replace(/\s+/g,"-").toLowerCase()}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[e.jsx("div",{className:"bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white",children:e.jsx(H,{title:"Client Conversion & Retention",subtitle:"Comprehensive client acquisition and retention analysis across all customer touchpoints",variant:"client",metrics:j,exportButton:P})}),e.jsxs("div",{className:"container mx-auto px-6 py-8 bg-white min-h-screen",children:[e.jsxs("main",{className:"space-y-8",children:[e.jsx(Ge,{filters:s,onFiltersChange:k,locations:i,trainers:D,membershipTypes:C}),e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("div",{className:"bg-white/20 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/30 grid grid-cols-4 w-full max-w-4xl",children:[e.jsxs("button",{onClick:()=>r("All Locations"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",l==="All Locations"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(K,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"All Locations"}),e.jsxs("div",{className:"text-xs opacity-80",children:["(",a.length,")"]})]})]}),e.jsxs("button",{onClick:()=>r("Kwality House, Kemps Corner"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",l==="Kwality House, Kemps Corner"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(K,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kwality House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Kemps Corner (",a.filter(n=>n.firstVisitLocation==="Kwality House, Kemps Corner"||n.homeLocation==="Kwality House, Kemps Corner").length,")"]})]})]}),e.jsxs("button",{onClick:()=>r("Supreme HQ, Bandra"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",l==="Supreme HQ, Bandra"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(K,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Supreme HQ"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bandra (",a.filter(n=>n.firstVisitLocation==="Supreme HQ, Bandra"||n.homeLocation==="Supreme HQ, Bandra").length,")"]})]})]}),e.jsxs("button",{onClick:()=>r("Kenkere House, Bengaluru"),className:G("px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex flex-col items-center gap-2",l==="Kenkere House"?"bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg":"text-slate-800 hover:text-slate-700 hover:bg-slate-100/50"),children:[e.jsx(K,{className:"w-6 h-6"}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"font-bold",children:"Kenkere House"}),e.jsxs("div",{className:"text-xs opacity-80",children:["Bengaluru (",a.filter(n=>{const o=(n.firstVisitLocation||"").toLowerCase(),t=(n.homeLocation||"").toLowerCase();return o.includes("kenkere")||t.includes("kenkere")||o.includes("bengaluru")||t.includes("bengaluru")||n.firstVisitLocation==="Kenkere House"||n.homeLocation==="Kenkere House"}).length,")"]})]})]})]})}),e.jsx(Ue,{data:w,onCardClick:(n,o,t)=>g({isOpen:!0,client:null,title:`${n} - Detailed Analysis`,data:{clients:o,metricType:t},type:"metric"})}),e.jsx(We,{data:w}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"bg-white rounded-lg border",children:e.jsxs("details",{className:"group",children:[e.jsx("summary",{className:"cursor-pointer p-4 font-semibold text-slate-800 border-b group-open:bg-gray-50",children:"📊 Interactive Charts & Visualizations"}),e.jsx("div",{className:"p-4",children:e.jsx(Ze,{data:w})})]})})}),e.jsx(Je,{activeTable:p,onTableChange:v,dataLength:w.length}),e.jsxs("div",{className:"space-y-8",children:[p==="monthonmonthbytype"&&e.jsx(et,{data:w,onRowClick:n=>g({isOpen:!0,client:null,title:`${n.month} - ${n.type} Analysis`,data:n,type:"month"})}),p==="monthonmonth"&&e.jsx(tt,{data:a,onRowClick:n=>g({isOpen:!0,client:null,title:`${n.month} Analysis`,data:n,type:"month"})}),p==="yearonyear"&&e.jsx(at,{data:a,onRowClick:n=>g({isOpen:!0,client:null,title:`${n.month} Year Comparison`,data:n,type:"year"})}),p==="hostedclasses"&&e.jsx(nt,{data:w,onRowClick:n=>g({isOpen:!0,client:null,title:`${n.className} - ${n.month}`,data:n,type:"class"})}),p==="memberships"&&e.jsx(st,{data:w})]})]}),e.jsx(rt,{isOpen:h.isOpen,onClose:()=>g({isOpen:!1,client:null,title:"",data:null,type:"month"}),title:h.title,data:h.data,type:h.type})]}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},Yt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"})),pt=()=>{const{data:a,isLoading:u}=me(),{isLoading:y,setLoading:x}=T();c.useEffect(()=>{x(u,"Analyzing trainer performance metrics and insights...")},[u,x]);const l=c.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(p=>{const h=a.filter(g=>p.key==="Kenkere House"?g.location?.includes("Kenkere")||g.location==="Kenkere House":g.location===p.key).reduce((g,s)=>g+(s.cycleSessions||0),0);return{location:p.name,label:"Total Sessions",value:h.toString()}}),[a]);return y?null:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20",children:[e.jsx(H,{title:"Trainer Performance Analytics",subtitle:"Comprehensive trainer performance metrics, insights, and development opportunities",variant:"trainer",metrics:l,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(ot,{})})}),e.jsx(L,{})]})},$t=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"})),ht=()=>{const{data:a}=ue(),u=He(a||[]),y=c.useMemo(()=>{if(!u||u.length===0)return[];const x=u.length,l=u.reduce((s,k)=>s+(k.checkedInCount||0),0);u.reduce((s,k)=>s+(k.capacity||0),0);const r=u.reduce((s,k)=>s+(k.totalPaid||0),0),p=x>0?l/x:0,v=[...new Set(u.map(s=>s.location))].filter(Boolean),h=[...new Set(u.map(s=>s.cleanedClass))].filter(Boolean),g=[...new Set(u.map(s=>s.trainerName))].filter(Boolean);return[{location:"Sessions",label:"Total Sessions",value:E(x),subValue:`${h.length} classes`},{location:"Attendance",label:"Total Attendance",value:E(l),subValue:`${E(p)} avg/class`},{location:"Revenue",label:"Earned Revenue",value:ee(r),subValue:`${ee(r/x)} avg/session`},{location:"Coverage",label:"Locations & Trainers",value:`${v.length} locations`,subValue:`${g.length} trainers`}]},[u]);return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(H,{title:"Class Attendance Analytics",subtitle:"Comprehensive class utilization and attendance trend analysis across all sessions",variant:"attendance",metrics:y,onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx(qe,{})}),e.jsx(L,{})]})},gt=()=>e.jsx(te,{children:e.jsx(ht,{})}),zt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),bt=()=>{_();const{setLoading:a}=T(),{data:u,loading:y,error:x}=Pe(),l=c.useMemo(()=>u?u.map(r=>{const p=i=>{if(i==null||i==="")return 0;const D=i.toString().replace(/[₹,\s]/g,""),C=parseFloat(D);return isNaN(C)?0:C},v=p(r.discountAmount||r["Discount Amount -Mrp- Payment Value"]||0),h=p(r.discountPercentage||r["Discount Percentage - discount amount/mrp*100"]||0),g=p(r.paymentValue||r["Payment Value"]||0),s=p(r.mrpPreTax||r["Mrp - Pre Tax"]||0),k=p(r.mrpPostTax||r["Mrp - Post Tax"]||0);return{...r,memberId:r.memberId||r["Member ID"]?.toString()||"",customerName:r.customerName||r["Customer Name"]||"",customerEmail:r.customerEmail||r["Customer Email"]||"",paymentDate:r.paymentDate||r["Payment Date"]||"",paymentValue:g,paymentMethod:r.paymentMethod||r["Payment Method"]||"",calculatedLocation:r.calculatedLocation||r["Calculated Location"]||"",cleanedProduct:r.cleanedProduct||r["Cleaned Product"]||"",cleanedCategory:r.cleanedCategory||r["Cleaned Category"]||"",soldBy:r.soldBy==="-"?"Online/System":r.soldBy||r["Sold By"]||"Unknown",discountAmount:v,discountPercentage:h,mrpPreTax:s,mrpPostTax:k,hasDiscount:v>0||h>0}}):[],[u]);return c.useMemo(()=>{if(!l||l.length===0)return[];const r=new Date,p=new Date(r.getFullYear(),r.getMonth()-1,1),v=new Date(r.getFullYear(),r.getMonth(),0),h=l.filter(s=>{if(!s.paymentDate)return!1;const k=new Date(s.paymentDate);return k>=p&&k<=v});return[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(s=>{const i=h.filter(D=>s.key==="Kenkere House"?D.calculatedLocation?.includes("Kenkere")||D.calculatedLocation==="Kenkere House":D.calculatedLocation===s.key).reduce((D,C)=>D+(C.discountAmount||0),0);return{location:s.name,label:"Previous Month Discounts",value:ee(i)}})},[l]),c.useEffect(()=>{a(y,"Loading discount and promotional analysis...")},[y,a]),x?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen p-4",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600 mb-4",children:"Connection Error"}),e.jsx("p",{className:"text-gray-600 mb-4",children:x}),e.jsx("button",{onClick:()=>window.location.reload(),className:"bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700",children:"Retry Loading"})]})})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20",children:[e.jsx(it,{data:l}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(lt,{data:l})})}),e.jsx(L,{}),e.jsx("style",{children:`
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
      `})]})},It=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),yt=()=>{const{data:a,loading:u}=ue(),{setLoading:y}=T();c.useEffect(()=>{y(u,"Loading session analytics...")},[u,y]);const x=c.useMemo(()=>!a||a.length===0?[]:[{key:"Kwality House, Kemps Corner",name:"Kwality"},{key:"Supreme HQ, Bandra",name:"Supreme"},{key:"Kenkere House",name:"Kenkere"}].map(r=>{const v=a.filter(h=>r.key==="Kenkere House"?h.location?.includes("Kenkere")||h.location==="Kenkere House":h.location===r.key).reduce((h,g)=>h+(g.checkedInCount||0),0);return{location:r.name,label:"Total Check-ins",value:E(v)}}),[a]);return e.jsx(te,{children:e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20",children:[e.jsx(H,{title:"Sessions Analytics",subtitle:"Comprehensive analysis of class sessions, attendance patterns, and performance insights",variant:"sessions",metrics:x,onExport:()=>{}}),e.jsx("main",{children:e.jsx(Xe,{})}),e.jsx(L,{})]})})},Qt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"})),vt=()=>{const{data:a,isLoading:u}=me(),{isLoading:y,setLoading:x}=T();return c.useEffect(()=>{u!==void 0&&x(u,"Loading PowerCycle vs Barre vs Strength performance data...")},[u,x]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20",children:[e.jsx(H,{title:"PowerCycle vs Barre vs Strength",subtitle:"Comprehensive analysis of PowerCycle, Barre, and Strength Lab class performance",variant:"powercycle",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(te,{children:e.jsx(ct,{data:a||[]})})})}),e.jsx(L,{})]})},qt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),wt=()=>{const{data:a,loading:u,error:y}=Ae(),{setLoading:x}=T();return _(),c.useEffect(()=>{x(u,"Loading expirations and churn data...")},[u,x]),y?e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 flex items-center justify-center",children:e.jsxs("div",{className:"text-center space-y-4 max-w-lg",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:"Data Access Issue"}),e.jsx("p",{className:"text-slate-600",children:y}),y.includes("Failed to fetch")&&e.jsxs("div",{className:"bg-amber-50 border border-amber-200 rounded-lg p-4 text-left",children:[e.jsx("h3",{className:"font-semibold text-amber-800 mb-2",children:"Development Environment Note:"}),e.jsxs("p",{className:"text-sm text-amber-700",children:["This appears to be a CORS/network restriction in the development environment. The integration is correctly configured for the spreadsheet:",e.jsx("br",{}),e.jsx("code",{className:"text-xs bg-amber-100 px-2 py-1 rounded mt-1 inline-block",children:"1rGMDDvvTbZfNg1dueWtRN3LhOgGQOdLg3Fd7Sn1GCZo"}),e.jsx("br",{}),e.jsx("br",{}),"In a production environment with proper CORS configuration, this should work correctly."]})]}),e.jsx(V,{onClick:()=>window.location.reload(),children:"Retry"})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(H,{title:"Expirations & Churn",subtitle:"Comprehensive analysis of membership expirations and customer retention insights",variant:"expiration",onExport:()=>{}}),e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsx("main",{className:"space-y-8",children:e.jsx(we,{data:a||[]})})}),e.jsx(L,{})]})},Xt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),jt=()=>{const{data:a,loading:u}=Ee(),{isLoading:y,setLoading:x}=T();_();const[l,r]=c.useState("all"),[p,v]=c.useState("prev-month"),[h,g]=c.useState("all"),[s,k]=c.useState("all"),[i,D]=c.useState("all"),[C,w]=c.useState("all"),[j,P]=c.useState({start:"",end:""}),[n,o]=c.useState(null),[t,b]=c.useState(!1),S=c.useMemo(()=>{if(!Array.isArray(a))return[];const d=Array.from(new Set(a.map(m=>m?.location).filter(Boolean)));return[{id:"all",name:"All Locations"},{id:"kwality",name:"Kwality House"},{id:"supreme",name:"Supreme HQ"},{id:"kenkere",name:"Kenkere House"}].filter(m=>m.id==="all"||d.some(f=>m.id==="kwality"?f.includes("Kwality"):m.id==="supreme"?f.includes("Supreme"):m.id==="kenkere"?f.includes("Kenkere"):!1))},[a]),N=c.useMemo(()=>{if(!Array.isArray(a))return[];let d=a;if(l!=="all"&&(d=d.filter(m=>{const f=m?.location||"";return l==="kwality"?f.includes("Kwality"):l==="supreme"?f.includes("Supreme"):l==="kenkere"?f.includes("Kenkere"):!0})),h!=="all"&&(d=d.filter(m=>m?.teacherName===h)),s!=="all"&&(d=d.filter(m=>m?.cleanedClass===s)),i!=="all"&&(d=d.filter(m=>m?.cleanedProduct===i)),C!=="all"&&(d=d.filter(m=>{if(!m?.time)return!1;const f=parseInt(m.time.split(":")[0]);switch(C){case"morning":return f>=6&&f<12;case"afternoon":return f>=12&&f<17;case"evening":return f>=17&&f<22;case"late":return f>=22||f<6;default:return!0}})),p!=="all"){const m=new Date;let f=new Date,$=new Date;switch(p){case"1w":f.setDate(m.getDate()-7);break;case"2w":f.setDate(m.getDate()-14);break;case"1m":f.setMonth(m.getMonth()-1);break;case"prev-month":const A=new Date(m.getFullYear(),m.getMonth()-1,1),z=new Date(m.getFullYear(),m.getMonth(),0);return f=A,$=z,d=d.filter(I=>{if(!I?.dateIST)return!1;const Q=new Date(I.dateIST);return Q>=f&&Q<=$}),d;case"3m":f.setMonth(m.getMonth()-3);break;case"6m":f.setMonth(m.getMonth()-6);break;case"1y":f.setFullYear(m.getFullYear()-1);break;case"custom":if(j.start||j.end){const I=j.start?new Date(j.start):new Date("2020-01-01"),Q=j.end?new Date(j.end):m;d=d.filter(ae=>{if(!ae?.dateIST)return!1;const ne=new Date(ae.dateIST);return ne>=I&&ne<=Q})}return d;default:return d}d=d.filter(A=>{if(!A?.dateIST)return!1;const z=new Date(A.dateIST);return z>=f&&z<=m})}return d},[a,l,p,h,s,i,C,j]),M=()=>{v("prev-month"),g("all"),k("all"),D("all"),w("all"),P({start:"",end:""})},Y=d=>{o(d),b(!0)},U=c.useMemo(()=>{if(!Array.isArray(a))return[];let d=a;return l!=="all"&&(d=d.filter(m=>{const f=m?.location||"";return l==="kwality"?f.includes("Kwality"):l==="supreme"?f.includes("Supreme"):l==="kenkere"?f.includes("Kenkere"):!0})),h!=="all"&&(d=d.filter(m=>m?.teacherName===h)),s!=="all"&&(d=d.filter(m=>m?.cleanedClass===s)),i!=="all"&&(d=d.filter(m=>m?.cleanedProduct===i)),C!=="all"&&(d=d.filter(m=>{if(!m?.time)return!1;const f=parseInt(m.time.split(":")[0]);switch(C){case"morning":return f>=6&&f<12;case"afternoon":return f>=12&&f<17;case"evening":return f>=17&&f<22;case"late":return f>=22||f<6;default:return!0}})),d},[a,l,h,s,i,C]),W=c.useMemo(()=>!N||N.length===0?[]:[{key:"Kwality",name:"Kwality"},{key:"Supreme",name:"Supreme"},{key:"Kenkere",name:"Kenkere"}].map(m=>{const $=N.filter(A=>A.location?.includes(m.key)).length;return{location:m.name,label:"Filtered Cancellations",value:E($)}}),[N]);c.useEffect(()=>{x(u,"Loading late cancellations data...")},[u,x]);const xe=e.jsx(ce,{lateCancellationsData:N,defaultFileName:`late-cancellations-${l}`,size:"sm",variant:"ghost"});return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20",children:[e.jsx(H,{title:"Late Cancellations",subtitle:"Comprehensive analysis of late cancellation patterns across locations, classes, trainers, and products",variant:"cancellations",metrics:W,exportButton:xe}),e.jsx("div",{className:"relative",children:e.jsx("div",{className:"container mx-auto px-6 py-8",children:e.jsxs(re,{value:l,onValueChange:r,className:"w-full mb-8",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsx(oe,{className:"bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border-0 grid w-full max-w-4xl min-h-16 overflow-hidden",style:{gridTemplateColumns:`repeat(${S.length}, 1fr)`},children:S.map(d=>e.jsx(ie,{value:d.id,className:"relative px-4 py-3 font-semibold text-gray-800 transition-all duration-300 ease-out hover:scale-105 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-50 text-sm rounded-xl",children:d.name},d.id))})}),S.map(d=>e.jsx(le,{value:d.id,className:"space-y-8",children:e.jsxs("div",{className:"space-y-8",children:[e.jsx(je,{selectedLocation:"all",onLocationChange:()=>{},selectedTimeframe:p,onTimeframeChange:v,selectedTrainer:h,onTrainerChange:g,selectedClass:s,onClassChange:k,selectedProduct:i,onProductChange:D,selectedTimeSlot:C,onTimeSlotChange:w,dateRange:j,onDateRangeChange:P,data:a,onClearFilters:M}),e.jsx(Ne,{data:N,onMetricClick:Y}),e.jsx(ke,{data:U}),e.jsx(Ce,{data:N}),e.jsx(Se,{data:N,onDrillDown:Y})]})},d.id))]})})}),e.jsx(De,{isOpen:t,onClose:()=>b(!1),data:n}),e.jsx(L,{})]})},Gt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"})),B=[{key:"sales",title:"Sales Analytics",subtitle:"Comprehensive sales performance insights with advanced metrics and forecasting"},{key:"client",title:"Client Management",subtitle:"Track client engagement, retention rates, and conversion analytics in real-time"},{key:"trainer",title:"Trainer Performance",subtitle:"Monitor trainer effectiveness, client satisfaction, and performance metrics"},{key:"sessions",title:"Session Analytics",subtitle:"Detailed session attendance, booking patterns, and utilization insights"},{key:"discounts",title:"Promotions Hub",subtitle:"Analyze discount effectiveness, promotional campaigns, and pricing strategies"},{key:"funnel",title:"Leads & Funnel",subtitle:"Conversion funnel analysis, lead tracking, and sales pipeline optimization"},{key:"attendance",title:"Class Attendance",subtitle:"Real-time attendance tracking, capacity utilization, and engagement metrics"},{key:"powercycle",title:"Power Cycle vs Barre",subtitle:"Comparative analysis between class formats and performance insights"},{key:"expiration",title:"Membership Expiration",subtitle:"Track membership lifecycles, renewal rates, and retention strategies"},{key:"cancellations",title:"Late Cancellations",subtitle:"Monitor cancellation patterns, policy compliance, and revenue impact"},{key:"summary",title:"Executive Summary",subtitle:"High-level overview of all key performance indicators and business metrics"}];function Nt(){const[a,u]=c.useState(0),y=()=>{};return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",children:[e.jsx(H,{title:B[a].title,subtitle:B[a].subtitle,variant:B[a].key,onExport:y}),e.jsx("div",{className:"container mx-auto px-6 py-12",children:e.jsx(O,{className:"glass-card",children:e.jsxs(F,{className:"p-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",children:"Hero Section Variants"}),e.jsx("p",{className:"text-center text-muted-foreground mb-8",children:"Switch between different variants to see unique gradients and animated icons"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",children:B.map((x,l)=>e.jsx(V,{variant:a===l?"default":"outline",onClick:()=>u(l),className:`text-sm font-medium transition-all duration-300 ${a===l?"bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70":"hover:bg-muted/50"}`,children:x.title},x.key))}),e.jsxs("div",{className:"mt-8 p-4 bg-muted/30 rounded-lg",children:[e.jsxs("h3",{className:"font-semibold mb-2",children:["Current Variant: ",B[a].key]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Each variant features unique dark gradients, themed floating icons, and smooth animations. The corner buttons provide navigation and export functionality."})]})]})})})]})}const Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),kt=()=>{const a=ye();return c.useEffect(()=>{},[a.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),e.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},Wt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"}));export{Yt as C,It as D,Ft as E,Vt as F,Ut as H,Ot as I,Gt as L,Wt as N,qt as P,Rt as S,$t as T,zt as a,Qt as b,Xt as c};
