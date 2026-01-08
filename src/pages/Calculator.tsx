import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Calculator as CalculatorIcon, Sparkles, HelpCircle, TrendingUp, Shield, Clock, Coins } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Calculator = () => {
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [salePrice, setSalePrice] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<string>('');
  const [saleDate, setSaleDate] = useState<string>('');
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);
  const [taxYear, setTaxYear] = useState<string>('2025-2026');

  // Tax rates by year
  const taxRates = {
    '2025-2026': {
      basicRateThreshold: 50270,
      basicRate: 0.18,
      higherRate: 0.24,
      annualExemption: 3000,
      label: '2025/2026'
    },
    '2024-2025': {
      basicRateThreshold: 50270,
      basicRate: 0.10,
      higherRate: 0.20,
      annualExemption: 3000,
      label: '2024/2025'
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UK Crypto Tax Calculator 2025/2026",
    "description": "Free cryptocurrency capital gains tax calculator for UK residents. Calculate your crypto CGT liability for tax year 2025/2026 and 2024/2025.",
    "url": "https://koin-keepers.co.uk/calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "provider": {
      "@type": "Organization",
      "name": "KoinKeepers"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://koin-keepers.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tax Calculator",
        "item": "https://koin-keepers.co.uk/calculator"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Capital Gains Tax on cryptocurrency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Capital Gains Tax (CGT) is a tax on the profit when you sell or dispose of a cryptocurrency that has increased in value. In the UK, you pay CGT on gains above your annual tax-free allowance."
        }
      },
      {
        "@type": "Question",
        "name": "What are the crypto CGT rates for 2025/2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the 2025/2026 tax year, basic rate taxpayers pay 18% on crypto gains, while higher rate taxpayers pay 24%. The annual exempt amount is £3,000."
        }
      }
    ]
  };

  const calculateTax = () => {
    const purchase = parseFloat(purchasePrice);
    const sale = parseFloat(salePrice);
    const income = parseFloat(annualIncome);

    if (isNaN(purchase) || isNaN(sale) || isNaN(income)) {
      toast.error("Please enter valid numbers for all fields");
      return;
    }

    const rates = taxRates[taxYear as keyof typeof taxRates];
    const gain = sale - purchase;
    const taxableGain = Math.max(0, gain - rates.annualExemption);
    
    let taxAmount = 0;
    
    if (income <= rates.basicRateThreshold) {
      taxAmount = taxableGain * rates.basicRate;
    } else {
      taxAmount = taxableGain * rates.higherRate;
    }

    setCalculatedTax(Math.max(0, taxAmount));
    toast.success("Tax calculated successfully!");
  };

  const features = [
    { icon: Shield, title: "HMRC Compliant", desc: "Based on latest HMRC guidance" },
    { icon: Clock, title: "Instant Results", desc: "Get your estimate in seconds" },
    { icon: Coins, title: "All Cryptos", desc: "Works for any cryptocurrency" },
    { icon: TrendingUp, title: "Updated Rates", desc: "2025/2026 tax rates included" }
  ];

  return (
    <>
      <Helmet>
        <title>UK Crypto Tax Calculator 2025/2026 | Free CGT Calculator | KoinKeepers</title>
        <meta name="description" content="Calculate your UK cryptocurrency capital gains tax for 2025/2026 and 2024/2025 tax years. Free crypto CGT calculator with latest HMRC rates. Instant results for Bitcoin, Ethereum & all cryptos." />
        <meta name="keywords" content="crypto tax calculator UK 2025, capital gains tax crypto UK, HMRC crypto calculator, cryptocurrency CGT calculator, Bitcoin tax calculator UK, crypto tax 2025/2026, free crypto tax calculator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/calculator" />
        <meta property="og:title" content="UK Crypto Tax Calculator 2025/2026 | Free CGT Calculator" />
        <meta property="og:description" content="Calculate your UK cryptocurrency capital gains tax for 2025/2026 tax year. Free instant calculator with latest HMRC rates." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/calculator" />
        <meta name="twitter:title" content="UK Crypto Tax Calculator 2025/2026 | Free CGT Calculator" />
        <meta name="twitter:description" content="Calculate your UK cryptocurrency capital gains tax. Free instant calculator with latest HMRC rates." />
        <meta name="twitter:image" content="/favicon.ico" />
        
        <script type="application/ld+json">
          {JSON.stringify(webApplicationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <PageBreadcrumbs items={[{ label: "Tax Calculator" }]} />
      
      <div className="min-h-screen bg-secondary">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-10 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 sm:mb-6">
                <CalculatorIcon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/80">Free Calculator</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                UK Crypto <span className="text-primary">Tax Calculator</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">
                Calculate your cryptocurrency capital gains tax liability for the 2025/2026 or 2024/2025 tax year with our free HMRC-compliant calculator.
              </p>
            </motion.div>

            {/* Feature badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-medium">{feature.title}</p>
                    <p className="text-gray-500 text-[10px] sm:text-xs hidden sm:block">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Calculator Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50 rounded-2xl sm:rounded-3xl pointer-events-none" />
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-4">
                      <CalculatorIcon className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Calculate Your Crypto Tax</h2>
                    <p className="text-gray-400 text-sm">Enter your transaction details below</p>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    {/* Tax Year Selector */}
                    <div className="space-y-2">
                      <Label htmlFor="taxYear" className="text-gray-300 text-sm">Tax Year</Label>
                      <Select value={taxYear} onValueChange={setTaxYear}>
                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white focus:ring-primary/50">
                          <SelectValue placeholder="Select tax year" />
                        </SelectTrigger>
                        <SelectContent className="bg-secondary border-white/10">
                          <SelectItem value="2025-2026" className="text-white hover:bg-white/10">2025/2026 (Current)</SelectItem>
                          <SelectItem value="2024-2025" className="text-white hover:bg-white/10">2024/2025</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="purchasePrice" className="text-gray-300 text-sm">Purchase Price (£)</Label>
                        <Input
                          id="purchasePrice"
                          type="number"
                          placeholder="0.00"
                          value={purchasePrice}
                          onChange={(e) => setPurchasePrice(e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="salePrice" className="text-gray-300 text-sm">Sale Price (£)</Label>
                        <Input
                          id="salePrice"
                          type="number"
                          placeholder="0.00"
                          value={salePrice}
                          onChange={(e) => setSalePrice(e.target.value)}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="purchaseDate" className="text-gray-300 text-sm">Purchase Date</Label>
                        <Input
                          id="purchaseDate"
                          type="date"
                          value={purchaseDate}
                          onChange={(e) => setPurchaseDate(e.target.value)}
                          className="bg-white/5 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20 [color-scheme:dark]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="saleDate" className="text-gray-300 text-sm">Sale Date</Label>
                        <Input
                          id="saleDate"
                          type="date"
                          value={saleDate}
                          onChange={(e) => setSaleDate(e.target.value)}
                          className="bg-white/5 border-white/10 text-white focus:border-primary/50 focus:ring-primary/20 [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annualIncome" className="text-gray-300 text-sm">Annual Income (£)</Label>
                      <Input
                        id="annualIncome"
                        type="number"
                        placeholder="Enter your annual income"
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>

                    <Button 
                      onClick={calculateTax}
                      className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold py-6 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Calculate Tax
                    </Button>

                    {calculatedTax !== null && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-5 sm:p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-sm mb-1">Estimated Capital Gains Tax</p>
                            <p className="text-3xl sm:text-4xl font-bold text-primary">£{calculatedTax.toFixed(2)}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 text-xs">Tax Year</p>
                            <p className="text-white text-sm font-medium">{taxRates[taxYear as keyof typeof taxRates].label}</p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">
                          * This is an estimate only. Actual tax liability may vary based on your complete financial situation.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 sm:py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Understanding UK Crypto Capital Gains Tax</h2>
              <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                In the UK, cryptocurrency is treated as property for tax purposes. When you sell, trade, or dispose of crypto assets for a profit, you may be liable to pay Capital Gains Tax (CGT). Our calculator uses the latest HMRC guidelines to help you estimate your tax liability.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-5 sm:p-6 rounded-xl mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Current Tax Rates ({taxRates[taxYear as keyof typeof taxRates].label})
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Basic rate taxpayers: {(taxRates[taxYear as keyof typeof taxRates].basicRate * 100).toFixed(0)}%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Higher rate taxpayers: {(taxRates[taxYear as keyof typeof taxRates].higherRate * 100).toFixed(0)}%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Annual tax-free allowance: £{taxRates[taxYear as keyof typeof taxRates].annualExemption.toLocaleString()}
                  </li>
                </ul>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem value="item-1" className="bg-white/5 border border-white/10 rounded-xl px-5">
                  <AccordionTrigger className="text-white hover:text-primary text-left text-sm sm:text-base py-4">
                    What is Capital Gains Tax on cryptocurrency?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm pb-4">
                    Capital Gains Tax (CGT) is a tax on the profit when you sell or dispose of a cryptocurrency that has increased in value. In the UK, you pay CGT on gains above your annual tax-free allowance (£3,000 for 2025/2026). The tax applies when you sell crypto for fiat, trade one crypto for another, use crypto to buy goods/services, or gift crypto to someone other than your spouse.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-white/5 border border-white/10 rounded-xl px-5">
                  <AccordionTrigger className="text-white hover:text-primary text-left text-sm sm:text-base py-4">
                    How is cryptocurrency CGT calculated in the UK?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm pb-4">
                    CGT is calculated by subtracting your acquisition cost (what you paid) from your disposal proceeds (what you received). You can also deduct allowable costs like exchange fees. HMRC uses specific pooling rules for matching acquisitions to disposals, including the Same Day rule, Bed & Breakfast rule (30 days), and Section 104 pool.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-white/5 border border-white/10 rounded-xl px-5">
                  <AccordionTrigger className="text-white hover:text-primary text-left text-sm sm:text-base py-4">
                    When do I need to report crypto gains to HMRC?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm pb-4">
                    You must report your crypto gains if your total gains from all sources exceed £3,000 (for 2025/2026) or if your total disposal proceeds exceed £50,000. Even if you made a loss, reporting it can help offset future gains. The deadline is 31 January following the end of the tax year.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-white/5 border border-white/10 rounded-xl px-5">
                  <AccordionTrigger className="text-white hover:text-primary text-left text-sm sm:text-base py-4">
                    What crypto transactions are taxable in the UK?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm pb-4">
                    Taxable events include: selling crypto for GBP or other fiat currency, trading one cryptocurrency for another, using crypto to pay for goods or services, gifting crypto (except to spouse), and receiving airdrops or staking rewards (may be treated as income). Simply buying and holding crypto is not a taxable event.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="bg-white/5 border border-white/10 rounded-xl px-5">
                  <AccordionTrigger className="text-white hover:text-primary text-left text-sm sm:text-base py-4">
                    Can I reduce my crypto tax liability legally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm pb-4">
                    Yes, there are legal ways to reduce your crypto tax. You can use your annual CGT allowance, transfer assets to your spouse to utilize their allowance, harvest tax losses to offset gains, consider ISA or pension contributions, and keep detailed records of all transaction costs which can be deducted. We recommend consulting with a crypto tax specialist for personalized advice.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Help With Your Crypto Taxes?
              </h2>
              <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-xl mx-auto">
                Our expert team can help you navigate complex crypto tax situations and ensure full HMRC compliance.
              </p>
              <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 rounded-full px-8 py-6 font-semibold shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <a href="/contact">Get Expert Help</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Calculator;