export default function BodyContouringPage() {
  return (
    <div className="space-y-16 max-w-4xl">

      <div>
        <h1 className="text-5xl font-medium">
          Body Contouring Treatments
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
              Tummy Sculpt RF & Cavitation
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£89</span>
          </div>

          <p className="mt-4 text-neutral-600">
            A targeted body contouring treatment using radio frequency
            and cavitation to help reduce stubborn fat and improve
            skin firmness across the stomach area.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">
              Tummy Sculpt – Skin Tightening
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£89</span>
          </div>

          <p className="mt-4 text-neutral-600">
            Designed to tighten and firm loose skin on the stomach
            following weight loss or pregnancy using radio frequency
            technology to stimulate collagen and elastin.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">
              Thigh Sculpt
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£119</span>
          </div>

          <p className="mt-4 text-neutral-600">
            Non-invasive body sculpting treatment designed to target
            stubborn fat and improve skin tone across the thighs.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">
              Arm Sculpt
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£89</span>
          </div>

          <p className="mt-4 text-neutral-600">
            A targeted treatment designed to reduce stubborn fat
            and improve firmness in the upper arms.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">
              Booty Lift
            </h2>
            <span style={{ color: "rgb(var(--gold))" }}>£89</span>
          </div>

          <p className="mt-4 text-neutral-600">
            A non-invasive treatment designed to lift, firm and
            sculpt the buttocks using radio frequency and cavitation.
          </p>
        </div>

      </div>
    </div>
  );
}