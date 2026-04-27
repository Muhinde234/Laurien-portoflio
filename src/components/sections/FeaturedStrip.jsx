import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";

export default function FeaturedStrip() {
  const [featuredRef, featuredVisible] = useScrollReveal();
  const { content } = useContent();
  const logos = content.trustedBy;

  return (
    <section
      ref={featuredRef}
      className={`py-12 sm:py-14 px-6 border-y border-champagne/8 scroll-reveal perf-section ${
        featuredVisible ? "visible" : ""
      }`}
      aria-label="Trusted by"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-offwhite/25 shrink-0">
          Trusted by
        </p>
        <div className="h-px w-6 bg-champagne/18 hidden sm:block" aria-hidden="true" />
        <div className="flex flex-wrap justify-center gap-2.5">
          {logos.map((logo) => (
            <span
              key={logo}
              className="px-4 py-1.5 text-sm font-medium tracking-wide text-offwhite/40 border border-champagne/10 rounded-full"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
