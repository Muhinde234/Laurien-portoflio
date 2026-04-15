import { ArrowRight, Calendar, Check, Clock, Video } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { bookingQualifications, sectionIcons } from "../../data/siteData";

export default function BookingSection({ onBook }) {
  const [bookingRef, bookingVisible] = useScrollReveal();
  const SectionIcon = sectionIcons.booking;

  return (
    <section
      ref={bookingRef}
      id="booking"
      className={`py-32 px-6 relative scroll-reveal perf-section ${bookingVisible ? "visible" : ""}`}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6 animate-bounce-slow">
            <SectionIcon className="w-4 h-4 text-pink-400" aria-hidden="true" />
            <span className="text-purple-300 text-sm font-medium">Let's Connect</span>
          </div>
          <h3 id="booking-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Book a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
              15-Minute
            </span>{" "}
            Discovery Call
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step? Schedule a free consultation to discuss your goals and how I can help you achieve them.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <article className="group text-center p-8 bg-slate-800/30 rounded-3xl border border-slate-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div
              className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-pink-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              aria-hidden="true"
            >
              <Clock className="w-10 h-10 text-pink-400" />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Video Call</h4>
            <p className="text-gray-400">Face-to-face virtual meeting</p>
          </article>

          <article className="group text-center p-8 bg-slate-800/30 rounded-3xl border border-slate-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div
              className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-pink-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              aria-hidden="true"
            >
              <Calendar className="w-10 h-10 text-pink-400" />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Flexible Timing</h4>
            <p className="text-gray-400">Pick a time that works for you</p>
          </article>

          <article className="group text-center p-8 bg-slate-800/30 rounded-3xl border border-slate-700 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
            <div
              className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-pink-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              aria-hidden="true"
            >
              <Video className="w-10 h-10 text-pink-400" />
            </div>
            <h4 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">15 Minutes</h4>
            <p className="text-gray-400">Quick &amp; focused discussion</p>
          </article>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-400/30 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-sm">
          <h4 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Perfect for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">You If...</span>
          </h4>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {bookingQualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                <div
                  className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-gray-300 group-hover/item:text-white transition-colors">{qualification}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onBook}
            className="group relative bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-6 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 inline-flex items-center gap-3 overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Schedule your 15-minute discovery call"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Calendar className="w-6 h-6" aria-hidden="true" />
              Schedule Your Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="mt-8 flex items-center justify-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
            No commitment required &bull; 100% free consultation
          </p>
        </div>
      </div>
    </section>
  );
}
