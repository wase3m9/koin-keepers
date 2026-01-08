import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to common crypto tax questions
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
