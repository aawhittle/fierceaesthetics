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
        Welcome to Fierce Aesthetics. I specialise in advanced
        aesthetic treatments designed to enhance natural beauty
        while maintaining a refined and elegant finish.
      </p>

      <p className="text-neutral-600">
        My goal is to create a calm and professional environment
        where every client receives personalised care and results
        that boost confidence.
      </p>

    </div>
  )
}