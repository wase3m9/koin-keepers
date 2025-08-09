
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogHeader } from "../components/blog/BlogHeader";
import { BlogContent } from "../components/blog/BlogContent";
import { BlogArticleHeader } from "../components/blog/BlogArticleHeader";
import { BlogSocialShare } from "../components/blog/BlogSocialShare";
import { BlogNavigation } from "../components/blog/BlogNavigation";
import { blogPosts } from "../data/blogPosts";
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? blogPosts[parseInt(id)] : null;

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Helmet>
          <title>Article Not Found | KoinKeepers Blog</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/blog" className="text-primary hover:text-primary/80">
          Return to blog
        </Link>
      </div>
    );
  }

  const publishDate = new Date(post.date).toISOString();
  const currentUrl = `${window.location.origin}/blog/${id}`;
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": {
      "@type": "ImageObject",
      "url": post.image
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "KoinKeepers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://koin-keepers.co.uk/favicon.ico"
      }
    },
    "url": currentUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "articleSection": post.category,
    "keywords": post.keywords
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": currentUrl
      }
    ]
  };

  return (
    <>
      <BlogHeader
        title={post.title}
        description={post.description}
        keywords={post.keywords}
        image={post.image}
        author={post.author}
        date={post.date}
        publishDate={publishDate}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <BlogArticleHeader
            title={post.title}
            date={post.date}
            author={post.author}
            image={post.image}
          />
          
          <BlogContent content={post.content} />
          
          <BlogSocialShare title={post.title} url={currentUrl} />
          <BlogNavigation currentPostId={post.id} />
        </article>
      </div>
    </>
  );
};

export default BlogPost;
