import Link from "next/link";

export default function WorkshopsPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pt-36 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              Workshops
            </p>

            <h1 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Learn through making, experimentation and creative exploration.
            </h1>
          </div>

          <div>
            <p className="max-w-md text-lg leading-relaxed text-black/65">
              Ceramic workshops designed for curiosity, creativity and a deeper
              connection with the material.
            </p>

            <Link
              href="/book"
              className="mt-10 inline-block rounded-full border border-black/25 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Book Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}

      <section className="mx-auto max-w-7xl px-8 pb-28">
        <div className="overflow-hidden rounded-[60px]">
          <img
            src="https://images.pexels.com/photos/5708106/pexels-photo-5708106.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Ceramic Workshop"
            className="h-[70vh] w-full object-cover"
          />
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              The Experience
            </p>

            <h2 className="max-w-xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Creative learning through clay and presence.
            </h2>
          </div>

          <div>
            <p className="mb-7 text-lg leading-relaxed text-black/70">
              Every workshop combines practical guidance with space for
              experimentation. Participants are encouraged to develop their own
              ideas while learning techniques and processes used within the
              studio.
            </p>

            <p className="text-lg leading-relaxed text-black/70">
              The emphasis is not only on the finished object but on the
              experience of making, discovering and creating by hand.
            </p>
          </div>
        </div>
      </section>

      {/* WORKSHOP TYPES */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs uppercase tracking-[0.45em] text-black/45">
            Experiences
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
            Workshop formats for different moments.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              01
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Beginner Workshops
            </h3>

            <p className="mb-8 leading-relaxed text-black/70">
              A welcoming introduction to clay, hand-building techniques,
              surface decoration and glazing.
            </p>

            <Link
              href="/book"
              className="text-xs uppercase tracking-[0.25em] text-black/55 transition hover:text-black"
            >
              Book Now
            </Link>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8 md:mt-10">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              02
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Creative Sessions
            </h3>

            <p className="mb-8 leading-relaxed text-black/70">
              Dedicated sessions focused on experimentation, texture,
              storytelling and personal creative projects.
            </p>

            <Link
              href="/book"
              className="text-xs uppercase tracking-[0.25em] text-black/55 transition hover:text-black"
            >
              Book Now
            </Link>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              03
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Private Experiences
            </h3>

            <p className="mb-8 leading-relaxed text-black/70">
              Bespoke workshops for groups, celebrations, team events and
              special occasions.
            </p>

            <Link
              href="/book"
              className="text-xs uppercase tracking-[0.25em] text-black/55 transition hover:text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* INCLUDED */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs uppercase tracking-[0.45em] text-black/45">
            Included
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
            What to expect.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="rounded-[30px] bg-[#EFE7DC] p-7">
            <h3 className="mb-3 text-xl font-light">
              Materials
            </h3>

            <p className="text-black/65">
              Clay, tools and studio materials provided.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#EFE7DC] p-7">
            <h3 className="mb-3 text-xl font-light">
              Guidance
            </h3>

            <p className="text-black/65">
              Personal support throughout the workshop.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#EFE7DC] p-7">
            <h3 className="mb-3 text-xl font-light">
              Firing
            </h3>

            <p className="text-black/65">
              Pieces fired and prepared after the session.
            </p>
          </div>

          <div className="rounded-[30px] bg-[#EFE7DC] p-7">
            <h3 className="mb-3 text-xl font-light">
              Collection
            </h3>

            <p className="text-black/65">
              Finished pieces available for collection later.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
          Booking
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
          Choose your date and reserve your place.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/70">
          Online bookings are managed through Acuity Scheduling. Guests can
          select a workshop, choose an available date and complete payment
          securely.
        </p>

        <Link
          href="/book"
          className="mt-10 inline-block rounded-full border border-black/25 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
        >
          Open Booking Page
        </Link>
      </section>
    </main>
  );
}