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
  // Organization schema for the homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KoinKeepers",
    "alternateName": "KoinKeepers Crypto Tax Services",
    "description": "Leading cryptocurrency tax specialists providing expert consultation, tax preparation, and HMRC compliance services across the UK",
    "url": "https://koin-keepers.co.uk",
    "logo": "https://koin-keepers.co.uk/favicon.ico",
    "image": "https://koin-keepers.co.uk/favicon.ico",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "KoinKeepers Founding Team"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44 20 7118 9799",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "info@koin-keepers.co.uk",
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/koinkeepers",
      "https://twitter.com/koinkeepers"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cryptocurrency Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto Tax Consultation",
            "description": "Expert cryptocurrency tax advice and planning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Preparation",
            "description": "Professional crypto tax return preparation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HMRC Compliance",
            "description": "Ensure full compliance with UK tax regulations"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };

  // WebSite schema for search functionality
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KoinKeepers",
    "url": "https://koin-keepers.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://koin-keepers.co.uk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KoinKeepers",
    "description": "Expert cryptocurrency tax services and consultation in London, United Kingdom",
    "image": "https://koin-keepers.co.uk/favicon.ico",
    "url": "https://koin-keepers.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "United Kingdom"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "telephone": "+44 20 7118 9799",
    "email": "info@koin-keepers.co.uk",
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "priceRange": "££",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "serviceType": [
      "Cryptocurrency Tax Consultation",
      "Tax Planning",
      "HMRC Compliance"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Koin Keepers | Crypto Tax Accountants in London</title>
        <meta name="description" content="KoinKeepers - UK's leading cryptocurrency tax specialists based in London. Expert crypto tax consultation, HMRC compliance, and digital asset accounting for Bitcoin, Ethereum & all cryptocurrencies. Trusted by thousands of UK crypto investors." />
        <meta name="keywords" content="KoinKeepers, Koin Keepers, crypto tax UK, cryptocurrency tax specialists London, bitcoin tax advice UK, HMRC crypto compliance, crypto tax accountants London, digital asset tax services UK, crypto tax experts London" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://koin-keepers.co.uk/" />
        <meta name="author" content="KoinKeepers" />
        <meta name="copyright" content="KoinKeepers" />
        <meta name="brand" content="KoinKeepers" />
        <meta name="company" content="KoinKeepers" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="theme-color" content="#9b87f5" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/" />
        <meta property="og:title" content="KoinKeepers | Leading UK Cryptocurrency Tax Specialists" />
        <meta property="og:description" content="KoinKeepers - UK's leading cryptocurrency tax specialists based in London. Expert crypto tax consultation, HMRC compliance, and digital asset accounting services." />
        <meta property="og:image" content="https://koin-keepers.co.uk/favicon.ico" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="KoinKeepers" />
        <meta property="og:locale" content="en_GB" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koin-keepers.co.uk/" />
        <meta property="twitter:title" content="KoinKeepers | Leading UK Cryptocurrency Tax Specialists" />
        <meta property="twitter:description" content="KoinKeepers - UK's leading cryptocurrency tax specialists. Expert crypto tax consultation and HMRC compliance services in London." />
        <meta property="twitter:image" content="https://koin-keepers.co.uk/favicon.ico" />
        <meta property="twitter:site" content="@koinkeepers" />
        <meta property="twitter:creator" content="@koinkeepers" />

        <meta name="apple-mobile-web-app-title" content="KoinKeepers" />
        <meta name="application-name" content="KoinKeepers" />
        <meta name="msapplication-TileColor" content="#9b87f5" />

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
