import { BlogPost } from '../../types/blog';
import cryptoTaxPitfallsImage from '../../assets/crypto-tax-pitfalls-2025.jpg';

export const cryptoTaxPitfalls2025Post: BlogPost = {
  id: 5,
  slug: "5-crypto-tax-pitfalls-2025-and-how-to-avoid-them",
  title: "5 Crypto Tax Pitfalls in 2025 (And How to Avoid Them)",
  author: "Sarah Mitchell, Crypto Tax Specialist",
  date: "October 15, 2025",
  category: "Tax Planning",
  image: cryptoTaxPitfallsImage,
  keywords: "crypto tax pitfalls 2025, cryptocurrency tax mistakes UK, HMRC crypto penalties, DeFi tax errors, NFT tax reporting, crypto tax specialist London",
  description: "Discover the 5 most common crypto tax pitfalls in 2025 and learn how to avoid costly HMRC penalties. Expert guidance on DeFi, NFT taxation, and proper reporting.",
  excerpt: "Thinking of filing your 2025 crypto taxes without a specialist? Here are the risks we keep seeing, plus what to do instead.",
  content: `
    <div class="space-y-8">
      <div class="alert-box bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-amber-800">Filing 2025 Crypto Taxes? Watch Out for These Pitfalls</h3>
          <p class="mt-2 text-sm text-amber-700">Thinking of filing your 2025 crypto taxes without a specialist? Here are the risks we keep seeing, plus what to do instead.</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 p-6 rounded-lg">
      <h2 class="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
      <ul class="space-y-2">
        <li><a href="#why-matters" class="text-primary hover:text-primary/80">Why this matters in 2025</a></li>
        <li><a href="#five-pitfalls" class="text-primary hover:text-primary/80">The 5 pitfalls</a></li>
        <li><a href="#specialist-does" class="text-primary hover:text-primary/80">What a specialist actually does</a></li>
        <li><a href="#diy-workflow" class="text-primary hover:text-primary/80">DIY anyway? Use this safer workflow</a></li>
        <li><a href="#quick-tips" class="text-primary hover:text-primary/80">2025 quick tips</a></li>
        <li><a href="#examples" class="text-primary hover:text-primary/80">Examples we fix a lot</a></li>
        <li><a href="#faq" class="text-primary hover:text-primary/80">Frequently Asked Questions</a></li>
      </ul>
    </div>

    <div class="prose prose-lg max-w-none">
      <h2 id="why-matters" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why this matters in 2025</h2>

    <p>HMRC is getting far better data from exchanges and platforms. If your records don't line up with what HMRC receives, you stand out. That's when penalties, interest, and enquiries become real problems.</p>

    <blockquote>
      "The gap between platform reporting and taxpayer returns is where most crypto tax problems begin. In 2025, that gap has consequences." - KoinKeepers Tax Advisory Team
    </blockquote>

    <h2 id="five-pitfalls" class="text-2xl font-bold text-gray-900 mt-8 mb-4">The 5 pitfalls</h2>

    <h3>1) Misreporting complex transactions</h3>

    <p>Common trouble spots:</p>

    <ul>
      <li><strong>Wallet transfers</strong> where fees are paid in crypto</li>
      <li><strong>DeFi rewards</strong> that might be income or capital depending on facts</li>
      <li><strong>NFT mints, burns, and royalties</strong></li>
      <li><strong>Airdrops, forks, liquidity events</strong></li>
    </ul>

    <p>One wrong assumption can skew hundreds of lines.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p class="text-blue-900"><strong>How to avoid it:</strong> Use UK-specific rules, document your treatment for each activity, and get a specialist review if you've touched DeFi or NFTs.</p>
    </div>

    <h3>2) Broken cost basis across wallets, CEX and DEX</h3>

    <p>Typical errors:</p>

    <ul>
      <li><strong>Duplicated trades</strong> from both API and CSV</li>
      <li><strong>Missing historical prices</strong> or token rebrands</li>
      <li><strong>Fees logged in the wrong asset</strong></li>
      <li><strong>Ignoring UK Section 104 pooling</strong> and same-day/30-day matching</li>
    </ul>

    <p>End result: gains overstated, losses understated, or both.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p class="text-blue-900"><strong>How to avoid it:</strong> Consolidate data into one system, reconcile internal transfers to zero, and run a pooling check before you file.</p>
    </div>

    <h3>3) Leaving reliefs and allowances on the table</h3>

    <p>People overpay by:</p>

    <ul>
      <li>Missing loss claims</li>
      <li>Not using spouse or civil partner transfers</li>
      <li>Timing disposals badly</li>
      <li>Failing to claim legitimate costs</li>
    </ul>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p class="text-blue-900"><strong>How to avoid it:</strong> Plan disposals, crystallise losses correctly, and review elections and reliefs before year end.</p>
    </div>

    <h3>4) Higher enquiry and penalty risk</h3>

    <p>Returns that don't reconcile with platform reports or show obvious anomalies invite questions. If HMRC decides you were careless, penalties and interest stack up quickly.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p class="text-blue-900"><strong>How to avoid it:</strong> Keep an evidence pack with exports, chain proofs, pricing sources, and a short position note explaining key judgements.</p>
    </div>

    <h3>5) Grey areas for staking, mining and business activity</h3>

    <p>Frequent trading can look like a trade rather than investment. Staking may be income or capital. Holding crypto in a company raises accounting and disclosure issues.</p>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p class="text-blue-900"><strong>How to avoid it:</strong> Separate personal and company wallets, classify activities with clear criteria, and apply consistent treatment backed by notes.</p>
    </div>

    <h2 id="specialist-does" class="text-2xl font-bold text-gray-900 mt-8 mb-4">What a specialist actually does</h2>

    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <ul class="space-y-3">
        <li><strong>End-to-end reconciliation:</strong> Cleans duplicates, fills price gaps, standardises formats</li>
        <li><strong>Correct UK treatment:</strong> Pooling, matching, income vs capital, corporate rules</li>
        <li><strong>DeFi/NFT mapping:</strong> Rewards, LP moves, bridging, wrapping, royalties</li>
        <li><strong>Evidence pack:</strong> Workpapers, exportable logs, position note for HMRC</li>
        <li><strong>Planning:</strong> Timing disposals, using spouse allowances, corporate structuring where suitable</li>
      </ul>
    </div>

    <h2 id="diy-workflow" class="text-2xl font-bold text-gray-900 mt-8 mb-4">DIY anyway? Use this safer workflow</h2>

    <div class="checklist bg-green-50 p-6 rounded-lg mb-6">
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Map every source:</strong> All exchanges, wallets, chains, DEX, NFTs, bots, and dormant accounts</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Lock raw data:</strong> Export CSVs and PDFs and keep read-only copies</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Import with rules:</strong> Avoid auto-guessing where possible; tag uncertain items</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Reconcile transfers and fees:</strong> Internal transfers net to zero; gas booked to the right asset and date</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Document judgement calls:</strong> One-page note on how you treated staking, LP, airdrops, NFTs</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Sanity check totals:</strong> No unrealised positions in gains; fiat flows align with bank records</span>
      </div>
      
      <div class="checklist-item flex items-start mb-3">
        <input type="checkbox" class="mt-1 mr-3" disabled>
        <span><strong>Get a pre-file review:</strong> A single caught error often pays for the review</span>
      </div>
    </div>

    <h2 id="quick-tips" class="text-2xl font-bold text-gray-900 mt-8 mb-4">2025 quick tips</h2>

    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <ul class="space-y-2">
        <li>✓ Consolidate platforms where you can</li>
        <li>✓ Use a dedicated crypto inbox for statements and confirmations</li>
        <li>✓ Tag transactions monthly</li>
        <li>✓ Keep company and personal completely separate</li>
        <li>✓ Track stablecoin hops so cost basis stays intact</li>
      </ul>
    </div>

    <h2 id="examples" class="text-2xl font-bold text-gray-900 mt-8 mb-4">Examples we fix a lot</h2>

    <div class="timeline-container bg-gray-50 p-6 rounded-lg mb-8">
      <div class="timeline-item mb-4">
        <div class="font-medium text-red-600">Gas never booked</div>
        <p>ETH fees ignored, gains inflated</p>
      </div>
      
      <div class="timeline-item mb-4">
        <div class="font-medium text-red-600">Double imports</div>
        <p>API plus CSV creates phantom disposals</p>
      </div>
      
      <div class="timeline-item mb-4">
        <div class="font-medium text-red-600">All staking set as interest</div>
        <p>Wrong tax head and timing</p>
      </div>
      
      <div class="timeline-item">
        <div class="font-medium text-red-600">Company wallet mix-ups</div>
        <p>Personal wallets used for company buys</p>
      </div>
    </div>

    </div>

    <div class="bg-gray-50 p-8 rounded-lg mt-12">
      <h2 id="faq" class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Do I need a specialist if I only used one exchange?</h3>
          <p class="text-gray-600">Not always. You still need correct UK pooling and fee treatment. A one-off review can be enough.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Are DeFi rewards always income?</h3>
          <p class="text-gray-600">No. It depends on the protocol and your rights. Facts matter.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Can software do it all?</h3>
          <p class="text-gray-600">Software helps, but it guesses. Someone must validate, fix misclassifications, and document edge cases.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">What if I'm missing records?</h3>
          <p class="text-gray-600">Rebuild from chain explorers, bank statements, and exchange exports. Add a clear methodology note and keep it consistent.</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">What if I hold through a company?</h3>
          <p class="text-gray-600">Corporate rules apply. Keep wallets separate and follow the right accounting and disclosure steps.</p>
        </div>
      </div>
    </div>

    <div class="prose prose-lg max-w-none">

    <h2>Final thoughts</h2>

    <p>You can file yourself. The risk rises with more wallets, protocols, and years of activity. If you're beyond simple buys and sells, a specialist usually costs less than a mistake.</p>

    <div class="cta-box bg-primary/10 border border-primary/20 p-6 rounded-lg mt-8">
      <h3 class="text-lg font-semibold mb-3">Need Help with Your Crypto Tax Return?</h3>
      <p class="mb-4">Koin-Keepers can clean and reconcile your data across CEX, DEX and wallets, apply the correct UK treatment for DeFi, NFTs and staking, and produce an HMRC-ready evidence pack.</p>
      <p class="text-sm text-gray-600"><a href="/contact" class="text-primary hover:text-primary/80 underline">Book a crypto tax review and file with confidence.</a></p>
    </div>
    </div>
  `
};
