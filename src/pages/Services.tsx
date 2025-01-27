import { Helmet } from 'react-helmet-async';
import { Receipt, Calculator, ShieldCheck, LineChart, CreditCard, HeadphonesIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Tax Preparation",
      description: "Comprehensive cryptocurrency tax preparation services tailored to your portfolio.",
      icon: <Receipt className="h-8 w-8 text-primary" />
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your crypto investments and minimize liabilities.",
      icon: <Calculator className="h-8 w-8 text-primary" />
    },
    {
      title: "Compliance Services",
      description: "Stay compliant with all cryptocurrency tax regulations and requirements.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />
    },
    {
      title: "Transaction Analysis",
      description: "Detailed analysis of your cryptocurrency transactions for accurate reporting.",
      icon: <LineChart className="h-8 w-8 text-primary" />
    },
    {
      title: "Payment Solutions",
      description: "Flexible payment options for all our cryptocurrency tax services.",
      icon: <CreditCard className="h-8 w-8 text-primary" />
    },
    {
      title: "Technical Support",
      description: "Expert technical support for all your cryptocurrency tax needs.",
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - CoinKeepers Tax Services</title>
        <meta name="description" content="Comprehensive cryptocurrency tax services including tax preparation, planning, and consultation." />
      </Helmet>
      
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border-2 border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-center mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;