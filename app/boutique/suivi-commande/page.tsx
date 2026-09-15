"use client";

import { FormEvent, useState } from "react";

function formatAmount(amount: number | null, currency: string | null) {
  if (amount === null || !currency) return "-";
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: currency.toUpperCase() }).format(amount / 100);
}

export default function SuiviCommandePage() {
  const [email, setEmail] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [order, setOrder] = useState<null | {
    orderId: string;
    status: string;
    amount: number | null;
    currency: string | null;
    productName?: string;
    quantity?: string;
    installation?: string;
  }>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const params = new URLSearchParams({ session_id: sessionId.trim(), email: email.trim() });
      const response = await fetch(`/api/stripe/order?${params}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Commande introuvable");
      setOrder(data);
    } catch (lookupError) {
      setError(lookupError instanceof Error ? lookupError.message : "Commande introuvable");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f2ec] px-4 py-16 text-[#18242b] sm:px-8">
      <div className="mx-auto max-w-2xl">
        <a href="/boutique" className="text-sm font-semibold text-[#66828a] hover:text-[#102d35]">← Retour à la boutique</a>
        <div className="mt-8 bg-white p-6 shadow-lg shadow-[#102d35]/5 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#66828a]">Boutique AOM</p>
          <h1 className="mt-2 text-3xl font-semibold">Suivre ma commande</h1>
          <p className="mt-4 text-sm leading-6 text-[#66828a]">
            Après votre paiement, utilisez l&apos;identifiant de session Stripe affiché dans l&apos;URL et l&apos;email utilisé pour la commande.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="block text-sm font-semibold">
              Email de commande
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full border border-[#d8d8ce] px-4 py-3 font-normal outline-none focus:border-[#102d35]" />
            </label>
            <label className="block text-sm font-semibold">
              Identifiant de commande Stripe
              <input required value={sessionId} onChange={(event) => setSessionId(event.target.value)} placeholder="cs_..." className="mt-2 w-full border border-[#d8d8ce] px-4 py-3 font-normal outline-none focus:border-[#102d35]" />
            </label>
            <button type="submit" disabled={loading} className="w-full bg-[#102d35] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1b4650] disabled:opacity-60">
              {loading ? "Recherche..." : "Rechercher ma commande"}
            </button>
          </form>

          {error && <p className="mt-5 text-sm text-red-600">{error}</p>}

          {order && (
            <div className="mt-8 border-t border-[#e7e5dd] pt-6 text-sm">
              <h2 className="text-xl font-semibold">Commande retrouvée</h2>
              <dl className="mt-4 space-y-2 text-[#66828a]">
                <div className="flex justify-between gap-4"><dt>Produit</dt><dd className="text-right font-semibold text-[#18242b]">{order.productName}</dd></div>
                <div className="flex justify-between gap-4"><dt>Quantité</dt><dd className="font-semibold text-[#18242b]">{order.quantity}</dd></div>
                <div className="flex justify-between gap-4"><dt>Installation</dt><dd className="text-right font-semibold text-[#18242b]">{order.installation}</dd></div>
                <div className="flex justify-between gap-4"><dt>Montant</dt><dd className="font-semibold text-[#18242b]">{formatAmount(order.amount, order.currency)}</dd></div>
                <div className="flex justify-between gap-4"><dt>Paiement</dt><dd className="font-semibold text-[#7d9c34]">{order.status === "paid" ? "Payé" : order.status}</dd></div>
              </dl>
              <p className="mt-5 text-xs text-[#66828a]">La livraison sera confirmée par AOM Technologies après traitement de la commande.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
