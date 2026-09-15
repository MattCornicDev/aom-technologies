import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(request: Request) {
  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Configuration Stripe manquante" },
      { status: 500 }
    );
  }

  try {
    const data = await request.json();
    const quantity = Math.max(1, Math.min(99, Number(data.quantity) || 1));
    const productPrice = Number(data.productPrice);
    const installationPrice = Math.max(0, Number(data.installationPrice) || 0);

    if (!data.productName || !Number.isFinite(productPrice) || productPrice < 0) {
      return NextResponse.json(
        { error: "Produit ou prix invalide" },
        { status: 400 }
      );
    }

    const stripe = new Stripe(stripeSecretKey);
    const origin = new URL(request.url).origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: String(data.productName),
              description: data.power ? `Puissance : ${data.power}` : undefined,
            },
            unit_amount: Math.round(productPrice * 100),
          },
          quantity,
        },
        ...(installationPrice > 0
          ? [{
              price_data: {
                currency: "eur",
                product_data: {
                  name: String(data.installationName || "Installation IRVE"),
                },
                unit_amount: Math.round(installationPrice * 100),
              },
              quantity: 1,
            }]
          : []),
      ],
      customer_creation: "always",
      customer_email: typeof data.email === "string" ? data.email : undefined,
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["FR"] },
      metadata: {
        productId: String(data.productId || ""),
        productName: String(data.productName),
        quantity: String(quantity),
        installation: String(data.installationName || "Borne seule"),
      },
      success_url: `${origin}/boutique/suivi-commande?paiement=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/boutique?paiement=annule`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erreur de paiement" },
      { status: 500 }
    );
  }
}
