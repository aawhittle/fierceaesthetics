export default function Page() {
  return (
    <main className="min-h-screen text-neutral-950">
      <div className="max-w-5xl mx-auto px-6 py-20">

       <section className="space-y-6">
        <p className="section-label text-neutral-500">
           Beauty Redefined
       </p>

   <h1 className="text-5xl md:text-6xl font-medium leading-tight">
        Bold beauty.{" "}
      <span style={{ color: "rgb(var(--gold))" }}>
      Luxury finish.
    </span>
   </h1>

  <p className="text-neutral-600 max-w-xl text-lg">
    A calm, elevated experience with refined detail and camera-ready results.
  </p>
</section>

        <section className="mt-32 space-y-10">
          <p className="section-label text-neutral-500">
            Services
          </p>
         <h2 className="text-4xl font-medium leading-tight">
             Treatments & Pricing
         </h2>

          <div className="mt-10 space-y-6">
            {[
              { name: "Brow Shape & Tint", time: "45 mins", price: "£35" },
              { name: "Lash Lift", time: "60 mins", price: "£55" },
              { name: "Signature Facial", time: "60 mins", price: "£70" },
            ].map((s) => (
             <div
  key={s.name}
  className="flex justify-between items-center p-7 rounded-3xl 
  bg-white/75 backdrop-blur-md
  border border-black/5
  shadow-[0_20px_60px_rgba(0,0,0,0.05)]
  transition-all duration-300 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] hover:-translate-y-1"
>
  <div>
    <p className="text-lg font-medium tracking-tight">
      {s.name}
    </p>
    <p className="text-sm text-neutral-500 mt-1">
      {s.time}
    </p>
  </div>

  <p
    className="text-lg font-medium"
    style={{ color: "rgb(var(--gold))" }}
  >
    {s.price}
  </p>
</div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}