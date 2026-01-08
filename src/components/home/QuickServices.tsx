import { Link } from "react-router-dom";
import { Shield, Calculator, Clock, DollarSign, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const QuickServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Crypto Tax Return Services",
      description: "Comprehensive tax return preparation for Bitcoin, Cardano, and all cryptocurrency transactions",
      highlight: "Most Popular"
    },
    {
      icon: Shield,
      title: "Bitcoin & Cardano Tax Review",
      description: "Expert review of your crypto taxes documentation and HMRC compliance consultation",
      highlight: "Expert Review"
    },
    {
      icon: Clock,
      title: "Tax Return Filing",
      description: "Professional preparation and filing with HMRC directly - every step handled for you",
      highlight: "Full Service"
    },
    {
      icon: DollarSign,
      title: "Crypto Tax Consultation",
      description: "Strategic tax planning consultation and advice for cryptocurrency investors",
      highlight: "Planning"
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Crypto Tax Services
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/services"
                className="group block h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-primary/30 transition-all duration-500"
              >
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <span className="inline-flex items-center text-xs sm:text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
