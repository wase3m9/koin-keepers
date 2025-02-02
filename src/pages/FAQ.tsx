import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 bg-[#FEF7CD]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about cryptocurrency taxation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is cryptocurrency tax?</AccordionTrigger>
            <AccordionContent>
              Cryptocurrency tax refers to the taxation of profits made from trading or investing in cryptocurrencies. This includes capital gains tax on profits from selling cryptocurrencies and income tax on earnings from mining or staking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I report my crypto taxes?</AccordionTrigger>
            <AccordionContent>
              You report your crypto taxes by calculating your capital gains and losses from your trades and reporting them on your tax return. It's important to keep accurate records of all your transactions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens if I don't report my crypto taxes?</AccordionTrigger>
            <AccordionContent>
              Failing to report your crypto taxes can result in penalties, fines, and interest on unpaid taxes. In severe cases, it could lead to legal action by tax authorities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I deduct losses from my crypto investments?</AccordionTrigger>
            <AccordionContent>
              Yes, you can deduct capital losses from your cryptocurrency investments against your capital gains. If your losses exceed your gains, you may be able to use the remaining losses to offset other income.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Do I need to pay taxes on crypto gifts?</AccordionTrigger>
            <AccordionContent>
              Yes, if you receive cryptocurrency as a gift, you may need to pay taxes if you sell or trade it later. The person giving the gift may also have tax obligations depending on the value of the gift.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How are mining rewards taxed?</AccordionTrigger>
            <AccordionContent>
              Mining rewards are typically treated as self-employed income and must be declared on your tax return. The value of the cryptocurrency at the time of receipt is considered taxable income.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>What records do I need to keep for crypto taxes?</AccordionTrigger>
            <AccordionContent>
              You should keep detailed records of all cryptocurrency transactions, including dates, amounts, values in GBP at the time of transaction, and the nature of each transaction (purchase, sale, trade, mining reward, etc.).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How are staking rewards taxed in the UK?</AccordionTrigger>
            <AccordionContent>
              Staking rewards are typically treated as miscellaneous income at the time they are received. The value in GBP at the time of receipt is taxable. When you later sell these tokens, you may also need to pay capital gains tax on any increase in value.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Do I need to pay tax on each crypto trade?</AccordionTrigger>
            <AccordionContent>
              You need to calculate capital gains or losses on each disposal of cryptocurrency, whether you're trading for another cryptocurrency or selling for fiat currency. However, you only pay tax on your total gains above the annual allowance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>What is the crypto tax deadline in the UK?</AccordionTrigger>
            <AccordionContent>
              The UK tax year runs from 6 April to 5 April the following year. If you need to file a Self Assessment tax return, the deadline is 31 January following the tax year. For example, for the 2023/24 tax year, the deadline would be 31 January 2025.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
