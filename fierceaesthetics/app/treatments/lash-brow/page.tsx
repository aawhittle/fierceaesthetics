// app/lash-brow/page.tsx
import { services } from "@/data/services";

export default function LashBrowPage() {
  const lashBrow = services.lashBrow;

  return (
    <div className="space-y-16 max-w-4xl">

      <div>
        <h1 className="text-5xl font-medium">{lashBrow.sectionTitle}</h1>
        <div
          className="mt-4 h-1 w-40 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      <div className="space-y-10">
        {lashBrow.items.map((treatment) => (
          <div
            key={treatment.name}
            className="p-8 rounded-3xl border border-black/5 shadow-sm"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">{treatment.name}</h2>
              <span style={{ color: "rgb(var(--gold))" }}>{treatment.price}</span>
            </div>

            <p className="mt-4 text-neutral-600 whitespace-pre-line">
              {treatment.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}