
import { BlogPosts } from '../types/blog';
import { whatIsCryptocurrencyPost } from './blog-posts/what-is-cryptocurrency';
import { cryptoTaxScenariosPost } from './blog-posts/crypto-tax-scenarios';
import { cryptoTaxObligations2025Post } from './blog-posts/crypto-tax-obligations-2025';

export const blogPosts: BlogPosts = {
  1: whatIsCryptocurrencyPost,
  2: cryptoTaxScenariosPost,
  3: cryptoTaxObligations2025Post
};

export type { BlogPost, BlogPosts } from '../types/blog';
