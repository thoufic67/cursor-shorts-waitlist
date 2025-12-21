import { MetadataRoute } from 'next';
import { allSeoPages } from '@/lib/seo-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cursorshorts.com';

  const staticPages = [
    '',
    '/autoshorts',
    '/terms',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicPages = allSeoPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}
