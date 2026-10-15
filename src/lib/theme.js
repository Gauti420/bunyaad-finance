import { useState, useEffect } from "react";

export const C = {
  navy: "#0A1225", navyD: "#0A1225", navyL: "#006DAF",
  green: "#13b24b", greenD: "#0e9040", greenL: "#7EE27E",
  teal: "#0073E6", slate: "#5E6B80", light: "#F4F6F5",
  white: "#ffffff", border: "#E3E8E6", borderStrong: "#CFD6D3",
  muted: "#5E6B80", mutedBg: "#E3E8E6",
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
