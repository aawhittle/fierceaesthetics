// app/million-dollar/page.tsx
import { services } from "@/data/services";

export default function MillionDollarPage() {
  const millionDollar = services.millionDollar;

  return (
    <div className="space-y-16 max-w-4xl mx-auto px-6">

      <div>
        <h1 className="text-5xl font-medium">{millionDollar.sectionTitle}</h1>
        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      {millionDollar.intro && (
        <div className="text-neutral-600 max-w-3xl space-y-2">
          {millionDollar.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}

      <div className="space-y-10 mt-8">
        {millionDollar.items.map((treatment) => (
          <div
            key={treatment.name}
            className="p-8 rounded-3xl border border-black/5 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">{treatment.name}</h2>
              <span style={{ color: "rgb(var(--gold))" }}>{treatment.price}</span>
            </div>

            {treatment.time && (
              <p className="text-sm text-neutral-500 mt-1">{treatment.time}</p>
            )}

            <p className="mt-4 text-neutral-600 whitespace-pre-line">
              {treatment.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sticky WhatsApp Booking Button */}
      <a
        href="https://wa.me/447900783177?text=Hi%20I%E2%80%99d%20like%20to%20book%20a%20Million%20Dollar%20Treatment"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[rgb(var(--gold))] text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Book via WhatsApp"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12a9.93 9.93 0 001.2 4.5L2 22l5.5-1.2A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-.5 14h-1v-6h1v6zm0-8h-1V7h1v1z" />
        </svg>
      </a>

    </div>
  );
}