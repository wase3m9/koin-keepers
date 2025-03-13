
import { PricingCard } from "@/components/services/PricingCard";

export const PricingSection = () => {
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
  );
};
