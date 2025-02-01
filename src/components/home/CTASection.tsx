import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section aria-labelledby="cta-heading" className="py-20 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[#FEF7CD]/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 id="cta-heading" className="text-3xl font-bold mb-4 text-black">
          Ready to Simplify Your Crypto Taxes?
        </h2>
        <p className="text-black/80 mb-8 max-w-2xl mx-auto">
          Get started with a free consultation and let us help you navigate your
          crypto tax obligations.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-black text-primary hover:bg-black/90 border-2 border-black"
        >
          <Link to="/contact" aria-label="Schedule your free consultation">
            Book Your Free Consultation{" "}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
};