import { services } from "@/data/services"

export default function BodyContouringPage() {

  const data = services.bodyContouring

  return (
    <><div className="max-w-4xl space-y-16">

          <div>
              <h1 className="text-5xl font-medium">
                  {data.sectionTitle}
              </h1>

              <div
                  className="mt-4 h-1 w-40 rounded"
                  style={{ backgroundColor: "rgb(var(--gold))" }} />
          </div>

          <div className="space-y-8">
              {data.items.map((treatment) => (
                  <div
                      key={treatment.name}
                      className="p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-lg transition"
                  >
                      <div className="flex justify-between items-start">

                          <h2 className="text-xl font-medium">
                              {treatment.name}
                          </h2>

                          <span
                              className="text-lg font-medium"
                              style={{ color: "rgb(var(--gold))" }}
                          >
                              {treatment.price}
                          </span>

                      </div>

                      <p className="mt-4 text-neutral-600">
                          {treatment.description}
                      </p>

                  </div>
              ))}
          </div>

      </div><div className="pt-12 border-t space-y-6">

              <h3 className="text-2xl font-medium">
                  Ready to Book?
              </h3>

              <p className="text-neutral-600">
                  Contact Fierce Aesthetics to book your treatment or ask
                  any questions about which treatment is right for you.
              </p>

              <a
                  href="https://wa.me/447900783177"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-4 rounded-xl text-white font-medium"
                  style={{ backgroundColor: "rgb(var(--gold))" }}
              >
                  Book via WhatsApp
              </a>

          </div></>
  )
}