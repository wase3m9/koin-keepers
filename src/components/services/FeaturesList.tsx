import { Clock, FileText, Wallet, Users } from 'lucide-react';
import { motion } from "framer-motion";

export const FeaturesList = () => {
  const features = [
    {
      title: "Real-Time Updates",
      description: "Get instant updates on your crypto tax calculations as market values change.",
      icon: Clock
    },
    {
      title: "Audit Support",
      description: "Full documentation and support in case of tax authority audits.",
      icon: FileText
    },
    {
      title: "Multi-Wallet Support",
      description: "Connect and track multiple crypto wallets for comprehensive reporting.",
      icon: Wallet
    },
    {
      title: "Expert Consultation",
      description: "One-on-one sessions with crypto tax experts for personalized advice.",
      icon: Users
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
