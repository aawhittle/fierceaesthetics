export default function LashBrowPage() {
  return (
    <div className="space-y-16 max-w-4xl">

      <div>
        <h1 className="text-5xl font-medium">
          Lash & Brow Treatments
        </h1>

        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      <div className="space-y-10">

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">Brow Lamination</h2>
            <span style={{ color: "rgb(var(--gold))" }}>£45</span>
          </div>

          <p className="mt-4 text-neutral-600">
            A treatment that restructures brow hairs to create
            fuller, lifted and perfectly shaped brows.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">Lash Lift & Tint</h2>
            <span style={{ color: "rgb(var(--gold))" }}>£50</span>
          </div>

          <p className="mt-4 text-neutral-600">
            Enhances your natural lashes by lifting and tinting
            them for a longer, darker and more defined look.
          </p>
        </div>

      </div>

    </div>
  )
};
