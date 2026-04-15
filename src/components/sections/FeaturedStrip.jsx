import { useScrollReveal } from "../../hooks/useScrollReveal";
import { featuredLogos } from "../../data/siteData";

export default function FeaturedStrip() {
  const [featuredRef, featuredVisible] = useScrollReveal();
  return (
    <section
      ref={featuredRef}
      className={`py-14 px-6 border-y border-slate-800 bg-slate-900/40 scroll-reveal perf-section ${
        featuredVisible ? "visible" : ""
      }`}
      aria-label="Featured clients"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
          Trusted By
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {featuredLogos.map((logo) => (
            <span
              key={logo}
              className="px-4 py-2 rounded-full border border-slate-700 text-gray-300 text-sm bg-slate-800/40 hover:border-blue-400/50 hover:text-blue-200 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
