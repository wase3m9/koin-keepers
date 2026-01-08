import { Calculator, Receipt, ShieldCheck, LineChart, DollarSign, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

export const ServiceList = () => {
  const services = [
    {
      title: "Crypto Tax Return Preparation",
      description: "Comprehensive cryptocurrency tax return services tailored to your Bitcoin and Cardano portfolio.",
      icon: Receipt,
      highlight: "Most Popular"
    },
    {
      title: "Tax Planning Consultation",
      description: "Strategic crypto tax planning consultation to optimize your investments and minimize tax liabilities.",
      icon: Calculator,
      highlight: "Expert Advice"
    },
    {
      title: "HMRC Compliance Services",
      description: "Stay compliant with all HMRC cryptocurrency tax regulations and requirements. Every step guided.",
      icon: ShieldCheck,
      highlight: "Full Compliance"
    },
    {
      title: "Bitcoin & Cardano Analysis",
      description: "Detailed analysis of your Bitcoin and Cardano transactions for accurate tax return reporting.",
      icon: LineChart,
      highlight: "Deep Analysis"
    },
    {
      title: "Crypto Tax Payment Solutions",
      description: "Flexible payment options for all our cryptocurrency tax services and consultation packages.",
      icon: DollarSign,
      highlight: "Flexible"
    },
    {
      title: "Technical Tax Support",
      description: "Expert technical support for all your cryptocurrency taxes needs and HMRC queries.",
      icon: HeadphonesIcon,
      highlight: "24/7 Support"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Comprehensive Tax Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <span className="inline-flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
