import type { Metadata } from "next";
import LogoWithRings from "@/components/LogoWithRings";

export const metadata: Metadata = {
  title: "Politique du site – AOM Technologies & Services",
  description:
    "Politique d’utilisation du site AOM Technologies & Services : règles d’usage, responsabilités, sécurité et bonnes pratiques.",
};

export default function PolitiquePage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 lg:py-24">
      {/* BACKGROUND LOGO */}
<div className="absolute top-110 -z-10 opacity-[0.1] pointer-events-none scale-[5] blur-[1px]">
        <LogoWithRings />
      </div>

      <h1 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">
        Politique du site
      </h1>

      <section className="space-y-4">
        <p>
          La présente politique définit les règles d’utilisation du site AOM
          Technologies &amp; Services, ainsi que les engagements de l’entreprise
          et des utilisateurs concernant la sécurité, la conformité et le bon
          usage des services proposés.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">1. Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d’un
          accès à Internet. Les frais liés à la connexion restent à la charge de
          l’utilisateur.
        </p>
        <p>
          AOM Technologies &amp; Services se réserve le droit de suspendre ou
          limiter l’accès au site pour maintenance ou mise à jour.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">2. Utilisation du contenu</h2>
        <p>
          L’ensemble des contenus présents sur le site (textes, images, logos,
          éléments graphiques, code, etc.) est protégé par le droit d’auteur.
        </p>
        <p>
          Toute reproduction, modification ou diffusion sans autorisation est
          interdite.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          3. Comportement de l’utilisateur
        </h2>
        <p>L’utilisateur s’engage à :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>ne pas utiliser le site à des fins frauduleuses ;</li>
          <li>
            ne pas tenter d’accéder à des zones protégées ou non publiques ;
          </li>
          <li>ne pas perturber le fonctionnement du site ;</li>
          <li>ne pas transmettre de contenus illicites ou malveillants.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">4. Sécurité</h2>
        <p>
          AOM Technologies &amp; Services met en œuvre des mesures de sécurité
          pour protéger le site et les données des utilisateurs.
        </p>
        <p>
          Toutefois, l’utilisateur reconnaît que la sécurité absolue n’existe
          pas sur Internet et doit prendre les mesures nécessaires pour protéger
          ses propres équipements.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">5. Liens externes</h2>
        <p>
          Le site peut contenir des liens vers des sites tiers. AOM Technologies
          &amp; Services n’est pas responsable du contenu ou du fonctionnement
          de ces sites.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">6. Responsabilité</h2>
        <p>
          AOM Technologies &amp; Services ne peut être tenue responsable des
          dommages directs ou indirects résultant de l’utilisation du site.
        </p>
        <p>
          L’utilisateur est seul responsable de l’usage qu’il fait des
          informations présentes sur le site.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">
          7. Modifications de la politique
        </h2>
        <p>
          La présente politique peut être modifiée à tout moment. La date de
          mise à jour sera indiquée sur cette page.
        </p>
      </section>

      <p className="mt-12 text-sm text-neutral-500">
        Document à compléter selon les besoins spécifiques de l’entreprise.
      </p>
    </main>
  );
}
