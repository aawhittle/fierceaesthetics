"use client"

import { useState } from "react"

export default function BeforeAfterSlider({
  before,
  after
}: {
  before: string
  after: string
}) {
  const [position, setPosition] = useState(50)

  return (
    <div className="relative w-full overflow-hidden rounded-3xl select-none">

      {/* AFTER IMAGE */}
      <img
        src={after}
        className="w-full h-[420px] object-cover"
      />

      {/* BEFORE IMAGE */}
      <img
        src={before}
        className="absolute top-0 left-0 h-full object-cover"
        style={{ width: `${position}%` }}
      />

      {/* SLIDER LINE */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position}%` }}
      />

      {/* DRAG HANDLE */}
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full opacity-0 cursor-pointer"
      />

      {/* LABELS */}

      <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
        Before
      </div>

      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
        After
      </div>

    </div>
  )
}