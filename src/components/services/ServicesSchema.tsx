
export const getServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cryptocurrency Tax Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "KoinKeepers",
      "url": "https://koin-keepers.co.uk"
    },
    "description": "Professional cryptocurrency tax preparation and advisory services in London, UK",
    "areaServed": "United Kingdom",
    "offers": {
      "@type": "AggregateOffer",
      "offers": [
        {
          "@type": "Offer",
          "name": "Tax Preparation",
          "description": "Comprehensive cryptocurrency tax preparation services tailored to your portfolio.",
          "price": "299.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "Tax Planning",
          "description": "Strategic tax planning to optimize your crypto investments and minimize liabilities.",
          "price": "399.00",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "Compliance Services",
          "description": "Stay compliant with all cryptocurrency tax regulations and requirements.",
          "price": "349.00",
          "priceCurrency": "GBP"
        }
      ]
    }
  };
};
