
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogHeader } from "../components/blog/BlogHeader";
import { BlogContent } from "../components/blog/BlogContent";
import { BlogArticleHeader } from "../components/blog/BlogArticleHeader";
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
        </article>
      </div>
    </>
  );
};

export default BlogPost;
