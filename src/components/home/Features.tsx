
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
    <section aria-labelledby="features-heading" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="hover-jiggle bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center transform -rotate-6 mb-6" aria-hidden="true">
                <feature.icon className="h-7 w-7 text-black transform rotate-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
