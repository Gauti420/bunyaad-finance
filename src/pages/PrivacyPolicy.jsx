import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText, Zap, Users, Lock, CheckCircle, RefreshCw, Shield, MessageSquare,
} from "lucide-react";
import { C, F, useIsMobile } from "../lib/theme.js";
import { Navbar, PageHero, Footer } from "../components/Layout.jsx";

const PRIVACY_SECTIONS = [
  { icon:<FileText size={20}/>,title:"Information We Collect",body:"We may collect personal, business, and financial information you provide directly through the Bunyaad Finance app or website. This includes your name, contact details, CNIC/business registration information, banking and settlement data, transaction history, and device or usage information required to assess and process your financing application." },
  { icon:<Zap size={20}/>,title:"How We Use Your Information",body:"Your information is used to verify your identity, assess eligibility for financing products, process applications, manage repayments, communicate with you about your account, and comply with applicable regulatory and legal requirements." },
  { icon:<Users size={20}/>,title:"Sharing & Disclosure",body:"We do not sell your personal information. Information may be shared with Credsys (the licensed NBFC operating our financing products), regulators, credit bureaus, payment partners, and service providers strictly for the purpose of processing your application, enabling repayment, or meeting legal and regulatory obligations." },
  { icon:<Lock size={20}/>,title:"Data Security",body:"We apply reasonable technical and organizational safeguards to protect your information from unauthorized access, alteration, or disclosure. While we take data protection seriously, no method of digital transmission or storage can be guaranteed to be completely secure." },
  { icon:<CheckCircle size={20}/>,title:"Your Rights",body:"You may request access to, correction of, or deletion of your personal information, subject to our regulatory record-keeping obligations. You can reach out through our Contact page to exercise these rights." },
  { icon:<RefreshCw size={20}/>,title:"Data Retention",body:"We retain personal and financial information for as long as necessary to fulfil the purposes described in this policy, and as required under applicable NBFC regulatory and record-keeping requirements." },
  { icon:<Shield size={20}/>,title:"Changes to This Policy",body:"We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Continued use of the app or website after changes are posted constitutes acceptance of the revised policy." },
];

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const goToPage = (p) => navigate("/", { state: { page: p } });

  useEffect(() => { window.scrollTo({ top:0,behavior:"smooth" }); },[]);

  return (
    <div style={{ minHeight:"100vh",display:"flex",flexDirection:"column" }}>
      <Navbar page={null} setPage={goToPage}/>
      <main style={{ flex:1,paddingTop:66 }}>
        <PageHero tag="PRIVACY POLICY" title="Your privacy matters to us" sub="This Privacy Policy explains how Bunyaad Finance, operated by Credsys, collects, uses, and protects your personal information. Last updated: August 2026."/>
        <section style={{ padding: isMobile ? "3rem 1rem" : "5rem 1.5rem",background:"#fff",fontFamily:F }}>
          <div style={{ maxWidth:820,margin:"0 auto" }}>
            <div style={{ display:"flex",flexDirection:"column",gap:"1rem" }}>
              {PRIVACY_SECTIONS.map(({ icon,title,body }) => (
                <div key={title} style={{ background:C.light,borderRadius:14,padding:"1.5rem",border:`1px solid ${C.border}`,display:"flex",gap:"1rem",alignItems:"flex-start" }}>
                  <div style={{ width:42,height:42,borderRadius:10,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",color:C.green,flexShrink:0,border:`1px solid ${C.border}` }}>{icon}</div>
                  <div>
                    <h3 style={{ color:C.navy,fontWeight:700,fontSize:"0.95rem",margin:"0 0 0.5rem" }}>{title}</h3>
                    <p style={{ color:C.slate,fontSize:"0.87rem",lineHeight:1.78,margin:0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop:"2.5rem",background:`linear-gradient(135deg,${C.navy},${C.navyL})`,borderRadius:14,padding:"1.4rem 2rem",display:"flex",alignItems:"center",gap:"1rem" }}>
              <MessageSquare size={20} color={C.green} style={{ flexShrink:0 }}/>
              <p style={{ color:"rgba(255,255,255,0.72)",fontSize:"0.83rem",lineHeight:1.65,margin:0 }}>
                Questions about this policy? <span onClick={() => goToPage("Contact")} style={{ color:"#fff",fontWeight:700,cursor:"pointer",textDecoration:"underline" }}>Contact our support team.</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer setPage={goToPage}/>
    </div>
  );
}
