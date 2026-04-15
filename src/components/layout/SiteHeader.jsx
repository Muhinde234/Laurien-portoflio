import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
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
      if (rafId) window.cancelAnimationFrame(rafId);
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
          scrolled
            ? "bg-navy/95 border-b border-champagne/10 shadow-lg shadow-navy/50"
            : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Wordmark */}
          <h1
            className="font-display text-2xl font-semibold text-champagne tracking-wide cursor-default select-none"
            aria-label="Coach Laurien"
          >
            Coach Laurien
          </h1>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-sm text-offwhite/60 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-2 py-1"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1.5 text-offwhite/60 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-2 py-1"
            >
              FAQ
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <button
              onClick={onBook}
              className="bg-champagne text-navy text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
              aria-label="Book a consultation"
            >
              Book Me
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-offwhite/60 hover:text-champagne rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-champagne/40"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-navy z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "80px" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="font-display text-2xl text-offwhite/70 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-4 py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-offwhite/70 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-4 py-2 inline-flex items-center gap-2"
            >
              FAQ
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              onClick={() => {
                onBook();
                setMobileMenuOpen(false);
              }}
              className="bg-champagne text-navy font-semibold px-10 py-4 rounded-full text-lg hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne"
            >
              Book Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
