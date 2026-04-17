import { ArrowRight, Mail } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import laurienPhoto from "../../assets/laurien.jpeg";

export default function BookingSection({ onBook }) {
  const [bookingRef, bookingVisible] = useScrollReveal();
  const { content } = useContent();
  const b = content.booking;
  const email = content.contact.email;

  return (
    <section
      ref={bookingRef}
      id="booking"
      className={`py-24 px-6 relative scroll-reveal perf-section ${bookingVisible ? "visible" : ""}`}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne/60 mb-14">
          {b.label}
        </p>

       
        <div className="relative rounded-2xl border border-champagne/15 overflow-hidden">

          {/* Top gradient accent */}
          <div
            className="h-px bg-linear-to-r from-champagne/50 via-champagne/20 to-transparent"
            aria-hidden="true"
          />

          {/* Ghost headline watermark */}
          <span
            className="absolute top-6 right-8 font-display text-[8rem] font-light leading-none text-champagne/3 select-none pointer-events-none hidden md:block"
            aria-hidden="true"
          >
            Begin.
          </span>

          <div className="grid md:grid-cols-5 min-h-135">

            {/* ── LEFT: headline + photo ── */}
            <div className="md:col-span-2 relative flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-champagne/10 bg-champagne/2">

              {/* Headline block */}
              <div>
                <h3
                  id="booking-heading"
                  className="font-display text-4xl md:text-5xl font-light text-offwhite leading-[1.1] mb-6"
                >
                  {b.headingStart} <br />
                  <span className="italic text-champagne">{b.headingHighlight}</span>
                </h3>
                <p className="text-sm text-offwhite/45 leading-[1.9]">
                  {b.subtext}
                </p>
              </div>

              {/* Photo + identity card */}
              <div className="mt-10 md:mt-0">
                <div className="flex items-center gap-4 p-4 bg-navy/60 border border-champagne/12 rounded-xl">
                  <div className="relative shrink-0">
                    <img
                      src={laurienPhoto}
                      alt={b.coachName}
                      className="w-14 h-14 rounded-full object-cover object-top border-2 border-champagne/35"
                    />
                    <span
                      className="absolute bottom-0 right-0 w-3 h-3 bg-champagne rounded-full border-2 border-navy"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-champagne leading-none mb-1">
                      {b.coachName}
                    </p>
                    <p className="text-[11px] text-offwhite/35 uppercase tracking-[0.18em]">
                      {b.coachRole}
                    </p>
                    <p className="text-[11px] text-champagne/45 mt-1.5 italic font-display">
                      {b.responseTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: qualifications + CTA ── */}
            <div className="md:col-span-3 flex flex-col p-8 md:p-10">

              {/* Qualifications header */}
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offwhite/30 mb-7">
                {b.qualificationsHeading}
              </p>

              {/* Qualification list */}
              <ul className="flex flex-col flex-1 gap-0" role="list">
                {b.qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-5 py-4 border-b border-champagne/8 last:border-b-0"
                  >
                    {/* Row number */}
                    <span className="font-display italic text-xs text-champagne/35 shrink-0 mt-0.5 w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Dash */}
                    <div
                      className="w-4 h-px bg-champagne/20 shrink-0 mt-[0.6rem]"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-offwhite/55 leading-relaxed">
                      {qualification}
                    </p>
                  </li>
                ))}
              </ul>

              {/* ── CTA block ── */}
              <div className="mt-8 pt-7 border-t border-champagne/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                  {/* Primary CTA */}
                  <button
                    onClick={onBook}
                    className="group flex items-center justify-between bg-champagne text-navy font-semibold px-7 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 gap-4 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
                    aria-label="Book a consultation call"
                  >
                    <span className="text-sm">{b.primaryCta}</span>
                    <span className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center group-hover:bg-navy/20 transition-colors shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </button>

                  {/* Or email */}
                  <span className="text-xs text-offwhite/25 hidden sm:block">or</span>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-sm text-offwhite/40 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {email}
                  </a>
                </div>

                {/* Microcopy */}
                <p className="text-xs text-offwhite/20 tracking-wide mt-4">
                  {b.microcopy}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
