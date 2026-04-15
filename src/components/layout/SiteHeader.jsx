import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { useScrollLock } from "../../hooks/useScrollLock";
import laurienPhoto from "../../assets/laurien.jpeg";

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
            ? "bg-navy/95 border-b border-champagne/10 shadow-lg shadow-navy/40"
            : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

         
          <div className="flex items-center gap-3">
           
            <div className="relative shrink-0">
              <img
                src={laurienPhoto}
                alt="Coach Laurien"
                className="w-11 h-11 rounded-full object-cover object-top border-2 border-champagne/40 shadow-md shadow-champagne/10"
              />
           
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-champagne rounded-full border-2 border-navy"
                aria-hidden="true"
              />
            </div>

        
            <div>
              <h1
                className="font-display text-xl font-semibold text-champagne leading-none tracking-wide cursor-default select-none"
                aria-label="Coach Laurien"
              >
                Coach Laurien
              </h1>
             
            </div>
          </div>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex gap-7 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-sm text-offwhite/55 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-1 py-1"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-flex items-center gap-1.5 text-offwhite/55 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-1 py-1"
            >
              FAQ
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <button
              onClick={onBook}
              className="bg-champagne text-navy text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
              aria-label="Book a consultation"
            >
              Book Me
            </button>
          </div>

          {/* ── Mobile menu toggle ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-offwhite/55 hover:text-champagne rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-champagne/40"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden fixed inset-0 bg-navy z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "72px" }}
        >
          {/* Mobile menu header with photo */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-champagne/10">
            <img
              src={laurienPhoto}
              alt="Coach Laurien"
              className="w-12 h-12 rounded-full object-cover object-top border-2 border-champagne/40"
            />
            <div>
              <p className="font-display text-lg font-semibold text-champagne leading-none">
                Coach Laurien
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-offwhite/30 mt-1">
                Where serious work begins.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start px-6 py-8 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="w-full text-left font-display text-2xl font-light text-offwhite/70 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded py-3 px-2 border-b border-champagne/8"
              >
                {item.label}
              </button>
            ))}
            <a
              href={faqUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-display text-2xl font-light text-offwhite/70 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded py-3 px-2 border-b border-champagne/8 inline-flex items-center gap-2"
            >
              FAQ
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              onClick={() => {
                onBook();
                setMobileMenuOpen(false);
              }}
              className="mt-6 w-full bg-champagne text-navy font-semibold py-4 rounded-full text-base hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne"
            >
              Book Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
