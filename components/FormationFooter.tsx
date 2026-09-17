import Link from "next/link";
import Image from "next/image";
import LogoWithRings from "@/components/LogoWithRings";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

export default function FormationFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-300 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.4fr_1fr] lg:items-end">
        <div>
          <div className="inline-flex">
            <LogoWithRings />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            Formations pratiques en développement web, web mobile, Git, Docker, IA et cybersécurité.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
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
        <div className="text-sm lg:text-right">
          <p className="font-semibold text-cyan-300">Informations</p>
          <div className="mt-3 space-y-2 text-slate-400">
            <Link href="/mentions-legales" className="block transition hover:text-cyan-300">Mentions légales</Link>
            <Link href="/confidentialite" className="block transition hover:text-cyan-300">Confidentialité</Link>
            <Link href="/politique" className="block transition hover:text-cyan-300">Politique</Link>
            <Link href="/cookies" className="block transition hover:text-cyan-300">Cookies</Link>
          </div>
        </div>
        <div className="text-sm leading-6 lg:text-right">
          <p className="font-semibold text-cyan-300">Contact</p>
          <div className="mt-3 space-y-2 text-slate-400">
            <a href="tel:+33327436418" className="flex items-center gap-2 transition hover:text-cyan-300 lg:justify-end">
              <FaPhoneAlt className="text-cyan-300" /> +33 (0)3 27 43 64 18
            </a>
            <a href="tel:+33767859581" className="flex items-center gap-2 transition hover:text-cyan-300 lg:justify-end">
              <FaMobileAlt className="text-cyan-300" /> +33 (0)7 67 85 95 81
            </a>
            <a href="mailto:contact@aomtechnologies.com" className="flex items-center gap-2 transition hover:text-cyan-300 lg:justify-end">
              <FaEnvelope className="text-cyan-300" /> contact@aomtechnologies.com
            </a>
            <div className="flex items-start gap-2 lg:justify-end">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-cyan-300" />
              <span>9 rue des entrepreneurs<br />59124 Escaudain</span>
            </div>
            <a href="https://fr.linkedin.com/in/camel-tiboura-8ba352ab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-cyan-300 lg:justify-end">
              <FaLinkedin className="text-cyan-300" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-slate-800 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AOM Technologies &amp; Services — Tous droits réservés.</p>
        <Link href="/mentions-legales" className="transition hover:text-cyan-300">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
