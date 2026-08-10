import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, ExternalLink, MessageSquare } from "lucide-react";
import { C, F, useIsMobile } from "../lib/theme.js";
import { Navbar, PageHero, Footer, Breadcrumbs } from "../components/Layout.jsx";

const TNC_DOCS = {
  en: { label:"English", url:"https://mb-app-uat.credsys.net/static/tnc_eng.pdf" },
  ur: { label:"اردو", url:"https://mb-app-uat.credsys.net/static/tnc_urdu.pdf" },
};

export default function TermsAndConditionsPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const goToPage = (p) => navigate("/", { state: { page: p } });
  const [lang, setLang] = useState("en");
  const doc = TNC_DOCS[lang];

  useEffect(() => { window.scrollTo({ top:0,behavior:"smooth" }); },[]);

  return (
    <div style={{ minHeight:"100vh",display:"flex",flexDirection:"column" }}>
      <Navbar page={null} setPage={goToPage}/>
      <main style={{ flex:1,paddingTop:66 }}>
        <Breadcrumbs items={[{ label:"Home",page:"Home" },{ label:"Terms & Conditions",page:"Terms & Conditions" }]} onNavigate={goToPage}/>
        <PageHero tag="TERMS & CONDITIONS" title="Terms & Conditions" sub="Please read the official Terms & Conditions below before using the Bunyaad Finance platform or applying for any financing product."/>
        <section style={{ padding: isMobile ? "2rem 1rem 3rem" : "3rem 1.5rem 5rem",background:"#fff",fontFamily:F }}>
          <div style={{ maxWidth:960,margin:"0 auto" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",marginBottom:"1.25rem" }}>
              <div style={{ display:"inline-flex",background:C.light,borderRadius:10,padding:4,border:`1px solid ${C.border}` }}>
                {Object.entries(TNC_DOCS).map(([key,{ label }]) => (
                  <button
                    key={key}
                    onClick={() => setLang(key)}
                    style={{
                      fontFamily:F,
                      fontSize:"0.85rem",
                      fontWeight:700,
                      padding:"9px 22px",
                      borderRadius:8,
                      border:"none",
                      cursor:"pointer",
                      transition:"all .2s",
                      background:lang===key?C.navy:"transparent",
                      color:lang===key?"#fff":C.slate,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" download style={{ display:"inline-flex",alignItems:"center",gap:8,color:C.navy,border:`1.5px solid ${C.border}`,borderRadius:8,padding:"9px 18px",fontSize:"0.82rem",fontWeight:700,fontFamily:F,textDecoration:"none" }}>
                <Download size={15}/>Download PDF
              </a>
            </div>

            <div style={{ borderRadius:16,border:`1px solid ${C.border}`,overflow:"hidden",boxShadow:"0 10px 35px rgba(28,37,84,0.06)" }}>
              <iframe
                key={doc.url}
                src={doc.url}
                title={`Terms & Conditions (${doc.label})`}
                style={{ width:"100%",height: isMobile ? "70vh" : "85vh",border:"none",display:"block" }}
              />
            </div>
            <p style={{ color:C.slate,fontSize:"0.78rem",lineHeight:1.6,margin:"0.75rem 0 0",textAlign:"center" }}>
              Having trouble viewing the document? <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color:C.green,fontWeight:600,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:4 }}>Open in a new tab<ExternalLink size={12}/></a>
            </p>

            <div style={{ marginTop:"2.5rem",background:`linear-gradient(135deg,${C.navy},${C.navyL})`,borderRadius:14,padding:"1.4rem 2rem",display:"flex",alignItems:"center",gap:"1rem" }}>
              <MessageSquare size={20} color={C.green} style={{ flexShrink:0 }}/>
              <p style={{ color:"rgba(255,255,255,0.72)",fontSize:"0.83rem",lineHeight:1.65,margin:0 }}>
                Questions about these terms? <span onClick={() => goToPage("Contact")} style={{ color:"#fff",fontWeight:700,cursor:"pointer",textDecoration:"underline" }}>Contact our support team.</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer setPage={goToPage}/>
    </div>
  );
}
