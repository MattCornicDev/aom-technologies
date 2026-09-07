import type { Metadata } from "next";
import BoutiqueConfigurator from "@/components/BoutiqueConfigurator";

export const metadata: Metadata = {
  title: "Boutique bornes de recharge | AOM Technologies",
  description:
    "Choisissez votre borne de recharge et demandez une installation IRVE certifiée par AOM Technologies.",
};

export default function BoutiquePage() {
  return <BoutiqueConfigurator />;
}