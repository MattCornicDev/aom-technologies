export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "ssl0.ovh.net",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER || "secretariat@aomtechnologies.com";
const toEmail = "secretariat@aomtechnologies.com";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await transporter.verify(); // test SMTP

    await transporter.sendMail({
      from: `AOM Technologies <${fromEmail}>`,
      to: toEmail,
      replyTo: String(data.email),
      subject: "Nouvelle demande de devis IRVE",
      html: `
        <h2>Nouvelle demande de devis IRVE</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        <p><strong>Adresse :</strong> ${data.address}</p>
        <p><strong>Type de site :</strong> ${data.siteType}</p>
        <p><strong>Puissance souhaitée :</strong> ${data.power}</p>
        <p><strong>Détails :</strong><br/>${data.details}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Erreur serveur" },
      { status: 500 }
    );
  }
}
