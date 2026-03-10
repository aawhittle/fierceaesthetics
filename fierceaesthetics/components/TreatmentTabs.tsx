"use client";
import { useState } from "react";
import { services } from "@/data/services";

interface TreatmentTabsProps {
  initialTab?: "lashBrow" | "bodyContouring" | "millionDollar";
}

export default function TreatmentTabs({ initialTab = "lashBrow" }: TreatmentTabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabMap: Record<string, keyof typeof services> = {
    "Lash & Brow": "lashBrow",
    "Body Contouring": "bodyContouring",
    "Million Dollar": "millionDollar",
  };

  return (
    <div className="space-y-10">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4">
        {Object.keys(tabMap).map((tabLabel) => (
          <button
            key={tabLabel}
            className={`px-6 py-2 rounded-full font-medium transition-colors
              ${
                activeTab === tabMap[tabLabel]
                  ? "bg-[rgb(var(--gold))] text-white shadow-md"
                  : "bg-white border border-black/10 text-neutral-900 hover:bg-[rgb(var(--gold)/0.1)]"
              }`}
            onClick={() => setActiveTab(tabMap[tabLabel])}
          >
            {tabLabel}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mt-8 space-y-6">
        {services[activeTab].items.map((s) => (
          <div
            key={s.name}
            className="p-7 rounded-3xl bg-white md:bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
          >
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="text-lg font-medium">{s.name}</p>
                {'time' in s && s.time && <p className="text-sm text-neutral-500 mt-1">{s.time}</p>}
              </div>
              <p className="text-lg font-medium" style={{ color: "rgb(var(--gold))" }}>
                {s.price}
              </p>
            </div>
            {s.description && (
              <p className="mt-4 text-neutral-600 whitespace-pre-line">{s.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}