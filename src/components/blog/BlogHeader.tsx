
import { Helmet } from 'react-helmet-async';

interface BlogHeaderProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  author: string;
  date: string;
  publishDate: string;
}

export const BlogHeader = ({ 
  title, 
  description, 
  keywords, 
  image, 
  author, 
  date,
  publishDate 
}: BlogHeaderProps) => {
  return (
    <Helmet>
      <title>{`${title} | KoinKeepers Blog`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://koin-keepers.co.uk/blog/${title.toLowerCase().replace(/ /g, '-')}`} />
      <meta property="og:image" content={image} />
      <meta property="article:published_time" content={publishDate} />
      <meta property="article:author" content={author} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={`https://koin-keepers.co.uk/blog/${title.toLowerCase().replace(/ /g, '-')}`} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "image": image,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "KoinKeepers",
            "logo": {
              "@type": "ImageObject",
              "url": "https://koin-keepers.co.uk/logo.png"
            }
          },
          "datePublished": publishDate,
          "dateModified": publishDate,
          "description": description,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://koin-keepers.co.uk/blog/${title.toLowerCase().replace(/ /g, '-')}`
          }
        })}
      </script>
    </Helmet>
  );
};
