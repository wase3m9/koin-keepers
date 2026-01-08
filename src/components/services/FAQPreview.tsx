import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";

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
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-white/80">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Common Crypto Tax Questions
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 sm:mb-12"
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {commonQuestions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`}
                className="bg-white/5 border border-white/10 rounded-xl px-5 sm:px-6 hover:border-primary/20 transition-colors data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base text-white hover:text-primary py-4 sm:py-5 [&[data-state=open]]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-400 pb-4 sm:pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Have more questions about crypto taxes? Check out our FAQ or book a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              to="/faq" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors border border-white/10"
            >
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
