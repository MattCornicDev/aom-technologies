"use client";

import { useState } from "react";

export default function IrveForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      siteType: formData.get("siteType"),
      power: formData.get("power"),
      details: formData.get("details"),
    };

    const res = await fetch("/api/irve-devis", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      console.error("Erreur de formulaire IRVE :", data.error);
    }

    setLoading(false);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Demander un devis pour l&apos;installation de votre borne de recharge
      </h2>

      <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
        Remplissez ce formulaire, un expert AOM Technologies vous recontacte rapidement
        pour une étude gratuite et un devis personnalisé, sans engagement.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Nom / Prénom</label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Téléphone</label>
            <input
              name="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Adresse d&apos;installation</label>
            <input
              name="address"
              type="text"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-700">Type de site</label>
            <select
              name="siteType"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option>Maison individuelle</option>
              <option>Appartement / copropriété</option>
              <option>Entreprise / parking salarié</option>
              <option>Collectivité / site public</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Puissance souhaitée</label>
            <select
              name="power"
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                         outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            >
              <option>Je ne sais pas encore</option>
              <option>7,4 kW</option>
              <option>11 kW</option>
              <option>22 kW</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Précisions sur votre projet</label>
          <textarea
            name="details"
            rows={4}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                       outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="Ex : longueur de câble souhaitée, type de véhicule, contraintes particulières..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white
                     shadow-sm hover:bg-sky-700 disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer ma demande de devis"}
        </button>

        {status === "success" && (
          <p className="mt-2 text-green-600 text-sm">✔ Votre demande a bien été envoyée.</p>
        )}
        {status === "error" && (
          <p className="mt-2 text-red-600 text-sm">
            ✖ Une erreur est survenue. Vérifiez la console ou les variables d’environnement.
          </p>
        )}

        <p className="mt-2 text-xs text-slate-500">
          En envoyant ce formulaire, vous acceptez d&apos;être recontacté par AOM Technologies.
        </p>
      </form>
    </div>
  );
}
