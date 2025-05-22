// At project root: image.config.ts

/**
 * Defines the paths to images used throughout the site.
 * These paths are relative to the /public directory.
 *
 * For example, if an image path is '/images/hero-background.png',
 * the actual image file should be located at 'public/images/hero-background.png'.
 */
export const imagePaths = {
  // Site-wide images
  heroBackground: '/images/site/hero-background.png',
  avatar: '/images/site/avatar.png',

  // Blog post images (using slugs or IDs as keys for clarity)
  blogMasteringServerComponents: '/images/blog/mastering-server-components.png',
  blogFutureOfUIUXWithAI: '/images/blog/future-of-ui-ux-with-ai.png',
  blogCleanCodePrinciples: '/images/blog/clean-code-principles.png',
  blogAdvancedTailwindCSSTechniques: '/images/blog/advanced-tailwind-css-techniques.png',
  blogScalableAPIsWithGenkit: '/images/blog/scalable-apis-with-genkit.png',
  blogOptimizingReactPerformance: '/images/blog/optimizing-react-performance.png',

  // Project images
  projectAIContentSummarizer: '/images/projects/ai-content-summarizer.png',
  projectInteractiveDataDashboard: '/images/projects/interactive-data-dashboard.png',
  projectPersonalPortfolio: '/images/projects/personal-portfolio.png',
  projectMobileTaskManagementApp: '/images/projects/mobile-task-management-app.png',
};
