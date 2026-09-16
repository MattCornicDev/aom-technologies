import Link from "next/link";
import Image from "next/image";
import LogoWithRings from "@/components/LogoWithRings";

export default function FormationFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-slate-300 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
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
        <div className="text-sm sm:text-right">
          <p className="font-semibold text-cyan-300">AOM Formation</p>
          <Link href="/#contact" className="mt-2 inline-block transition hover:text-cyan-300">
            Demander des informations
          </Link>
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
