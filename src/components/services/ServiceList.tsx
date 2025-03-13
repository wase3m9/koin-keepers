
import { Calculator, Receipt, ShieldCheck, LineChart, DollarSign, HeadphonesIcon } from 'lucide-react';
import { ServiceCard } from "@/components/services/ServiceCard";

export const ServiceList = () => {
  const services = [
    {
      title: "Tax Preparation",
      description: "Comprehensive cryptocurrency tax preparation services tailored to your portfolio.",
      icon: Receipt
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your crypto investments and minimize liabilities.",
      icon: Calculator
    },
    {
      title: "Compliance Services",
      description: "Stay compliant with all cryptocurrency tax regulations and requirements.",
      icon: ShieldCheck
    },
    {
      title: "Transaction Analysis",
      description: "Detailed analysis of your cryptocurrency transactions for accurate reporting.",
      icon: LineChart
    },
    {
      title: "Payment Solutions",
      description: "Flexible payment options for all our cryptocurrency tax services.",
      icon: DollarSign
    },
    {
      title: "Technical Support",
      description: "Expert technical support for all your cryptocurrency tax needs.",
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
