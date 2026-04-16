import { useState } from "react";
import HeroEditor from "./editors/HeroEditor";
import AboutEditor from "./editors/AboutEditor";
import ServicesEditor from "./editors/ServicesEditor";
import BookingEditor from "./editors/BookingEditor";
import TrustedByEditor from "./editors/TrustedByEditor";
import SocialEditor from "./editors/SocialEditor";
import ContactEditor from "./editors/ContactEditor";
import SettingsEditor from "./editors/SettingsEditor";

const TABS = [
  { id: "hero",      label: "Hero",          icon: "🏠", desc: "Main headline & buttons" },
  { id: "about",     label: "About",         icon: "👤", desc: "Your story & values" },
  { id: "services",  label: "Services",      icon: "📋", desc: "Author & Youth coaching" },
  { id: "booking",   label: "Work With Me",  icon: "📅", desc: "Booking section" },
  { id: "trustedBy", label: "Trusted By",    icon: "🏷️", desc: "Strip of client tags" },
  { id: "social",    label: "Social Links",  icon: "🔗", desc: "Social media URLs" },
  { id: "contact",   label: "Contact & Footer", icon: "📧", desc: "Email, booking link & footer" },
  { id: "settings",  label: "Settings",      icon: "⚙️", desc: "Password & backup" },
];

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderEditor = () => {
    switch (activeTab) {
      case "hero":      return <HeroEditor />;
      case "about":     return <AboutEditor />;
      case "services":  return <ServicesEditor />;
      case "booking":   return <BookingEditor />;
      case "trustedBy": return <TrustedByEditor />;
      case "social":    return <SocialEditor />;
      case "contact":   return <ContactEditor />;
      case "settings":  return <SettingsEditor onLogout={onLogout} />;
      default:          return null;
    }
  };

  const activeTabData = TABS.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* ── Sidebar (desktop always visible, mobile overlay) ── */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Brand */}
        <div className="px-5 py-5 border-b border-gray-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#1B2452] flex items-center justify-center shrink-0">
            <span className="text-[#E8D6B3] font-serif text-base font-semibold italic">L</span>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none">Content Manager</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Coach Laurien</p>
          </div>
          {/* Close on mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto text-gray-400 hover:text-gray-600 lg:hidden"
          >✕</button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
              className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition
                ${activeTab === tab.id
                  ? "bg-[#1B2452] text-white font-semibold"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
            >
              <span className="text-base leading-none">{tab.icon}</span>
              <div>
                <p className="leading-none">{tab.label}</p>
                <p className={`text-[10px] mt-0.5 leading-none ${activeTab === tab.id ? "text-white/60" : "text-gray-400"}`}>
                  {tab.desc}
                </p>
              </div>
            </button>
          ))}
        </nav>

        {/* Preview site link */}
        <div className="px-4 py-4 border-t border-gray-100">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#1B2452] transition font-medium"
          >
            <span>↗</span> Preview Live Site
          </a>
        </div>
      </aside>

      {/* Sidebar overlay backdrop (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center gap-4">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-900 transition"
          >
            <span className="text-xl leading-none">☰</span>
          </button>

          <div>
            <h1 className="text-base font-bold text-gray-900 leading-none">
              {activeTabData?.icon} {activeTabData?.label}
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">{activeTabData?.desc}</p>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#1B2452] font-medium transition"
            >
              ↗ Preview Site
            </a>
            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 transition"
            >
              Sign Out
            </button>
          </div>
        </header>

        {/* Editor area */}
        <main className="flex-1 overflow-y-auto max-w-2xl w-full mx-auto pb-24">
          {renderEditor()}
        </main>
      </div>
    </div>
  );
}
