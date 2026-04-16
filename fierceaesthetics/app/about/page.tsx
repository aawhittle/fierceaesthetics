export default function AboutPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <h1 className="text-5xl font-medium">
        About Me
      </h1>

      <div
        className="h-1 w-32 rounded"
        style={{ backgroundColor: "rgb(var(--gold))" }}
      />

      <p className="text-neutral-600 text-lg">

      Welcome to Fierce Aesthetics.

      I’m Emma, the face behind the brand, dedicated to helping you feel confident in your own skin.
      
      With over ten years experience in the beauty industry, I have trained with some of the industry’s most respected and award-winning brands, including Finishing Touches and Million Dollar Facial. 
      This has allowed me to develop a highly refined, results led approach, focused on delivering exceptional standards and visible, lasting results.
      </p>

      <p className="text-neutral-600">
        My goal is to create a calm and professional environment
        where every client receives personalised care and results
        that boost confidence.
      </p>

    </div>
  )
}