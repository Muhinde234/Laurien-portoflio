import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";

export default function FeaturedStrip() {
  const [featuredRef, featuredVisible] = useScrollReveal();
  const { content } = useContent();
  const logos = content.trustedBy;

  return (
    <section
      ref={featuredRef}
      className={`py-12 px-6 border-y border-champagne/10 scroll-reveal perf-section ${
        featuredVisible ? "visible" : ""
      }`}
      aria-label="Trusted by"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-offwhite/30 shrink-0">
          Trusted by
        </p>
        <div className="h-px w-6 bg-champagne/20 hidden sm:block" aria-hidden="true"></div>
        <div className="flex flex-wrap justify-center gap-3">
          {logos.map((logo) => (
            <span
              key={logo}
              className="px-4 py-1.5 text-xs font-medium tracking-wide text-offwhite/45 border border-champagne/12 rounded-full"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
