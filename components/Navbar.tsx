"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lightTextPages = pathname === "/irve" || pathname === "/formation";

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#features" },
    { label: "irve", href: "/irve" },
    { label: "Formation", href: "/formation" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 z-50 w-full
        bg-[rgba(36,36,119,0.0)]
        py-2
      "
    >
      <div className="container mx-auto flex min-h-20 items-center justify-end px-6 md:min-h-0 md:px-12">

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`
                  ${lightTextPages ? "text-white" : "text-[#111827]"}
                  uppercase
                  font-medium
                  text-[10px]
                  tracking-wide
                  transition-all
                  hover:font-bold
                  hover:text-[#007ee5]
                  hover:text-[11px]
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[#007ee5] shadow-md shadow-slate-900/10 transition hover:bg-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 shadow-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ maxHeight: open ? "calc(100vh - 5rem)" : "0px" }}
      >
          <ul className="max-h-[calc(100vh-5rem)] space-y-2 overflow-y-auto overscroll-contain px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#222020] transition-colors hover:bg-sky-50 hover:text-[#007ee5]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </nav>
  );
}
