
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
    "areaServed": "United Kingdom"
  };
};
