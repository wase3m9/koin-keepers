
import { BlogPosts } from '../types/blog';
import { cryptoTaxPost } from './blog-posts/crypto-tax';
import { nftTaxPost } from './blog-posts/nft-tax';
import { defiTaxPost } from './blog-posts/defi-tax';

export const blogPosts: BlogPosts = {
  1: cryptoTaxPost,
  2: nftTaxPost,
  3: defiTaxPost
};

export type { BlogPost, BlogPosts } from '../types/blog';
