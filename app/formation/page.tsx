import Image from "next/image";
import Link from "next/link";
import {
  FaCode,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const modules = [
  {
    icon: FaCode,
    number: "01",
    title: "Développement web",
    description:
      "Construire des interfaces solides et accessibles avec les fondamentaux du web.",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
  },
  {
    icon: FaMobileAlt,
    number: "02",
    title: "Web mobile & responsive",
    description:
      "Concevoir des expériences fluides sur téléphone, tablette et ordinateur.",
    technologies: ["Responsive design", "Flexbox", "Grid", "UI mobile", "Accessibilité"],
  },
  {
    icon: FaGitAlt,
    number: "03",
    title: "Git & GitHub",
    description:
      "Travailler en équipe, versionner son code et suivre un projet comme en entreprise.",
    technologies: ["Git", "GitHub", "Branches", "Pull requests", "Revue de code"],
  },
  {
    icon: FaDocker,
    number: "04",
    title: "Docker & déploiement",
    description:
      "Comprendre les environnements, les conteneurs et les bases de la mise en production.",
    technologies: ["Images", "Conteneurs", "Docker Compose", "Environnements", "CI/CD"],
  },
  {
    icon: FaShieldAlt,
    number: "05",
    title: "Bases de la cybersécurité",
    description:
      "Adopter les bons réflexes pour protéger les applications, les comptes et les données.",
    technologies: ["Mots de passe", "Phishing", "OWASP", "Données", "Veille"],
  },
];

const outcomes = [
  "Créer un site web responsive de A à Z",
  "Publier et documenter ses projets sur GitHub",
  "Utiliser Docker pour reproduire un environnement",
  "Identifier les principales vulnérabilités web",
];

export const metadata = {
  title: "Formation web, mobile & cybersécurité | AOM Technologies",
  description:
    "Formations pratiques en développement web, web mobile, Git, GitHub, Docker et cybersécurité.",
};

export default function FormationPage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/office.webp"
            alt="Espace de travail pour la formation numérique"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/85" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-12 md:pb-28 md:pt-40">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              AOM Formation
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Passez de l&apos;idée au projet web.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Une formation pratique pour apprendre à créer, versionner, déployer
              et sécuriser des projets web et web mobile avec les outils utilisés
              par les équipes techniques.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#programme"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Découvrir le programme <FaArrowRight />
              </Link>
              <Link
                href="#contact-formation"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Demander des informations
              </Link>
            </div>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-4 border-t border-slate-700 pt-6 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-semibold text-white">5</p>
              <p className="mt-1 text-xs text-slate-400">blocs pratiques</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Web</p>
              <p className="mt-1 text-xs text-slate-400">desktop & mobile</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Projet</p>
              <p className="mt-1 text-xs text-slate-400">fil rouge concret</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Équipe</p>
              <p className="mt-1 text-xs text-slate-400">méthodes professionnelles</p>
            </div>
          </div>
        </div>
      </section>

      <section id="programme" className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Le programme
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Les compétences qui font avancer un projet.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Chaque module relie la théorie à un livrable. Vous progressez en
            construisant un projet web complet, de la première ligne de code à
            sa mise en ligne.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.number}
                className="flex flex-col border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/70"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.16em] text-slate-600">
                    {module.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{module.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {module.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-slate-700 px-2 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr,1.1fr] md:px-12 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              À la fin du parcours
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Un portfolio, pas seulement des notions.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                <FaCheck className="mt-1 shrink-0 text-cyan-300" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact-formation" className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24">
        <div className="flex flex-col justify-between gap-8 border border-cyan-400/30 bg-cyan-400/10 p-6 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Construisons votre parcours
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Vous souhaitez former votre équipe ou démarrer votre reconversion ?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Contactez AOM Technologies pour parler du niveau, du format et des
              objectifs adaptés à votre projet.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Nous contacter <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
