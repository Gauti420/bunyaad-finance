import { useState, useEffect } from "react";

export const C = {
  navy: "#1c2554", navyD: "#111830", navyL: "#253580",
  green: "#13b24b", greenD: "#0e9040", greenL: "#1ecc5a",
  teal: "#0891b2", slate: "#64748b", light: "#f0f4ff",
  white: "#ffffff", border: "rgba(28,37,84,0.10)",
  amber: "#f59e0b", amberBg: "rgba(245,158,11,0.12)",
};
export const F = "'Poppins', sans-serif";

export const PAGES = ["Home","About Us","Products","How It Works","Calculator","FAQs","Contact"];

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export function useIsTablet(breakpoint = 1024) {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isTablet;
}
