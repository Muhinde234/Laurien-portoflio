import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function AboutSection({ onBook }) {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const { content } = useContent();
  const a = content.about;
  const laurienPhoto = content.aboutPhoto || defaultPhoto;

  const values = a.values.map((text, i) => ({
    num: String(i + 1).padStart(2, "0"),
    text,
  }));

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`py-24 px-6 relative scroll-reveal perf-section ${aboutVisible ? "visible" : ""}`}
      aria-labelledby="about-heading"
    >
      {/* Subtle section tint */}
      <div className="absolute inset-0 bg-navy-light/20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label — top of section, full width */}
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne/60 mb-14">
          {a.label}
        </p>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT: Photo ── */}
          <div className="relative">

            {/* Offset decorative frame behind image */}
            <div
              className="absolute top-3 left-3 sm:top-6 sm:left-6 w-full h-full border border-champagne/15 rounded-2xl -z-10"
              aria-hidden="true"
            />

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-2xl border border-champagne/20 shadow-2xl shadow-navy">
              <div className="aspect-3/4 bg-navy-light">
                <img
                  src={laurienPhoto}
                  alt="Coach Laurien"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Gradient fade at bottom for badge legibility */}
              <div
                className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-navy/85 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating badge inside photo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-champagne leading-none">
                    Coach Laurien
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-offwhite/50 mt-1.5">
                    Founder, KELP Education
                  </p>
                </div>
                {/* Decorative corner mark */}
                <div className="flex flex-col items-end gap-1" aria-hidden="true">
                  <div className="w-8 h-px bg-champagne/40" />
                  <div className="w-4 h-px bg-champagne/25" />
                </div>
              </div>
            </div>

            {/* Stat pill below photo */}
            <div className="mt-5 flex items-center gap-3 px-5 py-3.5 bg-navy border border-champagne/12 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse shrink-0" aria-hidden="true" />
              <p className="text-xs text-offwhite/50">{a.statusPill}</p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col gap-8 pt-2">

            {/* Headline */}
            <h3
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-light text-offwhite leading-[1.08]"
            >
              {a.headlineStart} <br />
              <span className="italic text-champagne">{a.headlineHighlight}</span>
            </h3>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-champagne/35 pl-5">
              <p className="font-display text-lg italic text-offwhite/50 leading-relaxed">
                {a.quote}
              </p>
            </blockquote>

            {/* Body paragraphs */}
            <div className="space-y-4 text-sm text-offwhite/55 leading-[1.9]">
              <p>{a.body1}</p>
              <p>{a.body2}</p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-champagne/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-champagne/30" />
              <div className="h-px w-8 bg-champagne/10" />
            </div>

            {/* Values */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offwhite/35 mb-5">
                {a.valuesHeading}
              </p>
              <ul className="space-y-4">
                {values.map(({ num, text }) => (
                  <li key={num} className="flex items-center gap-5">
                    <span className="font-display text-xs italic text-champagne/40 shrink-0 w-5">
                      {num}
                    </span>
                    <div className="h-px w-5 bg-champagne/20 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-offwhite/65 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-champagne/10" aria-hidden="true" />

            {/* Closing statement */}
            <p className="font-display text-base italic text-offwhite/40 leading-relaxed">
              {a.closing}
            </p>

            {/* CTA */}
            <div>
              <button
                onClick={onBook}
                className="group bg-champagne text-navy font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-sm sm:text-base"
              >
                {a.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
