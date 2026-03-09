"use client";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<path d="M12 21a9 9 0 1 0-7.78-4.48L3 21l4.7-1.2A8.96 8.96 0 0 0 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
</svg>
);
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<path d="M9.3 8.7c.2-.5.4-.5.6-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.1.3 0 .5.4.9 1.5 2.1 2.5 2.5.2.1.4.1.5 0l.5-.4c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.5.6-.6.3-1.7.3-3.1-.3-1.4-.6-3.2-2.2-4.2-4.2-0.6-1.4-.6-2.5-.3-3.1Z" fill="currentColor" opacity="0.9"/>
</svg>
);
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
  <path d="M14.5 3c.6 2.7 2.6 4.6 5 4.9v2.2c-2.1-.1-3.9-1-5-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
</svg>
);
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
return (
<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
<path d="M13 9h2.5V6H13c-1.66 0-3 1.34-3 3v3H8v3h2v6h3v-6h2.11l.39-3H13V9c0-.55.45-1 1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
</svg>
);
}

export default function Page() { const [hideSocial, setHideSocial] = useState(false); useEffect(() => { const elements = document.querySelectorAll(".fade-in"); const observer = new IntersectionObserver( (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); } }); }, { threshold: 0.15 } ); elements.forEach((el) => observer.observe(el)); }, []); useEffect(() => { const el = document.getElementById("footer-sentinel"); if (!el) return; const obs = new IntersectionObserver( (entries) => setHideSocial(entries[0]?.isIntersecting ?? false), { root: null, threshold: 0.1 } ); obs.observe(el); return () => obs.disconnect(); }, []);

return (
<main>
    {/* HERO */}
    <section className="space-y-6">
      <p className="section-label text-neutral-500">Beauty Redefined</p>

      <h1 className="text-5xl md:text-6xl font-medium leading-tight">
        Bold beauty.{" "}
        <span style={{ color: "rgb(var(--gold))" }}>Luxury finish.</span>
      </h1>

      <p className="text-neutral-600 max-w-xl text-lg">
        A calm, elevated experience with refined detail and camera-ready results.
      </p>
    </section>

    {/* SERVICES */}
    <section className="mt-32 space-y-10">
      <p className="section-label text-neutral-500">Services</p>
      <h2 className="text-4xl font-medium leading-tight">
        Treatments & Pricing
      </h2>

      <div
        className="mt-4 h-px w-24"
        style={{ backgroundColor: "rgb(var(--gold) / 0.35)" }}
      />

      <div className="mt-10 space-y-16">
        {services.map((group) => (
          <div key={group.sectionTitle}>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
              {group.sectionTitle}
            </h3>

            <div className="mt-4 space-y-3 text-neutral-600 max-w-3xl">
              {group.intro?.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10 space-y-6">
              {group.items.map((s) => (
                <div
                  key={s.name}
                  className="p-7 rounded-3xl bg-white md:bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
                >
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <p className="text-lg font-medium">{s.name}</p>
                      {s.time && (
                        <p className="text-sm text-neutral-500 mt-1">
                          {s.time}
                        </p>
                      )}
                    </div>

                    <p
                      className="text-lg font-medium"
                      style={{ color: "rgb(var(--gold))" }}
                    >
                      {s.price}
                    </p>
                  </div>

                  {s.description && (
                    <p className="mt-4 text-neutral-600 whitespace-pre-line">
                      {s.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {group.noteTitle && (
              <div className="mt-8 p-7 rounded-3xl bg-white md:bg-white/70 backdrop-blur-md border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <p className="text-lg font-medium">{group.noteTitle}</p>
                <p className="mt-2 text-neutral-600">{group.noteBody}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* GALLERY */}
    <section id="gallery" className="mt-40 space-y-12">
      <div className="space-y-6 text-center">
        <p className="section-label text-neutral-500">Gallery</p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
          Recent Work
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="md:col-span-2 overflow-hidden rounded-3xl">
          <img src="/images/work1.jpg" className="w-full h-[500px] object-cover"/>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img src="/images/work2.jpg" className="w-full h-[400px] object-cover"/>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img src="/images/work3.jpg" className="w-full h-[400px] object-cover"/>
        </div>

        <div className="md:col-span-2 overflow-hidden rounded-3xl">
          <img src="/images/work4.jpg" className="w-full h-[500px] object-cover"/>
        </div>
      </div>
    </section>

    <footer className="mt-24">
      <div id="footer-sentinel" className="h-16" />
    </footer>

  </div>

  {/* FLOATING SOCIAL */}
  <div
    className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
      hideSocial ? "opacity-0 translate-y-3 pointer-events-none" : "opacity-100"
    }`}
  >
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <InstagramIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
    </a>

    <a href="https://wa.me/447900783177" target="_blank" rel="noreferrer">
      <WhatsAppIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
    </a>

    <a href="https://tiktok.com" target="_blank" rel="noreferrer">
      <TikTokIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
    </a>

    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FacebookIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
    </a>
  </div>

</main>