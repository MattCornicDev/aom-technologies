"use client";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

          {/* LEFT — LOGO AOM */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/LOGO-AOM-CYMK-01.svg"
              alt="AOM logo"
              width={110}
              height={110}
              className="object-contain"
            />
            <p className="text-[14px] text-gray-600 mt-4 max-w-xs text-center md:text-left">
              AOM Technologies & Services — votre partenaire en électricité,
              télécommunications, IRVE et énergies renouvelables.
            </p>
          </div>

          {/* CENTER — CERTIFICATIONS */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-[14px] text-gray-700 font-semibold uppercase tracking-wide">
              Certifications
            </h4>

            <div className="flex items-center gap-6">
              <Image
                src="/images/certif1.png"
                alt="Certification 1"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src="/images/certif2.png"
                alt="Certification 2"
                width={70}
                height={70}
                className="object-contain"
              />
              <Image
                src="/images/certif3.png"
                alt="Certification 3"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT — CONTACT */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-[14px] text-gray-700 font-semibold uppercase tracking-wide">
              Contact
            </h4>

            <p className="text-[14px] text-gray-600 mt-2">
              06 00 00 00 00<br />
              contact@aom-ts.fr<br />
              59220 Denain
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#e5e5e5] my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* COPYRIGHT */}
          <p className="text-[#9a9a9a] text-[12px] tracking-wide">
            © {new Date().getFullYear()} AOM Technologies & Services — Tous droits réservés.
          </p>

          {/* BACK TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#007de4] uppercase text-[11px] flex items-center gap-2 hover:opacity-80 transition"
          >
            Retour en haut
            <FaArrowUp className="text-[#007de4] text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}
