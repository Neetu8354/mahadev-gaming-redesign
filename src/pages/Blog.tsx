import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TickerBar } from "@/components/TickerBar";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, BLOG_CATEGORIES, altFor } from "@/data/blogPosts";
import { Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Mahadev Book Blog",
      url: "https://www.mahadevbookbets.live/blog",
      description: "Expert guides on cricket betting, IPL strategy, live casino, Teen Patti, Andar Bahar and online betting in India.",
      publisher: { "@type": "Organization", name: "Mahadev Book", url: "https://www.mahadevbookbets.live" },
      blogPost: BLOG_POSTS.map(p => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://www.mahadevbookbets.live/blog/${p.slug}`,
        datePublished: p.publishedAt,
        dateModified: p.updatedAt,
        author: { "@type": "Organization", name: p.author },
        description: p.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mahadevbookbets.live/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mahadevbookbets.live/blog" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cricket Betting & Casino Blog India | Mahadev Book Guides & Tips"
        description="Expert guides on IPL betting, online cricket ID, Teen Patti, Andar Bahar, live casino, UPI deposits and winning strategy. India's top betting blog."
        canonical="/blog"
        jsonLd={jsonLd}
      />
      <TickerBar />
      <Header />
      <main className="container py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li className="mx-2">/</li>
            <li aria-current="page" className="text-gold">Blog</li>
          </ol>
        </nav>

        <header className="mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-4">
            Mahadev Book Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Expert guides on <strong className="text-gold">IPL betting</strong>, online cricket IDs, live casino strategy, Teen Patti, Andar Bahar, UPI payments and more — written by India's top tipsters and casino pros.
          </p>
        </header>

        <div className="flex flex-wrap gap-2 mb-10">
          {BLOG_CATEGORIES.map(cat => (
            <span key={cat} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gold/10 border border-gold/30 text-gold">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="group rounded-2xl overflow-hidden border border-gold/20 bg-card hover:border-gold/60 hover:shadow-gold transition-all">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.cover}
                    alt={altFor(post.cover)}
                    loading="lazy"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold font-bold">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readingTime} min</span>
                  </div>
                  <h2 className="font-display font-bold text-lg leading-snug group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
