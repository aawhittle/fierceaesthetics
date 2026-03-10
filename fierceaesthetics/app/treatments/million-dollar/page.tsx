export default function MillionDollarPage() {
  return (
    <div className="space-y-16 max-w-4xl">

      <div>
        <h1 className="text-5xl font-medium">
          Million Dollar Treatments
        </h1>

        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      <div className="space-y-10">

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">
              RF Skin Tightening Facial
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£89</span>
          </div>

          <p className="mt-4 text-neutral-600">
            A luxurious results-driven facial designed to lift,
            firm and rejuvenate the skin using radio frequency
            technology to stimulate collagen production.
          </p>
        </div>

      </div>

    </div>
  )
}