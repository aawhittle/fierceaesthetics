export default function AboutPage() {
  return (
   <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-6">

      <div
        className="h-1 w-32 rounded"
        style={{ backgroundColor: "rgb(var(--gold))" }}
      />

      <p className="text-neutral-600 text-lg font-medium">
          Welcome to <span className="font-semibold">Fierce Aesthetics</span>.
      </p>

      <p className="text-neutral-600">
      I’m Emma, the face behind the brand, dedicated to helping you feel confident in your own skin. 
      </p>

      <p className="text-neutral-600">
      With over ten years experience in the beauty industry, I have trained with some of the industry’s most respected and award-winning brands, including Finishing Touches and Million Dollar Facial. 
      This has allowed me to develop a highly refined, results led approach, focused on delivering exceptional standards and visible, lasting results.
      </p>

    </div>
  )
}