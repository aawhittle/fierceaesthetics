"use client"

import { useState } from "react"
import { services } from "@/data/services"

export default function TreatmentsPage() {

  const [active, setActive] = useState<"body" | "brows" | "facial">("body")

  const serviceMap = {
    body: "bodyContouring",
    brows: "lashBrow",
    facial: "millionDollar"
  } as const

  const data = services[serviceMap[active]]

  return (
    <div className="max-w-4xl mx-auto space-y-12">

      <div>
        <h1 className="text-5xl font-medium">
          Treatments & Pricing
        </h1>

        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      {/* CATEGORY SELECTOR */}

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => setActive("body")}
          className={`px-5 py-2 rounded-full border ${
            active === "body"
              ? "text-white"
              : "text-neutral-600"
          }`}
          style={{
            backgroundColor:
              active === "body"
                ? "rgb(var(--gold))"
                : "transparent"
          }}
        >
          Body
        </button>

        <button
          onClick={() => setActive("brows")}
          className={`px-5 py-2 rounded-full border ${
            active === "brows"
              ? "text-white"
              : "text-neutral-600"
          }`}
          style={{
            backgroundColor:
              active === "brows"
                ? "rgb(var(--gold))"
                : "transparent"
          }}
        >
          Lash & Brow
        </button>

        <button
          onClick={() => setActive("facial")}
          className={`px-5 py-2 rounded-full border ${
            active === "facial"
              ? "text-white"
              : "text-neutral-600"
          }`}
          style={{
            backgroundColor:
              active === "facial"
                ? "rgb(var(--gold))"
                : "transparent"
          }}
        >
          Million Dollar
        </button>

      </div>

      {/* TITLE */}

      <h2 className="text-3xl font-medium">
        {data.sectionTitle}
      </h2>

      {/* TREATMENTS */}

<div className="space-y-8">

  {data.items.map((treatment: typeof data.items[number]) => (
    <div
      key={treatment.name}
      className="
        p-8 
        rounded-3xl 
        bg-white/95 
        md:bg-white/90 
        backdrop-blur-lg 
        border border-black/10 
        shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
        hover:shadow-lg 
        transition
      "
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-medium">{treatment.name}</h3>
        <span
          className="text-lg font-medium"
          style={{ color: "rgb(var(--gold))" }}
        >
          {treatment.price}
        </span>
      </div>

      <p className="mt-4 text-neutral-600 whitespace-pre-line" style={{ lineHeight: '1.7' }}>
        {treatment.description}
      </p>
    </div>
  ))}
</div>

      {/* BOOKING */}

      <div className="pt-12 border-t text-center space-y-6">

        <h3 className="text-2xl font-medium">
          Ready to Book?
        </h3>

        <p className="text-neutral-600">
          Contact Fierce Aesthetics to book your appointment
          or discuss which treatment is best for you.
        </p>

        <a
          href="https://wa.me/447900783177?text=Hi%20I%E2%80%99d%20like%20to%20book%20a%20treatment"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 rounded-xl text-white font-medium"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        >
          Book via WhatsApp
        </a>

      </div>

    </div>
  )
}