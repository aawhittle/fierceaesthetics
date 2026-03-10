export default function Contact() {
  return (
    <div className="max-w-2xl space-y-12">

      <div>

        <h1 className="text-5xl font-medium">
          Contact & Booking
        </h1>

        <div
          className="mt-4 h-1 w-32 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />

      </div>

      <p className="text-lg text-neutral-600">
        For bookings or enquiries, please contact Fierce
        Aesthetics using the options below.
      </p>

      <div className="space-y-6">

        <a
          href="https://wa.me/447900783177"
          className="block p-6 rounded-2xl border hover:shadow-md transition"
        >
          <p className="font-medium">WhatsApp Booking</p>
          <p className="text-neutral-600">
            Message directly to book an appointment.
          </p>
        </a>

        <a
          href="https://instagram.com/fierceaestheticsuk"
          className="block p-6 rounded-2xl border hover:shadow-md transition"
        >
          <p className="font-medium">Instagram</p>
          <p className="text-neutral-600">
            View latest work and send a DM.
          </p>
        </a>

        <a
          href="https://www.facebook.com/fierceaestheticschorley"
          className="block p-6 rounded-2xl border hover:shadow-md transition"
        >
          <p className="font-medium">Facebook</p>
          <p className="text-neutral-600">
            Follow updates and contact via Messenger.
          </p>
        </a>

      </div>

    <div className="pt-10 border-t space-y-6">

    <div>
    <p className="font-medium">Location</p>
    <p className="text-neutral-600 mt-2">
      Orchard View<br/>
      New Lane<br/>
      PR7 6NB
     </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-black/10">
    <iframe
      src="https://www.google.com/maps?q=Orchard%20View%20New%20Lane%20PR7%206NB&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>

    </div>

    </div>
  )
}