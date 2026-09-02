// app/irve/page.tsx  (Next.js 13+ app router)
import Image from "next/image";
import Link from "next/link";
import LogoWithRings from "@/components/LogoWithRings";

export const metadata = {
  title: "Installation de bornes de recharge électriques IRVE | AOM Technologies",
  description:
    "AOM Technologies, installateur certifié IRVE et Qualifelec. Installation de bornes de recharge pour particuliers, entreprises et copropriétés.",
};

export default function IrvePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO */}
      <div className="absolute top-6 left-6 z-50">
  <LogoWithRings />
</div>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-500 to-emerald-500 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-100">
              Installateur certifié IRVE & Qualifelec
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Installation de bornes de recharge électriques
              <span className="block text-sky-100">
                pour particuliers & professionnels
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-sky-100/90">
              AOM Technologies conçoit et installe des solutions de recharge
              sur‑mesure, conformes aux normes NF C 15‑100, éligible sur les aides financières (prime ADVENIR, crédit d&apos;impôt,
              TVA réduite).
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#devis"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-700 shadow-lg shadow-sky-900/20 transition hover:bg-sky-50"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="#devis"
                className="rounded-full border border-sky-100/60 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-sky-600/40"
              >
                Être rappelé par un expert
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-sky-100/80">
              <span>⚡ Devis sous 48h</span>
              <span>•</span>
              <span>Intervention rapide dans les Hauts‑de‑France</span>
              <span>•</span>
              <span>Installateur IRVE certifié</span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl bg-sky-900/40 p-4 backdrop-blur">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-900/40">
                {/* Remplace les src par tes vraies images */}
                <Image
                  src="/images/borne-recharge.jpg"
                  alt="Installation de borne de recharge électrique AOM Technologies"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-sky-100">
                <div>
                  <p className="font-semibold">Certifié IRVE & Qualifelec</p>
                  <p className="text-sky-100/80">
                    Installation conforme NF C 15‑100, attestation de conformité
                    fournie.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.qualifelec.fr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visiter le site de Qualifelec"
                  >
                    <Image
                      src="/images/logos/qualifelec-irve.png"
                      alt="Logo IRVE Qualifelec"
                      width={150}
                      height={90}
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI AOM */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Pourquoi choisir AOM Technologies pour votre borne de recharge ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Nous accompagnons les particuliers, entreprises, copropriétés et
              collectivités dans la mise en place d&apos;infrastructures de recharge
              fiables, sécurisées et évolutives, avec un interlocuteur unique
              pour l&apos;ensemble du projet.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Installateur agréé IRVE",
                  desc: "Techniciens habilités IRVE, formés aux dernières normes et recommandations constructeurs.",
                },
                {
                  title: "Certification Qualifelec",
                  desc: "Installation contrôlée et conforme, avec attestation de conformité et garantie décennale.",
                },
                {
                  title: "Étude technique gratuite",
                  desc: "Analyse de votre installation électrique, puissance disponible et besoins de recharge.",
                },
                {
                  title: "Aides & subventions",
                  desc: "Conseil sur les dossiers ADVENIR, crédit d’impôt, TVA réduite.",
                },
                {
                  title: "Intervention rapide",
                  desc: "Planification de chantier optimisée, intervention sous délais courts selon votre secteur.",
                },
                {
                  title: "Support & maintenance",
                  desc: "Contrats de maintenance, supervision et assistance en cas de panne ou évolution du parc.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl bg-slate-900 px-6 py-6 text-slate-50">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Aides & financement
            </p>
            
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>• Eligible à la Prime ADVENIR (résidentiel, copropriété, entreprise)</li>
              <li>• Crédit d&apos;impôt transition énergétique</li>
              <li>• TVA à 5,5 % selon les cas</li>
              <li>• Aides locales et régionales</li>
            </ul>
            <p className="mt-3 text-xs text-slate-400">
              Nous conseillons sur les aides directement
              dans le devis pour une vision claire du coût final.
            </p>
            <Link
              href="#devis"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Voir mon éligibilité aux aides
            </Link>
          </aside>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Nos solutions de recharge
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
            AOM Technologies installe des bornes adaptées à chaque usage :
            domicile, parking d&apos;entreprise, copropriété ou site public.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Particuliers",
                points: [
                  "3,4 kW, 7 kW, 11 kW ou 22 kW",
                  "Installation en maison ou garage",
                  "Mise en sécurité du tableau électrique",
                  "Pilotage de la charge et optimisation",
                  "Délestage et suivi de consommation via application mobile",
                ],
              },
              {
                label: "Entreprises",
                points: [
                  "Bornes simples ou doubles pour parkings salariés",
                  "Gestion de flotte et supervision",
                  "Contrôle d’accès RFID, facturation intégrée",
                  "Solutions évolutives selon la croissance du parc",
                ],
              },
              {
                label: "Copropriétés",
                points: [
                  "Droit à la prise et pré‑équipement IRVE",
                  "Solutions individuelles ou mutualisées",
                  "Refacturation simplifiée par utilisateur",
                  "Conformité loi LOM et obligations parking",
                ],
              },
              {
                label: "Collectivités & sites publics",
                points: [
                  "Bornes publiques ou semi‑publiques",
                  "Intégration aux parkings municipaux",
                  "Conformité réglementaire et sécurité",
                  "Maintenance et supervision 24h/24",
                ],
              },
            ].map((bloc) => (
              <div
                key={bloc.label}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {bloc.label}
                </p>
                <ul className="mt-3 space-y-1 text-xs sm:text-sm text-slate-600">
                  {bloc.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Un processus d&apos;installation clair.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
          Nous gérons l&apos;ensemble du projet : étude, installation, mise en
          service, conformité et suivi dans le temps.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Devis gratuit en ligne",
              desc: "Vous remplissez le formulaire avec quelques informations sur votre logement ou votre site.",
            },
            {
              step: "02",
              title: "Étude technique & visite",
              desc: "Un expert analyse votre installation électrique et, si nécessaire, réalise une visite sur place.",
            },
            {
              step: "03",
              title: "Installation certifiée IRVE",
              desc: "Pose de la borne, mise en service, tests de sécurité et formation à l’utilisation.",
            },
            {
              step: "04",
              title: "Attestation & aides",
              desc: "Remise des documents de conformité, gestion des dossiers d’aides et subventions.",
            },
            {
              step: "05",
              title: "Suivi & maintenance",
              desc: "Support technique, maintenance préventive et évolutions possibles de votre infrastructure.",
            },
            {
              step: "06",
              title: "Recharge en toute sérénité",
              desc: "Votre borne est opérationnelle, sécurisée et adaptée à vos usages quotidiens.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                {item.step}
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUES / PARTENAIRES */}
      <section className="border-y border-slate-200 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Marques & partenaires
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-50">
                Des bornes compatibles avec tous les véhicules du marché
              </h2>
              <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-300">
                Nous travaillons avec des fabricants reconnus et des partenaires
                nationaux pour garantir fiabilité, sécurité et disponibilité des
                pièces.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Remplace par tes logos réels */}
              <Image
                src="/images/logos/Logo_zeborne.svg"
                alt="ZEBorne"
                width={90}
                height={40}
              />
              <Image
                src="/images/logos/edf-logo.webp"
                alt="EDF"
                width={70}
                height={40}
              />
              <Image
                src="/images/logos/SFR_logo.webp"
                alt="SFR"
                width={90}
                height={40}
              />
              <Image
                src="/images/logos/ores-contact.png"
                alt="Ores"
                width={90}
                height={40}
                className="rounded bg-white p-1 object-contain"
              />
              <Image
                src="/images/logos/Carglass_logo.svg"
                alt="Carglass"
                width={90}
                height={40}
                />
            </div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DEVIS */}
      <section id="devis" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Demander un devis pour l&apos;installation de votre borne de recharge
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              Remplissez ce formulaire, un expert AOM Technologies vous
              recontacte rapidement pour une étude gratuite et un devis
              personnalisé, sans engagement.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Nom / Prénom
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Adresse d&apos;installation
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Type de site
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                    <option>Maison individuelle</option>
                    <option>Appartement / copropriété</option>
                    <option>Entreprise / parking salarié</option>
                    <option>Collectivité / site public</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">
                    Puissance souhaitée
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                    <option>Je ne sais pas encore</option>
                    <option>7,4 kW</option>
                    <option>11 kW</option>
                    <option>22 kW</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">
                  Précisions sur votre projet
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  placeholder="Ex : longueur de câble souhaitée, type de véhicule, contraintes particulières, horaires d’intervention..."
                />
              </div>

              {/* À connecter à ton backend / API route */}
              <button
                type="submit"
                className="mt-2 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
              >
                Envoyer ma demande de devis
              </button>

              <p className="mt-2 text-xs text-slate-500">
                En envoyant ce formulaire, vous acceptez d&apos;être recontacté par
                AOM Technologies pour l&apos;étude de votre projet. Vos données ne
                sont utilisées que dans ce cadre.
              </p>
            </form>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Zone d&apos;intervention
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Intervention dans les Hauts‑de‑France et secteurs limitrophes
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Nous intervenons principalement dans le Nord, le Pas‑de‑Calais et
              les départements limitrophes. Pour les projets hors zone, une
              étude spécifique est possible.
            </p>

            <ul className="mt-4 space-y-1 text-xs sm:text-sm text-slate-600">
              <li>• Nord (59)</li>
              <li>• Pas‑de‑Calais (62)</li>
              <li>• Étude possible sur autres départements selon le projet</li>
            </ul>

            <div id="contact" className="mt-6 space-y-2 text-sm text-slate-700">
              <p className="font-semibold">Contact direct</p>
              <p>Tél. : 03 27 43 64 18s</p>
              <p>Tél. : 07 67 85 95 81</p>
              <p>Email : contact@aomtechnologies.fr</p>
            </div>
          </aside>
        </div>
      </section>

      {/* section IRVE */}
      <section className="border-t border-slate-200 bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400">
          <div className="space-y-1">
            <p className="font-semibold text-slate-200">
              AOM Technologies — Installateur IRVE certifié
            </p>
            <p>
              Installation de bornes de recharge électriques pour particuliers,
              entreprises, copropriétés et collectivités.
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p>Conforme NF C 15‑100 • Certification IRVE & Qualifelec</p>
            <p>Mentions légales • Politique de confidentialité</p>
          </div>
        </div>
      </section>
    </main>
  );
}
