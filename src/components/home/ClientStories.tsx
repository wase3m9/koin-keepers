import { Quote } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
          What Our Clients Say
        </h2>
        
        <div className="flex space-x-6 animate-scroll">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl min-w-[350px] max-w-[350px] flex flex-col gap-4 transform transition-all duration-300 hover:scale-105 bg-gradient-to-br ${testimonial.bgColor}`}
            >
              <Quote className="w-10 h-10 text-primary/20" />
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-primary">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
