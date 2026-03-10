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
    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2380.525911834457!2d-2.737837!3d53.66227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1700000000000"
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>

    </div>

    </div>
  )
}