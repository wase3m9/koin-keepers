import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FileText, Calendar, User, ArrowRight } from "lucide-react";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { blogPosts } from "../data/blogPosts";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = Object.values(blogPosts).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "KoinKeepers Cryptocurrency Tax Blog",
    "description": "Expert insights and updates on cryptocurrency taxation in the UK",
    "url": "https://koin-keepers.co.uk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "KoinKeepers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://koin-keepers.co.uk/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://koin-keepers.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://koin-keepers.co.uk/blog"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cryptocurrency Tax Blog | Expert Insights & Updates 2024 | KoinKeepers</title>
        <meta name="description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice. Get the latest insights on crypto taxation, DeFi, NFTs, and more from KoinKeepers experts." />
        <meta name="keywords" content="crypto tax blog, cryptocurrency taxation UK, crypto tax updates London, crypto tax advice UK, cryptocurrency tax guide 2024, HMRC crypto guidance" />
        <meta property="og:title" content="Cryptocurrency Tax Blog | Expert Insights & Updates 2024 | KoinKeepers" />
        <meta property="og:description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice. Get the latest insights on crypto taxation, DeFi, NFTs, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/blog" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptocurrency Tax Blog | Expert Insights & Updates 2024" />
        <meta name="twitter:description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice." />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="canonical" href="https://koin-keepers.co.uk/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KoinKeepers" />

        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageBreadcrumbs items={[{ label: "Blog" }]} />
      
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Latest Crypto Tax Insights
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Stay up to date with the latest cryptocurrency tax news, regulations, and expert advice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-secondary">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20 bg-secondary border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-8 sm:p-12"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Get the latest crypto tax insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-secondary font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
