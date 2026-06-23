import type { Metadata } from "next";
import LogoWithRings from "@/components/LogoWithRings";

export const metadata: Metadata = {
  title: "Politique de cookies – AOM Technologies & Services",
  description:
    "Politique de gestion des cookies du site AOM Technologies & Services : types de cookies utilisés, finalités, gestion et désactivation.",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
        Politique de cookies
      </h1>

<div className="absolute top-110 -z-10 opacity-[0.1] pointer-events-none scale-[5] blur-[1px]">
        <LogoWithRings />
      </div>

      <section className="space-y-4">
        <p>
          Cette politique explique ce que sont les cookies, comment nous les
          utilisons sur le site AOM Technologies &amp; Services, et comment vous
          pouvez les gérer.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          1. Qu’est‑ce qu’un cookie&nbsp;?
        </h2>
        <p>
          Un cookie est un petit fichier texte enregistré sur votre appareil
          (ordinateur, smartphone, tablette) lorsque vous consultez un site web.
          Il permet de stocker des informations techniques ou de navigation.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          2. Cookies utilisés sur ce site
        </h2>
        <p>Nous utilisons différents types de cookies :</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Cookies nécessaires</strong> : indispensables au bon
            fonctionnement du site (sécurité, navigation, affichage).
          </li>
          <li>
            <strong>Cookies de performance</strong> : permettent de mesurer
            l’audience et d’améliorer l’expérience utilisateur.
          </li>
          <li>
            <strong>Cookies fonctionnels</strong> : améliorent le confort de
            navigation (préférences, langue, etc.).
          </li>
          <li>
            <strong>Cookies tiers</strong> : utilisés par des services externes
            (ex. : Google Analytics, cartes, vidéos).
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">3. Finalité des cookies</h2>
        <p>Les cookies présents sur ce site servent à :</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>assurer le fonctionnement technique du site ;</li>
          <li>améliorer les performances et la rapidité d’affichage ;</li>
          <li>analyser la fréquentation et les interactions ;</li>
          <li>proposer des contenus adaptés.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          4. Gestion et désactivation des cookies
        </h2>
        <p>
          Vous pouvez accepter, refuser ou supprimer les cookies directement
          depuis les paramètres de votre navigateur.
        </p>

        <p>Voici comment gérer les cookies selon votre navigateur :</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Chrome : Paramètres → Confidentialité → Cookies</li>
          <li>Firefox : Options → Vie privée → Cookies</li>
          <li>Safari : Préférences → Confidentialité</li>
          <li>Edge : Paramètres → Cookies et autorisations</li>
        </ul>

        <p>
          La désactivation de certains cookies peut affecter le bon
          fonctionnement du site.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">5. Cookies tiers</h2>
        <p>
          Certains services intégrés au site peuvent déposer leurs propres
          cookies (ex. : Google, YouTube, outils de mesure d’audience).
        </p>
        <p>
          Ces cookies sont soumis aux politiques de confidentialité des services
          tiers concernés.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          6. Mise à jour de la politique
        </h2>
        <p>
          Cette politique peut être modifiée à tout moment. La date de dernière
          mise à jour sera indiquée sur cette page.
        </p>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Document à compléter selon les besoins spécifiques de l’entreprise.
      </p>
    </main>
  );
}
