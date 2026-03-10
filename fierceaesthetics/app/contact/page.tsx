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
  className="
    p-7
    rounded-3xl
    bg-white
    md:bg-white/80
    backdrop-blur-md
    border border-black/5
    shadow-[0_20px_60px_rgba(0,0,0,0.05)]
    hover:shadow-lg
    transition
    block
  "
>
  <p className="font-medium">WhatsApp Booking</p>
  <p className="text-neutral-600 mt-1">
    Message directly to book an appointment.
  </p>
</a>

<a
  href="https://instagram.com/fierceaestheticsuk"
  className="
    p-7
    rounded-3xl
    bg-white
    md:bg-white/80
    backdrop-blur-md
    border border-black/5
    shadow-[0_20px_60px_rgba(0,0,0,0.05)]
    hover:shadow-lg
    transition
    block
  "
>
  <p className="font-medium">Instagram</p>
  <p className="text-neutral-600 mt-1">
    View latest work and send a DM.
  </p>
</a>

<a
  href="https://www.facebook.com/fierceaestheticschorley"
  className="
    p-7
    rounded-3xl
    bg-white
    md:bg-white/80
    backdrop-blur-md
    border border-black/5
    shadow-[0_20px_60px_rgba(0,0,0,0.05)]
    hover:shadow-lg
    transition
    block
  "
>
  <p className="font-medium">Facebook</p>
  <p className="text-neutral-600 mt-1">
    Follow updates and contact via Messenger.
  </p>
</a>

      </div>

    <div className="pt-10 border-t space-y-6">
    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.071286374886!2d-2.7378048000000095!3d53.66225920000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b130c5d5f304f%3A0xf389a241c57053ef!2sFierce%20Aesthetics!5e0!3m2!1sen!2suk!4v1773145683735!5m2!1sen!2suk"
      width="100%"
      height="450"
      style={{ border: "0", borderRadius: "1rem" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
    </div>

    </div>

    </div>
  )
}