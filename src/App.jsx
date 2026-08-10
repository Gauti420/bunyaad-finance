import { useState, useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ChevronDown, ChevronUp, Download, Phone, Mail, MapPin,
  ArrowRight, CheckCircle, Shield, Zap, RefreshCw, Briefcase,
  TrendingUp, Clock, DollarSign, FileText, Building2, Users,
  Award, HeartHandshake, Star, Lock, Package,
  MessageSquare, Layers, Calculator
} from "lucide-react";
import { C, F, useIsMobile, useIsTablet } from "./lib/theme.js";
import { Logo, Navbar, Tag, PageHero, Footer } from "./components/Layout.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicy.jsx";
import TermsAndConditionsPage from "./pages/TermsAndConditions.jsx";

const CALCULATOR_PRODUCTS = [
  {
    id: "quickcash14",
    name: "QuickCash 14",
    badge: "Display Only",
    desc: "Urgent short working capital for short cash gaps.",
    amountMin: 10000,
    amountMax: 100000,
    step: 5000,
    tenor: 14,
    markupRate: 5,
    processingFeeRate: 2.5,
    processingFeeMin: 500,
    deductionMode: "daily",
    live: false,
  },
  {
    id: "flexicash30",
    name: "FlexiCash 30",
    badge: "Live Now",
    desc: "Monthly inventory and cash cycle support for active POS merchants.",
    amountMin: 50000,
    amountMax: 150000,
    step: 5000,
    tenor: 30,
    markupRate: 10,
    processingFeeRate: 1,
    processingFeeMin: 1000,
    deductionMode: "daily",
    live: true,
  },
  {
    id: "growthcash90",
    name: "GrowthCash 90",
    badge: "Display Only",
    desc: "Planned working capital and growth support with longer tenor.",
    amountMin: 100000,
    amountMax: 250000,
    step: 10000,
    tenor: 90,
    markupRate: 24,
    processingFeeRate: 0.75,
    processingFeeMin: 1000,
    deductionMode: "weekly",
    live: false,
  },
];

function formatPKR(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function PhoneMockup() {
  return (
    <div style={{ position:"relative",width:"100%",maxWidth:230,margin:"0 auto",flexShrink:0 }}>
      <div style={{ position:"absolute",top:"15%",left:"50%",transform:"translateX(-50%)",width:220,height:220,borderRadius:"50%",background:`radial-gradient(circle,rgba(19,178,75,0.22) 0%,transparent 70%)`,pointerEvents:"none",zIndex:0 }}/>
      <div style={{ position:"relative",zIndex:1,width:"100%",aspectRatio:"230 / 460",borderRadius:38,background:"linear-gradient(160deg,#1e2d6b,#0f1a38)",border:"2px solid rgba(255,255,255,0.18)",boxShadow:"0 36px 80px rgba(0,0,0,0.6),inset 0 1px 0 rgba(255,255,255,0.14)",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:88,height:24,background:"#080f20",borderRadius:"0 0 18px 18px",zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",gap:5 }}>
          <div style={{ width:7,height:7,borderRadius:"50%",background:"#1a2a4a" }}/>
          <div style={{ width:38,height:5,borderRadius:3,background:"#1a2a4a" }}/>
        </div>
        <div style={{ padding:"30px 11px 11px",height:"100%" }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10 }}>
            <div style={{ color:"rgba(255,255,255,0.38)",fontSize:"0.56rem",fontFamily:F }}>9:41</div>
            <Logo dark/>
            <div style={{ width:18 }}/>
          </div>
          <div style={{ background:"linear-gradient(135deg,#1c2554,#253580)",borderRadius:13,padding:"12px 11px",marginBottom:9 }}>
            <div style={{ color:"rgba(255,255,255,0.5)",fontSize:"0.56rem",fontFamily:F }}>Good morning 👋</div>
            <div style={{ color:"#fff",fontWeight:700,fontSize:"0.74rem",fontFamily:F,marginBottom:8 }}>Ahmed Ali</div>
            <div style={{ display:"flex",justifyContent:"space-between",background:"rgba(255,255,255,0.07)",borderRadius:7,padding:"7px 9px" }}>
              <div><div style={{ color:"rgba(255,255,255,0.42)",fontSize:"0.5rem",fontFamily:F }}>LIMIT</div><div style={{ color:C.green,fontWeight:700,fontSize:"0.68rem",fontFamily:F }}>PKR 1,00,000</div></div>
              <div style={{ width:1,background:"rgba(255,255,255,0.1)" }}/>
              <div><div style={{ color:"rgba(255,255,255,0.42)",fontSize:"0.5rem",fontFamily:F }}>STATUS</div><div style={{ color:"#fff",fontWeight:700,fontSize:"0.68rem",fontFamily:F }}>Active</div></div>
            </div>
          </div>
          <div style={{ background:`linear-gradient(135deg,${C.green},#0a7a32)`,borderRadius:11,padding:"9px 11px",marginBottom:9 }}>
            <div style={{ color:"rgba(255,255,255,0.72)",fontSize:"0.52rem",fontFamily:F }}>FEATURED PRODUCT</div>
            <div style={{ color:"#fff",fontWeight:800,fontSize:"0.78rem",fontFamily:F,marginBottom:3 }}>FlexiCash 30</div>
            <div style={{ display:"flex",justifyContent:"space-between" }}>
              {[["Markup","10% Flat"],["Tenor","30 Days"],["Max","150K"]].map(([k,v])=>(
                <div key={k}><div style={{ color:"rgba(255,255,255,0.6)",fontSize:"0.48rem",fontFamily:F }}>{k}</div><div style={{ color:"#fff",fontWeight:700,fontSize:"0.62rem",fontFamily:F }}>{v}</div></div>
              ))}
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:5,marginBottom:9 }}>
            {[["Apply Now",C.green],["Repay",C.navy]].map(([l,bg])=>(
              <div key={l} style={{ background:bg,borderRadius:7,padding:"7px",textAlign:"center" }}>
                <div style={{ color:"#fff",fontWeight:700,fontSize:"0.58rem",fontFamily:F }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ color:"rgba(255,255,255,0.38)",fontSize:"0.52rem",fontFamily:F,marginBottom:4 }}>RECENT ACTIVITY</div>
          {[["Disbursement","+ PKR 50,000","#13b24b"],["Processing Fee","- PKR 500","#f87171"]].map(([l,v,col])=>(
            <div key={l} style={{ display:"flex",justifyContent:"space-between",background:"rgba(255,255,255,0.05)",borderRadius:5,padding:"5px 7px",marginBottom:3 }}>
              <div style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.52rem",fontFamily:F }}>{l}</div>
              <div style={{ color:col,fontWeight:700,fontSize:"0.52rem",fontFamily:F }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position:"absolute",right:-3,top:95,width:3,height:38,background:"rgba(255,255,255,0.12)",borderRadius:2 }}/>
      <div style={{ position:"absolute",left:-3,top:85,width:3,height:26,background:"rgba(255,255,255,0.12)",borderRadius:2 }}/>
      <div style={{ position:"absolute",left:-3,top:122,width:3,height:48,background:"rgba(255,255,255,0.12)",borderRadius:2 }}/>
    </div>
  );
}

const HOME_PRODUCTS = [
  { name:"FlexiCash 30",badge:"Live Now",desc:"Short-term working capital for active POS merchants.",detail:"PKR 50K–150K · 30 Days · 10% Flat",color:C.green,icon:<TrendingUp size={22}/>,soon:false },
  { name:"Business Term Loan",badge:"Coming Soon",desc:"Longer-term financing for established businesses.",detail:"Higher limits · Extended tenor · TBD",color:C.teal,icon:<Briefcase size={22}/>,soon:true },
  { name:"Inventory Finance",badge:"Coming Soon",desc:"Purpose-built supplier-linked inventory finance.",detail:"Cycle-based · Flexible · TBD",color:"#7c3aed",icon:<Package size={22}/>,soon:true },
];

function HomePage({ setPage }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <div>
      <section style={{ minHeight:"100vh",background:`linear-gradient(145deg,${C.navyD} 0%,${C.navy} 55%,#1a3070 100%)`,display:"flex",alignItems:"center",padding: isMobile ? "90px 1rem 3rem" : "80px 1.5rem 4rem",fontFamily:F,position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",top:-120,right:-80,width:550,height:550,borderRadius:"50%",background:"radial-gradient(circle,rgba(19,178,75,0.1) 0%,transparent 65%)",pointerEvents:"none" }}/>
        <div style={{ position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none" }}/>
        <div style={{ maxWidth:1180,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : "1fr auto",gap: isMobile ? "2rem" : "3rem",alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(19,178,75,0.15)",border:"1px solid rgba(19,178,75,0.35)",borderRadius:30,padding:"5px 16px",marginBottom:"1.5rem" }}>
              <div style={{ width:7,height:7,borderRadius:"50%",background:C.green,boxShadow:`0 0 8px ${C.green}` }}/>
              <span style={{ color:C.green,fontSize:"0.71rem",fontWeight:600,letterSpacing:"0.06em" }}>Powered by Credsys — Licensed NBFC</span>
            </div>
            <h1 style={{ color:"#fff",fontSize:"clamp(2.2rem,4.5vw,3.6rem)",fontWeight:900,lineHeight:1.08,margin:"0 0 1.25rem",letterSpacing:"-0.03em" }}>
              Smart financing<br/>for <span style={{ color:C.green,fontStyle:"italic" }}>growing</span><br/>businesses.
            </h1>
            <p style={{ color:"rgba(255,255,255,0.62)",fontSize:"1.02rem",lineHeight:1.78,maxWidth:450,margin:"0 0 2.5rem" }}>
              Bunyaad Finance gives merchants and small businesses quick access to digital working capital — simple, transparent, and mobile-first.
            </p>
            <div style={{ display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:isMobile ? "center" : "flex-start" }}>
              <button onClick={() => setPage("Products")} style={{ backgroundColor:C.green,color:"#fff",border:"none",borderRadius:8,padding:"13px 26px",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",gap:8,boxShadow:`0 6px 24px rgba(19,178,75,0.45)` }}>
                <Download size={16}/>Download App
              </button>
              <button onClick={() => setPage("Calculator")} style={{ backgroundColor:"transparent",color:"#fff",border:"1.5px solid rgba(255,255,255,0.22)",borderRadius:8,padding:"13px 26px",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",gap:8 }}>
                <Calculator size={16}/>Calculator
              </button>
            </div>
            <div style={{ display:"flex",gap:isMobile ? "1rem" : "2.5rem",flexWrap:"wrap",justifyContent:isMobile ? "center" : "flex-start",marginTop:"2.5rem",borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:"2rem" }}>
              {[["3","Products in Calculator"],["1","Product Live"],["PKR 250K","Max Preview Amount"]].map(([v,l])=>(
                <div key={l}>
                  <div style={{ color:"#fff",fontWeight:800,fontSize:"1.35rem" }}>{v}</div>
                  <div style={{ color:"rgba(255,255,255,0.42)",fontSize:"0.72rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <PhoneMockup/>
        </div>
      </section>

      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:1180,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:"3rem" }}>
            <Tag>WHY BUNYAAD FINANCE</Tag>
            <h2 style={{ color:C.navy,fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:800,margin:"0.75rem 0 0.75rem",letterSpacing:"-0.02em" }}>Built for merchants. Designed for growth.</h2>
            <p style={{ color:C.slate,fontSize:"0.97rem",maxWidth:480,margin:"0 auto",lineHeight:1.75 }}>A financing platform that understands the real needs of Pakistan's business community.</p>
          </div>
          <div style={{ display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : useIsTablet() ? "repeat(2,1fr)" : "repeat(4,1fr)",gap:"1.25rem" }}>
            {[
              { icon:<Zap size={24}/>,title:"Fast Digital Journey",desc:"Simple application designed for merchants who need quick access to financing.",c:C.green },
              { icon:<FileText size={24}/>,title:"Transparent Terms",desc:"Clear product structure and pricing with no hidden charges.",c:"#2563eb" },
              { icon:<RefreshCw size={24}/>,title:"Easy Repayment",desc:"Settlement-linked repayment reduces friction for busy business owners.",c:C.teal },
              { icon:<Briefcase size={24}/>,title:"Built for Business",desc:"Designed for merchants managing inventory, suppliers, and cash-flow.",c:"#7c3aed" },
            ].map(({ icon,title,desc,c }) => (
              <div key={title} style={{ borderRadius:16,padding:"1.75rem",background:C.light,border:`1px solid ${C.border}`,position:"relative",overflow:"hidden" }}>
                <div style={{ position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${c},transparent)` }}/>
                <div style={{ width:48,height:48,borderRadius:12,background:`${c}18`,display:"flex",alignItems:"center",justifyContent:"center",color:c,marginBottom:"1rem" }}>{icon}</div>
                <h3 style={{ color:C.navy,fontWeight:700,fontSize:"0.9rem",margin:"0 0 0.5rem" }}>{title}</h3>
                <p style={{ color:C.slate,fontSize:"0.83rem",lineHeight:1.65,margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:C.light,fontFamily:F }}>
        <div style={{ maxWidth:1180,margin:"0 auto" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"2.5rem",flexWrap:"wrap",gap:"1rem" }}>
            <div>
              <Tag>FINANCING PRODUCTS</Tag>
              <h2 style={{ color:C.navy,fontSize:"clamp(1.5rem,3vw,2.1rem)",fontWeight:800,margin:"0.75rem 0 0.4rem",letterSpacing:"-0.02em" }}>Solutions built for your business</h2>
              <p style={{ color:C.slate,fontSize:"0.92rem",margin:0 }}>One live product with more on the way.</p>
            </div>
            <button onClick={() => setPage("Products")} style={{ backgroundColor:C.navy,color:"#fff",border:"none",borderRadius:8,padding:"10px 22px",fontSize:"0.82rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",gap:8 }}>
              View All Products<ArrowRight size={15}/>
            </button>
          </div>
          <div style={{ display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : useIsTablet() ? "repeat(2,1fr)" : "repeat(3,1fr)",gap:"1.5rem" }}>
            {HOME_PRODUCTS.map(({ name,badge,desc,detail,color,icon,soon }) => (
              <div key={name} style={{ background:"#fff",borderRadius:18,padding:"1.75rem",border:`1.5px solid ${soon?"rgba(28,37,84,0.06)":color+"44"}`,position:"relative",overflow:"hidden",transition:"box-shadow .2s" }}>
                {soon && <div style={{ position:"absolute",inset:0,background:"repeating-linear-gradient(-45deg,transparent,transparent 8px,rgba(28,37,84,0.018) 8px,rgba(28,37,84,0.018) 16px)",pointerEvents:"none" }}/>}
                <div style={{ position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${color},transparent)` }}/>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.2rem" }}>
                  <div style={{ width:50,height:50,borderRadius:12,background:`${color}18`,display:"flex",alignItems:"center",justifyContent:"center",color }}>{icon}</div>
                  <span style={{ fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.05em",borderRadius:20,padding:"3px 10px",background:soon?"rgba(28,37,84,0.06)":color+"18",color:soon?C.slate:color }}>{badge}</span>
                </div>
                <h3 style={{ color:C.navy,fontWeight:800,fontSize:"1.02rem",margin:"0 0 0.4rem" }}>{name}</h3>
                <p style={{ color:C.slate,fontSize:"0.83rem",lineHeight:1.6,margin:"0 0 0.7rem" }}>{desc}</p>
                <div style={{ color:color,fontWeight:600,fontSize:"0.76rem",marginBottom:"1.2rem" }}>{detail}</div>
                {!soon
                  ? <button onClick={() => setPage("Products")} style={{ width:"100%",backgroundColor:color,color:"#fff",border:"none",borderRadius:8,padding:"10px",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",fontFamily:F }}>View Details →</button>
                  : <div style={{ width:"100%",borderRadius:8,padding:"10px",fontSize:"0.8rem",fontWeight:600,color:C.slate,textAlign:"center",border:`1px dashed rgba(28,37,84,0.14)`,background:C.light }}>Coming Soon</div>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:1180,margin:"0 auto",textAlign:"center" }}>
          <Tag>HOW IT WORKS</Tag>
          <h2 style={{ color:C.navy,fontSize:"clamp(1.5rem,3vw,2.1rem)",fontWeight:800,margin:"0.75rem 0 2.5rem",letterSpacing:"-0.02em" }}>Finance in five simple steps</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:0,position:"relative" }}>
            <div style={{ position:"absolute",top:28,left:"10%",right:"10%",height:2,background:`linear-gradient(90deg,${C.green},${C.teal})`,zIndex:0 }}/>
            {["Download App","Complete Profile","Get Assessed","Receive Financing","Repay & Grow"].map((s,i) => (
              <div key={s} style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",position:"relative",zIndex:1 }}>
                <div style={{ width:58,height:58,borderRadius:"50%",background:`linear-gradient(135deg,${C.navy},${C.navyL})`,display:"flex",alignItems:"center",justifyContent:"center",color:C.green,fontWeight:900,fontSize:"1.1rem",boxShadow:`0 4px 20px rgba(28,37,84,0.25)`,border:"3px solid #fff" }}>{i+1}</div>
                <div style={{ color:C.navy,fontWeight:600,fontSize:"0.77rem",lineHeight:1.35,maxWidth:88,textAlign:"center" }}>{s}</div>
              </div>
            ))}
          </div>
          <button onClick={() => setPage("How It Works")} style={{ marginTop:"2.5rem",backgroundColor:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"10px 24px",fontSize:"0.84rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"inline-flex",alignItems:"center",gap:8 }}>
            See Full Journey<ArrowRight size={15}/>
          </button>
        </div>
      </section>

      <section style={{ padding: isMobile ? "2rem 1rem" : "2.5rem 1.5rem",background:`linear-gradient(135deg,${C.navyD},${C.navy})`,fontFamily:F }}>
        <div style={{ maxWidth:1180,margin:"0 auto",display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"2rem",alignItems:"center" }}>
          {[[<Shield size={17}/>,1,"Licensed NBFC"],[<Building2 size={17}/>,2,"Operated by Credsys"],[<Lock size={17}/>,3,"Secure & Compliant"],[<CheckCircle size={17}/>,4,"Transparent Pricing"]].map(([ic,k,txt])=>(
            <div key={k} style={{ display:"flex",alignItems:"center",gap:8,color:"rgba(255,255,255,0.68)",fontSize:"0.82rem",fontWeight:500 }}>
              <span style={{ color:C.green }}>{ic}</span>{txt}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:C.light,fontFamily:F }}>
        <div style={{ maxWidth:700,margin:"0 auto",background:`linear-gradient(135deg,${C.navy},${C.navyL})`,borderRadius:24,padding:"3.5rem",textAlign:"center",position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:-40,right:-40,width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(19,178,75,0.18),transparent)",pointerEvents:"none" }}/>
          <Calculator size={32} color={C.green} style={{ marginBottom:"1rem" }}/>
          <h2 style={{ color:"#fff",fontWeight:800,fontSize:"clamp(1.5rem,3vw,2rem)",margin:"0 0 1rem",letterSpacing:"-0.02em" }}>Try the repayment calculator</h2>
          <p style={{ color:"rgba(255,255,255,0.62)",fontSize:"0.95rem",maxWidth:430,margin:"0 auto 0.75rem",lineHeight:1.75 }}>Use the calculator to preview total repayment and daily or weekly deductions across available product structures.</p>
          <p style={{ color:C.green,fontStyle:"italic",fontWeight:600,fontSize:"0.86rem",margin:"0 0 2rem" }}>Only FlexiCash 30 is currently live on the website.</p>
          <button onClick={() => setPage("Calculator")} style={{ backgroundColor:"rgba(255,255,255,0.1)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"11px 24px",fontSize:"0.85rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"inline-flex",alignItems:"center",gap:8 }}>
            <Calculator size={15}/>Open Calculator
          </button>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <div>
      <PageHero tag="ABOUT US" title="Built to support business growth" sub="Bunyaad Finance is a digital financing platform designed to help merchants and small businesses access structured, simple, and transparent financing support."/>
      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : "1fr 1fr",gap:"4rem",alignItems:"center" }}>
          <div>
            <Tag green>WHO WE ARE</Tag>
            <h2 style={{ color:C.navy,fontSize:"clamp(1.4rem,3vw,2rem)",fontWeight:800,margin:"0.75rem 0 1rem",letterSpacing:"-0.02em" }}>The brand behind the platform</h2>
            <p style={{ color:C.slate,fontSize:"0.95rem",lineHeight:1.82,marginBottom:"1rem" }}>
              Bunyaad Finance is the customer-facing digital brand through which eligible users can explore financing solutions. The platform is operated by <strong style={{ color:C.navy }}>Credsys</strong>, the licensed NBFC and legal operating entity.
            </p>
            <p style={{ color:C.slate,fontSize:"0.95rem",lineHeight:1.82,marginBottom:"1.5rem" }}>
              Our mission is to make business financing more accessible, transparent, and convenient for merchants and growing businesses through a digital-first experience.
            </p>
            <div style={{ background:C.light,borderRadius:12,padding:"1.25rem",border:`1px solid ${C.border}` }}>
              <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                <Building2 size={18} color={C.green}/>
                <span style={{ color:C.navy,fontWeight:700,fontSize:"0.88rem" }}>Operated by Credsys — Licensed NBFC</span>
              </div>
              <p style={{ color:C.slate,fontSize:"0.8rem",lineHeight:1.7,margin:"0.5rem 0 0" }}>All financing products are offered under Credsys, the regulated entity behind the Bunyaad Finance brand.</p>
            </div>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem" }}>
            {[
              { icon:<HeartHandshake size={22}/>,title:"Trust & Transparency",desc:"Operations built on integrity, compliance, and clear communication.",c:C.green },
              { icon:<Zap size={22}/>,title:"Accessibility",desc:"Digital-first approach removes barriers for every merchant.",c:"#2563eb" },
              { icon:<Star size={22}/>,title:"Responsible Growth",desc:"Guided by responsible lending principles and sound risk practices.",c:C.teal },
              { icon:<Users size={22}/>,title:"Customer-First",desc:"Every product decision is made with the customer in mind.",c:"#7c3aed" },
            ].map(({ icon,title,desc,c }) => (
              <div key={title} style={{ background:C.light,borderRadius:14,padding:"1.25rem",border:`1px solid ${C.border}` }}>
                <div style={{ color:c,marginBottom:8 }}>{icon}</div>
                <div style={{ color:C.navy,fontWeight:700,fontSize:"0.87rem",marginBottom:4 }}>{title}</div>
                <div style={{ color:C.slate,fontSize:"0.78rem",lineHeight:1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: isMobile ? "3rem 1rem" : "4rem 1.5rem 5rem",background:C.light,fontFamily:F }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:"2.5rem" }}>
            <Tag>OUR MISSION</Tag>
            <h2 style={{ color:C.navy,fontWeight:800,fontSize:"clamp(1.4rem,3vw,1.9rem)",margin:"0.75rem 0 0",letterSpacing:"-0.02em" }}>What drives us every day</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem" }}>
            {[
              { icon:<Building2 size={28}/>,title:"Licensed & Regulated",sub:"Operated by Credsys",desc:"Credsys holds the required NBFC license. All products are offered under full regulatory compliance.",c:C.navy },
              { icon:<Shield size={28}/>,title:"Compliance First",sub:"Regulatory standards",desc:"All disclosures, processes, and policies are maintained in line with applicable regulatory requirements.",c:C.green },
              { icon:<Award size={28}/>,title:"Our Values",sub:"Five pillars",desc:"Trust · Accessibility · Responsibility · Digital Convenience · Customer-focused service.",c:"#7c3aed" },
            ].map(({ icon,title,sub,desc,c }) => (
              <div key={title} style={{ background:"#fff",borderRadius:16,padding:"2rem",border:`1px solid ${C.border}`,borderTop:`3px solid ${c}` }}>
                <div style={{ color:c,marginBottom:"1rem" }}>{icon}</div>
                <h3 style={{ color:C.navy,fontWeight:800,fontSize:"1.05rem",margin:"0 0 0.25rem" }}>{title}</h3>
                <div style={{ color:c,fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.05em",marginBottom:"0.75rem" }}>{sub.toUpperCase()}</div>
                <p style={{ color:C.slate,fontSize:"0.85rem",lineHeight:1.72,margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop:"2rem",background:`linear-gradient(135deg,${C.navy},${C.navyL})`,borderRadius:14,padding:"1.4rem 2rem",display:"flex",alignItems:"center",gap:"1rem" }}>
            <Shield size={20} color={C.green} style={{ flexShrink:0 }}/>
            <p style={{ color:"rgba(255,255,255,0.72)",fontSize:"0.83rem",lineHeight:1.65,margin:0 }}>
              <strong style={{ color:"#fff" }}>Disclosure:</strong> Bunyaad Finance is operated by Credsys. All financing products are offered subject to eligibility, approval, and applicable terms. This website is for information purposes only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const PRODUCTS_DATA = [
  {
    name:"FlexiCash 30",status:"active",badge:"Available Now",
    tagline:"Settlement-linked working capital for POS merchants.",
    desc:"FlexiCash 30 is a settlement-linked, fixed-markup working capital facility designed to help active POS merchants manage inventory cycles, supplier payments, and short-term liquidity gaps.",
    segment:"Active POS merchants with stable settlement history.",
    purpose:"Support monthly inventory cycles, enable business continuity during cash-flow gaps, and provide quick access to capital with a structured repayment approach.",
    specs:[
      { label:"Facility Amount",value:"PKR 50,000 – 150,000",icon:<DollarSign size={17}/> },
      { label:"Tenor",value:"30 Days (fixed)",icon:<Clock size={17}/> },
      { label:"Markup Rate",value:"10% flat for 30 days",icon:<TrendingUp size={17}/> },
      { label:"Processing Fee",value:"1% (min. PKR 1,000)",icon:<FileText size={17}/> },
      { label:"Cooling-Off Period",value:"24 hours",icon:<RefreshCw size={17}/> },
      { label:"Repayment",value:"Auto settlement-deduction",icon:<CheckCircle size={17}/> },
    ],
    disclaimer:"Final approvals, eligibility, pricing, and financing limits are subject to assessment and applicable terms. Applications may be declined where the customer profile does not meet internal policy or risk requirements.",
    color:C.green,
  },
  {
    name:"Business Term Loan",status:"soon",badge:"Coming Soon",
    tagline:"Longer-term financing for growing businesses.",
    desc:"A structured term loan product designed for established merchants and SMEs looking to fund business expansion, equipment, or large-scale inventory requirements.",
    segment:"Established businesses with strong financial history.",
    purpose:"Fund growth, equipment purchases, and larger capital needs.",
    specs:[
      { label:"Facility Amount",value:"To Be Announced",icon:<DollarSign size={17}/> },
      { label:"Tenor",value:"3–12 Months",icon:<Clock size={17}/> },
      { label:"Rate",value:"To Be Announced",icon:<TrendingUp size={17}/> },
      { label:"Processing Fee",value:"To Be Announced",icon:<FileText size={17}/> },
    ],
    color:C.teal,
  },
  {
    name:"Inventory Finance",status:"soon",badge:"Coming Soon",
    tagline:"Purpose-built finance for inventory cycles.",
    desc:"Inventory Finance will offer supplier-linked financing solutions designed to help merchants stock up ahead of peak sales seasons and manage procurement cycles.",
    segment:"Merchants with predictable inventory procurement cycles.",
    purpose:"Enable pre-season stocking and supplier payment support.",
    specs:[
      { label:"Structure",value:"Supplier-linked",icon:<Layers size={17}/> },
      { label:"Tenor",value:"Cycle-based",icon:<Clock size={17}/> },
      { label:"Eligibility",value:"Assessment-based",icon:<CheckCircle size={17}/> },
    ],
    color:"#7c3aed",
  },
];

function ProductsPage({ setPage }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [active,setActive]=useState(0);
  const prod=PRODUCTS_DATA[active];
  return (
    <div>
      <PageHero tag="FINANCING PRODUCTS" title="Financing solutions designed for business needs" sub="Explore product options created to support inventory cycles, supplier payments, and short-term business liquidity requirements."/>
      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <div style={{ display:"flex",gap:"0.75rem",marginBottom:"2.5rem",flexWrap:"wrap" }}>
            {PRODUCTS_DATA.map((p,i) => (
              <button
                  key={p.name}
                  onClick={() => p.status !== "soon" && setActive(i)} // Disable for 'soon' status
                  style={{
                    fontFamily: F,
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    padding: "9px 20px",
                    borderRadius: 8,
                    cursor: p.status === "soon" ? "not-allowed" : "pointer", // Disable pointer for 'soon' products
                    transition: "all .2s",
                    background: active === i ? p.color : "transparent",
                    color: active === i ? "#fff" : C.slate,
                    border: active === i ? `1.5px solid ${p.color}` : `1.5px solid ${C.border}`,
                  }}
                >
                  {p.name}
                  <span
                    style={{
                      marginLeft: 8,
                      fontSize: "0.62rem",
                      padding: "2px 8px",
                      borderRadius: 10,
                      background:
                        active === i
                          ? "rgba(255,255,255,0.2)"
                          : p.status === "active"
                          ? `${p.color}18`
                          : "rgba(28,37,84,0.06)",
                      color: active === i ? "#fff" : p.status === "active" ? p.color : C.slate,
                    }}
                  >
                    {p.badge}
                  </span>
                </button>
            ))}
          </div>

          {prod.status==="soon" ? (
            <div style={{ background:C.light,borderRadius:20,padding:"4rem",textAlign:"center",border:`2px dashed ${prod.color}44` }}>
              <div style={{ width:68,height:68,borderRadius:16,background:`${prod.color}18`,display:"flex",alignItems:"center",justifyContent:"center",color:prod.color,margin:"0 auto 1.5rem" }}><Clock size={32}/></div>
              <h2 style={{ color:C.navy,fontWeight:800,fontSize:"1.7rem",margin:"0 0 0.75rem" }}>{prod.name}</h2>
              <p style={{ color:C.slate,fontSize:"0.97rem",maxWidth:500,margin:"0 auto 0.75rem",lineHeight:1.78 }}>{prod.desc}</p>
              <p style={{ color:prod.color,fontWeight:600,fontSize:"0.88rem",margin:"0 0 2rem" }}>{prod.tagline}</p>
              <div style={{ display:"inline-grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"2rem",maxWidth:500 }}>
                {prod.specs.map(({ label,value,icon }) => (
                  <div key={label} style={{ background:"#fff",borderRadius:10,padding:"0.9rem",border:`1px solid ${C.border}` }}>
                    <div style={{ color:prod.color,marginBottom:4 }}>{icon}</div>
                    <div style={{ color:C.slate,fontSize:"0.62rem",fontWeight:600,letterSpacing:"0.04em",marginBottom:2 }}>{label.toUpperCase()}</div>
                    <div style={{ color:C.navy,fontWeight:700,fontSize:"0.82rem" }}>{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"inline-block",background:`${prod.color}15`,border:`1px solid ${prod.color}44`,borderRadius:20,padding:"6px 20px" }}>
                <span style={{ color:prod.color,fontWeight:700,fontSize:"0.8rem" }}>Coming Soon — Check Back Later</span>
              </div>
            </div>
          ) : (
            <div style={{ display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : "1.2fr 1fr",gap:"3rem" }}>
              <div>
                <div style={{ background:`linear-gradient(135deg,${C.navy},${C.navyL})`,borderRadius:20,padding:"2rem",marginBottom:"1.5rem" }}>
                  <div style={{ display:"inline-flex",alignItems:"center",gap:6,background:"rgba(19,178,75,0.2)",border:"1px solid rgba(19,178,75,0.4)",borderRadius:6,padding:"3px 10px",marginBottom:"1rem" }}>
                    <div style={{ width:6,height:6,borderRadius:"50%",background:C.green }}/>
                    <span style={{ color:C.green,fontSize:"0.64rem",fontWeight:700,letterSpacing:"0.06em" }}>AVAILABLE NOW</span>
                  </div>
                  <h2 style={{ color:"#fff",fontWeight:900,fontSize:"2rem",margin:"0 0 0.5rem",letterSpacing:"-0.02em" }}>{prod.name}</h2>
                  <p style={{ color:"rgba(255,255,255,0.58)",fontSize:"0.88rem",lineHeight:1.65,margin:0 }}>{prod.tagline}</p>
                </div>
                <h3 style={{ color:C.navy,fontWeight:700,fontSize:"0.92rem",margin:"0 0 0.6rem" }}>About This Product</h3>
                <p style={{ color:C.slate,fontSize:"0.9rem",lineHeight:1.8,margin:"0 0 1.25rem" }}>{prod.desc}</p>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"1.5rem" }}>
                  {[
                    { label:"Target Segment",value:prod.segment },
                    { label:"Product Purpose",value:prod.purpose.slice(0,70)+"..." },
                  ].map(({ label,value }) => (
                    <div key={label} style={{ background:C.light,borderRadius:10,padding:"1rem",border:`1px solid ${C.border}` }}>
                      <div style={{ color:C.slate,fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.04em",marginBottom:5 }}>{label.toUpperCase()}</div>
                      <div style={{ color:C.navy,fontSize:"0.82rem",fontWeight:500,lineHeight:1.5 }}>{value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background:"rgba(19,178,75,0.06)",border:"1px solid rgba(19,178,75,0.2)",borderRadius:10,padding:"1rem 1.2rem" }}>
                  <div style={{ display:"flex",gap:8,alignItems:"flex-start" }}>
                    <Shield size={14} color={C.green} style={{ flexShrink:0,marginTop:2 }}/>
                    <p style={{ color:"#2d6a45",fontSize:"0.77rem",lineHeight:1.65,margin:0 }}><strong>Disclaimer:</strong> {prod.disclaimer}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ color:C.navy,fontWeight:700,fontSize:"0.85rem",margin:"0 0 1rem",letterSpacing:"0.04em" }}>PRODUCT SPECIFICATIONS</h3>
                <div style={{ display:"flex",flexDirection:"column",gap:"0.65rem",marginBottom:"2rem" }}>
                  {prod.specs.map(({ label,value,icon }) => (
                    <div key={label} style={{ background:"#fff",border:`1px solid ${C.border}`,borderRadius:11,padding:"0.9rem 1.1rem",display:"flex",gap:11,alignItems:"center" }}>
                      <div style={{ color:C.green,flexShrink:0 }}>{icon}</div>
                      <div style={{ flex:1 }}>
                        <div style={{ color:C.slate,fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.04em",marginBottom:2 }}>{label.toUpperCase()}</div>
                        <div style={{ color:C.navy,fontWeight:700,fontSize:"0.9rem" }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display:"flex",flexDirection:"column",gap:"0.75rem" }}>
                  <button onClick={() => setPage("Calculator")} style={{ background:C.green,color:"#fff",border:"none",borderRadius:8,padding:"13px",fontSize:"0.88rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",justifyContent:"center",gap:8,boxShadow:`0 4px 20px rgba(19,178,75,0.35)` }}>
                    <Calculator size={16}/>Open Calculator
                  </button>
                  <button onClick={() => setPage("How It Works")} style={{ background:"transparent",color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"12px",fontSize:"0.85rem",fontWeight:600,cursor:"pointer",fontFamily:F }}>
                    How It Works
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const STEPS = [
  { n:"01",title:"Get Started",desc:"Download the Bunyaad Finance app and begin your onboarding journey.",icon:<Download size={23}/>,detail:"Available on Android and iOS. The app is the starting point for your entire financing journey with Bunyaad Finance." },
  { n:"02",title:"Complete Your Profile",desc:"Provide the required profile, business, and supporting information.",icon:<Users size={23}/>,detail:"This includes your business details, identity verification, and relevant supporting documents required by our assessment process." },
  { n:"03",title:"Assessment & Verification",desc:"Your information is assessed against internal eligibility, verification, and risk criteria.",icon:<Shield size={23}/>,detail:"Our team reviews your profile against product criteria. You may be contacted if additional information is required during assessment." },
  { n:"04",title:"Financing Decision",desc:"If approved, you receive the applicable financing offer with key terms.",icon:<CheckCircle size={23}/>,detail:"A 24-hour cooling-off period is provided after the offer is made. You have time to review all terms before accepting." },
  { n:"05",title:"Repayment Journey",desc:"Repayment is managed as per the approved method and product structure.",icon:<RefreshCw size={23}/>,detail:"Primary repayment is via settlement auto-deduction. Where settlement is insufficient, a payment reference/voucher is generated for your convenience." },
];

function HowItWorksPage({ setPage }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [active,setActive]=useState(0);
  return (
    <div>
      <PageHero tag="HOW IT WORKS" title="Your financing journey in 5 steps" sub="Simple, transparent, and designed around the real needs of Pakistan's merchants and small businesses."/>
      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns: useIsMobile() ? "1fr" : "1fr 1.35fr",gap:"3rem",alignItems:"start" }}>
          <div style={{ display:"flex",flexDirection:"column",gap:"0.5rem" }}>
            {STEPS.map((s,i) => (
              <button key={i} onClick={() => setActive(i)} style={{ background:active===i?`linear-gradient(135deg,${C.navy},${C.navyL})`:"transparent",border:active===i?"none":`1px solid ${C.border}`,borderRadius:14,padding:"1.2rem 1.4rem",cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",gap:"1rem",textAlign:"left",transition:"all .25s" }}>
                <div style={{ width:44,height:44,borderRadius:11,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:active===i?"rgba(255,255,255,0.14)":C.light,color:active===i?C.green:C.navy }}>{s.icon}</div>
                <div>
                  <div style={{ color:active===i?"rgba(255,255,255,0.48)":C.slate,fontSize:"0.63rem",fontWeight:700,letterSpacing:"0.06em",marginBottom:3 }}>STEP {s.n}</div>
                  <div style={{ color:active===i?"#fff":C.navy,fontWeight:700,fontSize:"0.88rem" }}>{s.title}</div>
                </div>
              </button>
            ))}
          </div>
          <div style={{ position:"sticky",top:90 }}>
            <div style={{ background:C.light,borderRadius:20,padding:"2.5rem",border:`1px solid ${C.border}` }}>
              <div style={{ width:58,height:58,borderRadius:14,background:`linear-gradient(135deg,${C.navy},${C.navyL})`,display:"flex",alignItems:"center",justifyContent:"center",color:C.green,marginBottom:"1.5rem" }}>{STEPS[active].icon}</div>
              <div style={{ color:C.slate,fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.08em",marginBottom:"0.4rem" }}>STEP {STEPS[active].n} OF 05</div>
              <h2 style={{ color:C.navy,fontWeight:900,fontSize:"1.6rem",margin:"0 0 1rem",letterSpacing:"-0.02em" }}>{STEPS[active].title}</h2>
              <p style={{ color:C.slate,fontSize:"0.93rem",lineHeight:1.8,margin:"0 0 1rem" }}>{STEPS[active].desc}</p>
              <p style={{ color:C.navy,fontSize:"0.87rem",lineHeight:1.8,background:"#fff",borderRadius:10,padding:"1rem",border:`1px solid ${C.border}`,margin:"0 0 1.5rem" }}>{STEPS[active].detail}</p>
              <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                {STEPS.map((_,i) => (
                  <div key={i} onClick={() => setActive(i)} style={{ height:6,borderRadius:3,cursor:"pointer",transition:"all .25s",width:i===active?26:7,background:i===active?C.green:"rgba(28,37,84,0.15)" }}/>
                ))}
                <button onClick={() => setActive(a => (a+1)%5)} style={{ marginLeft:"auto",background:C.navy,color:"#fff",border:"none",borderRadius:7,padding:"6px 14px",fontSize:"0.74rem",fontWeight:600,cursor:"pointer",fontFamily:F }}>Next →</button>
              </div>
            </div>
            <button onClick={() => setPage("Calculator")} style={{ marginTop:"1rem",width:"100%",background:C.green,color:"#fff",border:"none",borderRadius:8,padding:"12px",fontSize:"0.85rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
              <Calculator size={15}/>Open Calculator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalculatorPage() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const [productId, setProductId] = useState("flexicash30");
  const product =
    CALCULATOR_PRODUCTS.find((p) => p.id === productId) || CALCULATOR_PRODUCTS[1];
  const [amount, setAmount] = useState(product.amountMin);

  useEffect(() => {
    setAmount(product.amountMin);
  }, [product.id]);

  const result = useMemo(() => {
    const principal = Number(amount) || 0;
    const markup = (principal * product.markupRate) / 100;
    const processingFee = Math.max(
      (principal * product.processingFeeRate) / 100,
      product.processingFeeMin
    );
    const totalRepayment = principal + markup + processingFee;
    const deductions =
      product.deductionMode === "daily"
        ? product.tenor
        : Math.ceil(product.tenor / 7);
    const perDeduction = totalRepayment / deductions;

    return {
      principal,
      markup,
      processingFee,
      totalRepayment,
      deductions,
      perDeduction,
    };
  }, [amount, product]);

  return (
    <div>
      <PageHero
        tag="CALCULATOR"
        title="Estimate your repayment instantly"
        sub="Choose a product, confirm the fixed tenor, enter an amount, and view total repayment with daily or weekly deduction estimates."
      />

      <section
        style={{
          padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",
          background: C.light,
          fontFamily: F,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
            gap: "2rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 22,
              border: `1px solid ${C.border}`,
              padding: isMobile ? "1.25rem" : "2rem",
              boxShadow: "0 10px 35px rgba(28,37,84,0.05)",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <Tag green>CONFIGURE CALCULATOR</Tag>
              <h2
                style={{
                  color: C.navy,
                  fontSize: isMobile ? "1.4rem" : "1.8rem",
                  fontWeight: 800,
                  margin: "0.6rem 0 0.4rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Product calculator
              </h2>
              <p
                style={{
                  color: C.slate,
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Total repayment includes principal, markup, and processing fee.
              </p>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 700,
                  color: C.navy,
                  fontSize: "0.82rem",
                  marginBottom: 8,
                }}
              >
                Select Product
              </label>

              <div style={{ position: "relative" }}>
                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "13px 42px 13px 14px",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    background: "#fff",
                    fontFamily: F,
                    fontSize: "0.9rem",
                    color: C.navy,
                    appearance: "none",
                    outline: "none",
                  }}
                >
                  {CALCULATOR_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: C.slate,
                  }}
                />
              </div>

              <p
                style={{
                  color: C.slate,
                  fontSize: "0.82rem",
                  lineHeight: 1.7,
                  margin: "0.55rem 0 0",
                }}
              >
                {product.desc}
              </p>
            </div>

            {!product.live && (
              <div
                style={{
                  marginBottom: "1.25rem",
                  background: C.amberBg,
                  border: `1px solid rgba(245,158,11,0.25)`,
                  borderRadius: 12,
                  padding: "0.9rem 1rem",
                }}
              >
                <div
                  style={{
                    color: "#92400e",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  For display only
                </div>
                <div
                  style={{
                    color: "#92400e",
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  This product is shown in the calculator for preview purposes.
                  Only FlexiCash 30 is currently available on the website.
                </div>
              </div>
            )}

            {product.live && (
              <div
                style={{
                  marginBottom: "1.25rem",
                  background: "rgba(19,178,75,0.10)",
                  border: `1px solid rgba(19,178,75,0.20)`,
                  borderRadius: 12,
                  padding: "0.9rem 1rem",
                }}
              >
                <div
                  style={{
                    color: C.greenD,
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  Currently available
                </div>
                <div
                  style={{
                    color: C.greenD,
                    fontSize: "0.8rem",
                    lineHeight: 1.65,
                  }}
                >
                  FlexiCash 30 is the only product currently available on the website.
                </div>
              </div>
            )}

            <div style={{ marginBottom: "1.25rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 700,
                  color: C.navy,
                  fontSize: "0.82rem",
                  marginBottom: 8,
                }}
              >
                Tenor
              </label>

              <div
                style={{
                  background: C.light,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                  padding: "13px 14px",
                  color: C.navy,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                {product.tenor} days
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 700,
                  color: C.navy,
                  fontSize: "0.82rem",
                  marginBottom: 8,
                }}
              >
                Amount
              </label>

              <input
                type="range"
                min={product.amountMin}
                max={product.amountMax}
                step={product.step}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: "100%" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                <span style={{ color: C.slate, fontSize: "0.8rem" }}>
                  {formatPKR(product.amountMin)}
                </span>
                <strong style={{ color: C.navy, fontSize: "0.95rem" }}>
                  {formatPKR(amount)}
                </strong>
                <span style={{ color: C.slate, fontSize: "0.8rem" }}>
                  {formatPKR(product.amountMax)}
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  border: `1px solid ${C.border}`,
                  padding: "1.35rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                  }}
                >
                  <span
                    style={{
                      color: C.slate,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                    }}
                  >
                    TOTAL REPAYMENT
                  </span>
                  <DollarSign size={18} color={C.green} />
                </div>

                <div
                  style={{
                    color: C.navy,
                    fontSize: isMobile ? "1.35rem" : "1.7rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    wordBreak: "break-word",
                  }}
                >
                  {formatPKR(result.totalRepayment)}
                </div>

                <div style={{ color: C.slate, fontSize: "0.76rem", marginTop: 6 }}>
                  Principal + Markup + Processing Fee
                </div>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  border: `1px solid ${C.border}`,
                  padding: "1.35rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                  }}
                >
                  <span
                    style={{
                      color: C.slate,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                    }}
                  >
                    {product.deductionMode === "daily"
                      ? "DAILY DEDUCTION"
                      : "WEEKLY DEDUCTION"}
                  </span>
                  <Clock size={18} color={C.green} />
                </div>

                <div
                  style={{
                    color: C.navy,
                    fontSize: isMobile ? "1.35rem" : "1.7rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    wordBreak: "break-word",
                  }}
                >
                  {formatPKR(result.perDeduction)}
                </div>

                <div style={{ color: C.slate, fontSize: "0.76rem", marginTop: 6 }}>
                  {result.deductions} {product.deductionMode} deductions
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                border: `1px solid ${C.border}`,
                padding: isMobile ? "1.1rem" : "1.6rem",
              }}
            >
              <h3
                style={{
                  color: C.navy,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  margin: "0 0 1rem",
                }}
              >
                Calculation Breakdown
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {[
                  ["Selected Product", product.name],
                  ["Tenor", `${product.tenor} days`],
                  ["Principal Amount", formatPKR(result.principal)],
                  [`Markup (${product.markupRate}%)`, formatPKR(result.markup)],
                  [
                    `Processing Fee (${product.processingFeeRate}% | Min ${formatPKR(
                      product.processingFeeMin
                    )})`,
                    formatPKR(result.processingFee),
                  ],
                  [
                    "Repayment Mode",
                    product.deductionMode === "daily"
                      ? "Daily deduction"
                      : "Weekly deduction",
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: isMobile ? "column" : "row",
                      gap: 8,
                      background: C.light,
                      borderRadius: 10,
                      padding: "0.9rem 1rem",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        color: C.slate,
                        fontSize: "0.8rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        color: C.navy,
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textAlign: isMobile ? "left" : "right",
                        lineHeight: 1.5,
                        wordBreak: "break-word",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const ALL_FAQS = [
  { cat:"General",q:"What is Bunyaad Finance?",a:"Bunyaad Finance is a digital financing platform designed for merchants and small businesses. It is operated by Credsys, the licensed NBFC / regulated entity." },
  { cat:"General",q:"Who operates Bunyaad Finance?",a:"Bunyaad Finance is operated by Credsys, the licensed NBFC / regulated entity responsible for all financing products and regulatory compliance." },
  { cat:"General",q:"Is this website for information purposes only?",a:"Yes. This website is for information purposes and product availability is subject to applicable terms, eligibility, and approval." },
  { cat:"Eligibility",q:"Who can apply for financing?",a:"Eligibility depends on product criteria, internal assessment, and applicable terms. Active POS merchants with stable settlement history are the primary target segment for FlexiCash 30." },
  { cat:"Eligibility",q:"Will everyone who applies be approved?",a:"No. Product availability is subject to eligibility, approval, and internal assessment. Applications may be declined where the profile does not meet internal policy, verification, or risk requirements." },
  { cat:"Products",q:"What is FlexiCash 30?",a:"FlexiCash 30 is a short-term working capital facility offering PKR 50,000–150,000 at 10% flat markup for 30 days, designed to support eligible merchants with business liquidity needs." },
  { cat:"Products",q:"What can financing be used for?",a:"Financing may help support inventory cycles, supplier payments, and short-term working capital needs." },
  { cat:"Repayment",q:"How is repayment managed?",a:"Primary repayment is through settlement auto-deduction. Where settlement is insufficient, a payment reference / voucher may be generated for customer repayment." },
  { cat:"Process",q:"How do I apply?",a:"Customers can begin the process through the Bunyaad Finance app by completing the required profile and information journey." },
  { cat:"Process",q:"How long does the process take?",a:"Processing timelines may vary depending on assessment, verification, and product criteria." },
];
const FAQ_CATS = ["All",...[...new Set(ALL_FAQS.map(f=>f.cat))]];

function FAQsPage({ setPage }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();  
  const [open,setOpen]=useState(null);
  const [cat,setCat]=useState("All");
  const filtered = cat==="All"?ALL_FAQS:ALL_FAQS.filter(f=>f.cat===cat);
  return (
    <div>
      <PageHero tag="FAQs" title="Frequently asked questions" sub="Everything you need to know about Bunyaad Finance and our products."/>
      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:C.light,fontFamily:F }}>
        <div style={{ maxWidth:780,margin:"0 auto" }}>
          <div style={{ display:"flex",gap:"0.5rem",marginBottom:"2rem",flexWrap:"wrap" }}>
            {FAQ_CATS.map(c => (
              <button key={c} onClick={() => { setCat(c);setOpen(null); }} style={{ fontFamily:F,fontSize:"0.77rem",fontWeight:600,padding:"7px 16px",borderRadius:20,cursor:"pointer",transition:"all .2s",background:cat===c?C.navy:"#fff",color:cat===c?"#fff":C.slate,border:`1px solid ${cat===c?C.navy:C.border}` }}>{c}</button>
            ))}
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:"0.65rem" }}>
            {filtered.map((faq,i) => (
              <div key={i} style={{ background:"#fff",borderRadius:12,border:`1px solid ${open===i?"rgba(28,37,84,0.14)":C.border}`,overflow:"hidden",transition:"all .2s" }}>
                <button onClick={() => setOpen(open===i?null:i)} style={{ width:"100%",background:"none",border:"none",padding:"1.2rem 1.4rem",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:F,gap:"1rem",textAlign:"left" }}>
                  <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                    <span style={{ fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.04em",borderRadius:10,padding:"2px 8px",background:`${C.green}14`,color:C.greenD,flexShrink:0 }}>{faq.cat}</span>
                    <span style={{ color:C.navy,fontWeight:600,fontSize:"0.88rem" }}>{faq.q}</span>
                  </div>
                  <span style={{ color:open===i?C.green:C.slate,flexShrink:0 }}>{open===i?<ChevronUp size={17}/>:<ChevronDown size={17}/>}</span>
                </button>
                {open===i && (
                  <div style={{ padding:"0 1.4rem 1.2rem",borderTop:`1px solid rgba(28,37,84,0.06)` }}>
                    <p style={{ color:C.slate,fontSize:"0.87rem",lineHeight:1.78,margin:"1rem 0 0" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop:"2.5rem",textAlign:"center" }}>
            <p style={{ color:C.slate,fontSize:"0.87rem",marginBottom:"0.75rem" }}>Still have questions?</p>
            <button onClick={() => setPage("Contact")} style={{ background:C.navy,color:"#fff",border:"none",borderRadius:8,padding:"11px 26px",fontSize:"0.84rem",fontWeight:700,cursor:"pointer",fontFamily:F,display:"inline-flex",alignItems:"center",gap:8 }}>
              Contact Support<MessageSquare size={15}/>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const isMobile = useIsMobile();
  return (
    <div>
      <PageHero tag="CONTACT" title="We are here to help" sub="For general support, product queries, or complaints, please use the channels below."/>
      <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
        <div style={{ maxWidth:700,margin:"0 auto" }}>
          <h3 style={{ color:C.navy,fontWeight:800,fontSize:"1.05rem",margin:"0 0 1.5rem" }}>Contact Information</h3>
          {[
            { icon:<Mail size={19}/>,label:"Support Email",value:"Support@Bunyaadfinance.pk",c:C.green },
            { icon:<Phone size={19}/>,label:"Helpline",value:"+92 3235542403 ",c:C.teal },
            { icon:<MapPin size={19}/>,label:"Office Address",value:"4th Floor PMSTP Bahria University, Karachi Campus, 13th National Stadium Road Karachi, Pakistan.",c:"#7c3aed" },
          ].map(({ icon,label,value,c }) => (
            <div key={label} style={{ display:"flex",gap:"1rem",alignItems:"flex-start",marginBottom:"1.2rem" }}>
              <div style={{ width:43,height:43,borderRadius:10,background:`${c}14`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:c }}>{icon}</div>
              <div><div style={{ color:C.slate,fontSize:"0.68rem",fontWeight:600,letterSpacing:"0.04em",marginBottom:3 }}>{label.toUpperCase()}</div><div style={{ color:C.navy,fontWeight:600,fontSize:"0.88rem" }}>{value}</div></div>
            </div>
          ))}
          <div style={{ background:C.light,borderRadius:14,padding:"1.4rem",border:`1px solid ${C.border}`,marginTop:"2rem" }}>
            <h4 style={{ color:C.navy,fontWeight:700,fontSize:"0.86rem",margin:"0 0 1rem" }}>Complaint Resolution</h4>
            {["Submit via email or helpline","Complaint logged & acknowledged","Team reviews — may request more info","Resolution update within timeline","Unresolved matters escalated"].map((s,i) => (
              <div key={i} style={{ display:"flex",gap:9,alignItems:"flex-start",marginBottom:"0.55rem" }}>
                <div style={{ width:19,height:19,borderRadius:"50%",background:C.green,color:"#fff",fontSize:"0.6rem",fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{i+1}</div>
                <span style={{ color:C.slate,fontSize:"0.79rem",lineHeight:1.55 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MainApp() {
  const location = useLocation();
  const [page,setPage]=useState(location.state?.page || "Home");
  useEffect(() => { window.scrollTo({ top:0,behavior:"smooth" }); },[page]);
  return (
    <div style={{ minHeight:"100vh",display:"flex",flexDirection:"column" }}>
      <Navbar page={page} setPage={setPage}/>
      <main style={{ flex:1,paddingTop:66 }}>
        {page==="Home" && <HomePage setPage={setPage}/>}
        {page==="About Us" && <AboutPage/>}
        {page==="Products" && <ProductsPage setPage={setPage}/>}
        {page==="How It Works" && <HowItWorksPage setPage={setPage}/>}
        {page==="Calculator" && <CalculatorPage/>}
        {page==="FAQs" && <FAQsPage setPage={setPage}/>}
        {page==="Contact" && <ContactPage/>}
      </main>
      <Footer setPage={setPage}/>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>}/>
    </Routes>

);
}
