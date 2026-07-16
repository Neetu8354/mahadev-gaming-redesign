import { Link, useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, altFor } from "@/data/blogPosts";
import { renderMarkdown } from "@/lib/markdown";
import { WHATSAPP_LINK } from "@/lib/links";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://mahadevbookbets.live/blog/${post.slug}`;
  const related = post.related.map(s => BLOG_POSTS.find(p => p.slug === s)).filter(Boolean);

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline: post.title,
      description: post.description,
      image: [`https://mahadevbookbets.live/og-image.jpg`],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Organization", name: post.author, url: "https://mahadevbookbets.live" },
      publisher: {
        "@type": "Organization",
        name: "Mahadev Book",
        logo: { "@type": "ImageObject", url: "https://mahadevbookbets.live/favicon.png" },
      },
      keywords: post.keywords,
      articleSection: post.category,
      wordCount: post.content.split(/\s+/).length,
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahadevbookbets.live/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://mahadevbookbets.live/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | Mahadev Book`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        author={post.author}
        ogImage="/og-image.jpg"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />

      <main className="container py-8 md:py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-gold">Blog</Link> <span className="mx-2">/</span>
          <span className="text-gold">{post.category}</span>
        </nav>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold font-bold">{post.category}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime} min read</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</time></span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gradient-gold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            <p className="text-sm text-muted-foreground mt-3">By <strong className="text-gold">{post.author}</strong></p>
          </header>

          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gold/20 mb-8 bg-muted">
            <img src={post.cover} alt={altFor(post.cover)} className="w-full h-full object-cover" loading="eager" fetchPriority="high" width={1280} height={720} />
          </div>

          <div className="prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gold/20">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faq.map((f, i) => (
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
          )}

          <aside className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-gold-soft border border-gold/30 text-center">
            <h3 className="text-xl md:text-2xl font-display font-bold text-gradient-gold mb-2">
              Ready to Get Your Mahadev Book ID?
            </h3>
            <p className="text-muted-foreground mb-5">Instant WhatsApp signup • UPI deposit ₹100 min • 24x7 support</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-bold shadow-gold hover:shadow-gold-lg hover:scale-105 transition-all">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </aside>

          {related.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gold/20">
              <h2 className="text-2xl font-display font-bold text-gold mb-6">Related Reading</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map(r => r && (
                  <Link key={r.slug} to={`/blog/${r.slug}`} className="group rounded-xl border border-gold/20 p-4 hover:border-gold/60 hover:bg-card transition-all">
                    <span className="text-xs text-gold font-bold">{r.category}</span>
                    <h3 className="font-display font-bold mt-1 group-hover:text-gold transition-colors line-clamp-2">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold">
              <ArrowLeft className="w-4 h-4" /> Back to all blog posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
