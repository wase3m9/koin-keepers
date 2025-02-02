import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// This would typically come from an API or database
const blogPosts = {
  1: {
    title: "Understanding Cryptocurrency Tax Obligations in 2024",
    content: `
      <h2>Introduction</h2>
      <p>As we move further into 2024, cryptocurrency taxation continues to evolve and become more complex. This comprehensive guide will help you understand your crypto tax obligations and how to stay compliant with current regulations.</p>

      <h2>Key Changes in 2024</h2>
      <p>The cryptocurrency tax landscape has seen several significant changes in 2024. Tax authorities worldwide have implemented more stringent reporting requirements and enhanced their ability to track crypto transactions.</p>

      <h2>Basic Tax Principles</h2>
      <p>Cryptocurrency is generally treated as property for tax purposes. This means that any gains or losses from trading, selling, or using cryptocurrency are subject to capital gains tax rules.</p>

      <h2>What Triggers a Taxable Event?</h2>
      <ul>
        <li>Selling cryptocurrency for fiat currency</li>
        <li>Trading one cryptocurrency for another</li>
        <li>Using cryptocurrency to purchase goods or services</li>
        <li>Receiving cryptocurrency as payment for goods or services</li>
        <li>Mining cryptocurrency</li>
      </ul>

      <h2>Record Keeping Requirements</h2>
      <p>Maintaining detailed records of your cryptocurrency transactions is crucial. You should keep track of:</p>
      <ul>
        <li>Date of acquisition</li>
        <li>Purchase price and fees</li>
        <li>Date of disposal</li>
        <li>Sale price and fees</li>
        <li>The type of transaction</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding and complying with cryptocurrency tax obligations is essential to avoid penalties and legal issues. If you're unsure about your tax obligations, consider consulting with a cryptocurrency tax specialist.</p>
    `,
    author: "John Smith",
    date: "March 15, 2024",
    category: "Tax Guide",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="text-primary hover:text-primary/80">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | KoinKeepers Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </>
  );
};

export default BlogPost;