
import { Helmet } from 'react-helmet-async';
import { Hero } from "@/components/home/Hero";
import { CryptoTicker } from "@/components/home/CryptoTicker";
import { Features } from "@/components/home/Features";
import { QuickServices } from "@/components/home/QuickServices";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ClientStories } from "@/components/home/ClientStories";
import { Partners } from "@/components/home/Partners";
import { CTASection } from "@/components/home/CTASection";
import FAQ from "./FAQ";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>KoinKeepers - Professional Cryptocurrency Tax Services London</title>
        <meta name="description" content="Expert cryptocurrency tax services in London. We handle your crypto taxes while you focus on trading. Professional tax preparation, consultation, and HMRC compliance services from our London office." />
        <meta name="keywords" content="crypto tax London, cryptocurrency tax London, bitcoin tax London, ethereum tax London, crypto tax service London, cryptocurrency accounting London, crypto tax professional London, HMRC crypto tax" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koinkeepers.co.uk/" />
        <meta property="og:title" content="KoinKeepers - Professional Cryptocurrency Tax Services London" />
        <meta property="og:description" content="Expert cryptocurrency tax services in London. We handle your crypto taxes while you focus on trading. Professional tax preparation and HMRC compliance services." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koinkeepers.co.uk/" />
        <meta property="twitter:title" content="KoinKeepers - Professional Cryptocurrency Tax Services London" />
        <meta property="twitter:description" content="Expert cryptocurrency tax services in London. We handle your crypto taxes while you focus on trading. Professional tax preparation and HMRC compliance services." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://koinkeepers.co.uk/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KoinKeepers",
            "description": "Expert cryptocurrency tax services and consultation in London",
            "image": "/og-image.png",
            "priceRange": "££",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressRegion": "London",
              "addressCountry": "UK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.5074",
              "longitude": "-0.1278"
            },
            "url": "https://koinkeepers.co.uk",
            "telephone": "",
            "areaServed": {
              "@type": "City",
              "name": "London"
            },
            "offers": {
              "@type": "Offer",
              "description": "Cryptocurrency Tax Services in London"
            }
          })}
        </script>
      </Helmet>
      <div className="animate-fade-in">
        <Hero />
        <CryptoTicker />
        <Features />
        <QuickServices />
        <ProcessSteps />
        <ClientStories />
        <Partners />
        <div className="space-y-2">
          <FAQ />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default Index;
