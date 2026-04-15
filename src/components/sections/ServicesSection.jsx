import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { services } from "../../data/siteData";

export default function ServicesSection({ onBook }) {
  const [servicesRef, servicesVisible] = useScrollReveal();

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`py-28 px-6 relative scroll-reveal perf-section ${servicesVisible ? "visible" : ""}`}
      aria-labelledby="services-heading"
    >
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-navy-light/30 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne/70 mb-5">
            Services
          </p>
          <h3
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-offwhite leading-[1.1] mb-5"
          >
            Structured engagements <br />
            <span className="italic text-champagne">for serious outcomes.</span>
          </h3>
          <p className="text-offwhite/50 leading-relaxed">
            From manuscript to publication, raw idea to school program — every engagement is
            designed to move work from its starting point to credible impact.
          </p>
        </header>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article
                key={index}
                className="bg-navy border border-champagne/12 rounded-2xl p-8 flex flex-col hover:border-champagne/25 transition-colors duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 border border-champagne/20 rounded-xl flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <IconComponent className="w-5 h-5 text-champagne/80" />
                </div>

                {/* Title */}
                <h4 className="font-display text-2xl font-light text-offwhite mb-2">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-offwhite/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-offwhite/55">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne/60 shrink-0 mt-1.5" aria-hidden="true"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Focus areas */}
                {service.focusAreas && (
                  <div className="pt-5 border-t border-champagne/10 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne/50 mb-3">
                      Students leave with
                    </p>
                    <ul className="space-y-2" role="list">
                      {service.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-offwhite/45">
                          <span className="w-1 h-1 rounded-full bg-champagne/40 shrink-0" aria-hidden="true"></span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Note */}
                {service.note && (
                  <p className="pt-5 border-t border-champagne/10 text-xs text-offwhite/35 italic leading-relaxed mb-6">
                    {service.note}
                  </p>
                )}

                {/* CTA */}
                {service.cta && (
                  <button
                    onClick={onBook}
                    className="mt-auto group inline-flex items-center gap-2 bg-champagne text-navy text-sm font-semibold px-6 py-3 rounded-full hover:bg-champagne-light transition-colors duration-300 self-start focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
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
