"use client";

import { useEffect, useState } from "react";
import VantaNet from "@/components/VantaNet";
import LogoWithRings from "@/components/LogoWithRings";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const animatedPhrase = "La technologie à votre service";

export default function HeroSection() {
  const [typedPhrase, setTypedPhrase] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      characterIndex += 1;

      setTypedPhrase(animatedPhrase.slice(0, characterIndex));

      if (characterIndex === animatedPhrase.length) {
        return;
      }

      timeoutId = setTimeout(tick, 90);
    };

    timeoutId = setTimeout(tick, 400);

    return () => clearTimeout(timeoutId);
  }, []);

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
        className={`${orbitron.className} absolute inset-0 z-40 hidden flex-col items-center justify-center pointer-events-none md:flex`}
      >
        <h2
          className="
            text-[40px]
            md:text-[110px]
            font-extrabold
            text-blue-500
            leading-tight
            text-center
          "
        >
          AOM<br />TECHNOLOGIES<br />&<br />SERVICES
        </h2>
        <p className="absolute bottom-26 left-6 min-h-6 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#007ee5] sm:left-10 md:text-sm lg:left-16 lg:text-base">
          {typedPhrase}
          <span className="ml-1 inline-block animate-pulse">|</span>
        </p>
      </div>

      {/* Effet électrique */}
      <div className="hidden md:block absolute inset-0 h-full pointer-events-none z-0">
        <VantaNet />
      </div>

      <div className="md:hidden relative z-10 flex min-h-screen w-full items-center px-6 pt-24 pb-12">
        <div className="w-full max-w-sm">
          <h1 className="-translate-y-8 text-center text-4xl font-bold leading-tight text-[#111827]">
            AOM
            <br />
            <span className="mt-6 block whitespace-nowrap text-2xl">
              TECHNOLOGIES & SERVICES
            </span>
          </h1>
          <p className="mt-4 mb-6 min-h-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#007ee5]">
            {typedPhrase}
            <span className="ml-1 inline-block animate-pulse">|</span>
          </p>
          
          <p className="mt-5 mb-6 text-base leading-relaxed text-gray-600">
            
          </p>

          <div className="mt-8 border-l-2 border-[#007ee5] pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-800">
              Nos expertises
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Électricité générale <span className="text-[#007ee5]">•</span> IRVE
              <br />
              Fibre optique <span className="text-[#007ee5]">•</span> Énergies renouvelables
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Intervention dans les Hauts-de-France
            </p>
          </div>

        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>
    </section>
  );
}
