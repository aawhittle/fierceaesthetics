"use client";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M17.25 6.85h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21a9 9 0 1 0-7.78-4.48L3 21l4.7-1.2A8.96 8.96 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.7c.2-.5.4-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.1.3 0 .5.4.9 1.5 2.1 2.5 2.5.2.1.4.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.5.6-.6.3-1.7.3-3.1-.3-1.4-.6-3.2-2.2-4.2-4.2-0.6-1.4-.6-2.5-.3-3.1Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 3v10.2a3.7 3.7 0 1 1-3-3.63V6.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 3c.6 2.7 2.6 4.6 5 4.9v2.2c-2.1-.1-3.9-1-5-2.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 9h2.5V6H13c-1.66 0-3 1.34-3 3v3H8v3h2v6h3v-6h2.11l.39-3H13V9c0-.55.45-1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  const [hideSocial, setHideSocial] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  useEffect(() => {
    const el = document.getElementById("footer-sentinel");
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => setHideSocial(entries[0]?.isIntersecting ?? false),
      { root: null, threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen text-neutral-950">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* HERO */}
        <section className="space-y-6">
          <p className="section-label text-neutral-500">Fierce Aesthetics: Beauty Redefined</p>
          <h1 className="text-5xl md:text-6xl font-medium leading-tight">
            Bold beauty.{" "}
            <span style={{ color: "rgb(var(--gold))" }}>Luxury finish.</span>
          </h1>
          <p className="text-neutral-600 max-w-xl text-lg">
            A calm, elevated experience with refined detail and camera-ready results.
          </p>
        </section>


    <footer className="mt-24">
      <div id="footer-sentinel" className="h-16" />
    </footer>

    {/* Floating icon buttons (auto-hide near footer) */}
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        hideSocial ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100"
      }`}
    >
      <a
        href="https://instagram.com/fierceaestheticsuk?igsh=a284azI3azJkd2N2"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-[rgba(var(--gold),0.25)] text-[rgb(var(--gold))] shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:bg-white/85 transition"
      >
        <InstagramIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
      </a>
      <a
        href="https://wa.me/447900783177?text=Hi%20I%E2%80%99d%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-[rgba(var(--gold),0.25)] text-[rgb(var(--gold))] shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:bg-white/85 transition"
      >
        <WhatsAppIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
      </a>
      <a
        href="http://www.tiktok.com/@fierceaestheticsuk"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
        className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:bg-white/85 transition"
      >
        <TikTokIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
      </a>
      <a
        href="https://www.facebook.com/fierceaestheticschorley/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:bg-white/85 transition"
      >
        <FacebookIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
      </a>
    </div>
  </div>
</main>
  );
}