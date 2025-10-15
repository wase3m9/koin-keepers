
import { BlogPosts } from '../types/blog';
import { whatIsCryptocurrencyPost } from './blog-posts/what-is-cryptocurrency';
import { cryptoTaxScenariosPost } from './blog-posts/crypto-tax-scenarios';
import { cryptoTaxObligations2025Post } from './blog-posts/crypto-tax-obligations-2025';
import { hmrcCarfFinePost } from './blog-posts/hmrc-300-pound-crypto-fine-carf';
import { cryptoTaxPitfalls2025Post } from './blog-posts/crypto-tax-pitfalls-2025';

export const blogPosts: BlogPosts = {
  "what-is-cryptocurrency-simple-guide-beginners": whatIsCryptocurrencyPost,
  "do-i-need-pay-tax-crypto-common-scenarios-explained": cryptoTaxScenariosPost,
  "understanding-cryptocurrency-tax-obligations-2025": cryptoTaxObligations2025Post,
  "hmrc-300-pound-crypto-fine-are-you-at-risk-carf-penalties": hmrcCarfFinePost,
  "5-crypto-tax-pitfalls-2025-and-how-to-avoid-them": cryptoTaxPitfalls2025Post
};

export type { BlogPost, BlogPosts } from '../types/blog';
