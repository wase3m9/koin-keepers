
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { CryptoTickerBar } from "@/components/layout/CryptoTickerBar";
import { HeroPill } from "@/components/ui/hero-pill";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const deadline = new Date('2026-01-31T23:59:59');
      const now = new Date();
      const diffTime = deadline.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);
    };

    calculateDaysLeft();
    // Update every day
    const interval = setInterval(calculateDaysLeft, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
        <ParticleBackground />
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 z-0 mix-blend-multiply" 
        />
        
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center mb-4 sm:mb-8"
          >
            <HeroPill 
              href="/contact"
              announcement="🗓️ Tax Return Deadline"
              label={`${daysLeft} days until UK Tax Return (31 Jan 2026)`}
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white drop-shadow-lg px-2"
          >
            <span className="sr-only">KoinKeepers</span>
            Crypto Accountants - We Do Your Crypto Taxes For You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow px-2"
          >
            No more tax software hassles or compliance headaches. We remove all the
            stress and uncertainty caused by constantly changing crypto tax
            regulations. From Bitcoin to Cardano, we handle every step of your tax return.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/contact" aria-label="Book a crypto tax consultation">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      <CryptoTickerBar />
    </>
  );
};
