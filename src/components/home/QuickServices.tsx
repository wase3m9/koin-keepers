
import { Link } from "react-router-dom";
import { Shield, Calculator, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

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
      description: "Professional preparation and filing with HMRC directly",
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
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Our Services
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="hover-jiggle"
            >
              <Link
                to="/services"
                className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-black transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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
