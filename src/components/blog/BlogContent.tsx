interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: content }}
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
  );
};