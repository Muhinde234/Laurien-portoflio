import { Calendar, ExternalLink, Mail } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function SiteFooter({ navItems, onNavigate, onBook, socialLinks, faqUrl }) {
  const [footerRef, footerVisible] = useScrollReveal();
  return (
    <footer
      id="contact"
      ref={footerRef}
      className={`bg-slate-900/80 py-20 px-6 border-t border-slate-800 backdrop-blur-none md:backdrop-blur-sm scroll-reveal perf-section ${
        footerVisible ? "visible" : ""
      }`}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-gradient bg-300%">
              Laurien
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into impact through English mastery, strategic content consultancy, and author coaching.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
            <nav className="space-y-3" aria-label="Footer navigation">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-gray-400 hover:text-pink-400 hover:translate-x-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1 text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={faqUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-2 py-1"
              >
                FAQ
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </nav>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Get in Touch</h5>
            <a
              href="mailto:hello@laurien.com"
              className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              hello@laurien.com
            </a>

            <button
              onClick={onBook}
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Book a Call
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-slate-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Laurien. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
