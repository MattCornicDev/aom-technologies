import type { Metadata } from "next";
import LogoWithRings from "@/components/LogoWithRings";

export const metadata: Metadata = {
  title: "Mentions légales – AOM Technologies & Services",
  description:
    "Mentions légales du site AOM Technologies & Services : éditeur, hébergeur, données personnelles, cookies, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
        Mentions légales
      </h1>

<div className="absolute top-110 -z-10 opacity-[0.1] pointer-events-none scale-[5] blur-[1px]">
        <LogoWithRings />
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. Informations sur l’entreprise
        </h2>
        <p>
          <strong>AOM Technologies &amp; Services</strong>
          <br />
          Entreprise spécialisée dans l&apos;électricité, les bornes de recharge
          et les services techniques.
          <br />
          Siège social : Denain, Hauts-de-France, France
          <br />
          Statut : Société enregistrée en France
          <br />
          SIRET : <span className="italic">À compléter</span>
          <br />
          Numéro TVA intracommunautaire :{" "}
          <span className="italic">À compléter</span>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">2. Éditeur du site</h2>
        <p>
          Le présent site est édité par :
          <br />
          <strong>AOM Technologies &amp; Services</strong>
          <br />
          Responsable de la publication :{" "}
          <span className="italic">À compléter</span> (gérant de
          l&apos;entreprise)
        </p>
        <p>
          Contact :
          <br />
          Téléphone : <span className="italic">À compléter</span>
          <br />
          Email : <span className="italic">À compléter</span>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">3. Hébergement</h2>
        <p>
          Le site est hébergé par :
          <br />
          <strong>Vercel Inc.</strong>
          <br />
          340 S Lemon Ave #4133, Walnut, CA 91789, USA
          <br />
          Site web :{" "}
          <a
            href="https://vercel.com"
            className="text-blue-600 underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">4. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu présent sur ce site (textes, images,
          vidéos, logos, éléments graphiques, code, etc.) est protégé par le
          droit d&apos;auteur et la législation française en vigueur. Toute
          reproduction, distribution, modification ou adaptation, totale ou
          partielle, est strictement interdite sans autorisation écrite
          préalable.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">5. Données personnelles</h2>
        <p>Conformément au RGPD et à la loi Informatique et Libertés :</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Les données collectées via les formulaires (contact, devis, etc.)
            sont utilisées uniquement pour répondre aux demandes.
          </li>
          <li>
            Aucune donnée n&apos;est vendue ou transmise à des tiers sans
            consentement.
          </li>
          <li>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données.
          </li>
        </ul>
        <p>
          Pour exercer vos droits :{" "}
          <span className="italic">adresse email à compléter</span>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">6. Cookies</h2>
        <p>Le site peut utiliser des cookies pour :</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>améliorer l&apos;expérience utilisateur,</li>
          <li>analyser la fréquentation,</li>
          <li>assurer le bon fonctionnement du site.</li>
        </ul>
        <p>
          Vous pouvez gérer vos préférences via les paramètres de votre
          navigateur ou via le bandeau de gestion des cookies lorsqu&apos;il est
          présent.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">7. Responsabilité</h2>
        <p>
          AOM Technologies &amp; Services s&apos;efforce de fournir des
          informations exactes et à jour. Toutefois, l&apos;entreprise ne
          saurait être tenue responsable :
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>d&apos;erreurs ou omissions,</li>
          <li>d&apos;une indisponibilité temporaire du site,</li>
          <li>de tout dommage résultant de l&apos;utilisation du site.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">8. Liens externes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. AOM Technologies
          &amp; Services n&apos;est pas responsable du contenu de ces sites
          externes ni des éventuels dommages pouvant résulter de leur
          consultation.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">9. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige, et à défaut de résolution amiable, les tribunaux
          français seront seuls compétents.
        </p>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Document à compléter avec les informations exactes de l&apos;entreprise
        (SIRET, contact, responsable, etc.).
      </p>
    </main>
  );
}
