"use client";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay background */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64 md:relative md:shadow-none`}
      >
        <div className="p-6 space-y-6">
          {/* Close button for mobile */}
          <button className="md:hidden mb-6" onClick={onClose}>
            ✕
          </button>

          {/* Menu */}
          <ul className="flex flex-col gap-4 text-[rgb(var(--gold))] font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <span>Treatments & Pricing</span>
              <ul className="pl-4 mt-2 space-y-2 text-neutral-900 font-normal">
                <li>
                  <Link href="/treatments/lash-brow">Lash & Brow</Link>
                </li>
                <li>
                  <Link href="/treatments/body-contouring">Body Contouring</Link>
                </li>
                <li>
                  <Link href="/treatments/million-dollar">Million Dollar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}