
export type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  keywords: string;
  description: string;
  excerpt: string;
}

export type BlogPosts = {
  [key: number]: BlogPost;
}
