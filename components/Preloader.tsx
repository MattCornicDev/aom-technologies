"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      
      {/* Loader */}
      <div className="relative w-14 h-14 animate-[spin_1s_linear_infinite] rotate-45">
        <span className="absolute inset-0 rounded-full border-4 border-[#a9be51] animate-[pulse_0.5s_ease_infinite_alternate]"></span>
        <span className="absolute inset-0 rounded-full border-4 border-black animate-[pulse_0.5s_ease_infinite_alternate] delay-200"></span>
      </div>

      {/* Logo optionnel */}
      <Image
        src="/images/logo.png"
        alt="logo"
        width={90}
        height={90}
        className="mt-6"
      />

      {/* Texte animé */}
      <p className="text-[#007ee5] text-xs tracking-widest mt-4 animate-[bounce_0.6s_ease_infinite_alternate]">
        Loading...
      </p>
    </div>
  );
}
