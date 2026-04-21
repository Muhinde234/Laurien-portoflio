import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";

export default function HeroSection({ onBook, onNavigate }) {
  const [heroRef, heroRevealed] = useScrollReveal();
  const [visible, setVisible] = useState(false);
  const { content } = useContent();
  const h = content.hero;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative scroll-reveal ${
        heroRevealed ? "visible" : ""
      }`}
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <p
          className={`text-xs font-semibold uppercase tracking-[0.3em] text-champagne/60 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.label}
        </p>

        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-offwhite leading-[1.08] mb-5 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.headlineStart}{" "}
          <span className="italic font-light text-champagne">{h.headlineHighlight}</span>
        </h1>

        <p
          className={`text-base sm:text-lg text-offwhite/50 max-w-xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.subheadline}
        </p>

        <div
          className={`flex gap-3 sm:gap-4 justify-center flex-wrap transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={onBook}
            className="group bg-champagne text-navy font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-sm"
          >
            {h.primaryCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="border border-champagne/25 text-offwhite/65 font-medium px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:border-champagne/50 hover:text-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:ring-offset-2 focus:ring-offset-navy text-sm"
          >
            {h.secondaryCta}
          </button>
        </div>

        <div
          className={`mt-16 sm:mt-20 flex items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-10 sm:w-16 bg-champagne/20" aria-hidden="true" />
          <p className="text-xs tracking-[0.25em] uppercase text-offwhite/25 font-medium">
            {h.tagline}
          </p>
          <div className="h-px w-10 sm:w-16 bg-champagne/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
