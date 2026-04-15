import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { useScrollLock } from "../../hooks/useScrollLock";

export default function SiteHeader({ navItems, onNavigate, onBook, faqUrl }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useScrollLock(mobileMenuOpen);

  useEffect(() => {
    let rafId = null;
    let ticking = false;

    const updateScroll = () => {
      ticking = false;
      setScrolled(window.scrollY > 50);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-slate-900/90 md:backdrop-blur-lg md:shadow-2xl md:shadow-blue-500/10" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-gradient bg-300%">
            Laurien
          </h1>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="hover:text-pink-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg px-2 py-1"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-300 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg px-2 py-1"
            >
              FAQ
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={onBook}
              className="relative bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2.5 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Book a consultation call"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-none md:backdrop-blur-lg z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "80px" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-2xl hover:text-pink-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg px-4 py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg px-4 py-2 inline-flex items-center gap-2"
            >
              FAQ
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => {
                onBook();
                setMobileMenuOpen(false);
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Book Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
