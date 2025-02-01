import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { CryptoTickerBar } from "@/components/layout/CryptoTickerBar";
import { HeroPill } from "@/components/ui/hero-pill";

export const Hero = () => {
  return (
    <>
      <main className="relative py-20 sm:py-32 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 z-0 mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <HeroPill 
            href="/contact"
            announcement="🗓️ Reminder"
            label="UK Tax Return Deadline - 31st January 2024"
            className="mb-8"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            We Do Your Crypto Taxes For You
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow">
            No more tax software hassles or compliance headaches. We remove all the
            stress and uncertainty caused by constantly changing crypto tax
            regulations.
          </p>
          <Button asChild size="lg" className="animate-fade-in bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-xl">
            <Link to="/contact" aria-label="Book a consultation for crypto tax services">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </main>
      <CryptoTickerBar />
    </>
  );
};