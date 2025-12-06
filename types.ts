import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ModelInfo {
  name: string;
  type: 'Video' | 'Image' | 'Audio';
  description: string;
  badge: string;
}

export interface VideoExample {
  id: number;
  title?: string;
  category?: string;
  views?: string;
  thumbnailUrl?: string;
  author?: string;
  type: 'video' | 'card';
  size: 'small' | 'wide' | 'tall';
  gradient?: string;
  decoration?: {
    color: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  };
}