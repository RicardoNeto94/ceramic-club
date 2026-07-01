import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pt-36 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              Contact
            </p>

            <h1 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Let's start a conversation.
            </h1>
          </div>

          <p className="max-w-md text-lg leading-relaxed text-black/65">
            For commissions, collaborations, workshops and private events,
            please get in touch.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="mx-auto max-w-7xl px-8 pb-28">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              General
            </p>

            <h3 className="mb-4 text-2xl font-light">
              Enquiries
            </h3>

            <p className="mb-3 text-black/70">
              hello@inesrosado.com
            </p>

            <p className="text-black/60">
              Portimão, Portugal
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8 md:mt-10">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              Workshops
            </p>

            <h3 className="mb-4 text-2xl font-light">
              Bookings
            </h3>

            <p className="mb-3 text-black/70">
              workshops@inesrosado.com
            </p>

            <p className="text-black/60">
              Private sessions available upon request.
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              Social
            </p>

            <h3 className="mb-4 text-2xl font-light">
              Instagram
            </h3>

            <Link
              href="#"
              className="text-black/70 transition hover:text-black"
            >
              @inesrosado.studio
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}

      <section className="mx-auto max-w-6xl px-8 pb-32">
        <div className="rounded-[50px] border border-black/10 p-8 md:p-14">
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-black/45">
              Enquiry Form
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Tell me about your project.
            </h2>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/50">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-full border border-black/10 bg-transparent px-6 py-4 outline-none transition focus:border-black/30"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/50">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-full border border-black/10 bg-transparent px-6 py-4 outline-none transition focus:border-black/30"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/50">
                Enquiry Type
              </label>

              <select className="w-full rounded-full border border-black/10 bg-transparent px-6 py-4 outline-none">
                <option>Workshop</option>
                <option>Private Event</option>
                <option>Commission</option>
                <option>Collaboration</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.25em] text-black/50">
                Message
              </label>

              <textarea
                rows={8}
                className="w-full rounded-[30px] border border-black/10 bg-transparent px-6 py-5 outline-none transition focus:border-black/30"
              />
            </div>

            <button
              type="submit"
              className="w-fit rounded-full border border-black/25 bg-[#E8DED2] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* QUOTE */}

      <section className="mx-auto max-w-5xl px-8 pb-32">
        <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
          Studio Philosophy
        </p>

        <blockquote className="text-3xl font-light leading-relaxed tracking-[-0.04em] md:text-5xl">
          Creating meaningful objects begins with meaningful conversations.
        </blockquote>
      </section>

      {/* FINAL CTA */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
          Let's create something beautiful together.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black/70">
          Whether you're interested in workshops, commissions or collaborations,
          I'd love to hear from you.
        </p>

        <a
          href="mailto:hello@inesrosado.com"
          className="mt-10 inline-block rounded-full border border-black/25 px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
        >
          hello@inesrosado.com
        </a>
      </section>
    </main>
  );
}