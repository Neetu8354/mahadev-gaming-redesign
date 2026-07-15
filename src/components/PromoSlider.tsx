import { useEffect, useState } from "react";
import promoCricket from "@/assets/promo-cricket.jpg";
import promoCasino from "@/assets/promo-casino.jpg";
import promoPayout from "@/assets/promo-payout.jpg";
import { WHATSAPP_LINK } from "@/lib/links";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    img: promoCricket,
    alt: "IPL 2026 cricket betting bonus on Mahadev Book India — claim now",
    eyebrow: "IPL 2026 Special",
    title: "Cricket Betting Bonus",
    subtitle: "Win up to ₹1,00,000 on every IPL match. Live odds on every ball.",
    cta: "Claim Bonus",
  },
  {
    img: promoCasino,
    alt: "Royale live casino India — Teen Patti Andar Bahar Roulette on Mahadev Book",
    eyebrow: "Live Casino",
    title: "Royale Live Casino",
    subtitle: "Teen Patti, Andar Bahar, Roulette & Blackjack with real dealers, 24x7.",
    cta: "Play Live Now",
  },
  {
    img: promoPayout,
    alt: "Instant UPI withdrawal in INR rupees — Mahadev Book betting India",
    eyebrow: "Instant Payouts",
    title: "Withdraw in ₹ Rupees",
    subtitle: "UPI, IMPS, NEFT, Paytm & Bank — instant deposit & withdrawal in INR.",
    cta: "Open Account",
  },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container py-8 sm:py-12">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/30 shadow-card aspect-[4/5] sm:aspect-[21/9] md:aspect-[21/8]">
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" width={1920} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-background via-background/80 sm:via-background/70 to-transparent" />
            <div className="absolute inset-0 flex items-end sm:items-center">
              <div className="container py-6 sm:py-0">
                <div className="max-w-lg space-y-2 sm:space-y-4">
                  <div className="text-gold text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase">{s.eyebrow}</div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-gradient-gold">{s.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/80">{s.subtitle}</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                    className="inline-flex px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base shadow-gold hover:scale-105 transition-transform">
                    {s.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prev} aria-label="Previous"
          className="absolute left-2 sm:left-4 top-1/3 sm:top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-background/60 border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-2 sm:right-4 top-1/3 sm:top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-background/60 border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-gold/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
