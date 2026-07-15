import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";
import { SEO } from "@/components/SEO";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { WHATSAPP_LINK } from "@/lib/links";
import { MessageCircle, Clock, Globe, Shield } from "lucide-react";

const Contact = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Mahadev Book",
      url: "https://mahadevbookbets.live/contact",
      description: "Contact Mahadev Book on WhatsApp 24x7 in Hindi and English. Get your online cricket betting ID, deposit, withdrawal & support instantly.",
      mainEntity: {
        "@type": "Organization",
        name: "Mahadev Book",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            availableLanguage: ["English", "Hindi"],
            url: "https://wa.link/reddyanna_",
            areaServed: "IN",
            hoursAvailable: "Mo-Su 00:00-23:59",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookbets.live/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://mahadevbookbets.live/contact" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Mahadev Book — 24x7 WhatsApp Support India | Get Cricket ID Online"
        description="Contact Mahadev Book on WhatsApp 24x7 in Hindi & English. Get your online cricket betting ID, deposit, withdrawal & support instantly. Average response under 60 seconds."
        canonical="/contact"
        keywords="mahadev book contact, mahadev book whatsapp, mahadev book support, get cricket id online, online betting id support india"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main className="container py-10 md:py-16 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span> <span className="text-gold">Contact</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-4">Contact Mahadev Book</h1>
          <p className="text-lg text-muted-foreground">
            The fastest way to <strong className="text-gold">get your Mahadev Book ID online</strong>, deposit in INR, withdraw via UPI, or get support is WhatsApp. Average response time: <strong className="text-gold">under 60 seconds</strong>, 24x7 in Hindi & English.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="rounded-2xl border-2 border-gold/40 p-7 bg-card hover:border-gold hover:shadow-gold transition-all group">
            <MessageCircle className="w-10 h-10 text-gold mb-4" />
            <h2 className="text-2xl font-display font-bold text-gradient-gold mb-2">WhatsApp Support</h2>
            <p className="text-sm text-muted-foreground mb-4">Get your ID, deposit, withdraw, or ask anything — instant reply.</p>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-bold text-sm shadow-gold group-hover:scale-105 transition-transform">
              Open WhatsApp →
            </span>
          </a>

          <div className="rounded-2xl border border-gold/20 p-7 bg-card space-y-4">
            <h2 className="text-2xl font-display font-bold text-gold">Support Hours</h2>
            <div className="flex items-start gap-3"><Clock className="w-5 h-5 text-gold mt-0.5" /> <div><strong>24 hours × 7 days</strong><div className="text-sm text-muted-foreground">No off-days, no holidays — including IPL nights.</div></div></div>
            <div className="flex items-start gap-3"><Globe className="w-5 h-5 text-gold mt-0.5" /> <div><strong>Languages</strong><div className="text-sm text-muted-foreground">हिंदी (Hindi) & English</div></div></div>
            <div className="flex items-start gap-3"><Shield className="w-5 h-5 text-gold mt-0.5" /> <div><strong>Verified India support team</strong><div className="text-sm text-muted-foreground">Real human agents — no bots, no scripts.</div></div></div>
          </div>
        </section>

        <section className="rounded-2xl border border-gold/20 p-7 bg-card">
          <h2 className="text-2xl font-display font-bold text-gold mb-4">What can our team help with?</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-foreground/90">
            <li>• <strong>Get a new Mahadev Book ID online</strong> in 2 minutes</li>
            <li>• <strong>Login Mahadev Book</strong> — password reset & recovery</li>
            <li>• <strong>UPI deposit</strong> via PhonePe / Google Pay / Paytm</li>
            <li>• <strong>Instant INR withdrawal</strong> to any Indian bank</li>
            <li>• Cricket bet placement help (IPL, T20, Test, ODI)</li>
            <li>• Live casino — Teen Patti, Andar Bahar, Roulette</li>
            <li>• Bonus claim & promo activation</li>
            <li>• Responsible-gaming limit setup</li>
          </ul>
        </section>

        <p className="mt-8 text-sm text-muted-foreground">
          New to Mahadev Book? Read our <Link to="/about" className="text-gold underline">About page</Link> or browse the <Link to="/blog" className="text-gold underline">guides blog</Link>.
        </p>
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Contact;
