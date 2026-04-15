import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { sectionIcons, testimonials } from "../../data/siteData";

export default function TestimonialsSection({ onBook }) {
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const SectionIcon = sectionIcons.testimonials;

  return (
    <section
      ref={testimonialsRef}
      className={`py-32 px-6 relative scroll-reveal perf-section ${testimonialsVisible ? "visible" : ""}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <SectionIcon className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-purple-300 text-sm font-medium">Client Success Stories</span>
          </div>
          <h3 id="testimonials-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Clients Say
            </span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what people I've worked with have to say about their experience.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-400/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} star rating`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-300 mb-8 leading-relaxed italic">"{testimonial.content}"</blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-14 h-14 rounded-full border-2 border-pink-400/30 group-hover:border-pink-400 transition-colors"
                />
                <div>
                  <div className="font-bold text-white group-hover:text-pink-400 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">Ready to become my next success story?</p>
          <button
            onClick={onBook}
            className="group bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
