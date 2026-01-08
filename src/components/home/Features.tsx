import { Shield, Calculator, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert HMRC Guidance",
      description: "Professional crypto tax advice from certified specialists who understand HMRC regulations for Bitcoin, Ethereum, and all major cryptocurrencies.",
      highlight: "Certified Experts"
    },
    {
      icon: Calculator,
      title: "Accurate Tax Calculations",
      description: "Precise crypto tax computations following HMRC guidelines, ensuring your tax return is fully compliant and optimized for your benefit.",
      highlight: "HMRC Compliant"
    },
    {
      icon: Clock,
      title: "Time Saving Services",
      description: "Focus on your cryptocurrency investments while we handle every step of your taxes, from consultation to final submission.",
      highlight: "Full Service"
    },
  ];

  return (
    <section aria-labelledby="features-heading" className="py-12 sm:py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] hidden sm:block">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-white/80">Why Choose Us</span>
          </div>
          <h2 id="features-heading" className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Your Trusted{" "}
            <span className="text-primary">Crypto Tax</span>{" "}
            Partner
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg px-2">
            Our dedicated team of crypto tax specialists guides you through every step of managing your cryptocurrency taxes and HMRC obligations.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative">
                  {/* Icon and highlight */}
                  <div className="flex items-start justify-between mb-6 sm:mb-8">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                      </div>
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 sm:mt-8 h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Clients Helped" },
            { value: "£10M+", label: "Tax Savings" },
            { value: "100%", label: "HMRC Compliant" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
