import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const email = searchParams.get("email")?.trim().toLowerCase();

  if (!secretKey || !sessionId || !email) {
    return NextResponse.json({ error: "Identifiant de commande et email requis" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const customerEmail = session.customer_details?.email?.toLowerCase();

    if (!customerEmail || customerEmail !== email) {
      return NextResponse.json({ error: "Commande introuvable" }, { status: 404 });
    }

    return NextResponse.json({
      orderId: session.id,
      status: session.payment_status,
      amount: session.amount_total,
      currency: session.currency,
      productName: session.metadata?.productName,
      quantity: session.metadata?.quantity,
      installation: session.metadata?.installation,
    });
  } catch (error) {
    console.error("Stripe order lookup error:", error);
    return NextResponse.json({ error: "Commande introuvable" }, { status: 404 });
  }
}
