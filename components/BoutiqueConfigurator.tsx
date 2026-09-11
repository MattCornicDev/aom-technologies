"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCheck, FaChevronRight, FaPlay, FaShieldAlt, FaTools, FaTruck } from "react-icons/fa";

type Product = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  price: number;
  priceLabel: string;
  power: string;
  image: string;
  features: string[];
};

const products: Product[] = [
  {
    id: "home-7",
    name: "AOM Home 7",
    eyebrow: "Maison individuelle",
    description: "La borne compacte et connectee pour recharger chaque soir a domicile.",
    price: 699,
    priceLabel: "699 €",
    power: "7,4 kW",
    image: "/images/borne-recharge.jpg",
    features: ["Pilotage par application", "Cable T2 inclus", "Installation murale"],
  },
  {
    id: "schneider-93857572",
    name: "Schneider Charge Pro",
    eyebrow: "Borne de recharge 7,4 a 22 kW",
    description: "La borne Schneider Electric de la fiche produit Leroy Merlin, configuree selon la puissance de votre installation.",
    price: 899,
    priceLabel: "899 €",
    power: "7,4 a 22 kW",
    image: "/images/boutique/borne_schneider.webp",
    features: ["Puissance de 7,4 a 22 kW", "Marque Schneider Electric", "Installation IRVE sur demande"],
  },
  {
    id: "pro-22",
    name: "AOM Pro 22",
    eyebrow: "Entreprise & flotte",
    description: "Une solution robuste pour les parkings qui veulent rester evolutifs.",
    price: 1290,
    priceLabel: "1 290 €",
    power: "22 kW",
    image: "/images/boutique/schneider-charge-pro-borne-de-recharge-parametrable-jusqu-a-22kw-1p3p-t2s-4g-ref-evb4s22n40mg.jpg",
    features: ["Acces RFID", "Supervision a distance", "Usage intensif"],
  },
];

const installationOptions = [
  { id: "none", label: "Borne seule", price: 0, description: "Livraison de la borne, installation par vos soins." },
  { id: "standard", label: "Installation standard", price: 590, description: "Pose, raccordement, essais et mise en service par un technicien IRVE." },
  { id: "complete", label: "Installation complete", price: 890, description: "Installation avec etude technique, protection adaptee et accompagnement aides." },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

export default function BoutiqueConfigurator() {
  const [selectedProductId, setSelectedProductId] = useState("schneider-93857572");
  const [selectedInstallationId, setSelectedInstallationId] = useState("standard");
  const [showRequest, setShowRequest] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const product = products.find((item) => item.id === selectedProductId) ?? products[1];
  const installation = installationOptions.find((item) => item.id === selectedInstallationId) ?? installationOptions[1];
  const total = product.price + installation.price;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/irve-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          address: formData.get("address"),
          siteType: formData.get("siteType"),
          power: product.power,
          details: `Boutique - ${product.name} (${formatPrice(product.price)}) / ${installation.label} (${formatPrice(installation.price)}). Total indicatif : ${formatPrice(total)}. ${formData.get("details") || ""}`,
        }),
      });

      if (!response.ok) throw new Error("La demande n'a pas pu etre envoyee");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#18242b]">
      <section className="relative overflow-hidden bg-[#102d35] px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[48px] border-[#d7e85b]/20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d7e85b]">La boutique AOM</p>
            <h1 className="max-w-2xl font-[var(--font-geist-sans)] text-4xl font-semibold leading-tight sm:text-6xl">
              Votre recharge commence ici.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Choisissez une borne fiable, ajoutez l&apos;installation certifiee qui vous convient et recevez une proposition adaptee a votre logement ou votre entreprise.
            </p>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-5 text-sm text-slate-300 sm:grid-cols-3">
            <div className="flex items-center gap-3"><FaShieldAlt className="text-[#d7e85b]" /> Installation IRVE certifiee</div>
            <div className="flex items-center gap-3"><FaTools className="text-[#d7e85b]" /> Etude technique incluse</div>
            <div className="flex items-center gap-3"><FaTruck className="text-[#d7e85b]" /> Livraison dans les Hauts-de-France</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">01 / Choisir une borne</p>
            <h2 className="mt-2 text-3xl font-semibold">Des solutions pour chaque usage</h2>
          </div>
          <p className="text-sm text-[#66828a]">Prix indicatifs TTC, installation a confirmer apres etude.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((item) => {
            const selected = item.id === selectedProductId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedProductId(item.id)}
                className={`group text-left transition ${selected ? "-translate-y-1" : ""}`}
                aria-pressed={selected}
              >
                <div className={`overflow-hidden border bg-white ${selected ? "border-[#102d35] shadow-xl shadow-[#102d35]/10" : "border-[#d8d8ce]"}`}>
                  <div className="relative h-60 overflow-hidden border-b border-[#e7e5dd] bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2 transition duration-300" />
                    {selected && <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#d7e85b] text-[#102d35]"><FaCheck size={12} /></span>}
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#66828a]">{item.eyebrow}</p>
                    <div className="mt-2 flex items-baseline justify-between gap-3"><h3 className="text-xl font-semibold">{item.name}</h3><span className="text-sm font-bold">{item.priceLabel}</span></div>
                    <p className="mt-3 min-h-12 text-sm leading-6 text-[#66828a]">{item.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-[#e7e5dd] pt-5 text-sm text-[#34484e]">{item.features.map((feature) => <li key={feature} className="flex items-center gap-2"><FaCheck className="text-[#7d9c34]" size={11} /> {feature}</li>)}</ul>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-6 bg-[#102d35] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d7e85b]">Accessoire recommande</p>
            <h2 className="mt-2 text-2xl font-semibold">Câble de recharge Type 2 GONEO</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Découvrez en vidéo ce câble compatible avec les recharges jusqu&apos;à 22 kW, pratique à conserver dans le coffre avec votre borne.
            </p>
          </div>
          <a
            href="https://www.amazon.fr/vdp/1e1dc45611dd47c88dea4271e7e90cad?aci=amzn1.ive.seller.video.1e1dc45611dd47c88dea4271e7e90cad&product=B0CN2Q246Y&ref=cm_sw_cp_r_ib_dt_EzGgnzHfzxKFf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#d7e85b] px-5 py-4 text-sm font-bold text-[#102d35] transition hover:bg-[#c8dc4b]"
          >
            <FaPlay size={11} /> Voir la vidéo
          </a>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">02 / Choisir votre installation</p>
            <h2 className="mt-2 text-3xl font-semibold">Une mise en service sans mauvaise surprise</h2>
            <div className="mt-7 space-y-3">
              {installationOptions.map((option) => {
                const selected = option.id === selectedInstallationId;
                return <button key={option.id} type="button" onClick={() => setSelectedInstallationId(option.id)} className={`flex w-full items-start justify-between gap-5 border p-5 text-left transition ${selected ? "border-[#102d35] bg-[#102d35] text-white" : "border-[#d8d8ce] bg-white hover:border-[#66828a]"}`} aria-pressed={selected}><span className="flex items-start gap-4"><span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#d7e85b] bg-[#d7e85b] text-[#102d35]" : "border-[#9ba7a2]"}`}>{selected && <FaCheck size={10} />}</span><span><strong className="block text-sm">{option.label}</strong><span className={`mt-1 block text-sm leading-6 ${selected ? "text-slate-300" : "text-[#66828a]"}`}>{option.description}</span></span></span><strong className="shrink-0 text-sm">{option.price ? `+ ${formatPrice(option.price)}` : "Inclus"}</strong></button>;
              })}
            </div>
          </div>

          <aside className="h-fit bg-white p-7 shadow-lg shadow-[#102d35]/5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">Votre selection</p>
            <div className="mt-5 border-b border-[#e7e5dd] pb-5"><p className="font-semibold">{product.name}</p><p className="mt-1 text-sm text-[#66828a]">{product.power} · {installation.label}</p></div>
            <div className="flex items-center justify-between py-5"><span className="text-sm text-[#66828a]">Total indicatif</span><strong className="text-right text-2xl">{formatPrice(total)}</strong></div>
            <button type="button" onClick={() => { setShowRequest(true); setTimeout(() => document.getElementById("request")?.scrollIntoView({ behavior: "smooth" }), 0); }} className="flex w-full items-center justify-center gap-3 bg-[#d7e85b] px-5 py-4 text-sm font-bold text-[#102d35] transition hover:bg-[#c8dc4b]">Demander cette configuration <FaChevronRight size={12} /></button>
            <p className="mt-4 text-center text-xs leading-5 text-[#66828a]">Le prix final est confirme apres validation de votre installation electrique.</p>
          </aside>
        </div>

        {showRequest && <section id="request" className="mt-16 border-t border-[#d8d8ce] pt-14"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">03 / Finaliser</p><h2 className="mt-2 text-3xl font-semibold">Recevoir mon devis personnalise</h2><p className="mt-4 text-sm leading-6 text-[#66828a]">Un technicien AOM vous rappelle pour confirmer la faisabilite, les aides possibles et le prix de l&apos;installation.</p><div className="mt-7 space-y-3 text-sm text-[#34484e]"><p className="flex gap-3"><FaCheck className="mt-1 text-[#7d9c34]" /> Pas de paiement avant validation</p><p className="flex gap-3"><FaCheck className="mt-1 text-[#7d9c34]" /> Etude gratuite et sans engagement</p><p className="flex gap-3"><FaCheck className="mt-1 text-[#7d9c34]" /> Reponse sous 48 heures</p></div></div><form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg shadow-[#102d35]/5 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><input name="name" required placeholder="Nom / Prenom" className="border border-[#d8d8ce] px-4 py-3 text-sm outline-none focus:border-[#102d35]" /><input name="email" type="email" required placeholder="Email" className="border border-[#d8d8ce] px-4 py-3 text-sm outline-none focus:border-[#102d35]" /><input name="phone" required placeholder="Telephone" className="border border-[#d8d8ce] px-4 py-3 text-sm outline-none focus:border-[#102d35]" /><input name="address" required placeholder="Adresse d&apos;installation" className="border border-[#d8d8ce] px-4 py-3 text-sm outline-none focus:border-[#102d35]" /></div><select name="siteType" className="mt-4 w-full border border-[#d8d8ce] bg-white px-4 py-3 text-sm outline-none focus:border-[#102d35]"><option>Maison individuelle</option><option>Appartement / copropriete</option><option>Entreprise / parking</option></select><textarea name="details" rows={4} placeholder="Une precision sur votre projet ?" className="mt-4 w-full border border-[#d8d8ce] px-4 py-3 text-sm outline-none focus:border-[#102d35]" /><button disabled={status === "loading"} type="submit" className="mt-4 w-full bg-[#102d35] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#1c4650] disabled:opacity-60">{status === "loading" ? "Envoi en cours..." : "Recevoir mon devis"}</button>{status === "success" && <p className="mt-4 text-sm font-semibold text-[#527a27]">Votre demande est bien partie. Nous revenons vers vous rapidement.</p>}{status === "error" && <p className="mt-4 text-sm font-semibold text-red-700">Une erreur est survenue. Vous pouvez nous appeler directement au 03 27 43 64 18.</p>}</form></div></section>}
      </section>
    </main>
  );
}