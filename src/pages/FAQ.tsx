import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
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
    },
    {
      question: "How are mining rewards taxed?",
      answer: "Mining rewards are typically treated as self-employed income and must be declared on your tax return. The value of the cryptocurrency at the time of receipt is considered taxable income."
    },
    {
      question: "What records do I need to keep for crypto taxes?",
      answer: "You should keep detailed records of all cryptocurrency transactions, including dates, amounts, values in GBP at the time of transaction, and the nature of each transaction (purchase, sale, trade, mining reward, etc.)."
    },
    {
      question: "How are staking rewards taxed in the UK?",
      answer: "Staking rewards are typically treated as miscellaneous income at the time they are received. The value in GBP at the time of receipt is taxable. When you later sell these tokens, you may also need to pay capital gains tax on any increase in value."
    },
    {
      question: "Do I need to pay tax on each crypto trade?",
      answer: "You need to calculate capital gains or losses on each disposal of cryptocurrency, whether you're trading for another cryptocurrency or selling for fiat currency. However, you only pay tax on your total gains above the annual allowance."
    },
    {
      question: "What is the crypto tax deadline in the UK?",
      answer: "The UK tax year runs from 6 April to 5 April the following year. If you need to file a Self Assessment tax return, the deadline is 31 January following the tax year. For example, for the 2023/24 tax year, the deadline would be 31 January 2025."
    }
  ];

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
        "name": "Help centre",
        "item": "https://koin-keepers.co.uk/faq"
      }
    ]
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Helmet>
        <title>Frequently Asked Questions | KoinKeepers Help Centre</title>
        <meta name="description" content="Find answers to your cryptocurrency tax questions in our KoinKeepers Help Centre. UK-specific guidance on crypto tax reporting, HMRC compliance, and tax obligations." />
        <meta name="keywords" content="crypto tax FAQ, cryptocurrency tax questions, HMRC crypto guidelines, UK crypto tax help, KoinKeepers help" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/faq" />
        <meta property="og:title" content="Frequently Asked Questions | KoinKeepers Help Centre" />
        <meta property="og:description" content="Find answers to your cryptocurrency tax questions in our KoinKeepers Help Centre." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/faq" />
        <meta name="twitter:title" content="Frequently Asked Questions | KoinKeepers Help Centre" />
        <meta name="twitter:description" content="Find answers to your cryptocurrency tax questions in our KoinKeepers Help Centre." />
        <meta name="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      </Helmet>

      <PageBreadcrumbs items={[{ label: "Help centre", href: "/faq" }]} />
      
      {/* Hero */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-white/80">Help Centre</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              KoinKeepers Help Centre
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Find answers to common questions about cryptocurrency taxation
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default FAQ;
