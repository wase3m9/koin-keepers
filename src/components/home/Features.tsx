
import { Shield, Calculator, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert HMRC Guidance",
      description: "Professional crypto tax advice from certified specialists who understand HMRC regulations for Bitcoin, Ethereum, and Cardano",
    },
    {
      icon: Calculator,
      title: "Accurate Tax Return Calculations",
      description: "Precise crypto tax computations following HMRC guidelines, ensuring your tax return is compliant and optimized",
    },
    {
      icon: Clock,
      title: "Time Saving Tax Services",
      description: "Focus on your cryptocurrency investments while we handle every step of your taxes and consultation needs",
    },
  ];

  return (
    <section aria-labelledby="features-heading" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 id="features-heading" className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Your Trusted Crypto Tax Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team of dedicated crypto tax specialists and accountants is here
            to guide you through every step of managing your cryptocurrency taxes
            and HMRC obligations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <motion.div 
                initial={{ rotate: -6 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6" 
                aria-hidden="true"
              >
                <motion.div
                  initial={{ rotate: 6 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-7 w-7 text-black" />
                </motion.div>
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
