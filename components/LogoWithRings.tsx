import Link from "next/link";
import Logo from "./Logo";

export default function LogoWith3DRings() {
  return (
    <Link href="/" aria-label="Retour à l'accueil" className="logo-3d block">
      <Logo size="lg" />
    </Link>
  );
}
