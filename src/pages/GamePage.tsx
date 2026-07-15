import { Link, useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";
import { SEO } from "@/components/SEO";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { WHATSAPP_LINK } from "@/lib/links";
import { GAMES } from "@/data/games";
import { Trophy, Zap, ShieldCheck, MessageCircle } from "lucide-react";

const GamePage = () => {
  const { slug } = useParams();
  const game = GAMES.find(g => g.slug === slug);
  if (!game) return <Navigate to="/" replace />;

  const url = `https://mahadevbookbets.live/games/${game.slug}`;
  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: game.h1,
      url,
      description: game.description,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "Mahadev Book", url: "https://mahadevbookbets.live/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: game.h1,
      serviceType: game.category,
      provider: { "@type": "Organization", name: "Mahadev Book", url: "https://mahadevbookbets.live/" },
      areaServed: { "@type": "Country", name: "India" },
      description: game.description,
      offers: { "@type": "Offer", price: "100", priceCurrency: "INR", availability: "https://schema.org/InStock", url: WHATSAPP_LINK },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "2480" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookbets.live/" },
        { "@type": "ListItem", position: 2, name: "Games", item: "https://mahadevbookbets.live/games" },
        { "@type": "ListItem", position: 3, name: game.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: game.faq.map(f => ({
        "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={game.title}
        description={game.description}
        canonical={`/games/${game.slug}`}
        keywords={game.keywords}
        ogImage="/og-image.jpg"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main className="container py-10 md:py-16 max-w-5xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span>
          <span className="text-gold">{game.h1}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-4">{game.h1}</h1>
          <p className="text-lg text-muted-foreground">{game.intro}</p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:scale-105 transition-all">
              <Trophy className="w-5 h-5" /> Get {game.shortName} ID
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-gold/40 text-foreground font-semibold hover:bg-gold/10">
              <MessageCircle className="w-5 h-5 text-whatsapp" /> Chat on WhatsApp
            </a>
          </div>
        </header>

        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gold/20 mb-10 bg-muted">
          <img src={game.image} alt={game.alt} className="w-full h-full object-cover" loading="eager" width={1280} height={720} />
        </div>

        <section className="grid md:grid-cols-3 gap-5 mb-10">
          {game.features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gold/20 p-5 bg-card">
              <div className="text-gold font-bold text-lg mb-2">{f.title}</div>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </section>

        <section className="prose-invert max-w-none space-y-5 text-foreground/90 leading-relaxed">
          {game.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold mt-8 mb-3">{s.h2}</h2>
              <p>{s.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 pt-8 border-t border-gold/20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {game.faq.map((f, i) => (
              <details key={i} className="rounded-xl border border-gold/20 bg-card p-5 group">
                <summary className="cursor-pointer font-bold text-gold-light list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-gold group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-foreground/90 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="mt-12 p-8 rounded-2xl bg-gradient-gold-soft border border-gold/30 text-center">
          <h3 className="text-2xl font-display font-bold text-gradient-gold mb-3">Play {game.shortName} on Mahadev Book — 24x7</h3>
          <p className="text-muted-foreground mb-5">Instant ID via WhatsApp • UPI deposit ₹100 min • Fast INR withdrawal</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all">
            <MessageCircle className="w-5 h-5" /> Get Started on WhatsApp
          </a>
        </aside>

        <section className="mt-12 pt-8 border-t border-gold/20">
          <h2 className="text-xl font-display font-bold text-gold mb-4">Explore More Games</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {GAMES.filter(g => g.slug !== game.slug).slice(0, 3).map(g => (
              <Link key={g.slug} to={`/games/${g.slug}`} className="rounded-xl border border-gold/20 p-4 hover:border-gold/60 hover:bg-card transition-all">
                <span className="text-xs text-gold font-bold">{g.category}</span>
                <h3 className="font-display font-bold mt-1 hover:text-gold transition-colors">{g.shortName}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default GamePage;
