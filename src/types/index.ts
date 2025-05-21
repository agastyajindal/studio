export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  imageHint?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
  category: string;
  imageUrl: string;
  altText: string;
  imageHint?: string;
}
