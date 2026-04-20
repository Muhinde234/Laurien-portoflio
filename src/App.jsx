import BackgroundDecor from "./components/layout/BackgroundDecor";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import AboutSection from "./components/sections/AboutSection";
import BookingSection from "./components/sections/BookingSection";
import FeaturedStrip from "./components/sections/FeaturedStrip";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ChatbotBubble from "./components/chatbot/ChatbotBubble";
import { useContent } from "./context/ContentContext";
import { FAQ_URL, navItems } from "./data/siteData";

export default function Portfolio() {
  const { content } = useContent();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openCalendly = () => {
    window.open(content.contact.calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-navy-dark text-offwhite overflow-hidden font-body">
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

      <ChatbotBubble />
    </div>
  );
}
