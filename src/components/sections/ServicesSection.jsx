import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import { services as staticServices } from "../../data/siteData";

export default function ServicesSection({ onBook }) {
  const [servicesRef, servicesVisible] = useScrollReveal();
  const { content } = useContent();

  const services = content.services.map((s, i) => ({
    ...s,
    icon: staticServices[i]?.icon,
  }));

  const cardNumbers = ["01", "02"];

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`py-24 sm:py-28 px-6 relative scroll-reveal perf-section ${servicesVisible ? "visible" : ""}`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">

        <header className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/60 mb-4">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-offwhite leading-[1.1] mb-4"
          >
            Structured engagements{" "}
            <span className="italic font-light text-champagne">for serious outcomes.</span>
          </h2>
          <p className="text-base text-offwhite/40 leading-relaxed max-w-lg">
            From manuscript to publication, raw idea to school program — every engagement is
            designed to move work from its starting point to credible impact.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const num = cardNumbers[index];

            return (
              <article
                key={index}
                className="relative flex flex-col bg-navy-light/35 border border-champagne/10 rounded-2xl overflow-hidden hover:border-champagne/20 transition-all duration-500 group"
              >
                <div
                  className="h-px bg-linear-to-r from-champagne/50 via-champagne/15 to-transparent"
                  aria-hidden="true"
                />

                <span
                  className="absolute top-4 right-6 font-display text-[4rem] md:text-[6rem] font-bold leading-none text-champagne/4 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {num}
                </span>

                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1 relative z-10">

                  <div className="flex items-start justify-between mb-7">
                    <div className="w-10 h-10 border border-champagne/18 rounded-xl flex items-center justify-center bg-champagne/5 group-hover:bg-champagne/10 transition-colors duration-300">
                      {IconComponent && <IconComponent className="w-4.5 h-4.5 text-champagne/65" />}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne/30">
                      Service {num}
                    </p>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-offwhite leading-tight mb-2">
                    {service.title}
                  </h3>

                  {service.subtitle && (
                    <p className="font-display italic font-light text-champagne/45 text-base mb-4 leading-snug">
                      {service.subtitle}
                    </p>
                  )}

                  {service.intro && (
                    <p className="font-display italic font-light text-champagne/55 text-lg mb-4">
                      {service.intro}
                    </p>
                  )}

                  <p className="text-base text-offwhite/45 leading-[1.85] mb-7">
                    {service.description}
                  </p>

                  {service.partnerWith && service.partnerWith.length > 0 && (
                    <div className="mb-6 bg-champagne/4 border border-champagne/8 rounded-xl p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-offwhite/28 mb-3">
                        {service.partnerLabel}
                      </p>
                      <ul className="space-y-2.5">
                        {service.partnerWith.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-offwhite/45 leading-relaxed">
                            <span className="text-champagne/35 shrink-0 mt-0.5 font-display">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="h-px bg-champagne/8 mb-6" aria-hidden="true" />

                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-offwhite/28 mb-4">
                    {service.featuresLabel}
                  </p>
                  <ul className="space-y-3.5 mb-7" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="font-display italic text-sm text-champagne/35 shrink-0 mt-0.5 w-5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-4 bg-champagne/18 shrink-0 mt-[0.55rem]" aria-hidden="true" />
                        <span className="text-sm text-offwhite/50 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.focusAreas && service.focusAreas.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-offwhite/28 mb-3">
                        Students leave with:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-champagne/55 border border-champagne/12 rounded-full px-3 py-1.5 leading-none"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.suitedFor && service.suitedFor.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-offwhite/28 mb-2.5">
                        Especially suited for institutions that value:
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {service.suitedFor.map((s, idx) => (
                          <span key={idx} className="flex items-center gap-2 text-base text-offwhite/45">
                            <span className="w-1 h-1 rounded-full bg-champagne/45 shrink-0" aria-hidden="true" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.note && (
                    <>
                      <div className="h-px bg-champagne/8 mb-4" aria-hidden="true" />
                      <p className="font-display italic font-light text-sm text-offwhite/28 leading-relaxed mb-6">
                        {service.note}
                      </p>
                    </>
                  )}

                  {service.cta && (
                    <div className="mt-auto pt-2">
                      <button
                        onClick={onBook}
                        className="group/btn w-full flex items-center justify-between bg-champagne text-navy font-semibold px-7 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
                      >
                        <span className="text-sm">{service.cta}</span>
                        <span className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center group-hover/btn:bg-navy/20 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
