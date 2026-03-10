"use client";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {

  const handleLinkClick = () => {
    onClose(); // close menu after clicking link
  };

  return (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-6">

          <button
            className="mb-6 text-2xl"
            onClick={onClose}
          >
            ✕
          </button>

          <ul className="flex flex-col gap-4 text-[rgb(var(--gold))] font-medium">

            <li>
              <Link href="/" onClick={handleLinkClick}>Home</Link>
            </li>

            <li>
              <Link href="/about" onClick={handleLinkClick}>About Me</Link>
            </li>

            <li>
              <Link href="/treatments" onClick={handleLinkClick}>
                Treatments & Pricing
              </Link>
            </li>

            <li>
              <Link href="/gallery" onClick={handleLinkClick}>Gallery</Link>
            </li>

            <li>
              <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}