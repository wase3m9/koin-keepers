
import { Link } from "react-router-dom";
import { Shield, Calculator, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const QuickServices = () => {
  const services = [
    {
      icon: Calculator,
      title: "Crypto Tax Return Services",
      description: "Comprehensive tax return preparation for Bitcoin, Cardano, and all cryptocurrency transactions",
      color: "text-black"
    },
    {
      icon: Shield,
      title: "Bitcoin & Cardano Tax Review",
      description: "Expert review of your crypto taxes documentation and HMRC compliance consultation",
      color: "text-black"
    },
    {
      icon: Clock,
      title: "Tax Return Filing",
      description: "Professional preparation and filing with HMRC directly - every step handled for you",
      color: "text-black"
    },
    {
      icon: DollarSign,
      title: "Crypto Tax Consultation",
      description: "Strategic tax planning consultation and advice for cryptocurrency investors",
      color: "text-black"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Our Crypto Tax Services
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Link
                to="/services"
                className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
              >
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div 
                    initial={{ rotate: -6 }}
                    whileHover={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ rotate: 6 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="h-7 w-7 text-black" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
