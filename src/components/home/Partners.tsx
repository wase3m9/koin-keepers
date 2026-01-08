import { motion } from "framer-motion";

export const Partners = () => {
  const partners = [
    {
      name: "CoinTracking",
      logo: "/lovable-uploads/63cbe847-a138-490e-8d81-bec625ec428d.png"
    },
    {
      name: "Koinly",
      logo: "/lovable-uploads/2f400325-9009-4b45-b977-50ed4c5a1b44.png"
    },
    {
      name: "CoinTracker",
      logo: "/lovable-uploads/72ab391d-123f-465a-a81f-d506c774d874.png"
    },
    {
      name: "New Partner",
      logo: "/lovable-uploads/1b3a283e-9141-4e90-ab54-60896cbc1edc.png"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-secondary relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs sm:text-sm text-primary uppercase tracking-widest font-medium mb-3 block">
            Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Meet Our Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We work with industry-leading platforms to provide you with the best crypto tax solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-28 hover:bg-white/10 hover:border-primary/20 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[80%] max-h-[60%] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
