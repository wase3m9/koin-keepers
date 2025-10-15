
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageBreadcrumbs } from "@/components/shared/PageBreadcrumbs";
import { Helmet } from 'react-helmet-async';

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


  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Crypto tax FAQs | Help centre</title>
        <meta name="description" content="Get answers to common cryptocurrency tax questions for UK investors and traders." />
        <meta name="keywords" content="crypto tax FAQ, cryptocurrency tax questions, HMRC crypto guidelines, UK crypto tax help" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://koin-keepers.co.uk/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koin-keepers.co.uk/faq" />
        <meta property="og:title" content="Crypto tax FAQs | Help centre" />
        <meta property="og:description" content="Get answers to common cryptocurrency tax questions for UK investors and traders." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://koin-keepers.co.uk/faq" />
        <meta name="twitter:title" content="Crypto tax FAQs | Help centre" />
        <meta name="twitter:description" content="Get answers to common cryptocurrency tax questions for UK investors and traders." />
        <meta name="twitter:image" content="/favicon.ico" />
        
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <PageBreadcrumbs items={[{ label: "Help centre", href: "/faq" }]} />
      <div className="py-20 bg-[#FEF7CD]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Crypto tax FAQs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about cryptocurrency taxation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
