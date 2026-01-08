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
    <section className="py-12 sm:py-20 bg-white/80 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <h3 className="text-primary uppercase tracking-wider font-medium mb-3 sm:mb-4 text-sm sm:text-base">
            Partnership
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Meet our partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Our company has been at the forefront of crypto tax solutions since 2020. 
            We work daily to become better and we are ready to share best practices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-28 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 relative flex items-center justify-center filter hover:brightness-75 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};