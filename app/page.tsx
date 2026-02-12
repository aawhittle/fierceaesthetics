"use client";

import { useEffect, useMemo, useState } from "react";

type SectionId = "home" | "about" | "services" | "gallery" | "contact";

const BOOKING_URL = "https://cal.com/your-link"; // replace
const INSTAGRAM_URL = "https://instagram.com/yourhandle"; // replace
const WHATSAPP_PHONE_E164 = "447000000000"; // replace (UK example). Use digits only.
const WHATSAPP_MESSAGE = "Hi! I’d like to book an appointment.";

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
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id as SectionId);
      },
      {
        // tweak for header height + elegant switching
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: SectionId;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-black/5"
      aria-label={title}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] uppercase text-black/60">{kicker}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight">
            {title}
          </h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  const sections = useMemo<SectionId[]>(
    () => ["home", "about", "services", "gallery", "contact"],
    []
  );
  const active = useActiveSection(sections);

  // If user lands on /#services etc.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as SectionId;
    if (hash && sections.includes(hash)) {
      // small delay so layout is ready
      setTimeout(() => scrollToId(hash), 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <main className="min-h-screen bg-[#fbfaf8] text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#fbfaf8]/85 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToId("home")}
            className="font-medium tracking-tight"
            aria-label="Go to top"
          >
            Your Brand
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((id) => {
              const label =
                id === "home"
                  ? "Home"
                  : id.charAt(0).toUpperCase() + id.slice(1);
              return (
                <button
                  key={id}
                  onClick={() => scrollToId(id)}
                  className={cx(
                    "relative py-2 text-black/70 hover:text-black transition",
                    active === id && "text-black"
                  )}
                  aria-current={active === id ? "page" : undefined}
                >
                  {label}
                  <span
                    className={cx(
                      "absolute left-0 -bottom-[1px] h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300",
                      active === id && "scale-x-100"
                    )}
                  />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
            >
              Book
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-sm border border-black/15 hover:border-black/30 transition"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-3 py-2 text-sm border border-black/15 hover:border-black/30 transition"
              aria-label="Instagram"
              title="Instagram"
            >
              IG
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="scroll-mt-24" aria-label="Home">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-black/60">
                Beauty • Skin • Brows • Lashes
              </p>
              <h1 className="mt-4 text-4xl sm:text-6xl font-medium tracking-tight leading-[1.05]">
                Sleek, elegant beauty —<br className="hidden sm:block" />
                done beautifully.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-black/70 max-w-xl">
                A refined experience with calm, premium finishes. Replace this
                with your brand message.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-6 py-3 bg-black text-white hover:opacity-90 transition"
                >
                  Book an appointment
                </a>
                <button
                  onClick={() => scrollToId("services")}
                  className="rounded-full px-6 py-3 border border-black/15 hover:border-black/30 transition"
                >
                  View services
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 max-w-md text-sm text-black/70">
                <div>
                  <div className="font-medium text-black">Location</div>
                  <div>City, UK</div>
                </div>
                <div>
                  <div className="font-medium text-black">Hours</div>
                  <div>Mon–Sat • 9–6</div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-black/5 border border-black/10 overflow-hidden">
                <div className="h-full w-full grid place-items-center text-black/40 text-sm">
                  Gallery image / brand photo here
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white/70 backdrop-blur border border-black/10 p-5 shadow-sm">
                <div className="text-xs tracking-[0.22em] uppercase text-black/60">
                  Signature
                </div>
                <div className="mt-1 font-medium">Natural, polished finish</div>
                <div className="text-sm text-black/70">Book in minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" kicker="About" title="A calm, elevated experience">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="text-black/70 leading-relaxed">
            <p>
              Write a short story about your brand: your approach, your
              speciality, the vibe clients can expect.
            </p>
            <p className="mt-4">
              Keep it simple, confident, and warm — luxury comes from clarity
              and space.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-8">
            <div className="text-sm text-black/70">
              <div className="font-medium text-black">What clients love</div>
              <ul className="mt-4 space-y-3 list-disc pl-5">
                <li>Clean, natural results</li>
                <li>Thoughtful consultation</li>
                <li>Premium finish, long-lasting</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="services" kicker="Services" title="Treatments & pricing">
        <div className="grid gap-4">
          {[
            { name: "Brow Shape & Tint", time: "45 mins", price: "£35" },
            { name: "Lash Lift", time: "60 mins", price: "£55" },
            { name: "Signature Facial", time: "60 mins", price: "£70" },
            { name: "Makeup (Occasion)", time: "75 mins", price: "£85" },
          ].map((s) => (
            <div
              key={s.name}
              className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur px-6 py-5 flex items-center justify-between gap-6"
            >
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-black/60">{s.time}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-medium">{s.price}</div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-4 py-2 text-sm bg-black text-white hover:opacity-90 transition"
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 bg-black text-white hover:opacity-90 transition"
          >
            See availability
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 border border-black/15 hover:border-black/30 transition"
          >
            Ask on WhatsApp
          </a>
        </div>
      </Section>

      <Section id="gallery" kicker="Gallery" title="A glimpse of the work">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-3xl border border-black/10 bg-black/5 overflow-hidden grid place-items-center text-black/40 text-sm"
            >
              Image {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full px-6 py-3 border border-black/15 hover:border-black/30 transition"
          >
            View more on Instagram
          </a>
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="Let’s get you booked">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-8">
            <div className="font-medium">Quick links</div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 bg-black text-white hover:opacity-90 transition"
              >
                Book now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 border border-black/15 hover:border-black/30 transition"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 border border-black/15 hover:border-black/30 transition"
              >
                Instagram
              </a>
            </div>

            <div className="mt-8 text-sm text-black/70 space-y-2">
              <div><span className="text-black font-medium">Email:</span> hello@yourdomain.com</div>
              <div><span className="text-black font-medium">Phone:</span> +44 7xxx xxx xxx</div>
              <div><span className="text-black font-medium">Location:</span> City, UK</div>
            </div>
          </div>

          <form
            className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Hook this up to Formspree/Getform or a Vercel API route.");
            }}
          >
            <div className="font-medium">Send a message</div>
            <p className="mt-2 text-sm text-black/70">
              For enquiries, collaborations, or if you’re unsure what to book.
            </p>

            <div className="mt-6 grid gap-4">
              <input
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                placeholder="Email"
                required
              />
              <textarea
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                placeholder="Message"
                rows={5}
                required
              />
              <button className="rounded-full px-6 py-3 bg-black text-white hover:opacity-90 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Your Brand. All rights reserved.</div>
          <div className="flex gap-4">
            <button onClick={() => scrollToId("home")} className="hover:text-black">
              Back to top
            </button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-black">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}