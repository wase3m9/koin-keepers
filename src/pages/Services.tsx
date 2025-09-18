
import { Helmet } from 'react-helmet-async';
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ServicesHeader } from "@/components/services/ServicesHeader";
import { ServiceList } from "@/components/services/ServiceList";
import { PricingSection } from "@/components/services/PricingSection";
import { FeaturesList } from "@/components/services/FeaturesList";
import { FAQPreview } from "@/components/services/FAQPreview";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/services" />
        <meta property="og:title" content="Cryptocurrency Tax Services | KoinKeepers London" />
        <meta property="og:description" content="Expert cryptocurrency tax services including tax preparation, planning, and HMRC compliance consultation from certified specialists in London." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/services" />
        <meta name="twitter:title" content="Cryptocurrency Tax Services | KoinKeepers London" />
        <meta name="twitter:description" content="Expert cryptocurrency tax services including tax preparation, planning, and HMRC compliance consultation from certified specialists in London." />
        <meta name="twitter:image" content="/favicon.ico" />
        
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <PageBreadcrumbs items={[{ label: "Services" }]} />
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
