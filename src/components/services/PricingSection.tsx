import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "£299",
      period: "one-time",
      description: "Perfect for beginners with simple portfolios",
      features: [
        "Up to 100 transactions",
        "Basic tax reports",
        "Email support",
        "Annual filing assistance"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "£399",
      period: "one-time",
      description: "For active traders with complex needs",
      features: [
        "Up to 1000 transactions",
        "Advanced tax reports",
        "Priority support",
        "Quarterly filing",
        "Audit assistance"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored",
      description: "For institutions and high-volume traders",
      features: [
        "Unlimited transactions",
        "Custom reports",
        "24/7 dedicated support",
        "Monthly filing",
        "Full audit support",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Choose the plan that best fits your crypto tax needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-secondary text-xs font-semibold rounded-full">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-primary/5 border-primary/40 hover:border-primary/60' 
                  : 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] border-white/10 hover:border-primary/30'
              }`}>
                {/* Plan name */}
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period !== "tailored" && (
                    <span className="text-gray-400 text-sm ml-2">/ {plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-primary/20' : 'bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-white'}`} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-secondary hover:bg-primary/90 shadow-[0_0_20px_rgba(255,215,0,0.3)]'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
