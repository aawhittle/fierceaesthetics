"use client";

import { useEffect, useMemo, useState } from "react";

type SectionId = "home" | "about" | "services" | "gallery" | "contact";

const BRAND = "Fierce Aesthetics";
const BOOKING_URL = "https://cal.com/your-link"; // change
const INSTAGRAM_URL = "https://instagram.com/yourhandle"; // change
const WHATSAPP_PHONE_E164 = "447000000000"; // digits only
const WHATSAPP_MESSAGE = "Hi! I’d like to book an appointment.";

const SECTIONS: Array<{
  id: SectionId;
  kicker: string;
  title: string;
  body: string;
  image: string; // put these in /public
}> = [
  {
    id: "home",
    kicker: "Glam Premium",
    title: "Bold beauty. Luxury finish.",
    body: "A calm, elevated experience with refined detail and camera-ready results.",
    image: "/hero.jpg",
  },
  {
    id: "about",
    kicker: "About",
    title: "Crafted, not rushed.",
    body: "Consultation-led treatments and precise work—designed to look effortless.",
    image: "/about.jpg",
  },
  {
    id: "services",
    kicker: "Services",
    title: "Treatments & pricing",
    body: "Brows • Lashes • Skin • Makeup — premium results with clean execution.",
    image: "/services.jpg",
  },
  {
    id: "gallery",
    kicker: "Gallery",
    title: "Real work. Bold imagery.",
    body: "A glimpse of the finish—defined, luminous, and polished.",
    image: "/gallery.jpg",
  },
  {
    id: "contact",
    kicker: "Contact",
    title: "Let’s get you booked.",
    body: "Tap to book, WhatsApp for questions, or message on Instagram.",
    image: "/contact.jpg",
  },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id as SectionId);
      },
      {
        root: null,
        // these margins make the “active section” switch feel premium
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.15, 0.3, 0.45, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

export default function Page() {
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const activeData = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0];

  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  // support direct linking /#services
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (hash && ids.includes(hash)) setTimeout(() => scrollToId(hash), 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen">
      <div className="bg-[rgb(var(--gold))] text-black p-6 text-3xl font-bold">
          Tailwind is working ✅
      </div>
      {/* Subtle gold/white glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 500px at 10% 10%, rgba(212,175,55,0.18), transparent 60%), radial-gradient(900px 500px at 90% 20%, rgba(255,255,255,0.07), transparent 55%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/35">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollToId("home")} className="font-medium tracking-tight">
            <span className="text-white">{BRAND}</span>
            <span className="ml-2 text-xs tracking-[0.28em] uppercase text-[rgb(var(--gold))]">
              studio
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToId(s.id)}
                className={cx(
                  "relative py-2 text-white/70 hover:text-white transition",
                  active === s.id && "text-white"
                )}
                aria-current={active === s.id ? "page" : undefined}
              >
                {s.id === "home" ? "Home" : s.id[0].toUpperCase() + s.id.slice(1)}
                <span
                  className={cx(
                    "absolute left-0 -bottom-[1px] h-[2px] w-full origin-left scale-x-0 transition-transform duration-300",
                    active === s.id && "scale-x-100"
                  )}
                  style={{ backgroundColor: "rgb(var(--gold))" }}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm font-medium bg-[rgb(var(--gold))] text-black hover:brightness-110 transition"
            >
              Book
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-sm border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-sm border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
            >
              IG
            </a>
          </div>
        </div>
      </header>

      {/* Sticky image + scrolling sections */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 py-10">
          {/* LEFT: scrolling content */}
          <div className="space-y-12">
            {SECTIONS.map((s) => (
              <section
                id={s.id}
                key={s.id}
                className="scroll-mt-24 rounded-3xl border border-white/10 bg-black/25 backdrop-blur p-8 sm:p-10"
              >
                <p className="text-xs tracking-[0.28em] uppercase text-white/60">{s.kicker}</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-white">
                  {s.title}
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">{s.body}</p>

                {s.id === "services" && (
                  <div className="mt-6 space-y-3">
                    {[
                      { name: "Brow Shape & Tint", time: "45 mins", price: "£35" },
                      { name: "Lash Lift", time: "60 mins", price: "£55" },
                      { name: "Signature Facial", time: "60 mins", price: "£70" },
                      { name: "Makeup (Occasion)", time: "75 mins", price: "£85" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/25 p-4"
                      >
                        <div>
                          <div className="font-medium text-white">{item.name}</div>
                          <div className="text-sm text-white/60">{item.time}</div>
                        </div>
                        <div className="font-medium" style={{ color: "rgb(var(--gold))" }}>
                          {item.price}
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 flex flex-wrap gap-3">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full px-6 py-3 text-sm font-medium bg-[rgb(var(--gold))] text-black hover:brightness-110 transition"
                      >
                        See availability
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
                      >
                        Ask on WhatsApp
                      </a>
                    </div>
                  </div>
                )}

                {s.id === "contact" && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-6 py-3 text-sm font-medium bg-[rgb(var(--gold))] text-black hover:brightness-110 transition"
                    >
                      Book now
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full px-6 py-3 text-sm font-medium border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
                    >
                      Instagram
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* RIGHT: sticky image that changes with scroll */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-black/30">
                <div
                  className="absolute inset-0 bg-center bg-cover transition-opacity duration-500"
                  style={{ backgroundImage: `url(${activeData.image})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.72) 82%), radial-gradient(600px 300px at 30% 20%, rgba(212,175,55,0.20), transparent 60%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/15 bg-black/40 backdrop-blur p-5">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/70">
                      {activeData.kicker}
                    </div>
                    <div className="mt-1 font-medium text-white">{activeData.title}</div>
                    <div className="text-sm text-white/70">Scroll to explore</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs tracking-[0.28em] uppercase text-white/50">
                Active: <span style={{ color: "rgb(var(--gold))" }}>{active}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
          <button onClick={() => scrollToId("home")} className="hover:text-white">
            Back to top
          </button>
        </div>
      </footer>
    </main>
  );
}