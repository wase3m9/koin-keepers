import { motion } from "framer-motion";

export const ServicesHeader = () => {
  return (
    <section className="py-16 sm:py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bitcoin, Ethereum, and Cardano Tax Guidance
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive crypto tax solutions for all your cryptocurrency needs. From tax return preparation to HMRC consultation, we handle every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
