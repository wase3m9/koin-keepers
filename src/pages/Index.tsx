import { Helmet } from 'react-helmet-async';
import { Hero } from "@/components/home/Hero";
import SEOTextSection from "@/components/home/SEOTextSection";
import { CryptoTicker } from "@/components/home/CryptoTicker";
import { Features } from "@/components/home/Features";
import { QuickServices } from "@/components/home/QuickServices";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ClientStories } from "@/components/home/ClientStories";
import { Partners } from "@/components/home/Partners";
import { CTASection } from "@/components/home/CTASection";
import FAQ from "./FAQ";

// Check if we're on a staging domain
const isStaging = typeof window !== 'undefined' && window.location.hostname.includes('lovable.app');

const Index = () => {
  // Organization schema for the homepage - clean, no fake ratings
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Koin Keepers",
    "url": "https://koin-keepers.co.uk",
    "logo": "https://koin-keepers.co.uk/lovable-uploads/eac84a30-233a-4695-b152-b8f046c75f78.png",
    "description": "UK crypto tax accountants helping individuals and companies with Self Assessment, capital gains calculations, DeFi, staking and NFT taxation.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 20 7118 9799",
      "contactType": "customer service",
      "email": "info@koin-keepers.co.uk"
    },
    "sameAs": [
      "https://www.linkedin.com/company/koinkeepers",
      "https://twitter.com/koinkeepers"
    ]
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Koin Keepers",
    "url": "https://koin-keepers.co.uk"
  };

  // LocalBusiness schema - clean, no fake data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Koin Keepers",
    "description": "UK crypto tax accountants helping individuals and companies with Self Assessment, capital gains, DeFi, staking and NFT taxation.",
    "image": "https://koin-keepers.co.uk/lovable-uploads/eac84a30-233a-4695-b152-b8f046c75f78.png",
    "url": "https://koin-keepers.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "telephone": "+44 20 7118 9799",
    "email": "info@koin-keepers.co.uk",
    "priceRange": "££",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>Koin Keepers | Crypto Tax Accountants for UK Individuals & Companies</title>
        <meta name="description" content="UK crypto tax accountants. We help with Self Assessment, capital gains calculations, and crypto activity like DeFi, staking and NFTs. Book a call and get your crypto tax sorted." />
        <meta name="keywords" content="crypto tax UK, cryptocurrency accountant, Self Assessment crypto, capital gains crypto, DeFi tax, staking tax, NFT tax, HMRC crypto, Koin Keepers" />
        {isStaging ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://koin-keepers.co.uk/" />
        <meta name="author" content="Koin Keepers" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="theme-color" content="#9b87f5" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/" />
        <meta property="og:title" content="Koin Keepers | Crypto Tax Accountants for UK Individuals & Companies" />
        <meta property="og:description" content="UK crypto tax accountants. We help with Self Assessment, capital gains calculations, and crypto activity like DeFi, staking and NFTs. Book a call and get your crypto tax sorted." />
        <meta property="og:image" content="https://koin-keepers.co.uk/og-image.png" />
        <meta property="og:site_name" content="Koin Keepers" />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/" />
        <meta name="twitter:title" content="Koin Keepers | Crypto Tax Accountants for UK Individuals & Companies" />
        <meta name="twitter:description" content="UK crypto tax accountants. We help with Self Assessment, capital gains calculations, and crypto activity like DeFi, staking and NFTs." />
        <meta name="twitter:image" content="https://koin-keepers.co.uk/og-image.png" />

        <link rel="alternate" hrefLang="en-gb" href="https://koin-keepers.co.uk/" />
        <link rel="alternate" hrefLang="en" href="https://koin-keepers.co.uk/" />
        <link rel="alternate" hrefLang="x-default" href="https://koin-keepers.co.uk/" />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <div className="animate-fade-in">
        <Hero />
        <SEOTextSection />
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
