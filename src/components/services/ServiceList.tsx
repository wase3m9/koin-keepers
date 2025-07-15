
import { Calculator, Receipt, ShieldCheck, LineChart, DollarSign, HeadphonesIcon } from 'lucide-react';
import { ServiceCard } from "@/components/services/ServiceCard";

export const ServiceList = () => {
  const services = [
    {
      title: "Crypto Tax Return Preparation",
      description: "Comprehensive cryptocurrency tax return services tailored to your Bitcoin and Cardano portfolio.",
      icon: Receipt
    },
    {
      title: "Tax Planning Consultation",
      description: "Strategic crypto tax planning consultation to optimize your investments and minimize tax liabilities.",
      icon: Calculator
    },
    {
      title: "HMRC Compliance Services",
      description: "Stay compliant with all HMRC cryptocurrency tax regulations and requirements. Every step guided.",
      icon: ShieldCheck
    },
    {
      title: "Bitcoin & Cardano Analysis",
      description: "Detailed analysis of your Bitcoin and Cardano transactions for accurate tax return reporting.",
      icon: LineChart
    },
    {
      title: "Crypto Tax Payment Solutions",
      description: "Flexible payment options for all our cryptocurrency tax services and consultation packages.",
      icon: DollarSign
    },
    {
      title: "Technical Tax Support",
      description: "Expert technical support for all your cryptocurrency taxes needs and HMRC queries.",
      icon: HeadphonesIcon
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
