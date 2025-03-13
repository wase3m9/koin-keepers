
import { Clock, FileText, Wallet, Users } from 'lucide-react';
import { FeatureCard } from "@/components/services/FeatureCard";

export const FeaturesList = () => {
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

  return (
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
  );
};
