import { Shield, Calculator, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const SEOTextSection = () => {
  const features = [
    {
      icon: Shield,
      title: "HMRC Compliant",
      description: "Stay on the right side of UK tax law"
    },
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "Precise crypto gains & losses"
    },
    {
      icon: FileText,
      title: "Self Assessment",
      description: "Complete tax return handling"
    },
    {
      icon: Users,
      title: "UK-Wide Service",
      description: "London-based, serving all of UK"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-secondary via-secondary to-secondary/95 py-12 sm:py-20 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            Trusted Crypto Tax Experts
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            UK Crypto Tax Accountants You Can Trust
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Specialist accountants helping individuals and companies navigate cryptocurrency taxation
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content cards */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Expert Crypto Tax Support
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Navigating UK crypto tax can feel overwhelming, but it doesn't have to be. Whether you're dealing with 
              capital gains from selling Bitcoin, income from staking rewards, or complex DeFi transactions, our team 
              ensures you stay compliant with HMRC requirements.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We handle your Self Assessment tax returns from start to finish, calculating your crypto gains and losses 
              accurately. Our accountants understand the nuances of NFT taxation, liquidity pool rewards, and yield farming income.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Why Choose Koin Keepers?
            </h3>
            <ul className="space-y-3">
              {[
                "Specialist crypto tax accountants with deep HMRC knowledge",
                "Complete Self Assessment tax return handling",
                "Expert in DeFi, staking, NFTs & yield farming taxation",
                "Proper record keeping to stay compliant",
                "Based in London, serving clients across the UK"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOTextSection;
