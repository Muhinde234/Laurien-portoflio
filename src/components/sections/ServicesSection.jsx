import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { sectionIcons, services } from "../../data/siteData";

export default function ServicesSection({ onBook }) {
  const [servicesRef, servicesVisible] = useScrollReveal();
  const SectionIcon = sectionIcons.services;

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`py-32 px-6 bg-slate-900/50 relative scroll-reveal perf-section ${servicesVisible ? "visible" : ""}`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <SectionIcon className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-purple-300 text-sm font-medium">What I Offer</span>
          </div>
          <h3 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services Tailored for <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Your Success
            </span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From book development to youth programs and school speaking, I guide clients through a structured process that moves from raw level to credible impact.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-400/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm flex flex-col"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/50"
                  aria-hidden="true"
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">{service.title}</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 text-gray-400 mb-6" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-pink-400 mt-1 text-xl shrink-0" aria-hidden="true">
                        &bull;
                      </span>
                      <span className="group-hover:text-gray-200 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                {service.focusAreas && (
                  <div className="mt-auto pt-6 border-t border-slate-700/50">
                    <p className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-3">Focus Areas</p>
                    <ul className="space-y-2 text-gray-400" role="list">
                      {service.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                          <span className="text-blue-400 mt-1 text-xl shrink-0" aria-hidden="true">&bull;</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.note && (
                  <p className="pt-6 text-sm text-gray-500 italic border-t border-slate-700/50">
                    {service.note}
                  </p>
                )}
                {service.cta && (
                  <button
                    onClick={onBook}
                    className="mt-6 group inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
