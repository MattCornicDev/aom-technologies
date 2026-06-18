import Image from "next/image";

export default function Logo({ size = "md", className = "" }) {
  const sizes = {
    sm: 60,
    md: 90,
    lg: 110,
  };

  return (
    <Image
      src="/images/logos/LOGO-AOM-CYMK-01.svg"
      alt="AOM logo"
      width={sizes[size]}
      height={sizes[size]}
      className={`object-contain ${className}`}
    />
  );
}
