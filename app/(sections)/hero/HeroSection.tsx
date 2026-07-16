"use client";

import VantaNet from "@/components/VantaNet";
import LogoWithRings from "@/components/LogoWithRings";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative w-full h-screen flex items-center justify-start overflow-hidden
        bg-gradient-to-br
        from-[#000814]
        via-[#001d3d]
        to-[#007ee5]
        bg-[length:200%_200%]
        animate-gradientFlow
      "
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <LogoWithRings />
      </div>

      {/* Glow électrique */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,126,229,0.35), transparent 70%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Texte en arrière-plan derrière VantaNet */}
      <div
        className={`${orbitron.className} absolute inset-0 flex items-center justify-center pointer-events-none`}
      >
        <h2
          className={`
            text-[40px]
            md:text-[150px]
            font-extrabold
            text-white/80
            leading-tight
            text-center
          `}
        >
          AOM<br />TECHNOLOGIES<br />&<br />SERVICES
        </h2>
      </div>

      {/* Effet électrique */}
      <div className="absolute inset-0">
        <VantaNet />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
}
