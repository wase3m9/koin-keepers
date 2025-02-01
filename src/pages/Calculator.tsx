import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
    
    // UK Tax rates for 2024/25
    const basicRateThreshold = 50270;
    const basicRateTax = 0.10; // 10% for basic rate
    const higherRateTax = 0.20; // 20% for higher rate
    
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
      
      <div className="min-h-screen py-12 bg-[#FEF7CD]/40">
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
        </div>
      </div>
    </>
  );
};

export default Calculator;