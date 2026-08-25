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
        className={`${orbitron.className} hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-40`}
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
      <div className="hidden md:block absolute inset-0 h-full pointer-events-none z-0">
        <VantaNet />
      </div>

      <div className="md:hidden relative z-10 flex min-h-screen w-full items-center px-6 pt-24 pb-12">
        <div className="w-full max-w-sm">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#007ee5]">
            AOM Technologies & Services
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#111827]">
            Des solutions techniques pour vos projets.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600">
            Des solutions techniques fiables pour vos projets, de l’installation
            au raccordement.
          </p>

          <div className="mt-8 border-l-2 border-[#007ee5] pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-800">
              Nos expertises
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              IRVE <span className="text-[#007ee5]">•</span> Électricité générale
              <br />
              Fibre optique <span className="text-[#007ee5]">•</span> Énergies renouvelables
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Intervention dans les Hauts-de-France
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block bg-[#007ee5] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#006ac2]"
          >
            Demander un devis
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>
    </section>
  );
}
