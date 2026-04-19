import { useState } from "react";
import {
  Home,
  User,
  ClipboardList,
  CalendarDays,
  Tag,
  Link2,
  Mail,
  Settings,
  Menu,
  X,
  ExternalLink,
  LogOut,
} from "lucide-react";
import defaultPhoto from "../assets/laurien.jpeg";
import { useContent } from "../context/ContentContext";
import HeroEditor from "./editors/HeroEditor";
import AboutEditor from "./editors/AboutEditor";
import ServicesEditor from "./editors/ServicesEditor";
import BookingEditor from "./editors/BookingEditor";
import TrustedByEditor from "./editors/TrustedByEditor";
import SocialEditor from "./editors/SocialEditor";
import ContactEditor from "./editors/ContactEditor";
import SettingsEditor from "./editors/SettingsEditor";

const TABS = [
  { id: "hero",      label: "Hero",             Icon: Home,          desc: "Main headline & buttons" },
  { id: "about",     label: "About",            Icon: User,          desc: "Your story & values" },
  { id: "services",  label: "Services",         Icon: ClipboardList, desc: "Author & Youth coaching" },
  { id: "booking",   label: "Work With Me",     Icon: CalendarDays,  desc: "Booking section" },
  { id: "trustedBy", label: "Trusted By",       Icon: Tag,           desc: "Strip of client tags" },
  { id: "social",    label: "Social Links",     Icon: Link2,         desc: "Social media URLs" },
  { id: "contact",   label: "Contact & Footer", Icon: Mail,          desc: "Email, booking link & footer" },
  { id: "settings",  label: "Settings",         Icon: Settings,      desc: "Password & backup" },
];

export default function AdminDashboard({ onLogout }) {
  const { content } = useContent();
  const laurienPhoto = content.profilePhoto || defaultPhoto;
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
  const ActiveIcon = activeTabData?.Icon;

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">

      
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200
          flex flex-col h-screen
          transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
      
        <div className="shrink-0 px-5 py-5 border-b border-gray-100 flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src={laurienPhoto}
              alt="Coach Laurien"
              className="w-10 h-10 rounded-full object-cover object-top border-2 border-champagne/40 shadow-md shadow-navy/30"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div>
         
            <p className="text-[10px] text-gray-400 mt-0.5">Coach Laurien</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto text-gray-400 hover:text-gray-600 lg:hidden"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        
        <nav className="flex-1 py-4 px-3 flex flex-col gap-0.5">
          {TABS.map((tab) => {
            const Icon = tab.Icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                  ${active
                    ? "bg-navy/8 text-navy shadow-sm"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 transition-colors duration-200 ${active ? "text-champagne" : "text-gray-400"}`}
                />
                <div className="min-w-0">
                  <p className={`leading-none truncate ${active ? "font-semibold text-gray-900" : "font-medium"}`}>
                    {tab.label}
                  </p>
                  <p className={`text-[10px] mt-0.5 leading-none truncate ${active ? "text-gray-500" : "text-gray-400"}`}>
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

    
        <div className="shrink-0 px-4 py-4 border-t border-gray-100 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-navy transition-colors duration-200 font-medium"
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            Preview Live Site
          </a>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-400 hover:text-red-500 transition-colors duration-200 font-medium"
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

     
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

 
        <header className="shrink-0 bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-900 transition"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {ActiveIcon && (
              <ActiveIcon className="w-4 h-4 text-navy shrink-0" />
            )}
            <div>
              <h1 className="text-base font-bold text-gray-900 leading-none">
                {activeTabData?.label}
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">{activeTabData?.desc}</p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 hover:text-navy font-medium transition"
            >
              <ExternalLink className="w-3 h-3" />
              Preview Site
            </a>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 hover:text-red-600 transition"
            >
              <LogOut className="w-3 h-3" />
              Sign Out
            </button>
          </div>
        </header>

    
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-2xl w-full mx-auto pb-24">
            {renderEditor()}
          </div>
        </main>
      </div>
    </div>
  );
}
