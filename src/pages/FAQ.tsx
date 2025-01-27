import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-black">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do you handle cryptocurrency tax calculations?</AccordionTrigger>
          <AccordionContent>
            We use advanced tracking software combined with expert analysis to calculate your crypto taxes. This includes tracking trades, mining income, staking rewards, and DeFi transactions across multiple platforms and blockchains.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What information do I need to provide?</AccordionTrigger>
          <AccordionContent>
            You'll need to provide your exchange API keys or transaction history exports, wallet addresses, and any records of crypto-to-fiat conversions. We'll guide you through the exact requirements during our initial consultation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How do you handle DeFi and NFT transactions?</AccordionTrigger>
          <AccordionContent>
            We have specialized tools and expertise for DeFi protocols and NFT marketplaces. We track liquidity pools, yield farming, NFT trades, and other complex DeFi transactions to ensure accurate tax reporting.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What tax forms do you provide?</AccordionTrigger>
          <AccordionContent>
            We provide all necessary tax forms including Schedule D, Form 8949, and any other required documentation for crypto tax reporting. Our service includes both UK and international tax compliance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>How do you ensure accuracy?</AccordionTrigger>
          <AccordionContent>
            We employ a multi-step verification process, cross-referencing data from multiple sources and using industry-leading tax calculation methods. Our team of experts reviews each case to ensure compliance and accuracy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;