"use client";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-6 left-6 z-50 md:hidden bg-[rgb(var(--gold))] text-white rounded-full p-3 shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      >
        ☰
      </button>

      {/* Desktop toggle button */}
      <button
        className="hidden md:flex fixed top-6 left-6 z-50 bg-[rgb(var(--gold))] text-white rounded-full p-3 shadow-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Overlay background for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md z-50 p-6 shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:w-64 md:shadow-2xl
        `}
      >
        {/* Close button only for mobile */}
        <button
          className="md:hidden mb-6 text-xl font-bold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 text-lg font-medium text-[rgb(var(--gold))]">
          <a href="/" className="hover:text-neutral-900 transition">Home</a>
          <a href="/about" className="hover:text-neutral-900 transition">About Me</a>

          <div>
            <span className="font-semibold">Treatments & Pricing</span>
            <div className="flex flex-col ml-4 mt-2 gap-2 text-base text-neutral-700">
              <a href="/treatments/lash-brow" className="hover:text-[rgb(var(--gold))] transition">
                Lash & Brow
              </a>
              <a href="/treatments/body-contouring" className="hover:text-[rgb(var(--gold))] transition">
                Body Contouring
              </a>
              <a href="/treatments/million-dollar" className="hover:text-[rgb(var(--gold))] transition">
                Million Dollar
              </a>
            </div>
          </div>

          <a href="/gallery" className="hover:text-neutral-900 transition">Gallery</a>
          <a href="/contact" className="hover:text-neutral-900 transition">Contact</a>
        </nav>
      </aside>
    </>
  );
}