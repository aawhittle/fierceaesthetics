"use client";

import { useState, useEffect } from "react";

export default function FloatingBookButton() {
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    // Hide button near the footer
    const footer = document.getElementById("footer-sentinel");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => setHideButton(entries[0]?.isIntersecting ?? false),
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/447900783177?text=Hi%20I%E2%80%99d%20like%20to%20book%20an%20appointment"
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-5 py-3 rounded-full
        bg-[rgb(var(--gold))] text-white font-medium shadow-lg transition-all duration-300
        hover:bg-[rgb(var(--gold)/0.85)]
        ${hideButton ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100"}`}
    >
      Book Appointment
    </a>
  );
}