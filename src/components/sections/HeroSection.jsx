import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { heroBadge } from "../../data/siteData";

export default function HeroSection({ onBook, onNavigate }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroRef, heroRevealed] = useScrollReveal();
  const BadgeIcon = heroBadge.icon;

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const yearsCount = useCountUp(10, 1500, heroVisible);
  const projectsCount = useCountUp(200, 1500, heroVisible);
  const satisfactionCount = useCountUp(98, 1500, heroVisible);

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center px-6 pt-20 relative scroll-reveal ${
        heroRevealed ? "visible" : ""
      }`}
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm animate-fade-in-up">
          <BadgeIcon className="w-4 h-4 text-blue-400 animate-pulse" aria-hidden="true" />
          <span className="text-blue-300 text-sm font-medium">
            {heroBadge.text} &bull; {heroBadge.detail} &bull; {heroBadge.extra}
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          Hi, I am{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
            Coach Laurien
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
          I help emerging authors, schools, parents, and mission-driven organizations who are serious and ready to have their desired goals achieved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up">
          <button
            onClick={onBook}
            className="group bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Book a 15-Min Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button
            onClick={() => onNavigate("services")}
            className="bg-slate-800/50 border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Explore Services
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center animate-fade-in-up group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-blue-400 transition-all duration-300">
              {yearsCount}+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Years Experience</div>
          </div>
          <div className="text-center animate-fade-in-up group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-blue-400 transition-all duration-300">
              {projectsCount}+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projects Completed</div>
          </div>
          <div className="text-center animate-fade-in-up group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-blue-400 transition-all duration-300">
              {satisfactionCount}%
            </div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
