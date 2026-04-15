import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function HeroSection({ onBook, onNavigate }) {
  const [heroRef, heroRevealed] = useScrollReveal();
  const [visible, setVisible] = useState(false);

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
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Section label */}
        <p
          className={`text-xs font-semibold uppercase tracking-[0.3em] text-champagne/70 mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Youth Development &amp; Author Coach &nbsp;·&nbsp; Founder, KELP Education
        </p>

        {/* Primary headline */}
        <h2
          className={`font-display text-6xl md:text-8xl lg:text-9xl font-light text-offwhite leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Serious Work.
          <br />
          <span className="text-champagne italic">Lasting Impact.</span>
        </h2>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-xl text-offwhite/55 max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I partner with emerging authors, schools, and mission-driven organizations
          who are committed — not curious — about producing results that hold.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={onBook}
            className="group bg-champagne text-navy font-semibold px-8 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
          >
            Begin the Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="border border-champagne/25 text-offwhite/70 font-medium px-8 py-4 rounded-full hover:border-champagne/50 hover:text-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:ring-offset-2 focus:ring-offset-navy"
          >
            Explore Services
          </button>
        </div>

        {/* Horizontal rule divider */}
        <div
          className={`mt-20 flex items-center justify-center gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-16 bg-champagne/20"></div>
          <p className="text-xs tracking-[0.25em] uppercase text-offwhite/30 font-medium">
            Where serious work begins
          </p>
          <div className="h-px w-16 bg-champagne/20"></div>
        </div>
      </div>
    </section>
  );
}
