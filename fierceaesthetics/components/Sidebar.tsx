"use client";
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar itself */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64 md:relative md:shadow-none`}
      >
        <div className="p-6 space-y-6">
          <button className="md:hidden mb-6" onClick={onClose}>
            ✕
          </button>
          <ul className="flex flex-col gap-4 text-[rgb(var(--gold))] font-medium">
            <li>Home</li>
            <li>About Me</li>
            <li>Treatments & Pricing
              <ul className="pl-4 mt-2 space-y-2 text-neutral-900">
                <li>Lash & Brow</li>
                <li>Body Contouring</li>
                <li>Million Dollar</li>
              </ul>
            </li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}