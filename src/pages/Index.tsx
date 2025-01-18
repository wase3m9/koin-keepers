import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Calculator, Clock, Bitcoin, Coins, DollarSign, Quote } from "lucide-react";
import FAQ from "./FAQ";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section with Floating Crypto Panels */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0" />
        
        {/* Floating Glass Panels */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-20 w-72 h-72 animate-float-slow">
            <div className="glass-card p-6 rounded-2xl transform rotate-12 flex items-center gap-4">
              <Bitcoin className="w-12 h-12 text-orange-500" />
              <div className="text-left">
                <p className="font-bold">Bitcoin</p>
                <p className="text-sm text-gray-600">Most Popular</p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-40 -left-16 w-64 h-64 animate-float-medium">
            <div className="glass-card p-6 rounded-2xl transform -rotate-6 flex items-center gap-4">
              <Coins className="w-12 h-12 text-purple-500" />
              <div className="text-left">
                <p className="font-bold">Ethereum</p>
                <p className="text-sm text-gray-600">Smart Contracts</p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-32 w-60 h-60 animate-float-fast">
            <div className="glass-card p-6 rounded-2xl transform rotate-3 flex items-center gap-4">
              <DollarSign className="w-12 h-12 text-green-500" />
              <div className="text-left">
                <p className="font-bold">Stablecoins</p>
                <p className="text-sm text-gray-600">USDT, USDC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            We Do Your Crypto Taxes For You
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
