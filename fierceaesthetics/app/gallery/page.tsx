export default function GalleryPage() {
  return (
    <div className="space-y-12">

      <div>
        <h1 className="text-5xl font-medium">
          Gallery
        </h1>

        <div
          className="mt-4 h-1 w-32 rounded"
          style={{ backgroundColor: "rgb(var(--gold))" }}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">

        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/work1.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/work2.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/work3.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/work4.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>

      </div>

    </div>
  )
}