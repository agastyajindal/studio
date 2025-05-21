
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
