"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[rgba(247,247,249,0.2)]
        backdrop-blur-md
        py-2
      "
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/LOGO-AOM-CYMK-01.svg"
            alt="AOM Logo"
            width={75}
            height={75}
            className="ml-8 md:ml-4"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  text-[#222020]
                  uppercase
                  font-medium
                  text-[10px]
                  tracking-wide
                  transition-all
                  hover:font-bold
                  hover:text-[#007ee5]
                  hover:text-[11px]
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#222020] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    text-[#222020]
                    uppercase
                    font-medium
                    text-[12px]
                    tracking-wide
                    transition-all
                    hover:font-bold
                    hover:text-[#007ee5]
                  "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
