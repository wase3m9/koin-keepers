
import { Helmet } from 'react-helmet-async';
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ServicesHeader } from "@/components/services/ServicesHeader";
import { ServiceList } from "@/components/services/ServiceList";
import { PricingSection } from "@/components/services/PricingSection";
import { FeaturesList } from "@/components/services/FeaturesList";
import { FAQPreview } from "@/components/services/FAQPreview";
import { getServiceSchema } from "@/components/services/ServicesSchema";

const Services = () => {
  const serviceSchema = getServiceSchema();
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://koin-keepers.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://koin-keepers.co.uk/services"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cryptocurrency Tax Services | KoinKeepers London</title>
        <meta name="description" content="Expert cryptocurrency tax services including tax preparation, planning, and HMRC compliance consultation from certified specialists in London." />
        <meta name="keywords" content="crypto tax service, cryptocurrency tax preparation, bitcoin tax planning, HMRC crypto compliance, crypto accountants London" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/services" />
        
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <ServicesHeader />
        <ServiceList />
        <PricingSection />
        <ProcessSteps />
        <FeaturesList />
        <FAQPreview />
      </div>
    </>
  );
};

export default Services;
