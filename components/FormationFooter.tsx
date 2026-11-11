import Link from "next/link";
import Image from "next/image";
import LogoWithRings from "@/components/LogoWithRings";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

export default function FormationFooter() {
  return (
    <footer className="border-slate-800 bg-slate-150 px-6 py-12 text-black md:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.4fr_1fr] lg:items-start">
        <div>
          <div className="inline-flex">
            <LogoWithRings />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6">
            Formations pratiques en développement web, web mobile, Git, Docker, IA et cybersécurité.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4694]">
            Certifications
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation"
              target="_blank"
              rel="noreferrer"
              aria-label="En savoir plus sur la certification Qualiopi"
            >
              <Image src="/images/logos/qualiopi.webp" alt="Certification Qualiopi" width={110} height={74} className="object-contain" />
            </a>
            <a
              href="https://www.qualifelec.fr"
              target="_blank"
              rel="noreferrer"
              aria-label="Visiter le site de Qualifelec"
            >
              <Image src="/images/logos/qualifelec-irve.png" alt="Certification Qualifelec IRVE" width={90} height={90} className="object-contain" />
            </a>
            <Image src="/images/logos/artisan-reference-MAAF.webp" alt="Artisan Référence MAAF" width={85} height={55} className="object-contain" />
          </div>
        </div>
        <div className="text-left text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4694]">Informations</p>
          <div className="mt-3 space-y-2">
            <Link href="/mentions-legales" className="block transition hover:font-bold">Mentions légales</Link>
            <Link href="/confidentialite" className="block transition hover:font-bold">Confidentialité</Link>
            <Link href="/politique" className="block transition hover:font-bold">Politique</Link>
            <Link href="/cookies" className="block transition hover:font-bold">Cookies</Link>
          </div>
        </div>
        <div className="text-left text-sm leading-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4694]">Contact</p>
          <div className="mt-3 space-y-2">
            <a href="tel:+33327436418" className="flex items-center gap-2 transition hover:font-bold">
              <FaPhoneAlt className="text-[#1C4694]" /> +33 (0)3 27 43 64 18
            </a>
            <a href="tel:+33767859581" className="flex items-center gap-2 transition hover:font-bold">
              <FaMobileAlt className="text-[#1C4694]" /> +33 (0)7 67 85 95 81
            </a>
            <a href="mailto:contact@aomtechnologies.com" className="flex items-center gap-2 transition hover:font-bold">
              <FaEnvelope className="text-[#1C4694]" /> contact@aomtechnologies.com
            </a>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[#1C4694]" />
              <span>9 rue des entrepreneurs<br />59124 Escaudain</span>
            </div>
            <a href="https://fr.linkedin.com/in/camel-tiboura-8ba352ab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:font-bold">
              <FaLinkedin className="text-[#1C4694]" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-slate-800 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AOM Technologies &amp; Services — Tous droits réservés.</p>
        <Link href="/mentions-legales" className="transition hover:font-bold">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
