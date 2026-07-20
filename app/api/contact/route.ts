import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const toEmail = process.env.CONTACT_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Champs manquants" },
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
      subject: "Nouveau message depuis le site AOM",
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    if (result.error) {
      console.error("Erreur Resend contact :", result.error);
      return NextResponse.json(
        { success: false, error: result.error.message || "Échec de l’envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API Contact :", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
