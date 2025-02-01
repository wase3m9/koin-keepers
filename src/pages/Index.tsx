import { Helmet } from 'react-helmet-async';
import { Hero } from "@/components/home/Hero";
import { CryptoTicker } from "@/components/home/CryptoTicker";
import { Features } from "@/components/home/Features";
import { QuickServices } from "@/components/home/QuickServices";
import { ClientStories } from "@/components/home/ClientStories";
import { Partners } from "@/components/home/Partners";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FAQ from "./FAQ";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>KoinKeepers - Professional Cryptocurrency Tax Services</title>
        <meta name="description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation, consultation, and compliance services." />
        <meta name="keywords" content="crypto tax, cryptocurrency tax, bitcoin tax, ethereum tax, crypto tax service, cryptocurrency accounting, crypto tax professional" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xrypto.com/" />
        <meta property="og:title" content="Xrypto - Professional Cryptocurrency Tax Services" />
        <meta property="og:description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation and compliance services." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xrypto.com/" />
        <meta property="twitter:title" content="Xrypto - Professional Cryptocurrency Tax Services" />
        <meta property="twitter:description" content="Expert cryptocurrency tax services. We handle your crypto taxes while you focus on trading. Professional tax preparation and compliance services." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://xrypto.com/" />
        
        {/* Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Xrypto",
            "description": "Expert cryptocurrency tax services and consultation",
            "image": "/og-image.png",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "UK"
            },
            "offers": {
              "@type": "Offer",
              "description": "Cryptocurrency Tax Services"
            }
          })}
        </script>
      </Helmet>
      <div className="animate-fade-in">
        <Hero />
        <CryptoTicker />
        <Features />
        <QuickServices />
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Easy 3 Step Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't let the complexities of cryptocurrency taxation overwhelm you. Let KoinKeepers be your trusted partner in navigating the crypto tax landscape.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-xl font-bold">STEP 01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">CONTACT</h3>
                <p className="text-gray-600">
                  Contact us today to book your free Crypto Tax review consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-xl font-bold">STEP 02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">CONFIRM</h3>
                <p className="text-gray-600">
                  Our tax advisors will help you complete new client onboarding process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-xl font-bold">STEP 03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">COMPLETE</h3>
                <p className="text-gray-600">
                  Sit back & relax. Once approved we will submit the tax return online to HMRC.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button 
                asChild 
                size="lg"
                className="bg-black text-yellow-400 hover:bg-black/90 rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link to="/contact">
                  GET STARTED TODAY TO STAY COMPLIANT AND SAFE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ClientStories />
        <Partners />
        <div className="space-y-2">
          <FAQ />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default Index;