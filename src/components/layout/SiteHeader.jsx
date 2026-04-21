import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useContent } from "../../context/ContentContext";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function SiteHeader({ navItems, onNavigate, onBook }) {
  const { content } = useContent();
  const laurienPhoto = content.profilePhoto || defaultPhoto;
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-navy border-b border-champagne/10 ${
          scrolled ? "shadow-lg shadow-navy/50" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={laurienPhoto}
                alt="Coach Laurien"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-champagne/35 shadow-md"
              />
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-champagne rounded-full border-2 border-navy"
                aria-hidden="true"
              />
            </div>
            <div>
              <h1
                className="font-display text-base font-semibold text-champagne leading-none tracking-wide cursor-default select-none"
                aria-label="Coach Laurien"
              >
                Coach Laurien
              </h1>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-7 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="text-sm text-offwhite/50 hover:text-champagne transition-colors duration-300 focus:outline-none font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onBook}
              className="bg-champagne text-navy text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-champagne-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
              aria-label="Book a consultation"
            >
              Book Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-offwhite/50 hover:text-champagne rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-champagne/40"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-navy z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "66px" }}
        >
          <div className="flex flex-col items-start px-6 py-8 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="w-full text-left font-display text-2xl font-light text-offwhite/65 hover:text-champagne transition-colors duration-300 focus:outline-none py-3 border-b border-champagne/8"
              >
                {item.label}
              </button>
            ))}
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
