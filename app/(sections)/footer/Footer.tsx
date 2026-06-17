"use client";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] pt-20 pb-6">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Logo + texte */}
          <div className="AOM-text max-w-md">
            <div className="flex items-start gap-4">
              <Image
                src="/images/LOGO-AOM-CYMK-01.svg"
                alt="AOM logo"
                width={99}
                height={99}
                className="object-contain"
              />
              <p className="text-[14px] text-gray-600 leading-relaxed">
                AOM Technologies & Services — votre partenaire dans l’électricité,
                les télécommunications, les énergies renouvelables et la formation
                professionnelle.
              </p>
            </div>
          </div>

          {/* Menu */}
          <ul className="footer-menu flex flex-wrap justify-center md:justify-end gap-4">
            <li>
              <a
                href="#home"
                className="text-[14px] text-[#b6b6b6] border-r border-[#b6b6b6] pr-4"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[14px] text-[#b6b6b6] border-r border-[#b6b6b6] pr-4"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-[14px] text-[#b6b6b6] border-r border-[#b6b6b6] pr-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[14px] text-[#b6b6b6]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="footer-devider border-t border-[#efefef] my-10"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="copyright text-[#b6b6b6] text-[10px]">
            © {new Date().getFullYear()} AOM Technologies & Services — Tous droits réservés.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="back-top-btn text-[#007de4] uppercase text-[10px] flex items-center gap-2"
          >
            Retour en haut
            <FaArrowUp className="text-[#007de4] text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}
