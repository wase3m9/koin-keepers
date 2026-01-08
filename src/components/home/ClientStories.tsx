import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export const ClientStories = () => {
  const testimonials = [
    {
      quote: "CryptoTaxPro made my first crypto tax return easy and painless. Their team understood every aspect of my portfolio and saved me thousands in taxes!",
      author: "Jane T.",
      location: "London",
      type: "Individual Investor",
      rating: 5
    },
    {
      quote: "The most knowledgeable crypto tax experts I've worked with. Highly recommend to anyone navigating DeFi or NFT taxes.",
      author: "Peter S.",
      location: "Manchester",
      type: "DeFi Trader",
      rating: 5
    },
    {
      quote: "Outstanding service! They helped me understand my tax obligations for my mining operations and kept everything compliant.",
      author: "Michael R.",
      location: "Birmingham",
      type: "Crypto Miner",
      rating: 5
    },
    {
      quote: "Their expertise in international crypto taxation saved me from potential compliance issues. Excellent service!",
      author: "Sarah K.",
      location: "Edinburgh",
      type: "International Trader",
      rating: 5
    },
    {
      quote: "The team's understanding of complex DeFi protocols is impressive. They handled my yield farming taxes perfectly.",
      author: "David M.",
      location: "Leeds",
      type: "DeFi Enthusiast",
      rating: 5
    },
    {
      quote: "Professional, responsive, and thorough. They made tax season stress-free for my crypto investments.",
      author: "Emma W.",
      location: "Bristol",
      type: "Long-term Investor",
      rating: 5
    },
    {
      quote: "Exceptional guidance through the complexities of NFT trading taxes. Couldn't be happier with their service!",
      author: "James H.",
      location: "Glasgow",
      type: "NFT Collector",
      rating: 5
    },
    {
      quote: "Their proactive tax planning advice helped me optimize my crypto portfolio for better returns.",
      author: "Sophie L.",
      location: "Cardiff",
      type: "Portfolio Manager",
      rating: 5
    },
    {
      quote: "Brilliant service! They handled my complex staking rewards taxation with expertise and precision.",
      author: "Oliver P.",
      location: "Liverpool",
      type: "Staking Enthusiast",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-primary rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </motion.div>
        
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
        
        <div className="flex space-x-4 sm:space-x-6 animate-scroll">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-primary/30 p-5 sm:p-7 rounded-2xl min-w-[280px] max-w-[280px] sm:min-w-[350px] sm:max-w-[350px] flex flex-col gap-4 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30" />
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-white/10">
                <p className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs sm:text-sm text-primary">{testimonial.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
