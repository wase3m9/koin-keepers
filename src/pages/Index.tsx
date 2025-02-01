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
        <title>Xrypto - Professional Cryptocurrency Tax Services</title>
        <meta name="description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation, consultation, and compliance services." />
        <meta name="keywords" content="crypto tax, cryptocurrency tax, bitcoin tax, ethereum tax, crypto tax service, cryptocurrency accounting, crypto tax professional" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xrypto.com/" />
        <meta property="og:title" content="Xrypto - Professional Cryptocurrency Tax Services" />
        <meta property="og:description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation and compliance services." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xrypto.com/" />
        <meta property="twitter:title" content="Xrypto - Professional Cryptocurrency Tax Services" />
        <meta property="twitter:description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation and compliance services." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://xrypto.com/" />
        
        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Xrypto",
            "description": "Expert cryptocurrency tax services and consultation",
            "image": "/og-image.png",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            },
            "offers": {
              "@type": "Offer",
              "description": "Cryptocurrency Tax Services"
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