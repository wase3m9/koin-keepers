import { Link } from "react-router-dom";
import { Shield, Calculator, Clock, DollarSign } from "lucide-react";

export const QuickServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Crypto Tax Report",
      description: "Comprehensive reporting of your crypto transactions",
      color: "text-black"
    },
    {
      icon: Shield,
      title: "Crypto Tax Review",
      description: "Expert review of your crypto tax documentation",
      color: "text-black"
    },
    {
      icon: Clock,
      title: "Tax Return",
      description: "Professional preparation and filing",
      color: "text-black"
    },
    {
      icon: DollarSign,
      title: "Tax Advisory",
      description: "Strategic tax planning and consultation",
      color: "text-black"
    }
  ];

  return (
    <section className="py-12 bg-[#FFD700]/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center text-black">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/services"
              className="bg-white/90 backdrop-blur-sm p-4 rounded-xl text-center transform transition-all duration-300 hover:scale-105 cursor-pointer hover-jiggle border-2 border-black"
            >
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${service.color} bg-[#FFD700] mb-3`}>
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold mb-1 text-black">{service.title}</h3>
              <p className="text-xs text-black/70">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};