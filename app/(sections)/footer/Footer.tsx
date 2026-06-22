"use client";

import Image from "next/image";
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COL 1 — LOGO + TEXTE */}
          <div>
            <Logo size="md" />
            <p className="text-[14px] text-gray-600 mt-4 max-w-xs text-center md:text-left mx-auto md:mx-0">
              AOM Technologies & Services — votre partenaire en électricité,
              télécommunications, IRVE et énergies renouvelables.
            </p>
          </div>

          {/* COL 2 — CERTIFICATIONS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-gray-700 font-semibold uppercase tracking-wide mb-4">
              Certifications
            </h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Image src="/images/logos/qualiopi.webp" alt="Certification Qualiopi" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/Logo-qualifelec.svg" alt="Certification Qualifelec" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/Logo-irve.webp" alt="Certification IRVE" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/artisan-reference-MAAF.webp" alt="Artisan Référence MAAF" width={60} height={60} className="object-contain" />
            </div>
          </div>

          {/* COL 3 — MENU LÉGAL */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-gray-700 font-semibold uppercase tracking-wide mb-4">
              Informations
            </h4>

            <ul className="space-y-2 text-[14px] text-gray-600">
              <li><a href="#" className="hover:text-[#007de4] transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-[#007de4] transition">Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#007de4] transition">Politique</a></li>
              <li><a href="#" className="hover:text-[#007de4] transition">Cookies</a></li>
            </ul>
          </div>

          {/* COL 4 — CONTACT AVEC ICONES */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-[14px] text-gray-700 font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-[14px] text-gray-600 leading-relaxed">

              {/* Téléphone */}
              <div className="flex items-center md:justify-end gap-3">
                <FaPhoneAlt className="text-[#007de4] text-lg" />
                <span>03 27 43 64 18</span>
              </div>

              {/* Email */}
              <div className="flex items-center md:justify-end gap-3">
                <FaEnvelope className="text-[#007de4] text-lg" />
                <span>contact@aomtechnologies.com</span>
              </div>

              {/* Adresse */}
              <div className="flex items-center md:justify-end gap-3">
                <FaMapMarkerAlt className="text-[#007de4] text-lg" />
                <span>59124 Escaudain</span>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#e5e5e5] my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9a9a9a] text-[12px] tracking-wide">
            © {new Date().getFullYear()} AOM Technologies & Services — Tous droits réservés.
          </p>

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
