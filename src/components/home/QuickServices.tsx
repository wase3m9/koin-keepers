import { Link } from "react-router-dom";
import { Shield, Calculator, Clock, DollarSign } from "lucide-react";

export const QuickServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Crypto Tax Report",
      description: "Comprehensive reporting of your crypto transactions",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Crypto Tax Review",
      description: "Expert review of your crypto tax documentation",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Tax Return",
      description: "Professional preparation and filing",
      color: "text-purple-500"
    },
    {
      icon: DollarSign,
      title: "Tax Advisory",
      description: "Strategic tax planning and consultation",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="glass-card p-4 rounded-xl text-center transform transition-all duration-300 hover:scale-105 cursor-pointer hover-jiggle"
            >
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${service.color} bg-white/10 mb-3`}>
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{service.title}</h3>
              <p className="text-xs text-gray-500">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};