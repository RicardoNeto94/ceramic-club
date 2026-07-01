import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pt-36 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              Gallery
            </p>

            <h1 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Ceramics, studio moments and creative exploration.
            </h1>
          </div>

          <p className="max-w-md text-lg leading-relaxed text-black/65">
            A visual collection of finished works, materials, textures and the
            creative process behind every piece.
          </p>
        </div>
      </section>

      {/* FEATURED IMAGE */}

      <section className="mx-auto max-w-7xl px-8 pb-28">
        <div className="overflow-hidden rounded-[60px]">
          <img
            src="https://images.pexels.com/photos/6612086/pexels-photo-6612086.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Featured ceramic work"
            className="h-[75vh] w-full object-cover"
          />
        </div>
      </section>

      {/* GALLERY */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
          <img
            src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/4992472/pexels-photo-4992472.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/5708106/pexels-photo-5708106.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/4992465/pexels-photo-4992465.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/4992470/pexels-photo-4992470.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/6612086/pexels-photo-6612086.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/5708106/pexels-photo-5708106.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />

          <img
            src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt=""
            className="mb-8 rounded-[34px]"
          />
        </div>
      </section>

      {/* QUOTE */}

      <section className="mx-auto max-w-5xl px-8 pb-32">
        <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
          Studio Philosophy
        </p>

        <blockquote className="text-3xl font-light leading-relaxed tracking-[-0.04em] md:text-5xl">
          Every piece begins with a conversation between hands, clay and time.
        </blockquote>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
          Workshops
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
          Experience the process for yourself.
        </h2>

        <Link
          href="/book"
          className="mt-10 inline-block rounded-full border border-black/25 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
        >
          Book Workshop
        </Link>
      </section>
    </main>
  );
}