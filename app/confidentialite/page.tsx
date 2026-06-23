import type { Metadata } from "next";
import LogoWithRings from "@/components/LogoWithRings";

export const metadata: Metadata = {
  title: "Politique de confidentialité – AOM Technologies & Services",
  description:
    "Politique de confidentialité du site AOM Technologies & Services : collecte, utilisation, conservation et protection des données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
        Politique de confidentialité
      </h1>
      {/* FILIGRANE ULTRA LÉGER */}
<div className="absolute top-110 -z-10 opacity-[0.1] pointer-events-none scale-[5] blur-[1px]">
  <LogoWithRings />
</div>


      <section className="space-y-4">
        <p>
          La présente politique de confidentialité a pour objectif d’informer les
          utilisateurs du site AOM Technologies &amp; Services sur la manière dont leurs
          données personnelles sont collectées, traitées et protégées.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">1. Données collectées</h2>
        <p>Nous collectons uniquement les données nécessaires pour :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>répondre aux demandes envoyées via le formulaire de contact ;</li>
          <li>établir des devis ou des échanges professionnels ;</li>
          <li>améliorer l’expérience utilisateur et les performances du site.</li>
        </ul>
        <p>Les données collectées peuvent inclure :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>nom et prénom ;</li>
          <li>adresse email ;</li>
          <li>numéro de téléphone ;</li>
          <li>contenu du message envoyé ;</li>
          <li>données techniques (adresse IP, navigateur, pages consultées).</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">2. Finalité du traitement</h2>
        <p>Les données sont utilisées pour :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>répondre aux demandes de contact ;</li>
          <li>fournir des informations ou devis ;</li>
          <li>assurer le bon fonctionnement du site ;</li>
          <li>analyser la fréquentation et améliorer nos services.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">3. Conservation des données</h2>
        <p>
          Les données personnelles sont conservées uniquement le temps nécessaire à la
          réalisation des finalités pour lesquelles elles ont été collectées.
        </p>
        <p>
          Les données techniques (logs, analytics) peuvent être conservées jusqu’à 12
          mois.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">4. Partage des données</h2>
        <p>
          AOM Technologies &amp; Services ne vend ni ne loue aucune donnée personnelle.
        </p>
        <p>
          Les données peuvent être transmises uniquement à des prestataires techniques
          (hébergement, outils d’analyse) strictement nécessaires au fonctionnement du
          site.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">5. Cookies</h2>
        <p>
          Le site peut utiliser des cookies pour améliorer l’expérience utilisateur et
          analyser la fréquentation.
        </p>
        <p>
          Vous pouvez désactiver les cookies via les paramètres de votre navigateur.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">6. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>droit d’accès ;</li>
          <li>droit de rectification ;</li>
          <li>droit de suppression ;</li>
          <li>droit d’opposition ;</li>
          <li>droit à la portabilité des données.</li>
        </ul>
        <p>
          Pour exercer vos droits :{" "}
          <span className="italic">adresse email à compléter</span>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">7. Sécurité</h2>
        <p>
          Nous mettons en œuvre toutes les mesures nécessaires pour protéger vos données
          contre l’accès non autorisé, la modification ou la suppression.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">8. Modifications de la politique</h2>
        <p>
          Cette politique peut être mise à jour à tout moment. La date de dernière
          modification sera indiquée sur cette page.
        </p>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Document à compléter avec les informations exactes de l’entreprise (email,
        responsable, etc.).
      </p>
    </main>
  );
}
