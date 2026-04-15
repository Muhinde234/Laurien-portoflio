import {  Mail } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import laurienPhoto from "../../assets/laurien.jpeg";


export default function SiteFooter({ navItems, onNavigate, socialLinks }) {
  const [footerRef, footerVisible] = useScrollReveal();

  return (
    <footer
      id="contact"
      ref={footerRef}
      className={`bg-navy border-t border-champagne/10 py-20 px-6 scroll-reveal perf-section ${
        footerVisible ? "visible" : ""
      }`}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
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
            <p className="text-xs uppercase tracking-[0.25em] text-offwhite/30 mb-5">
              Where serious work begins.
            </p>
            <p className="text-sm text-offwhite/40 leading-relaxed">
              Youth development and emerging authors' coach. Founder of KELP Education.
            </p>
          </div>

       
          <div>
            <h5 className="text-xs font-semibold  tracking-[0.25em] text-offwhite/40 mb-6">
              Navigation
            </h5>
            <nav className="space-y-3" aria-label="Footer navigation">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block text-sm text-offwhite/45 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-1 py-0.5 text-left"
                >
                  {item.label}
                </button>
              ))}
             
            </nav>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.25em] text-offwhite/40 mb-6">
              Contact
            </h5>
            <a
              href="mailto:hello@coachlaurien.com"
              className="inline-flex items-center gap-2 text-sm text-offwhite/45 hover:text-champagne transition-colors duration-300 mb-6 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded px-1"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              hello@coachlaurien.com
            </a>

            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 border border-champagne/15 rounded-full flex items-center justify-center text-offwhite/35 hover:border-champagne/40 hover:text-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-champagne/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-offwhite/25">
          <span>&copy; {new Date().getFullYear()} Coach Laurien. All rights reserved.</span>
          <span className="font-display italic text-offwhite/20">Where serious work begins.</span>
        </div>
      </div>
    </footer>
  );
}
