"use client";

import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import FloatingSocials from "@/components/FloatingSocials";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

function SidebarLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const treatmentLinks = [
    { title: "Lash & Brow Treatments", href: "/treatments/lash-brow" },
    { title: "Body Contouring Treatments", href: "/treatments/body-contouring" },
    { title: "Million Dollar Treatments", href: "/treatments/million-dollar" },
  ];
 return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-neutral-50 border-r border-black/5 px-6 py-10 space-y-6">
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
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery" className="hover:text-[rgb(var(--gold))] transition">Gallery</Link>
          <Link href="/contact" className="hover:text-[rgb(var(--gold))] transition">Contact</Link>
        </nav>
      </aside>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex flex-col w-full">
        <header className="flex items-center justify-between px-6 py-4 border-b border-black/5 bg-white/80 backdrop-blur-md">
          <div className="text-xl font-bold text-[rgb(var(--gold))]">Fierce Aesthetics</div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-neutral-800 focus:outline-none"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </header>

        {mobileOpen && (
          <nav className="flex flex-col px-6 py-4 space-y-4 bg-white/95 backdrop-blur-md border-b border-black/5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[rgb(var(--gold))] transition">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[rgb(var(--gold))] transition">About Me</Link>

            <div>
              <p className="uppercase font-semibold text-sm mb-2">Treatments & Pricing</p>
              <div className="flex flex-col space-y-2 pl-2">
                {treatmentLinks.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-[rgb(var(--gold))] transition"
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" onClick={() => setMobileOpen(false)} className="hover:text-[rgb(var(--gold))] transition">Gallery</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[rgb(var(--gold))] transition">Contact</Link>
          </nav>
        )}
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
       <body className="font-[var(--font-inter)] antialiased bg-white text-neutral-900">
          {/* Sidebar Overlay (mobile & desktop) */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Mobile toggle button */}
        <button
          className="fixed top-6 left-6 z-50 bg-[rgb(var(--gold))] text-white p-3 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

          {/* Main content */}
          <main
            className={`flex-1 px-6 py-12 max-w-6xl mx-auto transition-transform duration-500 ease-in-out
              ${sidebarOpen ? "md:translate-x-0" : ""}`}
          >
            {children}
            <div id="footer-sentinel" className="h-32" />
          </main>

        <footer className="mt-20 px-6">
          <div className="max-w-6xl mx-auto text-center py-8 rounded-3xl
            bg-white/90 backdrop-blur-md border border-black/5
            shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

        <p className="text-sm text-neutral-700">
           &copy; {new Date().getFullYear()} 
            <span className="font-medium" style={{ color: "rgb(var(--gold))" }}>
            AW
            </span>. All rights reserved.
        </p>

  </div>
</footer>

        {/* Floating social icons */}
        <FloatingSocials />
      </body>
    </html>
  );
}