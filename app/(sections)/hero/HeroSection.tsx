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
        bg-white
      "
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <LogoWithRings />
      </div>

      {/* Glow électrique bleu */}
      <div
        className="absolute inset-0"
        style={{
          background: "",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Texte */}
      <div
        className={`${orbitron.className} absolute inset-0 flex items-center justify-center pointer-events-none z-40`}
      >
        <h2
          className="
            text-[40px]
            md:text-[150px]
            font-extrabold
            text-blue-500
            leading-tight
            text-center
          "
        >
          AOM<br />TECHNOLOGIES<br />&<br />SERVICES
        </h2>
      </div>

      {/* Effet électrique */}
      <div className="absolute inset-0 h-full pointer-events-none z-0">
        <VantaNet />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>
    </section>
  );
}
