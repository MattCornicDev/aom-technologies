"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative 
        bg-gradient-to-br
        from-[#000816]
        via-[#001d3d]
        to-[#007ee5]
        bg-[length:200%_200%]
        animate-gradientFlow
        pt-8
        pb-16
        md:pt-16
        md:pb-32
        overflow-hidden
      "
    >
      {/* Image flottante à droite (desktop only) */}
      <div className="hidden md:block absolute top-1/2 right-6 -translate-y-1/2 w-[50%] max-w-[700px]">
        <Image
          src="/images/borne-recharge.jpg"
          alt="borne de recharge"
          width={1000}
          height={860}
          className="w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12">
        <div className="w-full md:w-1/2 md:pr-8 lg:pr-12">
          <header>
            <h3
              className="
                uppercase 
                text-[#007ee5] 
                font-semibold 
                text-2xl
                sm:text-3xl
                md:text-4xl 
                mb-6
                md:mb-10
              "
            >
              Qui sommes‑nous
            </h3>
          </header>

          <p className="text-base sm:text-lg md:text-[21px] leading-relaxed text-white mb-6">
            Implantée dans les Hauts-de-France, AOM Technologies & Services est
            une entreprise d’électricité générale spécialisée dans la conception,
            le déploiement, la gestion et les raccordements de technologies,
            notamment dans le domaine de l’infrastructure de recharge pour
            véhicules électriques (IRVE), des énergies renouvelables, de la fibre
            optique et des télécommunications.
          </p>

          <p className="text-base sm:text-lg md:text-[21px] leading-relaxed text-white mb-6">
            Soucieuse de transmettre son savoir-faire et de former les
            professionnels de demain, AOM a également créé son propre centre de
            formation, dédié au développement des compétences dans ces secteurs
            d’avenir.
          </p>

          <p className="text-base sm:text-lg md:text-[21px] leading-relaxed text-white">
            Avec notre expertise pointue et nos compétences reconnues, nous vous
            assurons le succès de vos initiatives !
          </p>
        </div>
      </div>
    </section>
  );
}
