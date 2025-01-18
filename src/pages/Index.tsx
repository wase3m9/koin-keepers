import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Calculator, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            We Do Your Crypto Taxes For You
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No more tax software hassles or compliance headaches. We remove all the
            stress and uncertainty caused by constantly changing crypto tax
            regulations.
          </p>
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/contact">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Your Trusted Partner Since 2017
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated crypto tax specialists and accountants is here
              to guide you through every aspect of managing your cryptocurrency tax
              obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expert Guidance",
                description:
                  "Professional advice from certified crypto tax specialists",
              },
              {
                icon: Calculator,
                title: "Accurate Calculations",
                description:
                  "Precise tax computations following HMRC guidelines",
              },
              {
                icon: Clock,
                title: "Time Saving",
                description:
                  "Focus on your investments while we handle the paperwork",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Simplify Your Crypto Taxes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and let us help you navigate your
            crypto tax obligations.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Book Your Free Consultation{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;