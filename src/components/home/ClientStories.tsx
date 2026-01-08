import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export const ClientStories = () => {
  const testimonials = [
    {
      quote: "CryptoTaxPro made my first crypto tax return easy and painless. Their team understood every aspect of my portfolio and saved me thousands in taxes!",
      author: "Jane T.",
      location: "London",
      type: "Individual Investor",
      bgColor: "from-orange-500/10 to-orange-500/5"
    },
    {
      quote: "The most knowledgeable crypto tax experts I've worked with. Highly recommend to anyone navigating DeFi or NFT taxes.",
      author: "Peter S.",
      location: "Manchester",
      type: "DeFi Trader",
      bgColor: "from-blue-500/10 to-blue-500/5"
    },
                {
                  quote: "Outstanding service! They helped me understand my tax obligations for my mining operations and kept everything compliant.",
                  author: "Michael R.",
                  location: "Birmingham",
                  type: "Crypto Miner",
                  bgColor: "from-purple-500/10 to-purple-500/5"
                },
                {
                  quote: "Their expertise in international crypto taxation saved me from potential compliance issues. Excellent service!",
                  author: "Sarah K.",
                  location: "Edinburgh",
                  type: "International Trader",
                  bgColor: "from-pink-500/10 to-pink-500/5"
                },
                {
                  quote: "The team's understanding of complex DeFi protocols is impressive. They handled my yield farming taxes perfectly.",
                  author: "David M.",
                  location: "Leeds",
                  type: "DeFi Enthusiast",
                  bgColor: "from-green-500/10 to-green-500/5"
                },
                {
                  quote: "Professional, responsive, and thorough. They made tax season stress-free for my crypto investments.",
                  author: "Emma W.",
                  location: "Bristol",
                  type: "Long-term Investor",
                  bgColor: "from-teal-500/10 to-teal-500/5"
                },
                {
                  quote: "Exceptional guidance through the complexities of NFT trading taxes. Couldn't be happier with their service!",
                  author: "James H.",
                  location: "Glasgow",
                  type: "NFT Collector",
                  bgColor: "from-indigo-500/10 to-indigo-500/5"
                },
                {
                  quote: "Their proactive tax planning advice helped me optimize my crypto portfolio for better returns.",
                  author: "Sophie L.",
                  location: "Cardiff",
                  type: "Portfolio Manager",
                  bgColor: "from-cyan-500/10 to-cyan-500/5"
                },
                {
                  quote: "Brilliant service! They handled my complex staking rewards taxation with expertise and precision.",
                  author: "Oliver P.",
                  location: "Liverpool",
                  type: "Staking Enthusiast",
                  bgColor: "from-rose-500/10 to-rose-500/5"
                }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-black"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="flex space-x-4 sm:space-x-6 animate-scroll">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-card p-5 sm:p-8 rounded-xl min-w-[280px] max-w-[280px] sm:min-w-[350px] sm:max-w-[350px] flex flex-col gap-3 sm:gap-4 bg-gradient-to-br ${testimonial.bgColor} shadow-lg transition-all duration-500`}
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              <p className="text-gray-800 text-sm sm:text-base">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-semibold text-black text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                <p className="text-xs sm:text-sm text-primary">{testimonial.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
