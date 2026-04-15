import { useScrollReveal } from "../../hooks/useScrollReveal";
import { aboutBadges, profileImages } from "../../data/siteData";
import { ArrowRight } from "lucide-react";

export default function AboutSection({ onBook }) {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const AwardIcon = aboutBadges.awardIcon;
  const SparkleIcon = aboutBadges.sparkleIcon;

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`py-32 px-6 relative scroll-reveal perf-section ${aboutVisible ? "visible" : ""}`}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <article className="relative group">
          <div className="relative overflow-hidden rounded-3xl border-2 border-purple-400/30 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500">
            <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 flex items-center justify-center text-6xl font-bold text-white">
                <img src={profileImages.laurien} alt="Laurien" loading="lazy" decoding="async" />
              </div>
            </div>
            <div
              className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
              aria-hidden="true"
            ></div>
          </div>

          <div
            className="absolute -top-6 -right-6 bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl shadow-xl animate-float"
            aria-hidden="true"
          >
            <AwardIcon className="w-8 h-8" />
          </div>
          <div
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-600 to-pink-500 p-4 rounded-2xl shadow-xl animate-float"
            style={{ animationDelay: "1s" }}
            aria-hidden="true"
          >
            <SparkleIcon className="w-8 h-8" />
          </div>
        </article>

        <div className="space-y-6">
          <div className="flex items-center gap-2 text-pink-400">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="text-sm font-semibold uppercase tracking-wider">About Me</span>
          </div>
          <h3 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Youth Development &amp; <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Emerging Authors Coach
            </span>
          </h3>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p className="transform transition-all duration-500 hover:translate-x-2">
              I am a youth development and emerging authors' coach and the founder of KELP Education. My work is positioned at a premium level because it is deep, hands-on, and has a sustained impact.
            </p>
            <p className="transform transition-all duration-500 hover:translate-x-2">
              I partner with clients through focused and collaborative engagements designed to achieve precision, clarity, and meaningful outcomes. I am not a motivational coach — I protect standards, strengthen thinking, and ensure that I serve with integrity and excellence.
            </p>
            <p className="font-medium text-white">Clients work with me because they prioritize:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1" aria-hidden="true">&bull;</span>
                <span>Depth over hesitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1" aria-hidden="true">&bull;</span>
                <span>Discipline over shortcuts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1" aria-hidden="true">&bull;</span>
                <span>Excellence over convenience</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onBook}
            className="group mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Book Me
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
