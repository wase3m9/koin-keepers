import { BlogPost } from '../../types/blog';

export const cryptoTaxScenariosPost: BlogPost = {
  id: 2,
  title: "Do I Need to Pay Tax on My Crypto? Common Scenarios Explained",
  excerpt: "Confused about when you owe tax on cryptocurrency? This practical guide covers the most common scenarios UK crypto holders face, with real examples and clear explanations.",
  content: `
    <div class="space-y-8">
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <p class="text-lg font-medium text-blue-900 mb-2">Quick Summary</p>
        <p class="text-blue-800">In most cases, you'll pay Capital Gains Tax when you sell, trade, or spend cryptocurrency for a profit. However, the specific tax treatment depends on your individual circumstances and how HMRC classifies your activities.</p>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
        <ul class="space-y-2">
          <li><a href="#when-tax-triggered" class="text-primary hover:text-primary/80">When Tax is Triggered</a></li>
          <li><a href="#common-scenarios" class="text-primary hover:text-primary/80">Common Scenarios: Do You Owe Tax?</a></li>
          <li><a href="#understanding-tax-rate" class="text-primary hover:text-primary/80">Understanding Your Tax Rate</a></li>
          <li><a href="#special-situations" class="text-primary hover:text-primary/80">Special Situations and Exemptions</a></li>
          <li><a href="#red-flags" class="text-primary hover:text-primary/80">Red Flags: When You Definitely Owe Tax</a></li>
          <li><a href="#calculating-tax-bill" class="text-primary hover:text-primary/80">Calculating Your Actual Tax Bill</a></li>
          <li><a href="#what-to-do" class="text-primary hover:text-primary/80">What You Need to Do</a></li>
          <li><a href="#faq" class="text-primary hover:text-primary/80">Frequently Asked Questions</a></li>
        </ul>
      </div>

      <div class="prose prose-lg max-w-none">
        <p>One of the most confusing aspects of cryptocurrency for UK investors is understanding when you actually owe tax. With HMRC's guidance evolving and different rules applying to different situations, it's easy to get lost in the complexity.</p>

        <p>The reality is that <strong>most crypto activity in the UK triggers a tax event</strong>, but the amount you owe (if any) depends on several factors including your total gains, allowances, and how HMRC classifies your trading activity.</p>

        <h2 id="when-tax-triggered" class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Fundamental Rule: When Tax is Triggered</h2>
        
        <p>According to HMRC, you potentially owe tax whenever you <strong>"dispose"</strong> of cryptocurrency. This includes:</p>

        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Selling crypto for pounds (GBP)</strong></li>
          <li><strong>Trading one cryptocurrency for another</strong> (e.g., Bitcoin for Ethereum)</li>
          <li><strong>Spending crypto on goods or services</strong></li>
          <li><strong>Giving crypto away</strong> (except to a spouse/civil partner)</li>
          <li><strong>Converting to stablecoins</strong> like USDT or USDC</li>
        </ul>

        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-6">
          <p class="text-amber-800"><strong>Important:</strong> Simply buying and holding cryptocurrency doesn't trigger tax. You only potentially owe tax when you dispose of it.</p>
        </div>

        <h2 id="common-scenarios" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Scenarios: Do You Owe Tax?</h2>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Scenario 1: Buying and Holding</h3>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <p class="font-semibold text-green-900 mb-2">Example:</p>
          <p class="text-green-800">Sarah bought £5,000 worth of Bitcoin in January 2024 and is still holding it in January 2025.</p>
          <p class="font-semibold text-green-900 mt-3">Tax liability: £0</p>
          <p class="text-green-800">No disposal has occurred, so no tax is due regardless of current value.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Scenario 2: Selling for a Small Profit</h3>
        
        <div class="bg-blue-50 p-6 rounded-lg">
          <p class="font-semibold text-blue-900 mb-2">Example:</p>
          <p class="text-blue-800">James bought Bitcoin for £2,000 and sold it for £4,000. His total crypto gains for the tax year are £2,000.</p>
          <p class="font-semibold text-blue-900 mt-3">Tax liability: £0</p>
          <p class="text-blue-800">His gain (£2,000) is below the Capital Gains Tax allowance of £3,000 for 2024-25.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Scenario 3: Trading Between Cryptocurrencies</h3>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <p class="font-semibold text-yellow-900 mb-2">Example:</p>
          <p class="text-yellow-800">Lisa bought Ethereum for £1,000. When it was worth £3,000, she traded it all for Bitcoin (no cash involved).</p>
          <p class="font-semibold text-yellow-900 mt-3">Tax liability: Depends on total gains</p>
          <p class="text-yellow-800">She made a £2,000 gain on the Ethereum disposal, even though she received Bitcoin instead of cash.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Scenario 4: Using Crypto to Buy Something</h3>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <p class="font-semibold text-purple-900 mb-2">Example:</p>
          <p class="text-purple-800">Mark bought Bitcoin for £500. He later used it to buy a £2,000 laptop when his Bitcoin was worth £2,000.</p>
          <p class="font-semibold text-purple-900 mt-3">Tax liability: CGT on £1,500 gain</p>
          <p class="text-purple-800">The disposal of Bitcoin created a £1,500 taxable gain.</p>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Scenario 5: Frequent Trading</h3>
        
        <div class="bg-red-50 p-6 rounded-lg">
          <p class="font-semibold text-red-900 mb-2">Example:</p>
          <p class="text-red-800">David makes 50+ crypto trades per month, spending several hours daily researching and trading.</p>
          <p class="font-semibold text-red-900 mt-3">Tax liability: Income Tax (potentially higher rate)</p>
          <p class="text-red-800">HMRC may classify this as trading income rather than capital gains, resulting in higher tax rates.</p>
        </div>

        <h2 id="understanding-tax-rate" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Your Tax Rate</h2>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Capital Gains Tax Rates (2024-25)</h3>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <ul class="space-y-2">
            <li><strong>Annual allowance:</strong> £3,000 (no tax on gains below this)</li>
            <li><strong>Basic rate taxpayers:</strong> 10% on gains above allowance</li>
            <li><strong>Higher rate taxpayers:</strong> 20% on gains above allowance</li>
          </ul>
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">When Income Tax Applies Instead</h3>
        
        <p>HMRC may treat your crypto activities as trading (subject to Income Tax) if you:</p>

        <ul class="list-disc pl-6 space-y-2">
          <li>Trade with high frequency and volume</li>
          <li>Spend significant time on crypto activities</li>
          <li>Have specialist knowledge or experience</li>
          <li>Use borrowed money to trade</li>
          <li>Advertise or provide crypto services</li>
        </ul>

        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-6">
          <p class="text-amber-800"><strong>Income Tax rates are typically higher:</strong> 20%, 40%, or 45% depending on your total income, with no annual allowance.</p>
        </div>

        <h2 id="special-situations" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Special Situations and Exemptions</h2>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Gifts Between Spouses</h3>
        
        <p>Transferring crypto to your spouse or civil partner is <strong>not a taxable disposal</strong>. They inherit your original purchase price (cost basis) for future calculations.</p>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Mining and Staking Rewards</h3>
        
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Casual mining/staking:</strong> Usually subject to Income Tax on the value when received</li>
          <li><strong>Professional mining:</strong> Treated as business income with additional obligations</li>
          <li><strong>Selling mined crypto:</strong> May trigger additional Capital Gains Tax</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">DeFi and Staking</h3>
        
        <p>The tax treatment of DeFi activities is complex and often unclear. HMRC guidance suggests:</p>

        <ul class="list-disc pl-6 space-y-2">
          <li>Lending crypto may not be a disposal</li>
          <li>Receiving reward tokens is usually taxable income</li>
          <li>Liquidity pool activities may trigger multiple disposals</li>
        </ul>

        <h2 id="red-flags" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags: When You Definitely Owe Tax</h2>

        <p>You almost certainly have a tax liability if:</p>

        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <ul class="list-disc pl-6 space-y-2 text-red-800">
            <li>Your total crypto gains exceed £3,000 in the tax year</li>
            <li>You've made multiple trades or swaps between cryptocurrencies</li>
            <li>You've spent crypto on purchases</li>
            <li>You've cashed out any amount with a profit</li>
            <li>You received significant mining or staking rewards</li>
          </ul>
        </div>

        <h2 id="calculating-tax-bill" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Calculating Your Actual Tax Bill</h2>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Step-by-Step Calculation</h3>
        
        <ol class="list-decimal pl-6 space-y-3">
          <li><strong>Calculate total gains:</strong> Sale price minus purchase price for all disposals</li>
          <li><strong>Subtract allowable expenses:</strong> Transaction fees, exchange fees</li>
          <li><strong>Apply annual allowance:</strong> Subtract £3,000 from total gains</li>
          <li><strong>Apply tax rate:</strong> 10% or 20% depending on your income bracket</li>
        </ol>

        <div class="bg-blue-50 p-6 rounded-lg mt-6">
          <p class="font-semibold text-blue-900 mb-2">Example Calculation:</p>
          <p class="text-blue-800">Total gains: £8,000<br>
          Minus annual allowance: £8,000 - £3,000 = £5,000<br>
          Tax at 10% (basic rate): £5,000 × 10% = £500</p>
        </div>

        <h2 id="what-to-do" class="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Need to Do</h2>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Record Keeping Requirements</h3>
        
        <p>HMRC requires you to keep records of:</p>

        <ul class="list-disc pl-6 space-y-2">
          <li>Date and time of all transactions</li>
          <li>Type and quantity of cryptocurrency</li>
          <li>Value in pounds at the time of transaction</li>
          <li>Exchange rates used</li>
          <li>Transaction fees and costs</li>
          <li>Bank statements and exchange records</li>
        </ul>

        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">When to File a Tax Return</h3>
        
        <p>You must file a Self Assessment if:</p>

        <ul class="list-disc pl-6 space-y-2">
          <li>Your total gains exceed £3,000</li>
          <li>Your gross proceeds (before deducting costs) exceed £12,000</li>
          <li>You're already registered for Self Assessment</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Final Thoughts</h2>

        <p>The key to managing crypto tax obligations is understanding that <strong>most crypto activities create taxable events</strong>, even if you don't receive cash.</p>

        <p><strong>Key takeaways:</strong></p>

        <ul class="list-disc pl-6 space-y-2">
          <li>Buying and holding doesn't trigger tax</li>
          <li>Any disposal (selling, trading, spending) can create tax liability</li>
          <li>Small gains may fall within your annual allowance</li>
          <li>Keep detailed records from the start</li>
          <li>Consider professional advice for complex situations</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
          <p class="text-green-800">When in doubt, it's better to be cautious and seek professional advice. The cost of getting expert help is usually much less than the penalties for getting it wrong.</p>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-lg mt-12">
        <h2 id="faq" class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Do I pay tax if I only trade between cryptocurrencies and never cash out?</h3>
            <p class="text-gray-600">Yes, trading one cryptocurrency for another is considered a disposal by HMRC. You'll owe Capital Gains Tax on any profit from the crypto you're trading away.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">What if my crypto investments lost money?</h3>
            <p class="text-gray-600">Capital losses can be offset against capital gains in the same tax year or carried forward to future years. You should still report losses on your tax return as they can reduce future tax bills.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">How does HMRC know about my crypto transactions?</h3>
            <p class="text-gray-600">UK exchanges share information with HMRC, and they're increasingly sophisticated at tracking crypto activities. It's much better to be proactive about compliance than reactive.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Can I offset trading fees against my gains?</h3>
            <p class="text-gray-600">Yes, transaction fees, exchange fees, and other allowable expenses can be deducted from your gains. Keep records of all fees paid.</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">What happens if I don't report crypto gains?</h3>
            <p class="text-gray-600">HMRC can impose penalties of up to 100% of the tax owed, plus interest. In serious cases, they may pursue criminal prosecution for tax evasion.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  author: "KoinKeepers Team",
  date: "January 20, 2025",
  category: "Tax Planning",
  image: "/src/assets/crypto-tax-scenarios.jpg",
  keywords: "crypto tax UK, cryptocurrency tax scenarios, do I owe tax on crypto, HMRC crypto rules, capital gains tax crypto, trading tax UK",
  description: "Practical guide to UK cryptocurrency tax scenarios. Learn when you owe tax on crypto activities, with real examples and clear explanations of HMRC rules."
};