import { Header } from "@/components/Header";
import { TickerBar } from "@/components/TickerBar";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { GamesSection } from "@/components/GamesSection";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppChatbot } from "@/components/WhatsAppChatbot";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, altFor } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.mahadevbookbets.live/#organization",
      name: "Mahadev Book",
      url: "https://www.mahadevbookbets.live/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mahadevbookbets.live/favicon.png"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.mahadevbookbets.live/#website",
      url: "https://www.mahadevbookbets.live/",
      name: "Mahadev Book",
      publisher: { "@id": "https://www.mahadevbookbets.live/#organization" },
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is Mahadev Book?", acceptedAnswer: { "@type": "Answer", text: "Mahadev Book is India's most trusted online cricket betting and live casino ID provider with instant INR deposits & withdrawals via UPI." } },
        { "@type": "Question", name: "How do I get a Mahadev Book ID?", acceptedAnswer: { "@type": "Answer", text: "Click any 'Get ID' button to chat on WhatsApp. We provide your verified ID within 2 minutes, 24x7." } },
        { "@type": "Question", name: "Is Mahadev Book safe?", acceptedAnswer: { "@type": "Answer", text: "Yes — verified KYC, encrypted transactions, and 100% secure funds. Trusted by thousands of Indian players." } },
        { "@type": "Question", name: "What payment methods are supported?", acceptedAnswer: { "@type": "Answer", text: "UPI, PhonePe, Google Pay, Paytm, IMPS, NEFT and direct bank transfer — all in INR." } },
        { "@type": "Question", name: "How fast are withdrawals?", acceptedAnswer: { "@type": "Answer", text: "Most UPI withdrawals settle within 5–15 minutes, 24x7." } },
        { "@type": "Question", name: "What is the minimum deposit?", acceptedAnswer: { "@type": "Answer", text: "Just ₹100 — start small and scale as you go." } },
      ],
    },
  ];

  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Mahadev Book — Online Cricket Betting ID & Live Casino"
        description="Get your verified Mahadev Book ID instantly via WhatsApp. India's trusted online cricket betting & live casino with IPL 2026, Teen Patti, Andar Bahar. Instant UPI deposit & withdrawal in INR. 24x7 Hindi support."
        canonical="/"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <GamesSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTABanner />

        {/* Featured Blog Section — drives internal SEO juice */}
        <section className="container py-16 md:py-24" id="blog-preview">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">From the Blog</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Expert <span className="text-gradient-gold">Betting Guides</span> & Strategy
            </h2>
            <p className="text-muted-foreground mt-4">
              IPL 2026 tips, Teen Patti strategy, UPI payment guides — written by India's top betting and casino experts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={post.cover} alt={altFor(post.cover)} loading="lazy" width={600} height={338} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-gold">{post.category}</span>
                  <h3 className="font-display font-bold text-lg mt-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/40 text-gold font-bold hover:bg-gold/10 transition-all">
              Read all articles →
            </Link>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
