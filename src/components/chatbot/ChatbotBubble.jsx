import { useState, useEffect } from "react";
import { X, MessageCircle, Minimize2 } from "lucide-react";
import { useContent } from "../../context/ContentContext";
import defaultPhoto from "../../assets/laurien.jpeg";
import { CHATBASE_ID } from "../../data/siteData";

const IFRAME_SRC = `https://www.chatbase.co/chatbot-iframe/${CHATBASE_ID}`;

export default function ChatbotBubble() {
  const { content } = useContent();
  const laurienPhoto = content.profilePhoto || defaultPhoto;
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Lock body scroll on mobile when chat is open
  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobile, open]);

  const handleOpen = () => {
    setOpen(true);
    setHasOpened(true);
    setPulse(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* ── Mobile: full-screen overlay backdrop ── */}
      {isMobile && open && (
        <div
          className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}

      {/* ── Chat window ── */}
      <div
        className={`
          fixed z-50 transition-all duration-300
          ${isMobile
            /* Mobile: full width, slides up from bottom */
            ? `inset-x-0 bottom-0 rounded-t-2xl rounded-b-none
               ${open ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"}`
            /* Desktop: floating panel bottom-right */
            : `bottom-24 right-6 w-92.5 rounded-2xl origin-bottom-right
               ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`
          }
        `}
        style={{ filter: open && !isMobile ? "drop-shadow(0 25px 50px rgba(27,36,82,0.5))" : "none" }}
        role="dialog"
        aria-label="Chat with Coach Laurien AI"
        aria-modal="true"
      >
        <div className={`flex flex-col overflow-hidden border border-champagne/20 bg-navy ${isMobile ? "rounded-t-2xl" : "rounded-2xl"}`}>

          {/* ── Header ── */}
          <div className="relative bg-navy border-b border-champagne/10 px-4 py-3.5 flex items-center gap-3">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-champagne/60 via-champagne/25 to-transparent" />

            {/* Drag handle — mobile only */}
            {isMobile && (
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-champagne/20" />
            )}

            {/* Photo */}
            <div className="relative shrink-0">
              <img
                src={laurienPhoto}
                alt="Coach Laurien"
                className="w-9 h-9 rounded-full object-cover object-top border-2 border-champagne/40"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-navy" />
            </div>

            {/* Identity */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-champagne leading-none font-display">
                Coach Laurien
              </p>
              <p className="text-[10px] text-offwhite/40 mt-1 leading-none uppercase tracking-widest">
                AI Assistant · Online
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 shrink-0">
              {!isMobile && (
                <button
                  onClick={handleClose}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-offwhite/40 hover:text-champagne hover:bg-champagne/10 transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={handleClose}
                className="w-7 h-7 flex items-center justify-center rounded-full text-offwhite/40 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ── Chat iframe ── */}
          <div
            className="relative bg-navy"
            style={{ height: isMobile ? "calc(85vh - 64px)" : "480px" }}
          >
            {/* Loading skeleton */}
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy">
                <div className="relative w-12 h-12">
                  <img
                    src={laurienPhoto}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-champagne/30 opacity-60"
                  />
                  <span className="absolute inset-0 rounded-full border-2 border-champagne/40 animate-ping" />
                </div>
                <p className="text-xs text-offwhite/30 tracking-wide">Starting conversation…</p>
              </div>
            )}

            {hasOpened && (
              <iframe
                src={IFRAME_SRC}
                title="Chat with Coach Laurien"
                onLoad={() => setLoaded(true)}
                className="w-full h-full border-0"
                allow="microphone"
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Floating trigger button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Greeting tooltip */}
        {!hasOpened && !open && (
          <div className="mr-1 mb-1 flex items-center gap-2 bg-navy border border-champagne/20 rounded-2xl rounded-br-sm px-4 py-2.5 shadow-xl shadow-navy/50 animate-fade-in">
            <img
              src={laurienPhoto}
              alt=""
              className="w-6 h-6 rounded-full object-cover object-top border border-champagne/40 shrink-0"
            />
            <p className="text-xs text-offwhite/70 leading-snug whitespace-nowrap font-display italic">
              Ask me anything ✦
            </p>
          </div>
        )}

        <button
          onClick={open ? handleClose : handleOpen}
          className="relative w-14 h-14 rounded-full bg-champagne text-navy flex items-center justify-center shadow-2xl shadow-navy/60 hover:bg-champagne-light transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-navy"
          aria-label={open ? "Close chat" : "Open chat"}
          aria-expanded={open}
        >
          {pulse && !open && (
            <span className="absolute inset-0 rounded-full bg-champagne/50 animate-ping" />
          )}

          <span className={`transition-all duration-200 ${open ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
            {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          </span>

          {!hasOpened && (
            <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-navy" />
          )}
        </button>
      </div>
    </>
  );
}
