"use client";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleLinkClick = () => {
    if (window.innerWidth < 768) { // only close on mobile
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:h-auto md:shadow-none`}
      >
        <div className="p-6 space-y-6">
          {/* Close button only on mobile */}
          <button className="md:hidden mb-6 text-2xl" onClick={onClose}>✕</button>

          <ul className="flex flex-col gap-4 text-[rgb(var(--gold))] font-medium">
            <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link href="/about" onClick={handleLinkClick}>About Me</Link></li>
            <li>
             <Link href="/treatments" onClick={handleLinkClick}>Treatments & Pricing</Link>
             </li>
            <li><Link href="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
            <li><Link href="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}