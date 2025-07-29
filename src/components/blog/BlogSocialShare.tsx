import { Share2, Twitter, Facebook, Linkedin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface BlogSocialShareProps {
  title: string;
  url: string;
}

export const BlogSocialShare = ({ title, url }: BlogSocialShareProps) => {
  const { toast } = useToast();
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  return (
    <div className="border-t border-border pt-8 mt-12">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Share2 className="w-5 h-5" />
          <span className="font-medium">Share this article:</span>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareUrls.twitter, '_blank')}
            className="flex items-center gap-2"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareUrls.facebook, '_blank')}
            className="flex items-center gap-2"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareUrls.linkedin, '_blank')}
            className="flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
};