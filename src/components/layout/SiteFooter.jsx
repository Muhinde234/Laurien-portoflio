import { Mail } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useContent } from "../../context/ContentContext";
import { socialLinks } from "../../data/siteData";
import defaultPhoto from "../../assets/laurien.jpeg";

export default function SiteFooter({ navItems, onNavigate }) {
  const [footerRef, footerVisible] = useScrollReveal();
  const { content } = useContent();
  const f = content.footer;
  const email = content.contact.email;
  const social = content.social;
  const laurienPhoto = content.profilePhoto || defaultPhoto;

  const socialWithUrls = socialLinks.map((s) => {
    const keyMap = {
      LinkedIn: "linkedin",
      "X (Twitter)": "x",
      Facebook: "facebook",
      Instagram: "instagram",
      YouTube: "youtube",
    };
    const key = keyMap[s.label];
    return { ...s, url: key ? social[key] : s.url };
  });

  return (
    <footer
      ref={footerRef}
      className={`bg-navy border-t border-champagne/10 scroll-reveal perf-section ${
        footerVisible ? "visible" : ""
      }`}
      role="contentinfo"
    >
   
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

       
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={laurienPhoto}
                  alt="Coach Laurien"
                  className="w-12 h-12 rounded-full object-cover object-top border-2 border-champagne/40 shadow-lg shadow-champagne/10"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-champagne leading-none">
                  Coach Laurien
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-offwhite/60 mt-1">
                  Founder, KELP Education
                </p>
              </div>
            </div>

            <p className="text-base text-offwhite/75 leading-relaxed whitespace-pre-line">
              {f.bio}
            </p>

            <p className="font-display italic text-champagne/80 text-base leading-none">
              "{f.tagline}"
            </p>

       
            <div className="flex gap-2 mt-1">
              {socialWithUrls.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 border border-champagne/35 rounded-full flex items-center justify-center text-offwhite/65 hover:border-champagne/70 hover:text-champagne transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

         
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-offwhite/60 mb-5">
              Navigation
            </h5>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-base text-offwhite/80 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://survey.coachlaurien.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-offwhite/80 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded text-left"
              >
                Take Survey
              </a>
            </nav>
          </div>

         
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-[0.2em] text-offwhite/60 mb-5">
              Get in Touch
            </h5>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-base text-offwhite/80 hover:text-champagne transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-champagne/40 rounded min-w-0"
              >
                <Mail className="w-4 h-4 shrink-0 text-champagne/75" aria-hidden="true" />
                <span className="break-all">{email}</span>
              </a>

              <div className="pt-3 border-t border-champagne/10">
                <p className="text-sm text-offwhite/70 leading-relaxed mb-3">
                  For enquiries regarding author coaching, school programs, or institutional partnerships.
                </p>
                <p className="text-sm uppercase tracking-[0.18em] text-champagne/75 font-medium">
                  Response within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-champagne/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-sm text-offwhite/55">
            &copy; {new Date().getFullYear()} Coach Laurien. All rights reserved.
          </span>
        
          <a href="https://github.com/Muhinde234" className="hidden" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            Website developed by IGIRIMPUHWE Dositha
          </a>
          <span className="font-display italic text-base text-offwhite/45">
            {f.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
