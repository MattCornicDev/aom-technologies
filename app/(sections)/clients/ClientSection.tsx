"use client";
import Image from "next/image";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="py-28 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">

        {/* Heading */}
        <h4 className="uppercase text-[#007ee5] text-2xl md:text-3xl font-semibold tracking-wide mb-6">
          Ils nous font confiance
        </h4>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-16">
          Nous accompagnons des entreprises nationales et régionales dans leurs projets
          d’électricité, télécommunications, IRVE et solutions techniques.
        </p>

        {/* Logos grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-12 
          md:gap-16 
          items-center 
          justify-center
        ">

          {/* Logo 1 */}
          <div className="flex justify-center">
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src="/images/SFR_logo_2014.png"
                alt="SFR"
                width={150}
                height={80}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Logo 2 */}
          <div className="flex justify-center">
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src="/images/logos/edf-logo.webp"
                alt="EDF"
                width={150}
                height={80}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Logo 3 */}
          <div className="flex justify-center">
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src="/images/logos/Carglass_logo.svg"
                alt="Carglass"
                width={150}
                height={80}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Logo 4 */}
          <div className="flex justify-center">
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <Image
                src="/images/logos/Logo_zeborne.svg"
                alt="Zeborne"
                width={150}
                height={80}
                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
