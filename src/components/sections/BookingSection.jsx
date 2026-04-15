import { ArrowRight, Check } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { bookingQualifications } from "../../data/siteData";

export default function BookingSection({ onBook }) {
  const [bookingRef, bookingVisible] = useScrollReveal();

  return (
    <section
      ref={bookingRef}
      id="booking"
      className={`py-28 px-6 relative scroll-reveal perf-section ${bookingVisible ? "visible" : ""}`}
      aria-labelledby="booking-heading"
    >
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-navy-light/30 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne/70 mb-5">
            Work With Me
          </p>
          <h3
            id="booking-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-offwhite leading-[1.1] mb-5"
          >
            This work begins <br />
            <span className="italic text-champagne">with a conversation.</span>
          </h3>
          <p className="text-offwhite/50 leading-relaxed max-w-xl">
            If you have read this far and recognize yourself in what I describe, I want
            to hear from you.
          </p>
        </header>

        {/* Qualification list */}
        <div className="bg-navy border border-champagne/12 rounded-2xl p-8 mb-10">
          <p className="text-sm font-medium text-offwhite/70 mb-6">
            This engagement is right for you if:
          </p>
          <ul className="space-y-4" role="list">
            {bookingQualifications.map((qualification, index) => (
              <li key={index} className="flex items-start gap-4 text-offwhite/55 text-sm leading-relaxed">
                <div
                  className="w-5 h-5 border border-champagne/30 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Check className="w-3 h-3 text-champagne/70" />
                </div>
                {qualification}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <button
            onClick={onBook}
            className="group bg-champagne text-navy font-semibold px-10 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
            aria-label="Book a consultation call"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <p className="text-xs text-offwhite/30 tracking-wide">
            15-minute call &nbsp;·&nbsp; No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
