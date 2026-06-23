
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AOM Technologies – Fibre, Électricité, Réseaux & Solutions Professionnelles",
  description:
    "AOM Technologies accompagne particuliers et entreprises dans l'installation fibre, l'électricité, les réseaux, la domotique et les solutions professionnelles.",
  keywords: [
    "AOM Technologies",
    "installation fibre",
    "réseaux",
    "électricité",
    "domotique",
    "borne de recharge",
    "technicien fibre",
    "réseau informatique",
    "installation électrique",
  ],
  authors: [{ name: "AOM Technologies" }],
  creator: "AOM Technologies",
  publisher: "AOM Technologies",
  openGraph: {
    title: "AOM Technologies – Fibre, Électricité & Réseaux",
    description:
      "Experts en fibre optique, électricité, réseaux et solutions professionnelles.",
    url: "https://aomtechnologies.com",
    siteName: "AOM Technologies",
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
