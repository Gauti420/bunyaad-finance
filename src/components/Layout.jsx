import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Menu, X, Download, Home, ChevronRight, Smartphone } from "lucide-react";
import { C, F, PAGES, useIsMobile } from "../lib/theme.js";

const LEGAL_ROUTES = {
  "Privacy Policy": "/privacy-policy",
  "Terms & Conditions": "/terms-and-conditions",
};

export function Logo({ dark = false }) {
  return (
    <div style={{ display:"flex",alignItems:"center",gap:10 }}>
      <svg width="38" height="38" viewBox="0 0 44 44">
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#0A1225"/><stop offset="1" stopColor="#006DAF"/></linearGradient>
          <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#006DAF"/><stop offset="1" stopColor="#13b24b"/></linearGradient>
        </defs>
        <rect x="2" y="5" width="26" height="3" rx="1.5" fill="url(#lg1)"/>
        <rect x="3" y="8" width="3" height="24" rx="1.5" fill="url(#lg1)"/>
        <rect x="9" y="11" width="3" height="21" rx="1.5" fill="url(#lg2)"/>
        <rect x="15" y="14" width="3" height="18" rx="1.5" fill="url(#lg2)"/>
        <rect x="21" y="17" width="3" height="15" rx="1.5" fill="url(#lg2)"/>
        <rect x="2" y="32" width="26" height="3" rx="1.5" fill="url(#lg1)"/>
        <circle cx="33" cy="9" r="4" fill="#13b24b"/>
        <circle cx="40" cy="5" r="2.5" fill="#13b24b" opacity="0.7"/>
        <circle cx="40" cy="13" r="2.5" fill="#0073E6" opacity="0.7"/>
      </svg>
      <div>
        <div style={{ fontFamily:F,fontWeight:800,fontSize:"1.05rem",lineHeight:1.1,color:dark?"#fff":C.navy,letterSpacing:"-0.02em" }}>
          Bunyaad<span style={{ color:C.green }}>Finance</span>
        </div>
        <div style={{ fontFamily:F,fontSize:"0.52rem",color:dark?"rgba(255,255,255,0.45)":C.slate,letterSpacing:"0.05em" }}>
          Aapke Karobaar Ki Bunyaad
        </div>
      </div>
    </div>
  );
}

export function ComingSoonModal({ open, onClose }) {
  if (!open) return null;
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(17,24,48,0.6)",
        backdropFilter: "blur(4px)",
        zIndex: 1200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "2.5rem 2rem",
          maxWidth: 380,
          width: "100%",
          textAlign: "center",
          fontFamily: F,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: C.slate,
          }}
        >
          <X size={20} />
        </button>
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "rgba(19,178,75,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
            color: C.green,
          }}
        >
          <Smartphone size={26} />
        </div>
        <h3 style={{ color: C.navy, fontSize: "1.15rem", fontWeight: 800, margin: "0 0 0.6rem" }}>
          Coming Soon
        </h3>
        <p style={{ color: C.slate, fontSize: "0.86rem", lineHeight: 1.65, margin: "0 0 1.5rem" }}>
          The Bunyaad Finance app is on its way.
        </p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: C.green,
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "11px 24px",
            fontSize: "0.85rem",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: F,
            width: "100%",
          }}
        >
          Got it
        </button>
      </div>
    </div>,
    document.body
  );
}

export function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        fontFamily: F,
        background: scrolled ? "rgba(17,24,48,0.97)" : C.navyD,
        backdropFilter: "blur(16px)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
        transition: "all .3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 66,
        }}
      >
        <button
          onClick={() => setPage("Home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <Logo dark />
        </button>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexWrap: "wrap" }}>
            {PAGES.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: F,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "6px 10px",
                  borderRadius: 6,
                  color: page === p ? C.green : "rgba(255,255,255,0.75)",
                  borderBottom: page === p ? `2px solid ${C.green}` : "2px solid transparent",
                }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setShowComingSoon(true)}
              style={{
                marginLeft: 6,
                backgroundColor: C.green,
                color: "#fff",
                border: "none",
                borderRadius: 7,
                padding: "8px 16px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: F,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Download size={16} />
              Download App
            </button>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            padding: "0.75rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            background: C.navyD,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {PAGES.map((p) => (
            <button
              key={p}
              onClick={() => {
                setPage(p);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                textAlign: "left",
                padding: "0.8rem 1rem",
                borderRadius: 8,
                fontFamily: F,
                cursor: "pointer",
              }}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => {
              setShowComingSoon(true);
              setMenuOpen(false);
            }}
            style={{
              backgroundColor: C.green,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.9rem 1rem",
              fontWeight: 700,
              fontFamily: F,
              cursor: "pointer",
            }}
          >
            Download App
          </button>
        </div>
      )}

      <ComingSoonModal open={showComingSoon} onClose={() => setShowComingSoon(false)} />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');*{box-sizing:border-box}body{margin:0;background:#F4F6F5;font-family:'Poppins',sans-serif}`}</style>
    </nav>
  );
}

export function Tag({ children, green=false }) {
  return (
    <div style={{ display:"inline-block",background:green?"rgba(19,178,75,0.12)":"rgba(10,18,37,0.08)",borderRadius:20,padding:"4px 14px",marginBottom:4 }}>
      <span style={{ color:green?C.greenD:C.navy,fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.08em",fontFamily:F }}>{children}</span>
    </div>
  );
}

export function PageHero({ tag,title,sub }) {
  return (
    <section style={{ padding:"6rem 1.5rem 4rem",background:`linear-gradient(135deg,${C.navyD},${C.navy})`,fontFamily:F,textAlign:"center" }}>
      <div style={{ maxWidth:"80&",margin:"0 auto" }}>
        <div style={{ marginBottom:"0.75rem" }}><Tag green>{tag}</Tag></div>
        <h1 style={{ color:"#fff",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:900,margin:"0 0 1rem",letterSpacing:"-0.03em" }}>{title}</h1>
        {sub && <p style={{ color:"rgba(255,255,255,0.62)",fontSize:"1.02rem",lineHeight:1.75,margin:0 }}>{sub}</p>}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items, onNavigate }) {
  return (
    <div style={{ background:C.light,borderBottom:`1px solid ${C.border}`,padding:"0.85rem 1.5rem",fontFamily:F }}>
      <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",gap:6,flexWrap:"wrap" }}>
        {items.map((item,i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.label} style={{ display:"inline-flex",alignItems:"center",gap:6 }}>
              {i > 0 && <ChevronRight size={13} color={C.slate} style={{ opacity:0.5 }}/>}
              {isLast ? (
                <span style={{ color:C.navy,fontSize:"0.78rem",fontWeight:600 }}>{item.label}</span>
              ) : (
                <button
                  onClick={() => onNavigate(item.page)}
                  style={{ background:"none",border:"none",padding:0,cursor:"pointer",color:C.slate,fontSize:"0.78rem",fontWeight:500,fontFamily:F,display:"inline-flex",alignItems:"center",gap:4 }}
                >
                  {i === 0 && <Home size={13}/>}
                  {item.label}
                </button>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Footer({ setPage }) {
  const navigate = useNavigate();
  return (
    <footer style={{ background:C.navyD,padding:"3.5rem 1.5rem 1.5rem",fontFamily:F }}>
      <div style={{ maxWidth:1180,margin:"0 auto" }}>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"2.5rem",marginBottom:"2.5rem" }}>
          <div>
            <Logo dark/>
            <p style={{ color:"rgba(255,255,255,0.4)",fontSize:"0.8rem",lineHeight:1.75,marginTop:"1rem",maxWidth:270 }}>Smart financing support for growing businesses. Operated by Credsys — Licensed NBFC.</p>
          </div>
          {[
            { title:"Pages", links:["Home","About Us","Products","How It Works","Calculator","FAQs","Contact"] },
            { title:"Legal", links:["Privacy Policy","Terms & Conditions"] },
            { title:"Contact", links:["Support@Bunyaadfinance.pk","Helpline: +92 323 5542403","Office: 4th Floor PMSTP Bahria University, Karachi Campus, 13th National Stadium Road Karachi, Pakistan. "] },
          ].map(({ title,links }) => (
            <div key={title}>
              <div style={{ color:C.green,fontSize:"0.66rem",fontWeight:700,letterSpacing:"0.08em",marginBottom:"1rem" }}>{title}</div>
              {links.map(l => {
                const clickable = PAGES.includes(l) || Boolean(LEGAL_ROUTES[l]);
                return (
                  <div
                    key={l}
                    onClick={() => {
                      if (PAGES.includes(l)) setPage(l);
                      else if (LEGAL_ROUTES[l]) navigate(LEGAL_ROUTES[l]);
                    }}
                    style={{ color:"rgba(255,255,255,0.42)",fontSize:"0.8rem",marginBottom:"0.5rem",cursor:clickable?"pointer":"default" }}
                  >
                    {l}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"1.5rem",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"0.75rem" }}>
          <p style={{ color:"rgba(255,255,255,0.22)",fontSize:"0.7rem",margin:0 }}>© 2026 Bunyaad Finance | Operated by Credsys — Licensed NBFC / Regulated Entity</p>
          <p style={{ color:"rgba(255,255,255,0.22)",fontSize:"0.68rem",margin:0 }}>For information purposes only. Subject to applicable terms, eligibility, and approval.</p>
        </div>
      </div>
    </footer>
  );
}
