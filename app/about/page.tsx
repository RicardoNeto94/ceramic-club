import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* INTRO */}

      <section className="mx-auto max-w-6xl px-8 pt-36 pb-20">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/45">
          About
        </p>

        <h1 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
          The Author
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-black/65">
          Inês Rosado is a ceramic artist whose work celebrates simplicity,
          texture and the beauty of things made by hand.
        </p>
      </section>

      {/* BIOGRAPHY */}

      <section className="mx-auto max-w-6xl px-8 pb-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <img
              src="/images/about-01.jpg"
              alt="Inês Rosado working with clay"
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div className="max-w-2xl text-base leading-[1.9] text-black/75">
            <p className="mb-7">
              Inês Rosado is a ceramic artist whose work explores the connection
              between functionality, texture and form. Through clay she creates
              pieces that invite people to slow down and reconnect with everyday
              rituals.
            </p>

            <p className="mb-7">
              Inspired by natural landscapes, organic shapes and handcrafted
              traditions, her practice focuses on creating timeless objects that
              balance simplicity with character.
            </p>

            <p className="mb-7">
              Her process is guided by curiosity, patience and experimentation.
              Each piece begins as a quiet conversation between hands, material
              and time.
            </p>

            <p className="mb-7">
              Alongside her ceramic collections, Inês hosts workshops and
              creative experiences designed to introduce others to the joy of
              making with clay.
            </p>

            <p>
              Based in Portimão, Portugal, her studio is a space for thoughtful
              making, creative learning and everyday objects with presence.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="bg-[#EFE7DC] py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <blockquote className="text-2xl font-light italic leading-relaxed tracking-[-0.03em] md:text-4xl">
            “Curiosity, tests, failures, successes, adjustments and a lot of
            experimentation.”
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-black/60">
            That is how everything takes shape.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-black/20" />
        </div>
      </section>

      {/* VISUAL STORY */}

      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <img
            src="/images/about-02.jpg"
            alt="Ceramic wheel process"
            className="h-[420px] w-full object-cover"
          />

          <img
            src="/images/about-03.jpg"
            alt="Finished ceramic objects"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* PROCESS */}

      <section className="mx-auto max-w-6xl px-8 pb-32">
        <p className="mb-16 text-xs uppercase tracking-[0.45em] text-black/45">
          Process
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:border-r md:border-black/10 md:pr-10">
            <p className="mb-6 text-4xl font-light tracking-[-0.04em]">
              01
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Form
            </h3>

            <p className="leading-relaxed text-black/65">
              Each piece begins on the wheel or by hand, shaped with intention,
              patience and attention to the material.
            </p>
          </div>

          <div className="md:border-r md:border-black/10 md:px-10">
            <p className="mb-6 text-4xl font-light tracking-[-0.04em]">
              02
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Fire
            </h3>

            <p className="leading-relaxed text-black/65">
              Slow-fired in the kiln, each object goes through transformation,
              texture and the beauty of imperfection.
            </p>
          </div>

          <div className="md:pl-10">
            <p className="mb-6 text-4xl font-light tracking-[-0.04em]">
              03
            </p>

            <h3 className="mb-5 text-2xl font-light">
              Ritual
            </h3>

            <p className="leading-relaxed text-black/65">
              Finished pieces are made to become part of daily rituals, quiet
              spaces and meaningful everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
          Workshops
        </p>

        <h2 className="text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
          Experience the creative process through clay.
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