import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Calculator = () => {
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [salePrice, setSalePrice] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<string>('');
  const [saleDate, setSaleDate] = useState<string>('');
  const [annualIncome, setAnnualIncome] = useState<string>('');
  const [calculatedTax, setCalculatedTax] = useState<number | null>(null);

  const calculateTax = () => {
    const purchase = parseFloat(purchasePrice);
    const sale = parseFloat(salePrice);
    const income = parseFloat(annualIncome);

    if (isNaN(purchase) || isNaN(sale) || isNaN(income)) {
      toast.error("Please enter valid numbers for all fields");
      return;
    }

    const gain = sale - purchase;
    
    const basicRateThreshold = 50270;
    const basicRateTax = 0.10;
    const higherRateTax = 0.20;
    
    let taxAmount = 0;
    
    if (income <= basicRateThreshold) {
      taxAmount = gain * basicRateTax;
    } else {
      taxAmount = gain * higherRateTax;
    }

    setCalculatedTax(taxAmount);
    toast.success("Tax calculated successfully!");
  };

  return (
    <>
      <Helmet>
        <title>Crypto Tax Calculator | KoinKeepers</title>
        <meta name="description" content="Calculate your cryptocurrency capital gains tax easily with our UK tax calculator." />
      </Helmet>
      
      <div className="min-h-screen py-12 bg-[#F2FCE2]/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
              <div className="text-center mb-8">
                <CalculatorIcon className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-3xl font-bold">Crypto Tax Calculator 2024/25</h1>
                <p className="text-gray-600 mt-2">Calculate your cryptocurrency capital gains tax</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="purchasePrice">Purchase Price (£)</Label>
                    <Input
                      id="purchasePrice"
                      type="number"
                      placeholder="0.00"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salePrice">Sale Price (£)</Label>
                    <Input
                      id="salePrice"
                      type="number"
                      placeholder="0.00"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purchaseDate">Purchase Date</Label>
                    <Input
                      id="purchaseDate"
                      type="date"
                      value={purchaseDate}
                      onChange={(e) => setPurchaseDate(e.target.value)}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="saleDate">Sale Date</Label>
                    <Input
                      id="saleDate"
                      type="date"
                      value={saleDate}
                      onChange={(e) => setSaleDate(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualIncome">Annual Income (£)</Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    placeholder="Enter your annual income"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(e.target.value)}
                    className="bg-white"
                  />
                </div>

                <Button 
                  onClick={calculateTax}
                  className="w-full bg-primary text-black hover:bg-primary/90"
                >
                  Calculate Tax
                </Button>

                {calculatedTax !== null && (
                  <div className="mt-6 p-4 bg-[#FEF7CD]/60 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Estimated Capital Gains Tax:</h3>
                    <p className="text-2xl font-bold">£{calculatedTax.toFixed(2)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">About Capital Gains Tax</h2>
              <p className="text-gray-600 mb-6">
                Calculate your capital gains tax liability for various assets including residential property, commercial property, shares, and cryptocurrency. Our calculator uses the latest HMRC rates and allowances for 2024/25.
              </p>

              <div className="bg-[#FEF7CD]/40 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Current Tax Rates (2024/25)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Basic rate taxpayers: 10% (18% for residential property)</li>
                  <li>• Higher rate taxpayers: 20% (28% for residential property)</li>
                  <li>• Annual exempt amount: £6,000</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Capital Gains Tax?</AccordionTrigger>
                  <AccordionContent>
                    Capital Gains Tax (CGT) is a tax on the profit when you sell an asset that has increased in value. It's the gain you make that's taxed, not the amount of money you receive.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How is Capital Gains Tax calculated in the UK?</AccordionTrigger>
                  <AccordionContent>
                    CGT is calculated by subtracting the purchase price from the sale price, considering allowable deductions. The rate depends on your income tax band and the type of asset.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;