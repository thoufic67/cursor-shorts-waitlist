import React from 'react';
import { Metadata } from 'next';
import { getSeoPage, allSeoPages } from '@/lib/seo-pages';
import Home from '@/app/page'; // Importing the default export from app/page.tsx which is the Home component
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
    const { category, slug } = await params;
    const page = getSeoPage(category, slug);

    if (!page) {
        return {};
    }

    return {
        title: `${page.title} | CursorShorts`,
        description: page.description,
        openGraph: {
            title: `${page.title} | CursorShorts`,
            description: page.description,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${page.title} | CursorShorts`,
            description: page.description,
        },
    };
}

// Generate static params for all known SEO pages to enable static generation (optional but good)
export async function generateStaticParams() {
    return allSeoPages.map((page) => ({
        category: page.category,
        slug: page.slug,
    }));
}

export default async function SeoPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;
    const page = getSeoPage(category, slug);

    if (!page) {
        notFound();
    }

    // Render the Home component (which is the main App component)
    // This reuses the entire landing page but with dynamic metadata
    return <Home />;
}
