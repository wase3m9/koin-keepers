import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

interface BlogNavigationProps {
  currentPostId: number;
}

export const BlogNavigation = ({ currentPostId }: BlogNavigationProps) => {
  const posts = Object.values(blogPosts).sort((a, b) => a.id - b.id);
  const currentIndex = posts.findIndex(post => post.id === currentPostId);
  
  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!previousPost && !nextPost) return null;

  return (
    <div className="border-t border-border pt-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {previousPost && (
          <Card className="p-6 hover:shadow-md transition-shadow">
            <Link to={`/blog/${previousPost.slug}`} className="block group">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Article</span>
              </div>
              <div className="flex gap-4">
                <img 
                  src={previousPost.image} 
                  alt={previousPost.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                    {previousPost.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                    {previousPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </Card>
        )}
        
        {nextPost && (
          <Card className="p-6 hover:shadow-md transition-shadow">
            <Link to={`/blog/${nextPost.slug}`} className="block group">
              <div className="flex items-center justify-end gap-2 text-muted-foreground text-sm mb-3">
                <span>Next Article</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 text-right">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                    {nextPost.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
                    {nextPost.excerpt}
                  </p>
                </div>
                <img 
                  src={nextPost.image} 
                  alt={nextPost.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
              </div>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
};