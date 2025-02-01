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
    <section aria-labelledby="features-heading" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl font-bold mb-4 text-black">
            Your Trusted Partner
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Our team of dedicated crypto tax specialists and accountants is here
            to guide you through every aspect of managing your cryptocurrency tax
            obligations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center space-y-4 transform transition-all duration-300 hover:scale-105 border-2 border-black"
            >
              <div className="w-12 h-12 mx-auto bg-[#FFD700] rounded-full flex items-center justify-center" aria-hidden="true">
                <feature.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
              <p className="text-black/80">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};