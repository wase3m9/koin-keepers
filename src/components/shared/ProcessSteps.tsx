import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, UserCheck, CheckCircle, ArrowRight } from "lucide-react";

export const ProcessSteps = () => {
  const steps = [
    {
      step: "01",
      title: "Contact",
      subtitle: "Book a Call",
      description: "Schedule your free crypto tax consultation with our expert team.",
      icon: Phone
    },
    {
      step: "02",
      title: "Confirm",
      subtitle: "Get Onboarded",
      description: "We'll guide you through our seamless client onboarding process.",
      icon: UserCheck
    },
    {
      step: "03",
      title: "Complete",
      subtitle: "Relax & Done",
      description: "Sit back while we handle your tax return submission to HMRC.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
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
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Your Path to{" "}
            <span className="text-primary">Tax Compliance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
            Three simple steps to stress-free cryptocurrency taxation. Let us handle the complexity while you focus on what matters.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500">
                  {/* Step number badge */}
                  <div className="absolute -top-4 sm:-top-5 left-6 sm:left-8">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-secondary font-bold text-sm sm:text-base">{item.step}</span>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-end mb-6 sm:mb-8 mt-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-xs sm:text-sm text-primary font-medium mb-1">{item.subtitle}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>

                  {/* Arrow connector - mobile only */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 -mb-10">
                      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-500 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 sm:gap-3 bg-primary text-secondary px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:-translate-y-0.5"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
            Free consultation • No obligations • Expert guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};
