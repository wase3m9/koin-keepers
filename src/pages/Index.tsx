import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Calculator, Clock, Bitcoin, Coins, DollarSign, Quote, FileText, BookOpen } from "lucide-react";
import FAQ from "./FAQ";
import NetworkBackground from "@/components/NetworkBackground";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0 mix-blend-overlay" />
        
        {/* Floating Glass Panels */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-20 w-72 h-72 animate-float-slow">
            <div className="glass-card p-6 rounded-2xl transform rotate-12 flex items-center gap-4">
              <Bitcoin className="w-12 h-12 text-orange-500" />
              <div className="text-left">
                <p className="font-bold text-white">Bitcoin</p>
                <p className="text-sm text-gray-300">Most Popular</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-40 -left-16 w-64 h-64 animate-float-medium">
            <div className="glass-card p-6 rounded-2xl transform -rotate-6 flex items-center gap-4">
              <Coins className="w-12 h-12 text-purple-500" />
              <div className="text-left">
                <p className="font-bold text-white">Ethereum</p>
                <p className="text-sm text-gray-300">Smart Contracts</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-32 w-60 h-60 animate-float-fast">
            <div className="glass-card p-6 rounded-2xl transform rotate-3 flex items-center gap-4">
              <DollarSign className="w-12 h-12 text-green-500" />
              <div className="text-left">
                <p className="font-bold text-white">Stablecoins</p>
                <p className="text-sm text-gray-300">USDT, USDC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            We Do Your Crypto Taxes For You
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No more tax software hassles or compliance headaches. We remove all the
            stress and uncertainty caused by constantly changing crypto tax
            regulations.
          </p>
          <Button asChild size="lg" className="animate-fade-in bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
            <Link to="/contact">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Crypto Ticker Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        {/* First row - Original direction */}
        <div className="flex gap-8 animate-scroll whitespace-nowrap mb-8">
          {[...Array(2)].map((_, i) => (
            <div key={`row1-${i}`} className="flex gap-8">
              {[
                { image: "/lovable-uploads/81eacbf3-1cdc-4827-b97c-22fd32b879e2.png", name: "Cardano" },
                { image: "/lovable-uploads/9ec99aa3-7760-42ba-81f9-19058794a47d.png", name: "Bitcoin" },
                { image: "/lovable-uploads/50f7c216-610e-487a-a729-139aa9fc4a34.png", name: "XRP" },
                { image: "/lovable-uploads/9c3765b8-51e2-40f0-b15d-e569deb03294.png", name: "USDC" },
                { image: "/lovable-uploads/d94d194e-f7e1-49ff-bb39-17e748b9e72b.png", name: "Hedera" },
                { image: "/lovable-uploads/4eb3248a-df60-4584-a615-e370ba34ad15.png", name: "Polygon" },
                { image: "/lovable-uploads/8847619e-dce7-47ef-8329-277976fd173c.png", name: "Ethereum" },
                { image: "/lovable-uploads/3b843ca0-7b7c-4458-9c4d-49f18fdfd1a1.png", name: "Solana" }
              ].map((crypto, index) => (
                <div
                  key={`row1-${i}-${index}`}
                  className={`glass-card p-4 rounded-xl min-w-[120px] flex flex-col items-center justify-center gap-2 ${
                    index % 3 === 0 ? 'animate-float-slow' :
                    index % 3 === 1 ? 'animate-float-medium' :
                    'animate-float-fast'
                  }`}
                >
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm font-medium text-white">
                    {crypto.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Second row - Reverse direction */}
        <div className="flex gap-8 animate-scroll-reverse whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={`row2-${i}`} className="flex gap-8">
              {[
                { image: "/lovable-uploads/3b843ca0-7b7c-4458-9c4d-49f18fdfd1a1.png", name: "Solana" },
                { image: "/lovable-uploads/8847619e-dce7-47ef-8329-277976fd173c.png", name: "Ethereum" },
                { image: "/lovable-uploads/4eb3248a-df60-4584-a615-e370ba34ad15.png", name: "Polygon" },
                { image: "/lovable-uploads/d94d194e-f7e1-49ff-bb39-17e748b9e72b.png", name: "Hedera" },
                { image: "/lovable-uploads/9c3765b8-51e2-40f0-b15d-e569deb03294.png", name: "USDC" },
                { image: "/lovable-uploads/50f7c216-610e-487a-a729-139aa9fc4a34.png", name: "XRP" },
                { image: "/lovable-uploads/9ec99aa3-7760-42ba-81f9-19058794a47d.png", name: "Bitcoin" },
                { image: "/lovable-uploads/81eacbf3-1cdc-4827-b97c-22fd32b879e2.png", name: "Cardano" }
              ].map((crypto, index) => (
                <div
                  key={`row2-${i}-${index}`}
                  className={`glass-card p-4 rounded-xl min-w-[120px] flex flex-col items-center justify-center gap-2 ${
                    index % 3 === 0 ? 'animate-float-fast' :
                    index % 3 === 1 ? 'animate-float-medium' :
                    'animate-float-slow'
                  }`}
                >
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-sm font-medium text-white">
                    {crypto.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Your Trusted Partner Since 2017
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated crypto tax specialists and accountants is here
              to guide you through every aspect of managing your cryptocurrency tax
              obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expert Guidance",
                description:
                  "Professional advice from certified crypto tax specialists",
              },
              {
                icon: Calculator,
                title: "Accurate Calculations",
                description:
                  "Precise tax computations following HMRC guidelines",
              },
              {
                icon: Clock,
                title: "Time Saving",
                description:
                  "Focus on your investments while we handle the paperwork",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center space-y-4 transform transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-12 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

{[
  {
    icon: Calculator,
    title: "Crypto Tax Report",
    description: "Comprehensive reporting of your crypto transactions",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Crypto Tax Review",
    description: "Expert review of your crypto tax documentation",
    color: "text-green-500"
  },
  {
    icon: Clock,
    title: "Tax Return",
    description: "Professional preparation and filing",
    color: "text-purple-500"
  },
  {
    icon: DollarSign,
    title: "Tax Advisory",
    description: "Strategic tax planning and consultation",
    color: "text-orange-500"
  }
].map((service, index) => (
  <Link
    key={index}
    to="/services"
    className="glass-card p-4 rounded-xl text-center transform transition-all duration-300 hover:scale-105 cursor-pointer hover-jiggle"
  >
    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${service.color} bg-white/10 mb-3`}>
      <service.icon className="h-5 w-5" />
    </div>
    <h3 className="text-sm font-semibold mb-1">{service.title}</h3>
    <p className="text-xs text-gray-500">{service.description}</p>
  </Link>
))}

        </div>
      </section>

      {/* Client Stories Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            What Our Clients Say
          </h2>
          
          <div className="flex space-x-6 animate-scroll">
            {[
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
            ].map((testimonial, index) => (
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

      {/* Partners Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Partnered with
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="w-48 h-24 relative flex items-center justify-center transform transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/63cbe847-a138-490e-8d81-bec625ec428d.png"
                alt="CoinTracking"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-48 h-24 relative flex items-center justify-center transform transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/2f400325-9009-4b45-b977-50ed4c5a1b44.png"
                alt="Koinly"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-48 h-24 relative flex items-center justify-center transform transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/72ab391d-123f-465a-a81f-d506c774d874.png"
                alt="CoinTracker"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-48 h-24 relative flex items-center justify-center transform transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/1b3a283e-9141-4e90-ab54-60896cbc1edc.png"
                alt="New Partner"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none" />
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Ready to Simplify Your Crypto Taxes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and let us help you navigate your
            crypto tax obligations.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
            <Link to="/contact">
              Book Your Free Consultation{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;

