import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pt-36 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              About
            </p>

            <h1 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              A ceramic practice shaped by curiosity, craftsmanship and quiet
              rituals.
            </h1>
          </div>

          <p className="max-w-md text-lg leading-relaxed text-black/65">
            Inês Rosado creates ceramic objects that explore the relationship
            between material, gesture and everyday life.
          </p>
        </div>
      </section>

      {/* IMAGE STORY */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-6 md:grid-cols-[1fr_0.75fr] md:items-end">
            <div className="overflow-hidden rounded-[52%_48%_46%_54%/48%_56%_44%_52%]">
              <img
                src="/images/about-01.jpg"
                alt="Inês Rosado studio"
                className="h-[680px] w-full object-cover"
              />
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src="/images/about-02.jpg"
                  alt="Ceramic process"
                  className="h-[300px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[44%_56%_52%_48%/54%_46%_54%_46%]">
                <img
                  src="/images/about-03.jpg"
                  alt="Ceramic object detail"
                  className="h-[330px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
              Biography
            </p>

            <p className="mb-7 text-lg leading-relaxed text-black/70">
              Inês Rosado is a ceramic artist whose work explores the connection
              between functionality, texture and form. Through clay she creates
              pieces that invite people to slow down and reconnect with everyday
              rituals.
            </p>

            <p className="mb-7 text-lg leading-relaxed text-black/70">
              Inspired by natural landscapes, organic shapes and handcrafted
              traditions, her practice focuses on creating timeless objects that
              balance simplicity with character.
            </p>

            <p className="text-lg leading-relaxed text-black/70">
              Alongside her ceramic collections, Inês hosts workshops and
              creative experiences designed to introduce others to the joy of
              making with clay.
            </p>

            <div className="mt-10 rounded-[32px] border border-black/10 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Inês Rosado
              </p>

              <p className="mt-2 text-base text-black/65">
                Ceramic Artist • Portimão, Portugal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}

      <section className="mx-auto max-w-5xl px-8 pb-32">
        <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
          Philosophy
        </p>

        <blockquote className="text-3xl font-light leading-relaxed tracking-[-0.04em] md:text-5xl">
          “Clay allows me to slow down, observe and create objects that become
          part of everyday rituals.”
        </blockquote>

        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-black/45">
          — Inês Rosado
        </p>
      </section>

      {/* PROCESS */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs uppercase tracking-[0.45em] text-black/45">
            Process
          </p>

          <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
            From raw clay to quiet, tactile objects.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[34px] border border-black/10 p-8">
            <h3 className="mb-4 text-2xl font-light">01. Form</h3>

            <p className="leading-relaxed text-black/70">
              Every piece begins with hand shaping and experimentation,
              allowing the material to guide the process.
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8 md:mt-10">
            <h3 className="mb-4 text-2xl font-light">02. Fire</h3>

            <p className="leading-relaxed text-black/70">
              Through drying, glazing and firing, each object develops its own
              character, tone and texture.
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8">
            <h3 className="mb-4 text-2xl font-light">03. Ritual</h3>

            <p className="leading-relaxed text-black/70">
              The final piece is designed to live within everyday life,
              becoming part of meaningful daily moments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
          Workshops
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
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