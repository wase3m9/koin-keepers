
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQPreview = () => {
  const commonQuestions = [
    {
      question: "What is crypto tax and how does it affect my Bitcoin investments?",
      answer: "Crypto tax refers to the taxation of profits made from trading or investing in cryptocurrencies like Bitcoin and Cardano. This includes capital gains tax on profits from selling cryptocurrencies and income tax on earnings from mining or staking. HMRC requires proper reporting on your tax return."
    },
    {
      question: "How do I report my Bitcoin and Cardano taxes to HMRC?",
      answer: "You report your crypto taxes by calculating your capital gains and losses from your Bitcoin and Cardano trades and reporting them on your tax return. It's important to keep accurate records of all your transactions. Our consultation can guide you through each step."
    },
    {
      question: "What happens if I don't report my crypto taxes to HMRC?",
      answer: "Failing to report your crypto taxes can result in penalties, fines, and interest on unpaid taxes. In severe cases, it could lead to legal action by HMRC. That's why proper consultation and tax return preparation is essential."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Common Crypto Tax Questions</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {commonQuestions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-8">Have more questions about crypto taxes? Check out our frequently asked questions or book a consultation with our support team.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/faq" className="bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              View All FAQs
            </Link>
            <Link to="/contact" className="bg-black text-primary px-6 py-2 rounded-md hover:bg-black/90 transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
