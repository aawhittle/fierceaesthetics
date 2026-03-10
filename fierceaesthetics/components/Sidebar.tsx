"use client";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay background when open (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-md z-50 p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:shadow-lg
        `}
      >
        <button
          className="md:hidden mb-6 text-xl font-bold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6 text-lg font-medium text-[rgb(var(--gold))]">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <div>
            <span>Treatments & Pricing</span>
            <div className="flex flex-col ml-4 mt-2 gap-2 text-base text-neutral-700">
              <a href="/treatments/lash-brow">Lash & Brow</a>
              <a href="/treatments/body-contouring">Body Contouring</a>
              <a href="/treatments/million-dollar">Million Dollar</a>
            </div>
          </div>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </aside>

      {/* Mobile toggle button */}
      <button
        className="fixed top-6 left-6 z-50 md:hidden bg-[rgb(var(--gold))] text-white rounded-full p-3 shadow-lg"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
    </>
  );
}