import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { profileImages } from "../../data/siteData";

export default function AboutSection({ onBook }) {
  const [aboutRef, aboutVisible] = useScrollReveal();

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`py-28 px-6 relative scroll-reveal perf-section ${aboutVisible ? "visible" : ""}`}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <article className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-champagne/15 shadow-2xl shadow-navy/80">
            <div className="aspect-4/5 bg-navy-light">
              <img
                src={profileImages.laurien}
                alt="Coach Laurien"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle champagne overlay on hover */}
            <div className="absolute inset-0 bg-champagne/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 border border-champagne/20 rounded-2xl -z-10"
            aria-hidden="true"
          ></div>
        </article>

        {/* Content */}
        <div className="space-y-7">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne/70">
            About Coach Laurien
          </p>

          {/* Headline */}
          <h3
            id="about-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-offwhite leading-[1.1]"
          >
            This is not <br />
            <span className="italic text-champagne">motivational coaching.</span>
          </h3>

          {/* Pull quote */}
          <p className="font-display text-lg italic text-offwhite/50 leading-relaxed border-l-2 border-champagne/30 pl-4">
            It is structured, precise, hands-on work — built to produce outcomes that hold over time.
          </p>

          {/* Body copy */}
          <div className="space-y-4 text-offwhite/60 leading-relaxed">
            <p>
              I am a youth development and emerging authors' coach, and the founder of KELP Education.
              My engagements are premium because they are deep, collaborative, and designed to
              achieve precision — not comfort.
            </p>
            <p>
              I don't offer encouragement as a substitute for structure. I challenge weak thinking,
              raise standards, and hold clients to outcomes that are worth achieving.
            </p>
          </div>

          {/* Values */}
          <div>
            <p className="text-sm font-medium text-offwhite/80 mb-4">
              Clients come to me when they have decided to prioritize:
            </p>
            <ul className="space-y-3">
              {[
                "Depth over hesitation",
                "Discipline over shortcuts",
                "Excellence over convenience",
              ].map((value) => (
                <li key={value} className="flex items-center gap-3 text-offwhite/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" aria-hidden="true"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onBook}
            className="group mt-4 bg-champagne text-navy font-semibold px-8 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
          >
            Work With Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
