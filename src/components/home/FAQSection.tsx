import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqItems = [
    {
      question: "What is cryptocurrency tax?",
      answer: "Cryptocurrency tax refers to the taxation of profits made from trading or investing in cryptocurrencies. This includes capital gains tax on profits from selling cryptocurrencies and income tax on earnings from mining or staking."
    },
    {
      question: "How do I report my crypto taxes?",
      answer: "You report your crypto taxes by calculating your capital gains and losses from your trades and reporting them on your tax return. It's important to keep accurate records of all your transactions."
    },
    {
      question: "What happens if I don't report my crypto taxes?",
      answer: "Failing to report your crypto taxes can result in penalties, fines, and interest on unpaid taxes. In severe cases, it could lead to legal action by tax authorities."
    },
    {
      question: "Can I deduct losses from my crypto investments?",
      answer: "Yes, you can deduct capital losses from your cryptocurrency investments against your capital gains. If your losses exceed your gains, you may be able to use the remaining losses to offset other income."
    },
    {
      question: "Do I need to pay taxes on crypto gifts?",
      answer: "Yes, if you receive cryptocurrency as a gift, you may need to pay taxes if you sell or trade it later. The person giving the gift may also have tax obligations depending on the value of the gift."
    }
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Quick answers to common crypto tax questions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`}
                className="bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 hover:border-primary/20 transition-colors data-[state=open]:border-primary/30"
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
      </div>
    </section>
  );
};

export default FAQSection;
