import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ boutique | AOM Technologies",
  description: "Questions fréquentes sur les commandes, livraisons et installations IRVE AOM Technologies.",
};

const questions = [
  {
    question: "Comment commander une borne ?",
    answer: "Sélectionnez un produit, choisissez la quantité et l'installation souhaitée, puis cliquez sur Commander. Le paiement est effectué sur la page sécurisée Stripe.",
  },
  {
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui. Les informations bancaires sont saisies directement sur Stripe et ne sont jamais stockées sur le site AOM Technologies.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais sont confirmés après validation de la commande et de la disponibilité du matériel. Nous vous recontactons avec les informations de livraison.",
  },
  {
    question: "L'installation IRVE est-elle incluse ?",
    answer: "Elle est proposée séparément lors de la commande. Vous pouvez choisir une borne seule, une installation standard ou une installation complète.",
  },
  {
    question: "Comment suivre ma commande ?",
    answer: "Après le paiement, utilisez le lien Suivre ma commande dans le footer de la boutique avec votre email et votre identifiant de session Stripe.",
  },
  {
    question: "Quelle garantie et quelle assurance sont prévues ?",
    answer: "La garantie dépend du fabricant et du matériel choisi. Pour une installation, les garanties liées à la pose et à l'équipement sont précisées dans le devis. Votre assurance habitation peut aussi couvrir l'équipement selon votre contrat : nous vous conseillons de la contacter avant l'installation.",
  },
  {
    question: "Comment obtenir de l'aide ?",
    answer: "Notre équipe peut vous accompagner pour le choix de la borne, la compatibilité électrique et l'installation. Contactez-nous par email ou téléphone.",
  },
];

export default function BoutiqueFaqPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] px-4 py-16 text-[#18242b] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <a href="/boutique" className="text-sm font-semibold text-[#66828a] transition hover:text-[#102d35]">
          ← Retour à la boutique
        </a>

        <header className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">Boutique AOM</p>
          <h1 className="mt-2 text-4xl font-semibold">FAQ et accompagnement</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#66828a]">
            Retrouvez les réponses aux questions les plus fréquentes avant et après votre commande.
          </p>
        </header>

        <section className="mt-10 space-y-3">
          {questions.map((item) => (
            <details key={item.question} className="group border border-[#d8d8ce] bg-white p-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-6 text-[#66828a]">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-12 bg-[#102d35] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-semibold">Besoin d'un conseil personnalisé ?</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Contactez AOM Technologies pour vérifier votre installation et choisir la solution adaptée à votre projet.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="mailto:contact@aomtechnologies.com" className="bg-[#d7e85b] px-5 py-3 text-[#102d35] transition hover:bg-[#c8dc4b]">
              Écrire à l'équipe
            </a>
            <a href="tel:+33767859581" className="border border-white/30 px-5 py-3 transition hover:border-[#d7e85b] hover:text-[#d7e85b]">
              +33 (0)7 67 85 95 81
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
