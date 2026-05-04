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
      className={`min-h-svh flex items-center justify-center px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 relative border-b border-champagne/10 scroll-reveal ${
        heroRevealed ? "visible" : ""
      }`}
      aria-label="Introduction"
    >
      {/* ── Decorative writing-themed pattern ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">

        {/* Giant opening quotation mark — top left */}
        <span className="absolute font-display text-champagne leading-none hidden sm:block"
          style={{ top: '6%', left: '2%', fontSize: 'clamp(6rem, 14vw, 11rem)', opacity: 0.045, animation: 'float 9s ease-in-out infinite' }}>
          "
        </span>

        {/* Giant closing quotation mark — bottom right */}
        <span className="absolute font-display text-champagne leading-none hidden sm:block"
          style={{ bottom: '8%', right: '2%', fontSize: 'clamp(5rem, 11vw, 9rem)', opacity: 0.035, animation: 'float 11s ease-in-out infinite 3s' }}>
          "
        </span>

        {/* Em dashes floating around */}
        <span className="absolute font-display text-champagne"
          style={{ top: '20%', left: '7%', fontSize: '1.6rem', opacity: 0.08, animation: 'drift 7s ease-in-out infinite 0.5s' }}>—</span>
        <span className="absolute font-display text-champagne hidden sm:block"
          style={{ top: '68%', right: '8%', fontSize: '1.3rem', opacity: 0.06, animation: 'drift 8s ease-in-out infinite 2s' }}>—</span>
        <span className="absolute font-display text-champagne hidden md:block"
          style={{ top: '42%', left: '3%', fontSize: '1rem', opacity: 0.05, animation: 'float 6s ease-in-out infinite 1.5s' }}>—</span>

        {/* Ellipsis — drifting */}
        <span className="absolute font-display text-champagne hidden sm:block"
          style={{ top: '32%', right: '6%', fontSize: '1.3rem', opacity: 0.07, animation: 'drift 9s ease-in-out infinite 1s', letterSpacing: '0.15em' }}>...</span>
        <span className="absolute font-display text-champagne hidden md:block"
          style={{ bottom: '28%', left: '6%', fontSize: '1rem', opacity: 0.05, animation: 'drift 10s ease-in-out infinite 4s', letterSpacing: '0.15em' }}>...</span>

        {/* Blinking cursor — typewriter feel */}
        <span className="absolute font-display text-champagne hidden sm:block"
          style={{ bottom: '22%', left: '9%', fontSize: '1.8rem', fontWeight: 300, animation: 'blink-cursor 1.1s step-end infinite', opacity: 0.12 }}>_</span>

        {/* Floating dots */}
        <span className="absolute rounded-full bg-champagne"
          style={{ top: '17%', right: '18%', width: 5, height: 5, opacity: 0.1, animation: 'pulse-dot 4s ease-in-out infinite' }} />
        <span className="absolute rounded-full bg-champagne"
          style={{ top: '58%', left: '13%', width: 3, height: 3, opacity: 0.08, animation: 'pulse-dot 5s ease-in-out infinite 1.5s' }} />
        <span className="absolute rounded-full bg-champagne hidden sm:block"
          style={{ bottom: '18%', right: '22%', width: 4, height: 4, opacity: 0.07, animation: 'pulse-dot 6s ease-in-out infinite 3s' }} />
        <span className="absolute rounded-full bg-champagne hidden md:block"
          style={{ top: '50%', right: '4%', width: 3, height: 3, opacity: 0.06, animation: 'pulse-dot 3.5s ease-in-out infinite 0.8s' }} />

        {/* Manuscript lines — left column (looks like a page of text) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-5 flex-col gap-2 opacity-[0.04] hidden lg:flex"
          style={{ animation: 'float 12s ease-in-out infinite 2s' }}>
          {[72, 88, 56, 94, 68, 80, 50, 76, 62].map((w, i) => (
            <div key={i} className="h-px bg-champagne rounded-full" style={{ width: w }} />
          ))}
        </div>

        {/* Manuscript lines — right column */}
        <div className="absolute top-1/2 -translate-y-1/2 right-5 flex-col gap-2 opacity-[0.04] hidden lg:flex"
          style={{ animation: 'float 14s ease-in-out infinite 5s' }}>
          {[60, 84, 48, 78, 92, 54, 70, 86, 44].map((w, i) => (
            <div key={i} className="h-px bg-champagne rounded-full" style={{ width: w }} />
          ))}
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <p
          className={`text-sm font-semibold uppercase tracking-[0.28em] text-champagne/60 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.label}
        </p>

        <h1
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite leading-[1.08] mb-5 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.headlineStart}{" "}
          <span className="italic font-light text-champagne">{h.headlineHighlight}</span>
        </h1>

        <p
          className={`text-sm sm:text-base md:text-lg text-offwhite/55 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {h.subheadline}
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={onBook}
            className="group bg-champagne text-navy font-semibold px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-base"
          >
            {h.primaryCta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="border border-champagne/25 text-offwhite/65 font-medium px-7 py-3.5 sm:px-8 sm:py-4 rounded-full hover:border-champagne/50 hover:text-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 focus:ring-offset-2 focus:ring-offset-navy text-base"
          >
            {h.secondaryCta}
          </button>
        </div>

        <div
          className={`mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-10 sm:w-16 bg-champagne/20" aria-hidden="true" />
          <p className="text-sm tracking-[0.22em] uppercase text-offwhite/25 font-medium">
            {h.tagline}
          </p>
          <div className="h-px w-10 sm:w-16 bg-champagne/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
