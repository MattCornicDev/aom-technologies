import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Archivo_Narrow } from "next/font/google";

const archivo = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AOM Technologies – Fibre, Électricité, IRVE & Réseaux Professionnels",
  description:
    "AOM Technologies installe fibre optique, électricité, réseaux informatiques, domotique et bornes de recharge IRVE certifiées Qualifelec dans les Hauts-de-France.",
  keywords: [
    "AOM Technologies",
    "installation fibre optique",
    "technicien fibre",
    "réseaux informatiques",
    "installation électrique",
    "domotique",
    "IRVE",
    "borne de recharge électrique",
    "installateur IRVE certifié",
    "Qualifelec",
    "NF C 15-100",
    "borne 7kW 11kW 22kW",
    "installation borne électrique",
    "Hauts-de-France",
    "Nord 59",
    "Pas-de-Calais 62"
  ],
  authors: [{ name: "AOM Technologies" }],
  creator: "Codexium",
  publisher: "AOM Technologies",
  openGraph: {
    title: "AOM Technologies – Fibre, Électricité, IRVE & Réseaux",
    description:
      "Experts en fibre optique, électricité, réseaux informatiques, domotique et bornes de recharge IRVE certifiées Qualifelec.",
    url: "https://aomtechnologies.com",
    siteName: "AOM Technologies",
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>

      <body className={`min-h-full flex flex-col ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
