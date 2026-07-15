import { WHATSAPP_LINK } from "@/lib/links";

const ITEMS = [
  "🏏 IPL 2026 LIVE — Get Best Odds",
  "🎰 Teen Patti & Andar Bahar 24x7",
  "💰 Instant ₹ INR Withdrawal via UPI",
  "🎁 100% Welcome Bonus on First Deposit",
  "🔥 60,000+ Live Sports Events / Month",
  "📱 24x7 WhatsApp Support — Hindi & English",
];

export const TickerBar = () => (
  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
    className="block bg-gradient-gold text-primary-foreground py-2.5 overflow-hidden border-b border-gold-dark">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="mx-4 sm:mx-8 text-xs sm:text-sm font-bold tracking-wide">{item}</span>
      ))}
    </div>
  </a>
);
