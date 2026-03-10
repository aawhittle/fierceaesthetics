"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const treatmentLinks = [
    { title: "Lash & Brow Treatments", href: "/treatments/lash-brow" },
    { title: "Body Contouring Treatments", href: "/treatments/body-contouring" },
    { title: "Million Dollar Treatments", href: "/treatments/million-dollar" },
  ];

  return (
    <>
      {/* Hamburger button (desktop & mobile) */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden text-2xl font-bold text-[rgb(var(--gold))] bg-white/70 backdrop-blur-md rounded-full w-12 h-12 grid place-items-center shadow-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Sidebar overlay */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:shadow-md
        `}
      >
        <div className="px-6 py-10 flex flex-col space-y-6 h-full">
          <div className="text-2xl font-bold text-[rgb(var(--gold))] mb-10">
            Fierce Aesthetics
          </div>

          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <Link href="/" className="hover:text-[rgb(var(--gold))] transition">Home</Link>
            <Link href="/about" className="hover:text-[rgb(var(--gold))] transition">About Me</Link>

            <div>
              <p className="uppercase font-semibold text-sm mb-2">Treatments & Pricing</p>
              <div className="flex flex-col space-y-2 pl-2">
                {treatmentLinks.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="hover:text-[rgb(var(--gold))] transition"
                    onClick={() => setOpen(false)}
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" className="hover:text-[rgb(var(--gold))] transition">Gallery</Link>
            <Link href="/contact" className="hover:text-[rgb(var(--gold))] transition">Contact</Link>
          </nav>
        </div>
      </aside>

      {/* Overlay background when sidebar is open (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/25 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}