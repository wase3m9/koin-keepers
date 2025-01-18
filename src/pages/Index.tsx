import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Calculator, Clock, Bitcoin, Coins, DollarSign, Quote } from "lucide-react";
import FAQ from "./FAQ";
import NetworkBackground from "@/components/NetworkBackground";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section with Network Background */}
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
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8">
              {[
                { image: "/lovable-uploads/0dd84793-7ce1-45d2-a054-ea3890053c13.png", name: "Bitcoin" },
                { image: "/lovable-uploads/abd357f3-6a74-48d0-8314-36d68c9e9e60.png", name: "Ethereum" },
                { image: "/lovable-uploads/2767dcee-eac0-446e-8d21-f4fd14a728d7.png", name: "XRP" },
                { image: "/lovable-uploads/11d87f3d-718f-42fd-b498-65fbc9948924.png", name: "Binance" },
                { image: "/lovable-uploads/8a8b90bb-d2ab-4bfb-a961-df8eb2b75e8c.png", name: "USDC" },
                { image: "/lovable-uploads/2ac69fff-6946-4ab1-8910-40c3a47e06b2.png", name: "Hedera" },
                { image: "/lovable-uploads/8bdb43ff-a1b6-45f9-ac65-b4d0b8f4a477.png", name: "Polygon" },
                { image: "/lovable-uploads/1e57ce5b-236a-4864-a6f7-e7ab535f6e96.png", name: "Cardano" }
              ].map((crypto, index) => (
                <div
                  key={`${i}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[120px]"
                >
                  <img 
                    src={crypto.image} 
                    alt={crypto.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="mt-2 text-sm font-medium text-gray-600">
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
                type: "Individual Investor"
              },
              {
                quote: "The most knowledgeable crypto tax experts I've worked with. Highly recommend to anyone navigating DeFi or NFT taxes.",
                author: "Peter S.",
                location: "Manchester",
                type: "DeFi Trader"
              },
              {
                quote: "Outstanding service! They helped me understand my tax obligations for my mining operations and kept everything compliant.",
                author: "Michael R.",
                location: "Birmingham",
                type: "Crypto Miner"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl min-w-[350px] max-w-[350px] flex flex-col gap-4 transform transition-all duration-300 hover:scale-105"
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
                src="/lovable-uploads/6d5cc718-dcf7-45c4-aedc-5531bd68ca06.png"
                alt="QuickBooks"
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
