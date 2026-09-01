import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "ssl0.ovh.net",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "secretariat@aomtechnologies.com";
const toEmail = process.env.CONTACT_EMAIL || "secretariat@aomtechnologies.com";

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

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Configuration SMTP manquante" },
        { status: 500 }
      );
    }

    console.log("Attempting SMTP with:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
});

    await transporter.sendMail({
      from: `AOM Technologies <${fromEmail}>`,
      to: toEmail,
      replyTo: String(email),
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API IRVE :", error);
    console.error("SMTP error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erreur serveur",
      },
      { status: 500 }
    );
  }
}
