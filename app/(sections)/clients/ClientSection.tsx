"use client";
import Image from "next/image";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="py-28 md:py-32 bg-[#f8f9fb]"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">

        {/* Heading */}
        <h4 className="uppercase text-[#007ee5] text-2xl md:text-3xl font-semibold tracking-wide mb-6">
          Ils nous font confiance
        </h4>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-16">
          Nous accompagnons des entreprises nationales et régionales dans leurs projets
          d’électricité, télécommunications, IRVE et solutions techniques.
        </p>

        {/* Logos grid */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            gap-12 
            md:gap-16 
            items-center 
            justify-center
          "
        >

          {[
            { src: "/images/logos/SFR_logo.webp", alt: "SFR" },
            { src: "/images/logos/edf-logo.webp", alt: "EDF" },
            { src: "/images/logos/Carglass_logo.svg", alt: "Carglass" },
            { src: "/images/logos/Logo_zeborne.svg", alt: "Zeborne" },
          ].map((logo, i) => (
            <div
              key={i}
              className={`
                flex justify-center opacity-0
                ${i % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"}
              `}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div
                className="
                  p-6 rounded-2xl bg-white/10 backdrop-blur-md
                  shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                  border border-white/20
                  hover:border-[#007ee5]/60
                  hover:shadow-[0_8px_30px_rgba(0,126,229,0.35)]
                  transition-all duration-500
                  group
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  className="
                    opacity-90 group-hover:opacity-100
                    transition-all duration-500
                    group-hover:scale-110
                    drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]
                  "
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
