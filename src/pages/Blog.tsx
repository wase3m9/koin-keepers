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
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    },
    {
      id: 2,
      title: "NFT Trading and Tax Implications",
      excerpt: "Learn about the tax implications of buying, selling, and trading NFTs in various jurisdictions.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "NFTs",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28",
    },
    {
      id: 3,
      title: "DeFi Taxation: What You Need to Know",
      excerpt: "Exploring the complex world of DeFi taxation, including yield farming, liquidity pools, and more.",
      author: "Michael Brown",
      date: "March 5, 2024",
      category: "DeFi",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Crypto Tax Blog - Latest Insights & Updates | KoinKeepers</title>
        <meta name="description" content="Stay informed about cryptocurrency tax regulations, tips, and best practices. Expert insights from our team of crypto tax specialists." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#E5DEFF]/20">
        {/* Hero Section */}
        <div className="text-center mb-16 bg-[#E5DEFF]/40 p-12 rounded-2xl">
          <h1 className="text-4xl font-bold mb-4">Latest Crypto Tax Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest cryptocurrency tax news, regulations, and expert advice.
          </p>
        </div>

        {/* Blog Grid */}
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
                    {post.date}
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
      </div>
    </>
  );
};

export default Blog;
