
import { ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  index: number;
}

export const PricingCard = ({ name, price, description, features, index }: PricingCardProps) => {
  return (
    <Card 
      className={`transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        index === 1 ? 'border-2 border-primary' : 'border border-gray-200'
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
        <div className="text-3xl font-bold text-center my-4">{price}</div>
        <CardDescription className="text-center mb-4">{description}</CardDescription>
        <ul className="space-y-3">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm">
              <ShieldCheck className="h-4 w-4 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardHeader>
    </Card>
  );
};
