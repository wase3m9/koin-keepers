import { Shield, Calculator, Clock } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert Guidance",
      description: "Professional advice from certified crypto tax specialists",
    },
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Precise tax computations following HMRC guidelines",
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Focus on your investments while we handle the paperwork",
    },
  ];

  return (
    <section className="py-20 bg-white/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Your Trusted Partner Since 2017
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of dedicated crypto tax specialists and accountants is here
            to guide you through every aspect of managing your cryptocurrency tax
            obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center space-y-4 transform transition-all duration-300 hover:scale-105"
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
  );
};