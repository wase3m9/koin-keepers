import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  keywords: string;
  description: string;
}

type BlogPosts = {
  [key: number]: BlogPost;
}

const blogPosts: BlogPosts = {
  1: {
    id: 1,
    title: "Understanding Cryptocurrency Tax Obligations in 2024",
    content: `
      <article class="space-y-8">
        <section>
          <h2 class="text-3xl font-bold mb-6">Why Cryptocurrency Tax Compliance Matters</h2>
          <p>As digital assets become mainstream, governments worldwide have tightened regulations to ensure fair taxation. In the UK, HM Revenue & Customs (HMRC) considers cryptocurrency as an asset, meaning transactions involving crypto can trigger taxable events. Ignoring these obligations could lead to fines, penalties, or even legal action. By understanding the rules, you can plan your investments more effectively and avoid unnecessary complications.</p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Key Cryptocurrency Taxable Events</h2>
          <p>In 2024, the following activities are considered taxable events for cryptocurrency in the UK:</p>

          <div class="space-y-4 mt-4">
            <div>
              <h3 class="text-2xl font-bold mb-2">Selling Cryptocurrency for Fiat Currency:</h3>
              <p>Any profit made from selling crypto for GBP, USD, or other fiat currencies is subject to Capital Gains Tax (CGT).</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Trading One Cryptocurrency for Another:</h3>
              <p>Swapping Bitcoin for Ethereum, for example, is a taxable event. The gain or loss is calculated based on the market value of the assets at the time of the transaction.</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Using Cryptocurrency to Purchase Goods or Services:</h3>
              <p>Spending crypto is also a disposal for tax purposes, and any gains made are subject to CGT.</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Earning Cryptocurrency:</h3>
              <p>Receiving cryptocurrency as payment for goods or services or through mining, staking, or airdrops is considered income and is subject to Income Tax.</p>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Gifting Cryptocurrency:</h3>
              <p>Gifting crypto to someone other than your spouse or civil partner can trigger CGT.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Key Tax Rates for Cryptocurrency in the UK</h2>
          <p>Understanding the applicable tax rates is essential for calculating your obligations:</p>

          <div class="space-y-4 mt-4">
            <div>
              <h3 class="text-2xl font-bold mb-2">Capital Gains Tax (CGT):</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Basic rate taxpayers: 10%</li>
                <li>Higher rate taxpayers: 20%</li>
                <li>Annual tax-free allowance: £6,000 for 2024 (down from £12,300 in 2023)</li>
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold mb-2">Income Tax:</h3>
              <p>Taxed at your marginal rate (20%, 40%, or 45%) based on total income, including crypto earnings.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">How to Calculate Cryptocurrency Taxes</h2>
          <h3 class="text-2xl font-bold mb-2">Track Every Transaction:</h3>
          <p>Maintain detailed records of all crypto transactions, including dates, amounts, values in GBP, and purposes (e.g., trading, spending, receiving).</p>

          <h3 class="text-2xl font-bold mb-2">Calculate Gains or Losses:</h3>
          <p>Use the formula: Gain/Loss = Disposal Value - (Purchase Price + Allowable Costs)</p>

          <h3 class="text-2xl font-bold mb-2">Apply Tax-Free Allowances:</h3>
          <p>Deduct the annual CGT allowance (£6,000) from your total gains.</p>

          <h3 class="text-2xl font-bold mb-2">Report and Pay Taxes:</h3>
          <p>Include crypto gains and income in your Self Assessment tax return by the deadline (31 January 2025 for the 2023-24 tax year).</p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Failing to Report Transactions:</strong> HMRC has advanced tools to track unreported crypto gains, including data-sharing agreements with exchanges.</li>
            <li><strong>Incorrect Valuation:</strong> Always use the fair market value of crypto in GBP at the time of the transaction.</li>
            <li><strong>Neglecting to Claim Losses:</strong> If you've made losses, report them to offset against future gains or reduce your tax bill.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Tools and Resources for Crypto Tax Compliance</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Crypto Tax Calculators: Tools like Koinly, TaxBit, or Accointing can simplify tax calculations.</li>
            <li>Professional Advice: Consult with a tax advisor experienced in cryptocurrency to ensure accuracy.</li>
            <li>HMRC Guidance: Visit the HMRC website for the latest updates on crypto tax regulations.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Planning Ahead for 2024 and Beyond</h2>
          <p>Proactively managing your cryptocurrency taxes can save you time, money, and stress. Here are a few tips:</p>

          <h3 class="text-2xl font-bold mb-2">Use Tax-Efficient Strategies:</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Leverage the annual CGT allowance.</li>
            <li>Consider gifting to a spouse or civil partner to take advantage of their allowance.</li>
          </ul>

          <h3 class="text-2xl font-bold mb-2">Stay Updated:</h3>
          <p>Regulations are evolving. Keep an eye on updates from HMRC and other tax authorities.</p>

          <h3 class="text-2xl font-bold mb-2">Seek Expert Help:</h3>
          <p>Complex transactions like staking, DeFi, or NFTs may require professional advice.</p>
        </section>

        <section>
          <h2 class="text-3xl font-bold mb-6">Final Thoughts</h2>
          <p>Cryptocurrency taxation may seem daunting, but with the right knowledge and tools, it's manageable. By staying informed and compliant, you can focus on growing your portfolio without worrying about unexpected tax liabilities. If you're unsure about your obligations, don't hesitate to seek professional guidance to navigate the complexities of crypto taxes in 2024.</p>
        </section>
      </article>
    `,
    author: "John Smith",
    date: "March 15, 2024",
    category: "Tax Guide",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    keywords: "cryptocurrency tax 2024, UK crypto tax, HMRC crypto regulations, crypto tax compliance, cryptocurrency taxation guide",
    description: "Comprehensive guide to cryptocurrency tax obligations in 2024. Learn about UK tax regulations, rates, and compliance requirements for crypto investments."
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[parseInt(id)] : null;

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

  const publishDate = new Date(post.date).toISOString();

  return (
    <>
      <Helmet>
        <title>{`${post.title} | KoinKeepers Blog`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://koinkeepers.com/blog/${post.id}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Additional SEO Tags */}
        <link rel="canonical" href={`https://koinkeepers.com/blog/${post.id}`} />
        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />

        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "KoinKeepers",
              "logo": {
                "@type": "ImageObject",
                "url": "https://koinkeepers.com/logo.png"
              }
            },
            "datePublished": publishDate,
            "dateModified": publishDate,
            "description": post.description,
            "articleSection": post.category,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://koinkeepers.com/blog/${post.id}`
            }
          })}
        </script>
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
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <time dateTime={publishDate}>{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </header>
          
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="article-content space-y-6 prose-headings:font-bold prose-headings:text-gray-900 
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
              prose-li:text-gray-600 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-primary prose-a:hover:text-primary/80
              prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:pl-4 prose-blockquote:italic
              prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded"
          />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
