import { FaCheckCircle, FaQuestionCircle, FaShieldAlt, FaTruck } from "react-icons/fa";
import Logo from "@/components/Logo";

const boutiqueLinks = [
  { href: "#products", label: "Nos bornes" },
  { href: "#installation", label: "Installation IRVE" },
  { href: "/irve#devis", label: "Demander un devis" },
];

export default function BoutiqueFooter() {
  return (
    <footer className="border-t border-[#d8d8ce] bg-[#102d35] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-16">
        <div>
          <a href="/" aria-label="Retour à l'accueil" className="inline-flex">
            <Logo size="lg" />
          </a>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#d7e85b]">La boutique AOM</p>
          <h2 className="mt-3 text-2xl font-semibold">Rechargez en toute confiance.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Des équipements sélectionnés et une installation IRVE adaptée à votre projet.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d7e85b]">
            Boutique
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {boutiqueLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#d7e85b]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d7e85b]">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><FaTruck className="mt-1 shrink-0 text-[#d7e85b]" /> Livraison dans toute la France</li>
            <li>
              <a href="/boutique/informations#certification-irve" className="flex gap-2 transition hover:text-[#d7e85b]">
                <FaShieldAlt className="mt-1 shrink-0 text-[#d7e85b]" /> Installation certifiée IRVE
              </a>
            </li>
            <li>
              <a href="/boutique/informations" className="flex gap-2 transition hover:text-[#d7e85b]">
                <FaCheckCircle className="mt-1 shrink-0 text-[#d7e85b]" /> garantie et SAV
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#d7e85b]">
            Besoin d&apos;aide ?
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href="/boutique/faq" className="flex gap-2 transition hover:text-[#d7e85b]">
                <FaQuestionCircle className="mt-1 shrink-0 text-[#d7e85b]" /> FAQ et accompagnement
              </a>
            </li>
            <li><a href="/boutique/suivi-commande" className="transition hover:text-[#d7e85b]">Suivre ma commande</a></li>
            <li><a href="mailto:contact@aomtechnologies.com" className="transition hover:text-[#d7e85b]">contact@aomtechnologies.com</a></li>
            <li><a href="tel:+33327436418" className="transition hover:text-[#d7e85b]">+33 (0)3 27 43 64 18</a></li>
            <li className="pt-2 text-xs leading-5 text-slate-400">
              <span className="font-semibold text-slate-300">Horaires</span><br />
              Lundi à vendredi : 08:00–12:00, 13:00–18:00<br />
              Samedi : 08:00–12:00, 13:00–18:00<br />
              Dimanche : fermé
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <p>Paiement sécurisé et devis confirmé après étude de votre installation.</p>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="transition hover:text-white">Mentions légales</a>
            <a href="/politique" className="transition hover:text-white">Conditions et politique</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
