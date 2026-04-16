import BackgroundDecor from "./components/layout/BackgroundDecor";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import AboutSection from "./components/sections/AboutSection";
import BookingSection from "./components/sections/BookingSection";
import FeaturedStrip from "./components/sections/FeaturedStrip";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import { useContent } from "./context/ContentContext";
import { CHATBASE_ID, FAQ_URL, navItems } from "./data/siteData";
import { useChatbase } from "./hooks/useChatbase";

export default function Portfolio() {
  useChatbase({ chatbotId: CHATBASE_ID });
  const { content } = useContent();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendly = () => {
    window.open(content.contact.calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-navy text-offwhite overflow-hidden font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      <ScrollProgressBar />
      <BackgroundDecor />
      <SiteHeader navItems={navItems} onNavigate={scrollToSection} onBook={openCalendly} faqUrl={FAQ_URL} />

      <main id="main-content">
        <HeroSection onBook={openCalendly} onNavigate={scrollToSection} />
        <FeaturedStrip />
        <AboutSection onBook={openCalendly} />
        <ServicesSection onBook={openCalendly} />
        <BookingSection onBook={openCalendly} />
      </main>

      <SiteFooter
        navItems={navItems}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
