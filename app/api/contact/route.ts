import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const dynamic = "force-dynamic";


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "ssl0.ovh.net",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromEmail =
  process.env.SMTP_FROM ||
  process.env.SMTP_USER ||
  "secretariat@aomtechnologies.com";

const toEmail = "contact@aomtechnologies.com";

export async function POST(req: Request) {
  try {
    const { name, email, phone, motif, message } = await req.json();

    if (!name || !email || !phone || !motif || !message) {
      return NextResponse.json(
        { success: false, error: "Champs manquants" },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Configuration SMTP manquante" },
        { status: 500 }
      );
    }

    // 🔍 TEST SMTP — C’est ici que tu vois si OVH bloque le port
    try {
      console.log("🔎 Vérification SMTP en cours...");
      await transporter.verify();
      console.log("✅ SMTP OK — connexion possible");
    } catch (smtpError) {
      console.error("❌ SMTP ERROR — impossible de se connecter :", smtpError);
      return NextResponse.json(
        {
          success: false,
          error: "Impossible de se connecter au serveur SMTP",
          details: smtpError instanceof Error ? smtpError.message : smtpError,
        },
        { status: 500 }
      );
    }

    // 📩 Envoi du mail
    await transporter.sendMail({
      from: `AOM Technologies <${fromEmail}>`,
      to: toEmail,
      replyTo: String(email),
      subject: "Nouveau message depuis le site AOM",
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Motif :</strong> ${motif}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur SMTP Contact :", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erreur serveur",
      },
      { status: 500 }
    );
  }
}
