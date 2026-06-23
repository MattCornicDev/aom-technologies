"use client";

import Image from "next/image";
import LogoWithRings from "@/components/LogoWithRings";
import {
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaLinkedin,
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* COL 1 — LOGO + TEXTE */}
          <div className="flex flex-col items-center md:items-start">
            <LogoWithRings />
            <p className="text-[14px] text-gray-600 mt-4 max-w-xs text-center md:text-left">
              AOM Technologies & Services — votre partenaire en électricité,
              télécommunications, IRVE et énergies renouvelables.
            </p>
          </div>

          {/* COL 2 — CERTIFICATIONS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-[#007de4] font-semibold uppercase tracking-wide mb-4">
              Certifications
            </h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Image src="/images/logos/qualiopi.webp" alt="Certification Qualiopi" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/Logo-qualifelec.svg" alt="Certification Qualifelec" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/logo-irve.webp" alt="Certification IRVE" width={60} height={60} className="object-contain" />
              <Image src="/images/logos/artisan-reference-MAAF.webp" alt="Artisan Référence MAAF" width={60} height={60} className="object-contain" />
            </div>
          </div>

          {/* COL 3 — MENU LÉGAL */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[14px] text-[#007de4] font-semibold uppercase tracking-wide mb-4">
              Informations
            </h4>

            <ul className="space-y-2 text-[14px] text-gray-600">
              <li><a href="/mentions-legales" className="hover:text-[#007de4] transition">Mentions légales</a></li>
              <li><a href="/confidentialite" className="hover:text-[#007de4] transition">Confidentialité</a></li>
              <li><a href="/politique" className="hover:text-[#007de4] transition">Politique</a></li>
              <li><a href="/cookies" className="hover:text-[#007de4] transition">Cookies</a></li>
            </ul>
          </div>

          {/* COL 4 — CONTACT + LINKEDIN */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-[14px] text-[#007de4] font-semibold uppercase tracking-wide mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">

              {/* Téléphones */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#007de4] text-lg" />
                  <span>03 27 43 64 18</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-[#007de4] text-xl" />
                  <span>07 67 85 95 81</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center md:justify-end gap-3">
                <FaEnvelope className="text-[#007de4] text-lg" />
                <span>contact@aomtechnologies.com</span>
              </div>

              {/* Adresse */}
              <div className="flex items-center md:justify-end gap-3 max-w-[220px] md:max-w-[260px]">
                <FaMapMarkerAlt className="text-[#007de4] text-lg" />
                <span>
                  Z.A des six Mariannes<br />
                  9 rue des entrepreneurs<br />
                  59124 Escaudain
                </span>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center md:justify-end gap-3">
                <a
                  href="https://fr.linkedin.com/in/camel-tiboura-8ba352ab" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#007de4] transition"
                >
                  <FaLinkedin className="text-[#007de4] text-xl" />
                  <span className="text-[14px]">LinkedIn</span>
                </a>
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
