"use client";
import { useEffect, useState } from "react";

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
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
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
        <section className="space-y-6">
          <p className="section-label text-neutral-500">Beauty Redefined</p>

          <h1 className="text-5xl md:text-6xl font-medium leading-tight">
            Bold beauty.{" "}
            <span style={{ color: "rgb(var(--gold))" }}>Luxury finish.</span>
          </h1>

          <p className="text-neutral-600 max-w-xl text-lg">
            A calm, elevated experience with refined detail and camera-ready
            results.
          </p>
        </section>

        <section className="mt-32 space-y-10">
          <p className="section-label text-neutral-500">Services</p>
          <h2 className="text-4xl font-medium leading-tight">
            Treatments & Pricing
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
          sectionTitle: "Lash & Brow Treatments",
          intro: [
            "Beautifully defined lashes and brows can completely transform your look. Our professional lash and brow treatments are designed to enhance your natural features, creating fuller, lifted, and perfectly groomed results with minimal daily maintenance.",
            "Each treatment is performed with precision and high-quality professional products to ensure long-lasting results while maintaining the health of your natural lashes and brows.",
          ],
          items: [
            {
              name: "Traditional Lash Lift & Tint",
              time: "45 mins",
              price: "£45",
              description:
                "A classic treatment designed to enhance the natural beauty of your lashes. The lashes are gently lifted from the root to create the appearance of longer, fuller lashes, while a bespoke tint deepens the colour for a soft mascara-like finish.\n\nThe result is beautifully lifted, darker lashes that open the eyes and last up to 6–8 weeks.",
            },
            {
              name: "Korean Lash Lift & Tint",
              time: "45–60 mins",
              price: "£50",
              description:
                "An advanced lash lift technique known for producing a softer, more natural-looking curl while maintaining optimal lash health. Using nourishing and conditioning formulas, this treatment lifts the lashes while keeping them glossy, flexible, and beautifully defined.\n\nIdeal for clients looking for a luxurious, long-lasting lash enhancement with a refined finish.",
            },
            {
              name: "Brow Lamination, Wax & Tint",
              time: "45 mins",
              price: "£45",
              description:
                "The ultimate treatment for fuller, more structured brows. Brow lamination works by gently restructuring the brow hairs so they can be lifted and styled into a sleek, uniform shape, creating a fuller and more polished appearance.\n\nThe treatment is completed with a professional brow wax and custom tint to enhance colour, shape, and definition.",
            },
            {
              name: "Brow Shape, Wax & Tint",
              time: "30 mins",
              price: "£25",
              description:
                "A tailored brow grooming treatment designed to shape and define your brows while complementing your natural features. Brows are expertly sculpted using precision waxing and enhanced with a bespoke tint to add depth and definition.\n\nPerfect for maintaining beautifully groomed, balanced brows.",
            },
          ],
          noteTitle: "Pair With a Facial",
          noteBody:
            "Many clients choose to combine their lash or brow treatment with one of our advanced facial treatments for the ultimate self-care experience.",
        },
  {
      sectionTitle: "Body Contouring Treatments",
      intro: [
        "Non-invasive sculpting treatments designed to target stubborn areas, improve skin firmness, and support a smoother, more defined silhouette."
      ],
      items: [
        {
          name: "Tummy Sculpt RF & Cavitation",
          sub: "Targets fat + loose skin",
          price: "£89",
          time: "—",
          description:
            "A targeted body contouring treatment using radio frequency and cavitation to help reduce stubborn fat and improve skin firmness across the stomach area.\n\nThis treatment works by breaking down fat cells while stimulating collagen production to tighten and smooth the skin. Lymphatic drainage massage is included to support the body’s natural detoxification process.\n\nResults include a visibly flatter stomach, improved contour, and firmer-looking skin."
        },
        {
          name: "Tummy Sculpt – RF Skin Tightening",
          sub: "Skin tightening only",
          price: "£89",
          time: "—",
          description:
            "A targeted treatment designed to tighten and firm loose skin on the stomach following weight loss or pregnancy.\n\nUsing advanced radio frequency technology, this treatment gently heats the deeper layers of the skin to stimulate collagen and elastin production. This helps improve skin elasticity, tighten loose or crepey skin, and enhance the overall appearance of the abdominal area.\n\nOver a course of treatments, the stomach appears firmer, smoother, and more toned — ideal for improving skin laxity without invasive procedures."
        },
        {
          name: "Thigh Sculpt",
          sub: "RF + Cavitation",
          price: "£119",
          time: "—",
          description:
            "A non-invasive body sculpting treatment designed to target stubborn fat and improve skin tone across the thighs.\n\nUsing radio frequency and cavitation technology, this treatment helps break down fat cells while encouraging collagen production to smooth and tighten the skin.\n\nLymphatic drainage massage is included to help flush toxins and enhance results."
        },
        {
          name: "Arm Sculpt",
          sub: "Upper arm contour + firming",
          price: "£89",
          time: "—",
          description:
            "A targeted treatment designed to reduce stubborn fat and improve skin firmness in the upper arms.\n\nUsing cavitation and radio frequency, this treatment helps contour the arms while tightening the skin and improving overall tone and texture."
        },
        {
          name: "Booty Lift",
          sub: "Lift + firm + sculpt",
          price: "£89",
          time: "—",
          description:
            "A non-invasive treatment designed to lift, firm and sculpt the buttocks using radio frequency and cavitation technology.\n\nThis treatment helps improve skin laxity while enhancing shape and contour. Lymphatic drainage massage helps boost circulation and support the body’s natural detoxification process."
        }
        {
          name: "RF Skin Tightening Facial",
          price: "£89",
          time: "—",
          description:
            "A luxurious, results-driven facial designed to lift, firm and rejuvenate the skin while promoting long-term skin health.\n\nThis treatment begins with a full professional facial using the premium Million Dollar skincare range, including deep cleansing, exfoliation and targeted products chosen to suit your skin type. Radio frequency technology is then used to gently heat the deeper layers of the skin, stimulating collagen and elastin production to improve firmness and elasticity.\n\nThis advanced treatment helps soften the appearance of fine lines and wrinkles, refine skin texture and restore a youthful glow. Skin is left feeling smoother, tighter and deeply revitalised, with results continuing to improve with regular treatments."
 }
      ]
    }
      ].map((group) => (
        <div key={group.sectionTitle} className="mt-16">
          {/* Group header + intro (keeps your typography vibe) */}
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
            {group.sectionTitle}
          </h3>

          <div className="mt-4 space-y-3 text-neutral-600 max-w-3xl text-lg leading-relaxed">
            {group.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Cards (same border/shadow/hover as your existing service rows) */}
          <div className="mt-10 space-y-6">
            {group.items.map((s) => (
              <div
                key={s.name}
                className="p-7 rounded-3xl
                  bg-white md:bg-white/80
                  md:backdrop-blur-md
                  border border-black/5
                  shadow-[0_20px_60px_rgba(0,0,0,0.05)]
                  transition-all duration-300
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1"
              >
                <div className="flex justify-between items-start gap-6">
                  <div className="min-w-0">
                    <p className="text-lg font-medium tracking-tight">
                      {s.name}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">{s.time}</p>
                  </div>

                  <p
                    className="text-lg font-medium shrink-0"
                    style={{ color: "rgb(var(--gold))" }}
                  >
                    {s.price}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-neutral-600 leading-relaxed whitespace-pre-line">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Note callout (same design language) */}
          <div
            className="mt-8 p-7 rounded-3xl
              bg-white md:bg-white/70
              md:backdrop-blur-md
              border border-black/5
              shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
          >
            <p className="text-lg font-medium tracking-tight">
              {group.noteTitle}
            </p>
            <p className="mt-2 text-neutral-600 leading-relaxed">
              {group.noteBody}
            </p>
          </div>
        </div>
      ))}
          </div>
    </section>
  <section id="gallery" className="mt-40 space-y-12">
    <div className="space-y-6 text-center">
    <p className="section-label text-neutral-500">
      Gallery
    </p>
    <h2 className="text-4xl md:text-5xl font-medium leading-tight">
      Recent Work
    </h2>
  </div>

  <div className="grid gap-8 md:grid-cols-2">
    
    {/* Large Feature Image */}
    <div className="md:col-span-2 overflow-hidden rounded-3xl group shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      <img
        src="/images/work1.jpg"
        alt="Beauty treatment"
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Two Medium */}
    <div className="overflow-hidden rounded-3xl group shadow-[0_25px_60px_rgba(0,0,0,0.07)]">
      <img
        src="/images/work2.jpg"
        alt=""
        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group shadow-[0_25px_60px_rgba(0,0,0,0.07)]">
      <img
        src="/images/work3.jpg"
        alt=""
        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Another Large */}
    <div className="md:col-span-2 overflow-hidden rounded-3xl group shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      <img
        src="/images/work4.jpg"
        alt=""
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

  </div>
</section>

        {/* sentinel goes near the bottom of your content */}
        <footer className="mt-24">
          <div id="footer-sentinel" className="h-16" />
        </footer>
      </div>

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
          className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md     border border-[rgba(var(--gold),0.25)] 
    text-[rgb(var(--gold))]
    shadow-[0_18px_50px_rgba(0,0,0,0.12)] 
    hover:bg-white/85 transition"
        >
          <InstagramIcon className="h-5 w-5 text-[rgb(var(--gold))]" />
        </a>

        <a
          href="https://wa.me/447900783177?text=Hi%20I%E2%80%99d%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="h-12 w-12 grid place-items-center rounded-full bg-white/70 backdrop-blur-md border border-[rgba(var(--gold),0.25)] 
    text-[rgb(var(--gold))]
    shadow-[0_18px_50px_rgba(0,0,0,0.12)] 
    hover:bg-white/85 transition"
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
    </main>
  );
}
