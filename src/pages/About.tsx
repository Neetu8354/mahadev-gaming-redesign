import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";
import { SEO } from "@/components/SEO";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { WHATSAPP_LINK } from "@/lib/links";
import { ShieldCheck, Trophy, Zap, Users, Award, Headphones } from "lucide-react";

const About = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Mahadev Book",
      url: "https://mahadevbookbets.live/about",
      description: "Learn about Mahadev Book — India's most trusted online cricket betting & live casino ID provider since 2019.",
      mainEntity: {
        "@type": "Organization",
        name: "Mahadev Book",
        url: "https://mahadevbookbets.live/",
        foundingDate: "2019",
        areaServed: { "@type": "Country", name: "India" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookbets.live/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://mahadevbookbets.live/about" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Mahadev Book — India's #1 Online Cricket Betting ID Provider Since 2019"
        description="Mahadev Book has been India's most trusted online cricket betting & live casino ID provider since 2019. 12,000+ verified players, 24x7 WhatsApp support, instant UPI withdrawal in INR."
        canonical="/about"
        keywords="about mahadev book, mahadev book company, online cricket id provider india, trusted betting id, mahadev book history"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main className="container py-10 md:py-16 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-gold">About Us</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-4">About Mahadev Book</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Since <strong className="text-gold">2019</strong>, Mahadev Book has powered <strong className="text-gold">12,000+ Indian cricket fans</strong> with verified online betting IDs, instant UPI deposits in INR, and round-the-clock Hindi & English WhatsApp support.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: Users, k: "12,480+", v: "Active verified players" },
            { icon: Award, k: "4.9/5", v: "Average user rating" },
            { icon: Headphones, k: "24x7", v: "Hindi & English support" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-gold/20 p-6 bg-card">
              <s.icon className="w-7 h-7 text-gold mb-3" />
              <div className="text-3xl font-display font-bold text-gradient-gold">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </section>

        <section className="prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold">Our Story</h2>
          <p>
            Mahadev Book was founded in 2019 by a small team of cricket fans tired of unreliable online <strong>cricket ID providers</strong> who took deposits and disappeared. We built Mahadev Book on three rules: <strong>instant verified IDs</strong>, <strong>real INR withdrawals via UPI</strong>, and <strong>real humans on WhatsApp 24x7</strong>. Six years later, we are India's #1 trusted name for <Link to="/games/cricket" className="text-gold underline">online cricket betting</Link> and <Link to="/games/teen-patti" className="text-gold underline">live casino games</Link>.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold">Why Players Choose Mahadev Book</h2>
          <ul className="space-y-3">
            <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-1" /> <span><strong>100% safe and secure</strong> — encrypted transactions, KYC-verified accounts, zero data leaks.</span></li>
            <li className="flex gap-3"><Zap className="w-5 h-5 text-gold shrink-0 mt-1" /> <span><strong>Instant UPI deposit & withdrawal</strong> — most withdrawals settle in 5–15 minutes via PhonePe, Google Pay, Paytm.</span></li>
            <li className="flex gap-3"><Trophy className="w-5 h-5 text-gold shrink-0 mt-1" /> <span><strong>60,000+ live sports events / month</strong> — IPL 2026, T20 World Cup, BBL, PSL, every major cricket league.</span></li>
            <li className="flex gap-3"><Headphones className="w-5 h-5 text-gold shrink-0 mt-1" /> <span><strong>24x7 WhatsApp support</strong> in Hindi and English — average response under 60 seconds.</span></li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold">Responsible Betting</h2>
          <p>
            Mahadev Book is <strong>18+ only</strong>. We provide deposit-limit, cooling-off, and self-exclusion tools on request via WhatsApp. Bet only what you can afford to lose. If betting feels stressful, take a break — our support team will help you set limits or pause your account anytime.
          </p>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold">Get Started in 60 Seconds</h2>
          <p>
            Ready to join 12,000+ players? <Link to="/contact" className="text-gold underline">Contact us</Link> or message our team on WhatsApp now to <strong>get your Mahadev Book ID online instantly</strong>.
          </p>
        </section>

        <aside className="mt-12 p-8 rounded-2xl bg-gradient-gold-soft border border-gold/30 text-center">
          <h3 className="text-2xl font-display font-bold text-gradient-gold mb-3">Get your Mahadev Book ID now</h3>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all">
            Chat on WhatsApp
          </a>
        </aside>
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default About;
