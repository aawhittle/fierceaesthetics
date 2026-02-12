export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <section className="space-y-6">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-400">
            Glam Premium
          </p>
          <h1 className="text-5xl font-semibold tracking-tight">
            Bold beauty. <span className="text-amber-400">Luxury finish.</span>
          </h1>
          <p className="text-neutral-400 max-w-xl">
            A calm, elevated experience with refined detail and camera-ready results.
          </p>
        </section>

        <section className="mt-24 space-y-6">
          <p className="text-xs tracking-[0.4em] uppercase text-neutral-400">
            Services
          </p>
          <h2 className="text-3xl font-medium">
            Treatments & Pricing
          </h2>

          <div className="mt-6 space-y-4">
            {[
              { name: "Brow Shape & Tint", time: "45 mins", price: "£35" },
              { name: "Lash Lift", time: "60 mins", price: "£55" },
              { name: "Signature Facial", time: "60 mins", price: "£70" },
            ].map((s) => (
              <div
                key={s.name}
                className="flex justify-between items-center p-5 rounded-2xl border border-neutral-800 bg-neutral-900"
              >
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-neutral-400">{s.time}</p>
                </div>
                <p className="text-amber-400 font-medium">{s.price}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}