"use client";
import { useEffect, useState } from "react";
import VantaNet from "@/components/VantaNet";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.6);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br
        from-[#000814]
        via-[#001d3d]
        to-[#007ee5]
        bg-[length:200%_200%]
        animate-gradientFlow
      "
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {/* Effet électrique */}
      <div className="absolute inset-0">
        <VantaNet />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          AOM Technologie
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Solutions électriques professionnelles & installations de qualité.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 bg-[#007ee5] text-white rounded-lg font-semibold hover:bg-[#0090ff] transition"
        >
          Nous contacter
        </a>
      </div>
    </section>
  );
}
