

const generateSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const createPage = (title: string, category: string): SeoPage => ({
  title,
  slug: generateSlug(title),
  category,
  path: `/${category}/${generateSlug(title)}`,
  description: `Create viral AI shorts with our ${title} tool. CursorShorts helps you generate high-quality video content automatically using AI.`,
});

export type SeoPage = {
  title: string;
  slug: string;
  description: string;
  category: string;
  path: string;
};

export const seoPages = {
  features: [
    "AI UGC Generator",
    "AI Avatars",
    "Text to speech",
    "AI Facebook Ad Generator",
    "AI Tik-Tok Ad Generator",
    "AI Lip-sync",
    "AI Product Video Generator",
    "AI Actors",
    "AI Ads",
    "AI Ad Video Generator",
    "AI Shorts Generator",
    "AI Content Generator",
    "AI Video API",
    "Lip Sync API",
    "AI for Affiliate",
    "Talking AI Avatar",
  ].map(t => createPage(t, 'features')),
  
  industries: [
    "E-Commerce",
    "SaaS",
    "Mobile Apps",
    "Lead Generation",
    "Marketing Agencies",
    "Insurance",
    "Real Estate Agencies",
    "Law Firm",
  ].map(t => createPage(t, 'industries')),

  freeTools: [
    "AI Hook Generator"
  ].map(t => createPage(t, 'tools')),

  resources: [
    "AI YouTube Video Generator",
    "AI Tik-Tok Video Generator",
    "AI Facebook Video Ad Generator",
    "Facebook Ad Creative Testing",
    "Usecases"
  ].map(t => createPage(t, 'resources')),
};

export const allSeoPages = [
  ...seoPages.features,
  ...seoPages.industries,
  ...seoPages.freeTools,
  ...seoPages.resources,
];

export const getSeoPage = (category: string, slug: string) => 
  allSeoPages.find((page) => page.category === category && page.slug === slug);

