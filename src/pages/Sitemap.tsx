
import { Helmet } from 'react-helmet-async';
import { generateSitemap, downloadSitemap } from '@/utils/sitemap';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';

const Sitemap = () => {
  const sitemapContent = generateSitemap();
  
  const siteLinks = [
    { title: 'Home', url: '/', description: 'Main landing page with crypto tax services overview' },
    { title: 'Services', url: '/services', description: 'Detailed information about our crypto tax services' },
    { title: 'Blog', url: '/blog', description: 'Latest insights and updates on crypto taxation' },
    { title: 'FAQ', url: '/faq', description: 'Frequently asked questions about crypto taxes' },
    { title: 'Calculator', url: '/calculator', description: 'Capital gains tax calculator for crypto transactions' },
    { title: 'Contact', url: '/contact', description: 'Get in touch with our crypto tax experts' },
    { title: 'About', url: '/about', description: 'Learn more about KoinKeepers and our team' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | KoinKeepers</title>
        <meta name="description" content="Complete sitemap of KoinKeepers website pages and resources." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Website Sitemap</h1>
            <p className="text-gray-600 mb-8">
              Navigate through all pages and resources on KoinKeepers
            </p>
            <Button onClick={downloadSitemap} className="bg-primary text-black hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Download XML Sitemap
            </Button>
          </div>

          <div className="grid gap-6 mb-12">
            {siteLinks.map((link) => (
              <div key={link.url} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                    <p className="text-gray-600 mb-3">{link.description}</p>
                    <code className="text-sm bg-gray-200 px-2 py-1 rounded">
                      https://koin-keepers.co.uk{link.url}
                    </code>
                  </div>
                  <a
                    href={link.url}
                    className="ml-4 p-2 text-primary hover:text-primary/80"
                    aria-label={`Visit ${link.title} page`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">XML Sitemap Preview</h2>
            <pre className="bg-white p-4 rounded border overflow-x-auto text-sm">
              <code>{sitemapContent}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
