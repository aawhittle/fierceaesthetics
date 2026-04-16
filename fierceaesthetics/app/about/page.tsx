
import Image from "next/image";

export default function AboutPage() {
  return (
   <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto space-y-6">

      {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800">
      About Me
    </h2>

      <div
        className="h-1 w-32 rounded"
        style={{ backgroundColor: "rgb(var(--gold))" }}
      ></div>

      <p className="text-neutral-600 text-lg font-medium">
          Welcome to <span className="font-semibold">Fierce Aesthetics</span>.
      </p>

    <div className="flex justify-center my-6">
      <div className="p-1 rounded-full bg-gradient-to-tr from-neutral-300 to-neutral-100">
    <Image
      src="/images/emma.jpg" 
      alt="Emma - Fierce Aesthetics"
      width={180}
      height={180}
      className="rounded-full object-cover"
    />
      </div>
    </div>

      <p className="text-neutral-600">
      I’m Emma, the face behind the brand, dedicated to helping you feel confident in your own skin. 
      </p>

      <p className="text-neutral-600">
      With over ten years experience in the beauty industry, I have trained with some of the industry’s most respected and award-winning brands, including Finishing Touches and Million Dollar Facial. 
      This has allowed me to develop a highly refined, results led approach, focused on delivering exceptional standards and visible, lasting results.
      </p>

       <p className="text-neutral-600">
      My focus is on enhancing your natural beauty through subtle, sophisticated treatments that leave you looking 
      refreshed, sculpted, and effortlessly confident, never overdone.
      </p>

       <p className="text-neutral-600">
      My expertise includes industry leading treatments such as Million Dollar facials, Million Dollar micro-needling, Immaculate peels, 
      Oxy Pro and Clay Mask facials, alongside advanced body treatments using radio frequency and cavitation designed to designed to sculpt, tone, and enhance overall skin quality.  
      I also offer precision led treatments such as the Korean Lash Lift and Brow Lamination, ideal for creating a polished, low maintenance look that enhances your natural features.
      </p>

       <p className="text-neutral-600">
      From skin rejuvenation to body sculpting and contouring, every treatment is carefully tailored to you. 
      Whether you are preparing for a holiday, a special event, or simply investing in yourself, 
      each experience is designed to deliver polished, confidence boosting results.
      </p>

        <p className="text-neutral-600">
      Fierce Aesthetics was created to offer a calm, luxurious space where you can switch off from the 
      outside world and feel completely looked after. I pride myself on honest advice, attention to detail 
      and creating bespoke treatment plans that align with your goals and lifestyle.
      </p>

         <p className="text-neutral-600">
    For my clients, this is more than maintenance, it’s an investment in confidence, self care 
    and stepping into your most polished self.
    </p>
    </div>
  </section>
  )
}