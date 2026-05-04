import { ArrowRight, Mail } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function BookingSection({ onBook }) {
  const [bookingRef, bookingVisible] = useScrollReveal();
  const { content } = useContent();
  const b = content.booking;
  const email = content.contact.email;
  const laurienPhoto = content.profilePhoto || defaultPhoto;

  return (
    <section
      ref={bookingRef}
      id="booking"
      className={`py-24 sm:py-28 px-4 sm:px-6 relative border-b border-champagne/10 scroll-reveal perf-section ${bookingVisible ? "visible" : ""}`}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/60 mb-12">
          {b.label}
        </p>

        <div className="relative rounded-2xl border border-champagne/15 overflow-hidden">

          <div
            className="h-px bg-linear-to-r from-champagne/50 via-champagne/20 to-transparent"
            aria-hidden="true"
          />

          <span
            className="absolute top-6 right-8 font-display text-[6rem] font-bold leading-none text-champagne/3 select-none pointer-events-none hidden md:block"
            aria-hidden="true"
          >
            Begin.
          </span>

          <div className="grid md:grid-cols-5 md:min-h-136">

     
            <div className="md:col-span-2 relative flex flex-col justify-between p-5 sm:p-7 md:p-8 border-b md:border-b-0 md:border-r border-champagne/10 bg-champagne/2">

              <div>
                <h2
                  id="booking-heading"
                  className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-offwhite leading-[1.1] mb-5"
                >
                  {b.headingStart}{" "}
                  <span className="italic font-light text-champagne">{b.headingHighlight}</span>
                </h2>
                <p className="text-base text-offwhite/40 leading-[1.9]">
                  {b.subtext}
                </p>
              </div>

              <div className="mt-8 md:mt-0">
                <div className="flex items-center gap-4 p-4 bg-navy/60 border border-champagne/10 rounded-full">
                  <div className="relative shrink-0">
                    <img
                      src={laurienPhoto}
                      alt={b.coachName}
                      className="w-12 h-12 rounded-full object-cover object-top border-2 border-champagne/30"
                    />
                    <span
                      className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-champagne rounded-full border-2 border-navy"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-champagne leading-none mb-1">
                      {b.coachName}
                    </p>
                    <p className="text-sm text-offwhite/32 uppercase tracking-[0.16em]">
                      {b.coachRole}
                    </p>
                    <p className="text-sm text-champagne/40 mt-1 italic font-display">
                      {b.responseTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="md:col-span-3 flex flex-col p-5 sm:p-7 md:p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-offwhite/28 mb-6">
                {b.qualificationsHeading}
              </p>

              <ul className="flex flex-col flex-1 gap-0" role="list">
                {b.qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-5 py-3.5 border-b border-champagne/8 last:border-b-0"
                  >
                    <span className="font-display italic text-sm text-champagne/30 shrink-0 mt-0.5 w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-4 h-px bg-champagne/18 shrink-0 mt-[0.6rem]"
                      aria-hidden="true"
                    />
                    <p className="text-base text-offwhite/50 leading-relaxed">
                      {qualification}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-champagne/10">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={onBook}
                    className="group flex items-center justify-center gap-3 bg-champagne text-navy font-semibold px-6 py-3.5 rounded-full hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-base w-full sm:w-auto"
                    aria-label="Book a consultation call"
                  >
                    <span>{b.primaryCta}</span>
                    <span className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center group-hover:bg-navy/20 transition-colors shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </button>

                  <span className="text-sm text-offwhite/22 hidden sm:block">or</span>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-sm text-offwhite/38 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded min-w-0"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{email}</span>
                  </a>
                </div>

                <p className="text-sm text-offwhite/18 tracking-wide mt-4">
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
