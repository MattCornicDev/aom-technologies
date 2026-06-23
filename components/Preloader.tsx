"use client";
import { useEffect, useState } from "react";
import LogoWithRings from "@/components/LogoWithRings";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#000814] z-[9999] flex flex-col items-center justify-center">

      {/* Logo animé */}
      <div className="scale-125 animate-[fadeIn_1s_ease_forwards]">
        <LogoWithRings />
      </div>

      {/* Texte animé */}
      <p className="text-[#007ee5] text-xs tracking-widest mt-6 animate-[pulse_1s_ease_infinite]">
        Loading...
      </p>
    </div>
  );
}
