import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function AboutSection({ onBook }) {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const { content } = useContent();
  const a = content.about;
  const laurienPhoto = content.aboutPhoto || defaultPhoto;

  const values = a.values.map((text, i) => ({
    num: String(i + 1).padStart(2, "0"),
    text,
  }));

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`py-24 sm:py-28 px-4 sm:px-6 relative scroll-reveal perf-section ${aboutVisible ? "visible" : ""}`}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-navy-light/15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/60 mb-8">
          {a.label}
        </p>

        <div className="grid md:grid-cols-[5fr_7fr] gap-6 lg:gap-10 items-start">

         
          <div className="relative flex justify-center md:justify-start">

          
            <div
              className="absolute -bottom-4 -left-4 w-4/5 h-4/5 rounded-2xl pointer-events-none"
              aria-hidden="true"
              style={{
                background: "linear-gradient(145deg, rgba(232,214,179,0.08) 0%, rgba(232,214,179,0.03) 100%)",
                border: "1px solid rgba(232,214,179,0.1)",
              }}
            />

           
            <div
              className="absolute -top-6 -right-6 w-20 h-20 pointer-events-none hidden md:block"
              aria-hidden="true"
              style={{
                backgroundImage: "radial-gradient(rgba(232,214,179,0.25) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative w-full max-w-sm md:max-w-none">

         
              <div
                className="relative rounded-2xl overflow-visible"
                style={{
                  padding: "3px",
                  background: "linear-gradient(145deg, rgba(232,214,179,0.45) 0%, rgba(232,214,179,0.06) 55%, rgba(232,214,179,0.22) 100%)",
                }}
              >
                <div className="relative rounded-[14px] overflow-hidden aspect-3/4">
                  <img
                    src={laurienPhoto}
                    alt="Coach Laurien"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />

               
                  <div
                    className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background: "linear-gradient(to top, rgba(13,18,41,0.95) 0%, rgba(13,18,41,0.45) 55%, transparent 100%)",
                    }}
                  />

               
                  <div className="absolute top-4 left-4 w-7 h-7 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-0 w-full h-px bg-champagne/70" />
                    <div className="absolute top-0 left-0 h-full w-px bg-champagne/70" />
                  </div>
                 
                  <div className="absolute top-4 right-4 w-7 h-7 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-full h-px bg-champagne/70" />
                    <div className="absolute top-0 right-0 h-full w-px bg-champagne/70" />
                  </div>

             
                  <div className="absolute bottom-0 inset-x-0 px-5 pb-5">
                    <p className="font-display text-base font-bold text-offwhite leading-tight">Coach Laurien</p>
                    <p className="text-sm uppercase tracking-wider text-champagne/70 mt-1">
                      Founder, KELP Education
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>

       
          <div className="flex flex-col gap-5 pt-2 md:pt-4">

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-offwhite leading-tight"
            >
              {a.headlineStart}{" "}
              <span className="italic font-light text-champagne">{a.headlineHighlight}</span>
            </h2>

            <blockquote className="border-l-2 border-champagne/35 pl-5">
              <p className="font-display text-base italic font-light text-offwhite/55 leading-relaxed">
                {a.quote}
              </p>
            </blockquote>

            <div className="space-y-3.5 text-base text-offwhite/50 leading-loose">
              <p>{a.body1}</p>
              <p>{a.body2}</p>
            </div>

            <div className="flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-champagne/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-champagne/25" />
              <div className="h-px w-8 bg-champagne/10" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-offwhite/30 mb-4">
                {a.valuesHeading}
              </p>
              <ul className="space-y-3.5">
                {values.map(({ num, text }) => (
                  <li key={num} className="flex items-center gap-4">
                    <span className="font-display text-sm italic text-champagne/40 shrink-0 w-5">
                      {num}
                    </span>
                    <div className="h-px w-4 bg-champagne/18 shrink-0" aria-hidden="true" />
                    <span className="text-base text-offwhite/65 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-champagne/10" aria-hidden="true" />

            <p className="font-display text-base italic font-light text-offwhite/38 leading-relaxed">
              {a.closing}
            </p>

            <div>
              <button
                onClick={onBook}
                className="group bg-champagne text-navy font-semibold px-7 py-3.5 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy text-base w-full sm:w-auto"
              >
                {a.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
