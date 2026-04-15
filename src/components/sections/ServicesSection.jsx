import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { services } from "../../data/siteData";

export default function ServicesSection({ onBook }) {
  const [servicesRef, servicesVisible] = useScrollReveal();

  const cardNumbers = ["01", "02"];

  return (
    <section
      ref={servicesRef}
      id="services"
      className={`py-24 px-6 relative scroll-reveal perf-section ${servicesVisible ? "visible" : ""}`}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne/60 mb-5">
            Services
          </p>
          <h3
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-offwhite leading-[1.08] mb-5"
          >
            Structured engagements <br />
            <span className="italic text-champagne">for serious outcomes.</span>
          </h3>
          <p className="text-sm text-offwhite/45 leading-relaxed max-w-lg">
            From manuscript to publication, raw idea to school program — every engagement is
            designed to move work from its starting point to credible impact.
          </p>
        </header>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const num = cardNumbers[index];

            return (
              <article
                key={index}
                className="relative flex flex-col bg-navy-light/40 border border-champagne/12 rounded-2xl overflow-hidden hover:border-champagne/22 transition-all duration-500 group"
              >
                {/* Top gradient accent line */}
                <div
                  className="h-px bg-gradient-to-r from-champagne/50 via-champagne/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Ghost card number — large, background */}
                <span
                  className="absolute top-4 right-6 font-display text-[7rem] font-light leading-none text-champagne/[0.04] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {num}
                </span>

                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">

                  {/* ── Card top: icon + service number ── */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-11 h-11 border border-champagne/20 rounded-xl flex items-center justify-center bg-champagne/5 group-hover:bg-champagne/10 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-champagne/70" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-champagne/35">
                      Service {num}
                    </p>
                  </div>

                  {/* ── Title ── */}
                  <h4 className="font-display text-3xl md:text-4xl font-light text-offwhite leading-tight mb-2">
                    {service.title}
                  </h4>

                  {/* Subtitle — Youth Coaching */}
                  {service.subtitle && (
                    <p className="font-display italic text-champagne/50 text-base mb-5 leading-snug">
                      {service.subtitle}
                    </p>
                  )}

                  {/* Intro — Author's Coaching */}
                  {service.intro && (
                    <p className="font-display italic text-champagne/60 text-lg mb-5">
                      {service.intro}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-offwhite/50 leading-[1.85] mb-8">
                    {service.description}
                  </p>

                  {/* ── Partner with — Youth Coaching only ── */}
                  {service.partnerWith && (
                    <div className="mb-7 bg-champagne/[0.04] border border-champagne/10 rounded-xl p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/30 mb-4">
                        {service.partnerLabel}
                      </p>
                      <ul className="space-y-3">
                        {service.partnerWith.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-offwhite/50 leading-relaxed">
                            <span className="text-champagne/40 shrink-0 mt-0.5 font-display">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── Divider ── */}
                  <div className="h-px bg-champagne/8 mb-7" aria-hidden="true" />

                  {/* ── Features ── */}
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/30 mb-5">
                    {service.featuresLabel}
                  </p>
                  <ul className="space-y-4 mb-8" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="font-display italic text-xs text-champagne/40 shrink-0 mt-0.5 w-5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-4 bg-champagne/20 shrink-0 mt-[0.55rem]" aria-hidden="true" />
                        <span className="text-sm text-offwhite/55 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ── Focus areas — pills ── */}
                  {service.focusAreas && (
                    <div className="mb-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/30 mb-4">
                        Students leave with:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.focusAreas.map((area, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-champagne/60 border border-champagne/15 rounded-full px-3 py-1.5 leading-none"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Suited for ── */}
                  {service.suitedFor && (
                    <div className="mb-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/30 mb-3">
                        Especially suited for institutions that value:
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {service.suitedFor.map((s, idx) => (
                          <span key={idx} className="flex items-center gap-2 text-sm text-offwhite/50">
                            <span className="w-1 h-1 rounded-full bg-champagne/50 shrink-0" aria-hidden="true" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Note ── */}
                  {service.note && (
                    <>
                      <div className="h-px bg-champagne/8 mb-5" aria-hidden="true" />
                      <p className="font-display italic text-xs text-offwhite/30 leading-relaxed mb-7">
                        {service.note}
                      </p>
                    </>
                  )}

                  {/* ── CTA ── */}
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
