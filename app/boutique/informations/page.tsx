import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informations boutique | AOM Technologies",
  description: "Livraison, paiement, installation IRVE, garantie, assurance et accompagnement de la boutique AOM Technologies.",
};

const informationSections = [
  {
    title: "Commande et paiement",
    text: "Choisissez votre produit, la quantité et l'installation souhaitée. Le paiement est effectué sur Stripe, une plateforme sécurisée. Les données bancaires ne sont pas stockées par AOM Technologies.",
  },
  {
    title: "Livraison",
    text: "Nous livrons dans toute la France. Les délais et les modalités sont confirmés après validation de la commande et de la disponibilité du matériel.",
  },
  {
    title: "Installation IRVE",
    text: "Vous pouvez commander la borne seule ou sélectionner une installation standard ou complète. L'installation est étudiée et réalisée par un technicien IRVE.",
  },
  {
    title: "Garantie",
    text: "La garantie dépend du fabricant et du matériel choisi. Les conditions applicables à votre équipement sont précisées lors de la confirmation de la commande.",
  },
  {
    title: "Assurance",
    text: "Votre assurance habitation peut éventuellement couvrir l'équipement ou l'installation selon votre contrat. Nous vous recommandons de vérifier ce point auprès de votre assureur avant les travaux.",
  },
  {
    title: "Suivi de commande",
    text: "Après le paiement, utilisez la page de suivi avec votre email et votre identifiant de session Stripe pour retrouver le montant, le produit et le statut du paiement.",
  },
  {
    title: "Retours et assistance",
    text: "Pour toute question concernant une commande, un produit ou une installation, contactez notre équipe. Les conditions de retour applicables sont communiquées selon le produit et la situation.",
  },
];

export default function BoutiqueInformationsPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] px-4 py-16 text-[#18242b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <a href="/boutique" className="text-sm font-semibold text-[#66828a] transition hover:text-[#102d35]">
          ← Retour à la boutique
        </a>

        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">Boutique AOM</p>
          <h1 className="mt-2 text-4xl font-semibold">Informations boutique</h1>
          <p className="mt-4 text-sm leading-6 text-[#66828a]">
            Tout ce qu&apos;il faut savoir avant de commander une borne, une installation ou un accessoire AOM Technologies.
          </p>
        </header>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {informationSections.map((section) => (
            <article key={section.title} className="border border-[#d8d8ce] bg-white p-6">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#66828a]">{section.text}</p>
            </article>
          ))}
        </section>

        <section id="certification-irve" className="mt-10 border border-[#d8d8ce] bg-white p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">Installation certifiée IRVE</p>
          <h2 className="mt-2 text-2xl font-semibold">Qu&apos;est-ce que la certification IRVE ?</h2>
          <p className="mt-4 text-sm leading-6 text-[#66828a]">
            IRVE signifie « Infrastructure de Recharge pour Véhicules Électriques ». Une qualification IRVE atteste que l&apos;installateur possède les compétences nécessaires pour concevoir, sécuriser et mettre en service une installation de recharge dans le respect des règles techniques applicables.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#66828a]">
            Elle permet notamment de vérifier le dimensionnement électrique, les protections, le raccordement et le fonctionnement de la borne. Selon le projet et les aides demandées, une qualification IRVE peut être nécessaire pour l&apos;installation.
          </p>
        </section>

        <section className="mt-10 bg-[#102d35] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-semibold">Une question avant de commander ?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Notre équipe peut vous aider à choisir le matériel et l'installation adaptés à votre projet.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="/boutique/faq" className="bg-[#d7e85b] px-5 py-3 text-[#102d35] transition hover:bg-[#c8dc4b]">
              Consulter la FAQ
            </a>
            <a href="mailto:contact@aomtechnologies.com" className="border border-white/30 px-5 py-3 transition hover:border-[#d7e85b] hover:text-[#d7e85b]">
              Nous contacter
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
