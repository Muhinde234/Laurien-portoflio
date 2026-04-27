import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { testimonials } from "../../data/siteData";

export default function TestimonialsSection({ onBook }) {
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();

  return (
    <section
      ref={testimonialsRef}
      className={`py-24 sm:py-28 px-6 relative scroll-reveal perf-section ${testimonialsVisible ? "visible": ""}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
    
        <header className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne/70 mb-5">
            Client Results
          </p>
          <h3
            id="testimonials-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-offwhite leading-[1.1]"
          >
            What the work <br />
            <span className="italic text-champagne">produces.</span>
          </h3>
        </header>

     
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-navy-light border border-champagne/12 rounded-2xl p-6 sm:p-7 flex flex-col hover:border-champagne/22 transition-colors duration-300"
            >
        
              <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} out of 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-champagne/70" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

            
              <blockquote className="font-display text-xl italic text-offwhite/65 leading-relaxed flex-1 mb-6">
                "{testimonial.content}"
              </blockquote>

           
              <div className="flex items-center gap-3 pt-5 border-t border-champagne/10">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover border border-champagne/20"
                />
                <div>
                  <div className="text-base font-medium text-offwhite/80">{testimonial.name}</div>
                  <div className="text-sm text-offwhite/40">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

   
        <div className="border-t border-champagne/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-display text-2xl italic text-offwhite/50">
            Ready to produce work you are proud of?
          </p>
          <button
            onClick={onBook}
            className="group bg-champagne text-navy font-semibold px-8 py-4 rounded-full hover:bg-champagne-light transition-colors duration-300 inline-flex items-center gap-2 shrink-0 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
          >
            Begin the Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
