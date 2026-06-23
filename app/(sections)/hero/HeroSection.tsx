"use client";
import VantaNet from "@/components/VantaNet";
import LogoWithRings from "@/components/LogoWithRings";

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
        {/* Logo en haut à gauche */}
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

      {/* Effet électrique */}
      <div className="absolute inset-0">
        <VantaNet />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu */}
<div className="relative z-10 text-start text-[#007ee5] px-6">
  <h1 className="text-4xl md:text-6xl font-extrabold">
    AOM TECHNOLOGIES <br />
    & <br />
    SERVICES
  </h1>

  <p className="mt-4 text-lg md:text-xl max-w-2xl">
    Solutions électriques professionnelles & installations de qualité.
  </p>

  <a
    href="#contact"
    className="inline-block mt-8 px-8 py-3 bg-[#e0720b] text-[#ffffff] rounded-lg font-semibold hover:bg-[#fc7a00] transition"
  >
    Nous contacter
  </a>
</div>

    </section>
  );
}
