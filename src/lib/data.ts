
import type { BlogPost, Project } from '@/types';
// Removed import { imagePaths } from '../../image.config';

export const siteImages = {
  heroBackground: {
    url: 'https://placehold.co/1920x1080.png', // Example placeholder
    alt: 'Abstract parallax background',
    hint: 'geometric pattern',
  },
  avatar: {
    url: 'https://placehold.co/400x400.png', // Example placeholder
    alt: 'Headshot of Agastya Jindal',
    hint: 'professional portrait',
  },
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Server Components in Next.js 14',
    date: 'October 26, 2023',
    summary: 'A deep dive into Next.js Server Components, exploring their benefits, use cases, and best practices for modern web development. Learn how these components can revolutionize your app architecture.',
    slug: 'mastering-server-components-nextjs-14',
    category: 'Next.js',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Abstract representation of server and client components interacting.',
    imageHint: 'tech abstract',
  },
  {
    id: '2',
    title: 'The Future of UI/UX with AI',
    date: 'November 15, 2023',
    summary: 'Exploring how artificial intelligence is reshaping user interface and user experience design, from personalization to generative UIs. Discover the tools and techniques leading this change.',
    slug: 'future-of-ui-ux-with-ai',
    category: 'AI & Design',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Futuristic UI design with glowing lines and AI-related icons.',
    imageHint: 'software interface',
  },
  {
    id: '3',
    title: 'Clean Code Principles for Junior Developers',
    date: 'December 05, 2023',
    summary: 'Essential clean code principles every junior developer should know to write maintainable, readable, and efficient code. A practical guide with examples.',
    slug: 'clean-code-principles-junior-devs',
    category: 'Software Development',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'A developer working on a laptop with lines of code visible on the screen.',
    imageHint: 'coding screen',
  },
  {
    id: '4',
    title: 'Advanced Tailwind CSS Techniques',
    date: 'January 10, 2024',
    summary: 'Unlock the full potential of Tailwind CSS with advanced techniques for responsive design, custom theming, and performance optimization. Go beyond the basics.',
    slug: 'advanced-tailwind-css-techniques',
    category: 'Frontend',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'A vibrant abstract design representing Tailwind CSS utility classes.',
    imageHint: 'abstract design',
  },
  {
    id: '5',
    title: 'Building Scalable APIs with Genkit',
    date: 'February 22, 2024',
    summary: 'Learn how to leverage Genkit to build robust and scalable APIs, focusing on best practices for AI integration and data handling. Includes examples and architectural patterns.',
    slug: 'scalable-apis-with-genkit',
    category: 'Backend & AI',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Network diagram illustrating API connections and data flow.',
    imageHint: 'network diagram',
  },
  {
    id: '6',
    title: 'Optimizing React Performance: A Comprehensive Guide',
    date: 'March 05, 2024',
    summary: 'A comprehensive guide to optimizing React application performance, covering memoization, code splitting, virtual DOM rendering strategies, and profiling tools.',
    slug: 'optimizing-react-performance',
    category: 'React',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'A graph showing performance improvement over time.',
    imageHint: 'performance graph',
  },
];

export const projectData: Project[] = [
  {
    id: 'proj1',
    title: 'AI-Powered Content Summarizer',
    description: 'A web application that uses Genkit to summarize long articles and documents, providing concise overviews. Built with Next.js and Tailwind CSS.',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Interface of AI Content Summarizer',
    imageHint: 'web application',
    tags: ['Next.js', 'Genkit', 'AI', 'Tailwind CSS', 'TypeScript'],
    projectUrl: '#',
    repoUrl: '#',
    date: 'April 2024',
  },
  {
    id: 'proj2',
    title: 'Interactive Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using ShadCN UI charts and React. Features customizable views and real-time data updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Dashboard showing various charts and graphs',
    imageHint: 'data dashboard',
    tags: ['React', 'ShadCN UI', 'Data Visualization', 'TypeScript'],
    projectUrl: '#',
    date: 'March 2024',
  },
  {
    id: 'proj3',
    title: 'Personal Portfolio Website (This one!)',
    description: 'My personal blog and portfolio website, showcasing my skills in Next.js, React, Tailwind CSS, and Genkit AI integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Homepage of the personal portfolio website',
    imageHint: 'portfolio website',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Genkit', 'ShadCN UI'],
    repoUrl: '#',
    date: 'Ongoing',
  },
  {
    id: 'proj4',
    title: 'Mobile Task Management App',
    description: 'A cross-platform mobile app for task management, focusing on a clean UI and intuitive user experience. Leveraging React Native.',
    imageUrl: 'https://placehold.co/600x400.png',
    altText: 'Mobile app screens for task management',
    imageHint: 'mobile app',
    tags: ['React Native', 'Mobile Development', 'UI/UX'],
    projectUrl: '#',
    date: 'January 2024',
  },
];
