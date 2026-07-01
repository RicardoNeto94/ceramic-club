import Link from "next/link";

export default function BookPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1D1D1D]">
      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 pt-36 pb-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/45">
              Book a Workshop
            </p>

            <h1 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Reserve your place in an upcoming ceramic workshop.
            </h1>
          </div>

          <p className="max-w-md text-lg leading-relaxed text-black/65">
            Choose a workshop, select an available date and complete your
            booking securely through Acuity Scheduling.
          </p>
        </div>
      </section>

      {/* WORKSHOP OPTIONS */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              01
            </p>

            <h2 className="mb-5 text-2xl font-light">
              Beginner Workshop
            </h2>

            <p className="mb-8 leading-relaxed text-black/70">
              A relaxed introduction to clay, hand-building and glazing.
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              2–3 Hours
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8 md:mt-10">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              02
            </p>

            <h2 className="mb-5 text-2xl font-light">
              Creative Session
            </h2>

            <p className="mb-8 leading-relaxed text-black/70">
              A longer session focused on personal expression and form.
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              4–5 Hours
            </p>
          </div>

          <div className="rounded-[34px] border border-black/10 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-black/40">
              03
            </p>

            <h2 className="mb-5 text-2xl font-light">
              Private Experience
            </h2>

            <p className="mb-8 leading-relaxed text-black/70">
              Bespoke ceramic workshops for private groups and events.
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              Upon Request
            </p>
          </div>
        </div>
      </section>

      {/* ACUITY */}

      <section className="mx-auto max-w-6xl px-8 pb-32">
        <div className="rounded-[50px] bg-[#EFE7DC] p-8 text-center md:p-14">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-black/45">
            Acuity Scheduling
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
            Choose your workshop date and complete your booking.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/70">
            Online bookings are managed through Acuity Scheduling. You will be
            redirected to a secure booking calendar where you can select your
            preferred workshop and complete payment.
          </p>

          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=PLACEHOLDER"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-full border border-black/25 bg-[#F7F4EE] px-7 py-4 text-sm uppercase tracking-[0.16em] transition hover:border-black hover:bg-black hover:text-white"
          >
            Open Booking Calendar
          </a>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-black/45">
            Replace the placeholder Acuity link with the real booking link once
            the Acuity account is ready.
          </p>
        </div>
      </section>

      {/* BOOKING NOTES */}

      <section className="mx-auto max-w-7xl px-8 pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-light">
              Payment
            </h3>

            <p className="leading-relaxed text-black/65">
              Payment is completed securely during the booking process.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-light">
              Confirmation
            </h3>

            <p className="leading-relaxed text-black/65">
              You will receive a confirmation email after booking.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-light">
              Private Requests
            </h3>

            <p className="leading-relaxed text-black/65">
              For private workshops or events, contact the studio directly.
            </p>
          </div>
        </div>
      </section>

      {/* BACK LINK */}

      <section className="mx-auto max-w-5xl px-8 pb-32 text-center">
        <Link
          href="/workshops"
          className="text-xs uppercase tracking-[0.25em] text-black/55 transition hover:text-black"
        >
          Back to Workshops
        </Link>
      </section>
    </main>
  );
}