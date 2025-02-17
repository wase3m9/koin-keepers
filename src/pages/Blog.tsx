
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FileText, Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const posts = Object.values(blogPosts);

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
        <meta property="og:image" content="https://koin-keepers.co.uk/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptocurrency Tax Blog | Expert Insights & Updates 2024" />
        <meta name="twitter:description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice." />
        <meta name="twitter:image" content="https://koin-keepers.co.uk/og-image.png" />
        <link rel="canonical" href="https://koin-keepers.co.uk/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KoinKeepers" />

        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>

      <div className="py-20 bg-gradient-to-b from-[#E5DEFF]/40 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Latest Crypto Tax Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest cryptocurrency tax news, regulations, and expert advice
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#9b87f5]/20"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#E5DEFF] bg-opacity-90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#6E59A5]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 hover:text-[#9b87f5] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-[#9b87f5] font-medium hover:text-[#7E69AB] transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-[#E5DEFF]/30 rounded-2xl p-8 text-center backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <FileText className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest crypto tax insights delivered straight to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#7E69AB] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
