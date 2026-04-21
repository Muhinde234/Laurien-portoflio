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
      <div className="absolute inset-0 bg-navy-light/15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne/60 mb-12">
          {a.label}
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Photo ── */}
          <div className="relative">
            <div
              className="absolute top-4 left-4 w-full h-full border border-champagne/12 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-champagne/18 shadow-2xl shadow-navy">
              <div className="aspect-3/4 bg-navy-light">
                <img
                  src={laurienPhoto}
                  alt="Coach Laurien"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-navy/85 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-base font-semibold text-champagne leading-none">
                    Coach Laurien
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-offwhite/45 mt-1.5">
                    Founder, KELP Education
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1" aria-hidden="true">
                  <div className="w-8 h-px bg-champagne/35" />
                  <div className="w-4 h-px bg-champagne/20" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-navy border border-champagne/10 rounded-xl w-fit">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse shrink-0" aria-hidden="true" />
              <p className="text-xs text-offwhite/45">{a.statusPill}</p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex flex-col gap-7 pt-2">

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite leading-[1.1]"
            >
              {a.headlineStart}{" "}
              <span className="italic font-light text-champagne">{a.headlineHighlight}</span>
            </h2>

            <blockquote className="border-l-2 border-champagne/30 pl-5">
              <p className="font-display text-base italic font-light text-offwhite/50 leading-relaxed">
                {a.quote}
              </p>
            </blockquote>

            <div className="space-y-3.5 text-sm text-offwhite/50 leading-[1.9]">
              <p>{a.body1}</p>
              <p>{a.body2}</p>
            </div>

            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-champagne/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-champagne/25" />
              <div className="h-px w-8 bg-champagne/10" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-offwhite/30 mb-4">
                {a.valuesHeading}
              </p>
              <ul className="space-y-3.5">
                {values.map(({ num, text }) => (
                  <li key={num} className="flex items-center gap-4">
                    <span className="font-display text-xs italic text-champagne/35 shrink-0 w-5">
                      {num}
                    </span>
                    <div className="h-px w-4 bg-champagne/18 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-offwhite/60 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-champagne/10" aria-hidden="true" />

            <p className="font-display text-sm italic font-light text-offwhite/38 leading-relaxed">
              {a.closing}
            </p>

            <div>
              <button
                onClick={onBook}
                className="group bg-champagne text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-sm"
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
