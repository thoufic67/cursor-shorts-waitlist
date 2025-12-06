import { Zap, Wand2, Layers, Cpu, Share2, TrendingUp } from 'lucide-react';
import { Feature, ModelInfo, VideoExample } from './types';

export const APP_NAME = "CursorShorts";

export const FEATURES: Feature[] = [
  {
    title: "AI Script to Video",
    description: "Turn simple text prompts into engaging short-form videos in seconds using our proprietary pipeline.",
    icon: Wand2
  },
  {
    title: "Smart Auto-Editing",
    description: "Our AI automatically cuts silence, adds captions, and zooms in at the perfect moments to keep retention high.",
    icon: Zap
  },
  {
    title: "Multi-Platform Export",
    description: "One click to resize and publish to YouTube Shorts, TikTok, and Instagram Reels simultaneously.",
    icon: Share2
  },
  {
    title: "Trend Analysis",
    description: "Built-in analytics to predict which topics are trending before you even start creating.",
    icon: TrendingUp
  }
];

export const AI_MODELS: ModelInfo[] = [
  {
    name: "Veo 3.1",
    type: "Video",
    description: "The engine behind our fluid motion generation. Capable of 60fps consistency.",
    badge: "Cinema Grade"
  },
  {
    name: "SORA 2 Pro",
    type: "Video",
    description: "Unmatched photorealism for background generation and B-roll synthesis.",
    badge: "Next Gen"
  },
  {
    name: "Nano Banana Pro",
    type: "Image",
    description: "High-fidelity thumbnail and overlay generation optimized for high CTR.",
    badge: "CTR Booster"
  }
];

export const SHOWCASE_VIDEOS: VideoExample[] = [
  {
    id: 1,
    type: 'card',
    size: 'small',
    gradient: 'bg-gradient-to-br from-blue-300 to-emerald-300',
    decoration: { color: 'bg-blue-400', position: 'top-left' }
  },
  {
    id: 2,
    title: "Pet Shop Labor Day Promo",
    category: "Holiday Promotion",
    thumbnailUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop",
    type: 'video',
    size: 'wide',
    author: "@PetLovers"
  },
  {
    id: 3,
    title: "The Perfect Jacket",
    category: "UGC Ad",
    thumbnailUrl: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop",
    type: 'video',
    size: 'tall',
    author: "@StyleDaily"
  },
  {
    id: 4,
    title: "Retro Compact Car Ad",
    category: "Brand Promo",
    thumbnailUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    type: 'video',
    size: 'wide',
    author: "@RetroRides",
    decoration: { color: 'bg-yellow-500', position: 'top-right' }
  },
  {
    id: 5,
    title: "Mini Tote",
    category: "UGC Ad",
    thumbnailUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    type: 'video',
    size: 'tall',
    author: "@BagAddict",
    decoration: { color: 'bg-pink-200', position: 'bottom-left' }
  },
  {
    id: 6,
    title: "Real Estate Promo",
    category: "Service Promo",
    thumbnailUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    type: 'video',
    size: 'wide',
    author: "@CityLiving"
  },
  {
    id: 7,
    type: 'card',
    size: 'small',
    gradient: 'bg-gradient-to-tr from-yellow-200 to-orange-300'
  },
  {
    id: 8,
    title: "Korean Skincare",
    category: "Product Film",
    thumbnailUrl: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop",
    type: 'video',
    size: 'wide',
    author: "@GlowUp",
    decoration: { color: 'bg-pink-400', position: 'bottom-right' }
  }
];