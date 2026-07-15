import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "@/lib/links";
import { MessageCircle, X } from "lucide-react";

const QUICK_REPLIES = [
  "How to get a Mahadev Book ID?",
  "What is the minimum deposit?",
  "How fast are withdrawals?",
  "Do you support UPI?",
];

export const WhatsAppChatbot = () => {
  const [open, setOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Pulsing button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
        {showBubble && !open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-card border border-gold/40 px-4 py-2.5 rounded-2xl rounded-br-sm shadow-card text-sm text-foreground max-w-[240px] hover:border-gold transition animate-float"
          >
            👋 Need a betting ID? Chat with us!
          </button>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label="Open WhatsApp chat"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform animate-pulse-whatsapp"
        >
          {open ? <X className="w-7 h-7" /> : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-gold/40 bg-card shadow-gold-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-whatsapp text-white px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm">Mahadev Book Support</div>
              <div className="text-xs opacity-90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Online · Replies instantly
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3 bg-background max-h-80 overflow-y-auto">
            <div className="bg-card border border-gold/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[85%]">
              👋 Hi! Welcome to Mahadev Book. How can we help you today?
            </div>
            <div className="bg-card border border-gold/20 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-[85%]">
              Tap a question below or chat with us directly on WhatsApp 👇
            </div>

            <div className="space-y-2 pt-2">
              {QUICK_REPLIES.map((q, i) => (
                <a
                  key={i}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm px-4 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-colors text-left"
                >
                  {q}
                </a>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-whatsapp text-white text-center font-bold py-3.5 hover:bg-whatsapp/90 transition-colors"
          >
            Open WhatsApp Chat →
          </a>
        </div>
      )}
    </>
  );
};
