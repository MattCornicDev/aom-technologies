import Image from "next/image";

type LogoProps = {
  size: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
} as const;

export default function Logo({ size, className = "" }: LogoProps) {
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
