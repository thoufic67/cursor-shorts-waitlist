"use client"

import React, { useState, useEffect, useRef } from 'react';
import { SHOWCASE_VIDEOS } from '../constants';
import { Play, VolumeX } from 'lucide-react';
import { VideoExample } from '../types';
import Image from "next/image";

const FadeInWhenVisible = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const VideoCard: React.FC<{ item: VideoExample }> = ({ item }) => {
  // Styling for the decoration dots
  const getDecorationClass = () => {
    if (!item.decoration) return '';
    const { color, position } = item.decoration;
    const posClass = {
      'top-left': '-top-4 -left-4',
      'top-right': '-top-4 -right-4',
      'bottom-left': '-bottom-4 -left-4',
      'bottom-right': '-bottom-4 -right-4',
    }[position];
    return `absolute ${posClass} w-12 h-12 rounded-full ${color} z-20`;
  };

  if (item.type === 'card') {
    return (
      <div className={`relative w-full h-full rounded-3xl ${item.gradient} overflow-visible`}>
         {item.decoration && <div className={getDecorationClass()} />}
      </div>
    );
  }

  return (
    <div className="relative group w-full h-full rounded-3xl overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Decorative Dot */}
      {item.decoration && <div className={getDecorationClass()} />}

      {/* Background Image */}
      <Image 
        src={item.thumbnailUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"} 
        alt={item.title || "Video thumbnail"} 
        fill
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      {/* Mute Icon (Visual Detail from UI) */}
      <div className="absolute top-4 right-4 text-white/70">
        <VolumeX size={16} />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="font-bold text-lg leading-tight mb-1">{item.title}</h3>
        <p className="text-xs font-medium text-gray-300 uppercase tracking-wide opacity-80">{item.category}</p>
      </div>

      {/* Hover Play Button (Subtle) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
         <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Play size={20} className="text-white ml-1" fill="currentColor" />
         </div>
      </div>
    </div>
  );
};

const VideoGallery: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">Made with CursorShorts</h2>
            <p className="text-gray-600 text-lg">High-converting shorts generated in seconds.</p>
          </div>
        </FadeInWhenVisible>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {SHOWCASE_VIDEOS.map((video, index) => {
            // Determine grid spans based on size
            const spanClass = {
              'small': 'col-span-1 row-span-1',
              'wide': 'col-span-1 sm:col-span-2 row-span-1',
              'tall': 'col-span-1 row-span-2',
            }[video.size];

            return (
              <div key={video.id} className={`${spanClass}`}>
                <FadeInWhenVisible delay={index * 50} className="h-full">
                  <VideoCard item={video} />
                </FadeInWhenVisible>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;