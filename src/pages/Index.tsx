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
      "streetAddress": "123 Fintech Avenue",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "EC2A 4NE",
      "addressCountry": "GB"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-20-1234-5678",
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
      "streetAddress": "123 Fintech Avenue",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "EC2A 4NE",
      "addressCountry": "United Kingdom"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "telephone": "+44 20 1234 5678",
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
        <title>KoinKeepers - Expert Crypto Tax Services | UK Bitcoin & Digital Asset Tax Specialists</title>
        <meta name="description" content="Got questions about crypto tax in the UK? Explore KoinKeepers' expert answers on reporting, HMRC rules, capital gains, and allowable expenses." />
        <meta name="keywords" content="crypto tax London, cryptocurrency accountants, bitcoin tax advice, ethereum tax London, crypto tax service London, HMRC crypto compliance, cryptocurrency accounting UK, crypto tax experts" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://koin-keepers.co.uk/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/" />
        <meta property="og:title" content="KoinKeepers – Crypto Tax Services for UK Investors & Traders" />
        <meta property="og:description" content="Got questions about crypto tax in the UK? Explore KoinKeepers' expert answers on reporting, HMRC rules, capital gains, and allowable expenses." />
        <meta property="og:image" content="/favicon.ico" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koin-keepers.co.uk/" />
        <meta property="twitter:title" content="KoinKeepers – Crypto Tax Services for UK Investors & Traders" />
        <meta property="twitter:description" content="Got questions about crypto tax in the UK? Explore KoinKeepers' expert answers on reporting, HMRC rules, capital gains, and allowable expenses." />
        <meta property="twitter:image" content="/favicon.ico" />
        
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
