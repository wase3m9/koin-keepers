
import { Helmet } from 'react-helmet-async';
import { Calculator, Receipt, ShieldCheck, LineChart, DollarSign, HeadphonesIcon, Clock, FileText, Wallet, Users } from 'lucide-react';
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FeatureCard } from "@/components/services/FeatureCard";
import { PricingCard } from "@/components/services/PricingCard";
import { ServicesHeader } from "@/components/services/ServicesHeader";

const Services = () => {
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

  const features = [
    {
      title: "Real-Time Updates",
      description: "Get instant updates on your crypto tax calculations as market values change.",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Audit Support",
      description: "Full documentation and support in case of tax authority audits.",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Multi-Wallet Support",
      description: "Connect and track multiple crypto wallets for comprehensive reporting.",
      icon: <Wallet className="h-6 w-6 text-primary" />
    },
    {
      title: "Expert Consultation",
      description: "One-on-one sessions with crypto tax experts for personalized advice.",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "£299",
      description: "Perfect for beginners",
      features: [
        "Up to 100 transactions",
        "Basic tax reports",
        "Email support",
        "Annual filing"
      ]
    },
    {
      name: "Professional",
      price: "£399",
      description: "For active traders",
      features: [
        "Up to 1000 transactions",
        "Advanced tax reports",
        "Priority support",
        "Quarterly filing",
        "Audit assistance"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For institutions",
      features: [
        "Unlimited transactions",
        "Custom reports",
        "24/7 support",
        "Monthly filing",
        "Full audit support",
        "Dedicated manager"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - CoinKeepers Tax Services</title>
        <meta name="description" content="Comprehensive cryptocurrency tax services including tax preparation, planning, and consultation." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <ServicesHeader />

        {/* Services Grid */}
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

        {/* Pricing Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Features Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-gray-600 mb-8">Check out our frequently asked questions or contact our support team.</p>
            <div className="flex justify-center space-x-4">
              <a href="/faq" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                View FAQ
              </a>
              <a href="/contact" className="bg-black text-primary px-6 py-2 rounded-md hover:bg-black/90 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
