import { ShieldCheck, Wallet, Headphones, Zap, Trophy, Users, Gift, Lock } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, title: "100% Safe & Verified", desc: "Verified betting IDs, KYC compliant, fully encrypted platform." },
  { icon: Wallet, title: "Instant ₹ INR Payouts", desc: "Deposit & withdraw via UPI, Paytm, IMPS, NEFT — under 5 minutes." },
  { icon: Headphones, title: "24x7 WhatsApp Support", desc: "Real human support around the clock on WhatsApp in Hindi & English." },
  { icon: Zap, title: "Live Odds, Live Action", desc: "60,000+ live cricket & sports events every month with best odds." },
  { icon: Trophy, title: "Big Welcome Bonus", desc: "Up to 100% welcome bonus on your first deposit. Refer & earn extra." },
  { icon: Users, title: "10 Lakh+ Happy Users", desc: "India's most trusted betting community with verified reviews." },
  { icon: Gift, title: "Daily Cashback", desc: "Loss-back cashback, weekly tournaments and VIP rewards." },
  { icon: Lock, title: "Anonymous Betting", desc: "Private ID via WhatsApp — your data stays 100% confidential." },
];

export const Features = () => (
  <section className="container py-16 md:py-24">
    <div className="text-center max-w-2xl mx-auto mb-14">
      <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Why Mahadev Book</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold">
        India's Most <span className="text-gradient-gold">Trusted Choice</span>
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {FEATURES.map((f, i) => (
        <div key={i} className="group relative p-6 rounded-2xl bg-card border border-gold/20 hover:border-gold/60 transition-all hover:-translate-y-1 shadow-card hover:shadow-gold">
          <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
            <f.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
