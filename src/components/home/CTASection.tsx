import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section aria-labelledby="cta-heading" className="py-16 sm:py-24 relative overflow-hidden bg-secondary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Free Consultation</span>
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          id="cta-heading" 
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white"
        >
          Ready to Simplify Your{" "}
          <span className="text-primary">Crypto Taxes</span>?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-lg"
        >
          Get started with a free crypto tax consultation and let us help you navigate your Bitcoin, Cardano, and cryptocurrency tax obligations with HMRC.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="group bg-primary text-secondary hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300"
          >
            <Link to="/contact" aria-label="Schedule your free crypto tax consultation">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
          <span className="text-gray-500 text-sm">No credit card required</span>
        </motion.div>
      </div>
    </section>
  );
};
