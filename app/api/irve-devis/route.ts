import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const toEmail = process.env.CONTACT_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      address,
      siteType,
      power,
      details,
    } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Clé Resend non configurée" },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: `AOM Technologies <${fromEmail}>`,
      to: toEmail,
      subject: "Nouvelle demande de devis IRVE",
      html: `
        <h2>Nouvelle demande de devis IRVE</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Adresse :</strong> ${address}</p>
        <p><strong>Type de site :</strong> ${siteType}</p>
        <p><strong>Puissance souhaitée :</strong> ${power}</p>
        <p><strong>Détails :</strong><br/>${details}</p>
      `,
    });

    if (result.error) {
      console.error("Erreur Resend IRVE :", result.error);
      return NextResponse.json(
        { success: false, error: result.error.message || "Échec de l’envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API IRVE :", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
