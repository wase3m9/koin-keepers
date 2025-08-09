
import { BlogPosts } from '../types/blog';
import { whatIsCryptocurrencyPost } from './blog-posts/what-is-cryptocurrency';
import { cryptoTaxScenariosPost } from './blog-posts/crypto-tax-scenarios';
import { cryptoTaxObligations2025Post } from './blog-posts/crypto-tax-obligations-2025';

export const blogPosts: BlogPosts = {
  "what-is-cryptocurrency-simple-guide-beginners": whatIsCryptocurrencyPost,
  "do-i-need-pay-tax-crypto-common-scenarios-explained": cryptoTaxScenariosPost,
  "understanding-cryptocurrency-tax-obligations-2025": cryptoTaxObligations2025Post
};

export type { BlogPost, BlogPosts } from '../types/blog';
