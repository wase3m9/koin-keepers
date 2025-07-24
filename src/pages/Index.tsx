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
  // LocalBusiness schema with more detailed information
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "KoinKeepers",
    "description": "Expert cryptocurrency tax services and consultation in London, United Kingdom",
    "image": "https://koin-keepers.co.uk/logo.png",
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
    "sameAs": [
      "https://twitter.com/koinkeepers",
      "https://www.linkedin.com/company/koinkeepers",
      "https://www.facebook.com/koinkeepers"
    ]
  };

  // Enhanced Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KoinKeepers",
    "description": "Expert cryptocurrency tax services and consultation in London, United Kingdom",
    "image": "https://koin-keepers.co.uk/logo.png",
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
    }
  };

  // Enhanced service schema with more offer details
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cryptocurrency Tax Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KoinKeepers",
      "url": "https://koin-keepers.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cryptocurrency Tax Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crypto Tax Return Preparation",
            "description": "Complete cryptocurrency tax return preparation and filing service"
          },
          "price": "299.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tax Consultation",
            "description": "Expert cryptocurrency tax consultation and planning"
          },
          "price": "399.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HMRC Compliance",
            "description": "Ensure full compliance with HMRC regulations for cryptocurrency"
          },
          "price": "349.00",
          "priceCurrency": "GBP"
        }
      ]
    }
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
        <meta property="og:image" content="/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koin-keepers.co.uk/" />
        <meta property="twitter:title" content="KoinKeepers – Crypto Tax Services for UK Investors & Traders" />
        <meta property="twitter:description" content="Got questions about crypto tax in the UK? Explore KoinKeepers' expert answers on reporting, HMRC rules, capital gains, and allowable expenses." />
        <meta property="twitter:image" content="/og-image.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
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
