import Link from "next/link"

export default function Treatments() {

  const card =
    "p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-lg transition"

  return (
    <div className="space-y-16">

      <div>
        <h1 className="text-5xl font-medium">
          Treatments & Pricing
        </h1>

        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <Link href="/treatments/lash-brow" className={card}>
          <h2 className="text-xl font-medium">
            Lash & Brow Treatments
          </h2>

          <p className="mt-3 text-neutral-600">
            Enhance definition with professional brow shaping,
            tinting and lash lifting.
          </p>
        </Link>

        <Link href="/treatments/body-contouring" className={card}>
          <h2 className="text-xl font-medium">
            Body Contouring
          </h2>

          <p className="mt-3 text-neutral-600">
            Target stubborn fat and sculpt the body using
            advanced non-surgical techniques.
          </p>
        </Link>

        <Link href="/treatments/million-dollar" className={card}>
          <h2 className="text-xl font-medium">
            Million Dollar Treatments
          </h2>

          <p className="mt-3 text-neutral-600">
            Advanced facials and microneedling treatments
            delivering radiant skin results.
          </p>
        </Link>

      </div>

    </div>
  )
}