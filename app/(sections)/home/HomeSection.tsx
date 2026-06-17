"use client";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-end pb-40 md:pb-60 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/borne-recharge.jpg"
          alt="arrière plan"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <h2
          className="
            font-semibold 
            text-[4rem] 
            sm:text-[6rem] 
            md:text-[8rem] 
            lg:text-[10rem] 
            xl:text-[12rem]
            leading-[1.1]
            bg-gradient-to-r from-[#007ee5] to-[#80c3fa]
            bg-clip-text 
            text-transparent
            pb-6
          "
        >
          La technologie <br /> à votre service !
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-6 mb-8 max-w-xl">
          Découvrez nos solutions innovantes pour l’électromobilité, les
          télécommunications et les énergies renouvelables.
        </p>

        <a
          href="/images/brochure.pdf"
          className="
            inline-block 
            bg-[#007ee5] 
            text-white 
            px-6 
            py-3 
            rounded-full 
            text-sm 
            font-semibold 
            uppercase 
            tracking-wide 
            hover:bg-[#006ac2] 
            transition
          "
        >
          Télécharger la brochure
        </a>
      </div>
    </section>
  );
}
