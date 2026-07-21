import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="pt-36 pb-28">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-8 text-xs uppercase tracking-[0.25em] text-black/45">
                Ceramics • Objects • Workshops
              </p>

              <h1 className="font-editorial text-6xl font-normal leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-9xl">
  Inês
  <br />
  Rosado
</h1>

              <p className="mt-10 max-w-md text-lg leading-relaxed text-black/65">
                A ceramic studio exploring texture, ritual and material memory
                through handcrafted objects and creative experiences.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/gallery"
                  className="rounded-full border border-black/30 px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
                >
                  View Gallery
                </Link>

                <Link
                  href="/book"
                  className="rounded-full border border-black/10 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:bg-black hover:text-white"
                >
                  Book Workshop
                </Link>
              </div>
            </div>

            <div className="relative lg:pl-10">
              <div className="overflow-hidden rounded-[46%_54%_48%_52%/52%_42%_58%_48%]">
                <img
                  src="https://images.pexels.com/photos/4992465/pexels-photo-4992465.jpeg?auto=compress&cs=tinysrgb&w=2200"
                  alt=""
                  className="h-[620px] w-full object-cover"
                />
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section id="works" className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs uppercase tracking-[0.25em] text-black/45">
            Collections
          </p>

          <h2 className="font-editorial max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            Objects shaped by earth, hands and time.
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          <Link href="/gallery" className="group block">
            <div className="overflow-hidden rounded-[42px]">
              <img
                src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=2200"
                alt=""
                className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
              />
            </div>

            <div className="mt-7 flex items-end justify-between border-b border-black/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                  2026 Collection
                </p>

                <h3 className="font-editorial mt-3 text-4xl">
                  Terra
                </h3>
              </div>

              <p className="text-xs uppercase tracking-[0.22em] text-black/45">
                View
              </p>
            </div>
          </Link>

          <Link href="/gallery" className="group block lg:pt-20">
            <div className="overflow-hidden rounded-[42px]">
              <img
                src="https://images.pexels.com/photos/4992472/pexels-photo-4992472.jpeg?auto=compress&cs=tinysrgb&w=2200"
                alt=""
                className="h-[540px] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
              />
            </div>

            <div className="mt-7 flex items-end justify-between border-b border-black/10 pb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/40">
                  Studio Series
                </p>

                <h3 className="font-editorial mt-3 text-4xl">
                  Origins
                </h3>
              </div>

              <p className="text-xs uppercase tracking-[0.22em] text-black/45">
                View
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ABOUT */}

      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-[55px]">
            <img
              src="https://images.pexels.com/photos/6612086/pexels-photo-6612086.jpeg?auto=compress&cs=tinysrgb&w=2200"
              alt=""
              className="h-[620px] w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-black/45">
              About the Studio
            </p>

            <h2 className="font-editorial max-w-2xl text-5xl leading-[1] md:text-7xl">
              A quiet practice of material, gesture and memory.
            </h2>

            <p className="mt-9 max-w-xl text-lg leading-relaxed text-black/70">
              Inês Rosado creates ceramic objects that explore the relationship
              between functionality, texture and form. Each piece is shaped
              through a slow process of observation, touch and experimentation.
            </p>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-black/70">
              Her work is inspired by natural materials, everyday rituals and
              the intimate presence of handmade objects in daily life.
            </p>

            <div className="mt-10 rounded-[32px] border border-black/10 px-6 py-5">
              <p className="font-editorial text-3xl">Inês Rosado</p>

              <p className="mt-2 text-base text-black/65">
                Ceramic Artist • Portimão, Portugal
              </p>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-block rounded-full border border-black/25 px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* WORKSHOP EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-black/45">
              Workshop Experience
            </p>

            <h2 className="font-editorial max-w-xl text-5xl leading-[1] md:text-7xl">
              Learn through clay, process and presence.
            </h2>

            <p className="mt-9 max-w-md text-lg leading-relaxed text-black/70">
              Workshops introduce participants to the creative process of
              working with clay through hand-building, texture, form and
              personal expression.
            </p>

            <Link
              href="/book"
              className="mt-10 inline-block rounded-full border border-black/25 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Book Workshop
            </Link>
          </div>

          <div className="overflow-hidden rounded-[48%_52%_42%_58%/44%_56%_44%_56%]">
            <img
              src="https://images.pexels.com/photos/5708106/pexels-photo-5708106.jpeg?auto=compress&cs=tinysrgb&w=2200"
              alt=""
              className="h-[640px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STUDIO MOMENTS */}

      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-black/45">
              Follow Along
            </p>

            <h2 className="font-editorial text-5xl md:text-7xl">
              Studio moments.
            </h2>
          </div>

          <a
            href="#"
            className="text-xs uppercase tracking-[0.25em] text-black/55 transition hover:text-black"
          >
            @inesrosado.studio
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-[36px]">
            <img
              src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt=""
              className="h-[390px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[36px] md:mt-14">
            <img
              src="https://images.pexels.com/photos/4992470/pexels-photo-4992470.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt=""
              className="h-[460px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[36px]">
            <img
              src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt=""
              className="h-[390px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="mx-auto max-w-5xl px-8 py-32 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-black/45">
          Contact
        </p>

        <h2 className="font-editorial text-6xl leading-[0.95] md:text-8xl">
          Let's create
          <br />
          something together.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black/70">
          For commissions, collaborations, workshops and private events.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full border border-black/25 px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
        >
          Contact Studio
        </Link>
      </section>
    </main>
  );
}