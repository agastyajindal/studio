
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
  // Add a new field for full content if you plan to store it directly in the object
  // For now, we'll assume content comes from a CMS or Markdown files in a real scenario
  // For this prototype, the [slug] page will just display the summary as placeholder content.
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  imageHint?: string;
  tags: string[];
  projectUrl?: string;
  repoUrl?: string;
  date?: string; // Optional date for projects
}
