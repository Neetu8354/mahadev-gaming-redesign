import { WHATSAPP_LINK } from "@/lib/links";
import { Sparkles, Trophy } from "lucide-react";

export const CTABanner = () => (
  <section id="contact" className="container py-16 md:py-24">
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-gradient-to-br from-card via-background to-card p-6 sm:p-10 md:p-16 text-center">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial-gold blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-radial-gold blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wide uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Limited Welcome Offer
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Ready to <span className="text-gradient-gold">Win Big?</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Get your verified Mahadev Book ID in just 2 minutes. Deposit in ₹ Rupees, bet on cricket & casino, withdraw instantly. 24x7 WhatsApp support.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-bold text-base shadow-gold-lg hover:scale-105 transition-transform">
          <Trophy className="w-5 h-5" /> Claim My ID Now
        </a>
      </div>
    </div>
  </section>
);
