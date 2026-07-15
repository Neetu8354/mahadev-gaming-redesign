import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Rahul S.", city: "Mumbai", text: "Got my ID in 2 minutes on WhatsApp. Withdrew ₹45,000 winnings the same evening to my UPI. Best site for IPL betting!" },
  { name: "Aman K.", city: "Delhi", text: "Been using Mahadev Book for 8 months. Andar Bahar and Teen Patti tables are smooth, dealers are great. 100% trustworthy." },
  { name: "Priya M.", city: "Bangalore", text: "Customer support replies instantly on WhatsApp. Deposits via UPI take seconds. Loving the casino bonuses!" },
  { name: "Vikram R.", city: "Pune", text: "T20 World Cup odds were the best on Mahadev Book. Made ₹1.2 lakh profit and got it in my bank within 10 minutes." },
];

export const Testimonials = () => (
  <section className="container py-16 md:py-24">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Player Reviews</div>
      <h2 className="text-3xl md:text-5xl font-display font-bold">
        Trusted by <span className="text-gradient-gold">10 Lakh+ Indians</span>
      </h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {REVIEWS.map((r, i) => (
        <div key={i} className="p-6 rounded-2xl bg-card border border-gold/20 shadow-card">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <p className="text-sm text-foreground/90 mb-4 italic">"{r.text}"</p>
          <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
              {r.name[0]}
            </div>
            <div>
              <div className="text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
