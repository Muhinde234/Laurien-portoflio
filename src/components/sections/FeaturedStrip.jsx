import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";

export default function FeaturedStrip() {
  const [featuredRef, featuredVisible] = useScrollReveal();
  const { content } = useContent();
  const logos = content.trustedBy;

  return (
    <section
      ref={featuredRef}
      className={`py-12 sm:py-14 px-4 sm:px-6 bg-section-light border-b border-t border-navy/8 scroll-reveal perf-section ${
        featuredVisible ? "visible" : ""
      }`}
      aria-label="Trusted by"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-navy/60 shrink-0">
          Trusted by
        </p>
        <div className="h-px w-6 bg-navy/15 hidden sm:block" aria-hidden="true" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {logos.map((logo) => (
            <span
              key={logo}
              className="px-4 py-1.5 text-sm font-medium tracking-wide text-navy/90 border border-navy/12 rounded-full bg-white/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
