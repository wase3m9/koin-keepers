import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { FileText, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Tax Obligations in 2024",
      excerpt: "A comprehensive guide to navigating crypto tax regulations and requirements in the current year.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Tax Guide",
      image: "/lovable-uploads/0995fd32-f723-40d6-a337-dc17a750bbae.png",
      keywords: "cryptocurrency tax, crypto tax 2024, UK crypto tax, HMRC crypto",
      description: "Learn about cryptocurrency tax obligations in 2024, including key taxable events, rates, and compliance requirements for UK crypto investors."
    },
    {
      id: 2,
      title: "NFT Trading and Tax Implications",
      excerpt: "Learn about the tax implications of buying, selling, and trading NFTs in various jurisdictions.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "NFTs",
      image: "/lovable-uploads/0995fd32-f723-40d6-a337-dc17a750bbae.png",
      keywords: "NFT tax, NFT trading, cryptocurrency tax, crypto tax implications",
      description: "Explore the tax implications of NFT trading and how to navigate the complexities of NFT taxation."
    },
    {
      id: 3,
      title: "DeFi Taxation: What You Need to Know",
      excerpt: "Exploring the complex world of DeFi taxation, including yield farming, liquidity pools, and more.",
      author: "Michael Brown",
      date: "March 5, 2024",
      category: "DeFi",
      image: "/lovable-uploads/0995fd32-f723-40d6-a337-dc17a750bbae.png",
      keywords: "DeFi tax, decentralized finance taxation, crypto tax, yield farming",
      description: "Understand the taxation of DeFi activities and how to comply with regulations in the evolving crypto landscape."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cryptocurrency Tax Blog | Expert Insights & Updates 2024 | KoinKeepers</title>
        <meta name="description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice. Get the latest insights on crypto taxation, DeFi, NFTs, and more." />
        <meta name="keywords" content="crypto tax blog, cryptocurrency taxation, crypto tax updates, crypto tax advice, cryptocurrency tax guide" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Cryptocurrency Tax Blog | Expert Insights & Updates 2024" />
        <meta property="og:description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice. Get the latest insights on crypto taxation, DeFi, NFTs, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koinkeepers.com/blog" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cryptocurrency Tax Blog | Expert Insights & Updates 2024" />
        <meta name="twitter:description" content="Stay informed about cryptocurrency tax regulations, compliance updates, and expert advice." />
        <meta name="twitter:image" content="/og-image.png" />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href="https://koinkeepers.com/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KoinKeepers" />
      </Helmet>

      <div className="py-20 bg-[#FEF7CD]/40 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Latest Crypto Tax Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest cryptocurrency tax news, regulations, and expert advice
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-[#E5DEFF]/60 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                aria-label={`Read more about ${post.title}`}
              >
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-20 bg-[#E5DEFF]/40 rounded-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest crypto tax insights delivered straight to your inbox.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blog;
