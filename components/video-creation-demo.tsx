"use client";

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { PlayIcon, MicIcon, DownloadIcon } from "lucide-react";

export default function VideoCreationDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Animation progress for lines (staggered timing)
  const genreProgress = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const scriptProgress = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const voiceProgress = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const musicProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const styleProgress = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);

  // Video reveal progress
  const videoOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.65, 0.8], [0.95, 1]);
  const videoY = useTransform(scrollYProgress, [0.65, 0.8], [20, 0]);

  // Background paths for GoogleGeminiEffect
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const cards = [
    {
      id: "genre",
      title: "Genre",
      icon: "🎭",
      content: (
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-pink-500"></div>
          <span className="font-medium text-white">Horror Story</span>
        </div>
      ),
      progress: genreProgress,
      lineId: "genre-line",
    },
    {
      id: "script",
      title: "Script",
      icon: "📝",
      content: (
        <div className="rounded-lg p-4">
          <p className="text-sm leading-relaxed text-gray-300">
            Have you ever heard of the mysterious man who vanished every full
            moon? It started in a small town, one that seemed perfectly ordinary
            at first glance. But locals whispered about him—the man in the
            tattered coat.
          </p>
          <div className="mt-4">
            <div className="inline-flex items-center gap-1 rounded-full bg-purple-600 px-3 py-1 text-xs">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-white/20">
                <div className="h-2 w-2 rounded bg-white"></div>
              </div>
              AI is writing script...
            </div>
          </div>
        </div>
      ),
      progress: scriptProgress,
      lineId: "script-line",
    },
    {
      id: "voice",
      title: "Voice",
      icon: <MicIcon className="h-4 w-4 text-gray-400" />,
      content: (
        <div className="flex items-center justify-between rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-pink-500"></div>
            <div>
              <div className="font-medium">Josh</div>
              <div className="text-xs text-gray-400">
                Narration, Deep, Young
              </div>
            </div>
          </div>
          <PlayIcon className="h-5 w-5 text-gray-400" />
        </div>
      ),
      progress: voiceProgress,
      lineId: "voice-line",
    },
    {
      id: "music",
      title: "Background music",
      icon: "🎵",
      content: (
        <div className="flex items-center justify-between rounded-lg p-4">
          <div>
            <div className="font-medium">Ghost Arpeggios</div>
            <div className="text-xs text-gray-400">Violin, Scary</div>
          </div>
          <PlayIcon className="h-5 w-5 text-gray-400" />
        </div>
      ),
      progress: musicProgress,
      lineId: "music-line",
    },
    {
      id: "style",
      title: "Video Style",
      icon: "🎨",
      content: (
        <div className="flex items-center justify-between rounded-lg bg-gray-800 p-4">
          <div>
            <div className="font-medium">Cinematic Dark</div>
            <div className="text-xs text-gray-400">Moody, Atmospheric</div>
          </div>
          <div className="h-5 w-5 rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
      ),
      progress: styleProgress,
      lineId: "style-line",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[400vh] w-full overflow-clip"
      aria-labelledby="video-generation-section">
      {/* GoogleGeminiEffect Background */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Create stunning videos from simple text"
        description="Transform your ideas into captivating short-form videos with AI-powered creation tools"
        className="px-4"
      />

      {/* Main Content */}
      <div className="sticky top-20 z-40 mx-auto max-w-7xl px-4 py-20">
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Control Cards */}
          <div className="space-y-6 lg:max-w-md">
            {/* Control Cards */}
            {cards.map((card) => (
              <motion.article
                key={card.id}
                className={`group relative space-y-3 rounded-xl border border-white/10 bg-gray-900/80 p-6 backdrop-blur-xl transition-all duration-300 focus-within:border-white/30 hover:border-white/20 ${
                  hoveredCard === card.id ? "ring-2 ring-white/20" : ""
                }`}
                onHoverStart={() => setHoveredCard(card.id)}
                onHoverEnd={() => setHoveredCard(null)}
                tabIndex={0}
                role="region"
                aria-labelledby={`${card.id}-title`}>
                {/* Card Header */}
                <div className="flex items-center gap-2">
                  {typeof card.icon === "string" ? (
                    <span className="text-sm text-gray-400">{card.icon}</span>
                  ) : (
                    card.icon
                  )}
                  <span
                    id={`${card.id}-title`}
                    className="font-medium text-white">
                    {card.title}
                  </span>
                </div>

                {/* Card Content */}
                {card.content}

                {/* Connection Point */}
                <div
                  className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  id={`${card.id}-connector`}
                />
              </motion.article>
            ))}
          </div>

          {/* Connecting Lines SVG - Hidden on mobile */}
          <svg
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-full lg:block"
            viewBox="0 0 800 600"
            preserveAspectRatio="none">
            <defs>
              {/* Gradients for lines */}
              <linearGradient
                id="genre-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="script-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="voice-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="music-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="style-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient
                id="final-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Genre Line - converges to center */}
            <motion.path
              id="genre-line"
              d="M 420 100 Q 480 120 540 280"
              stroke="url(#genre-gradient)"
              strokeWidth={hoveredCard === "genre" ? 6 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={hoveredCard === "genre" ? "url(#glow)" : undefined}
              style={{
                strokeDasharray: 220,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(genreProgress, [0, 1], [220, 0]),
              }}
              className="transition-all duration-300"
            />

            {/* Script Line - converges to center */}
            <motion.path
              id="script-line"
              d="M 420 150 Q 480 180 540 280"
              stroke="url(#script-gradient)"
              strokeWidth={hoveredCard === "script" ? 6 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={hoveredCard === "script" ? "url(#glow)" : undefined}
              style={{
                strokeDasharray: 200,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(scriptProgress, [0, 1], [200, 0]),
              }}
              className="transition-all duration-300"
            />

            {/* Voice Line - straight to center */}
            <motion.path
              id="voice-line"
              d="M 420 280 Q 480 280 540 280"
              stroke="url(#voice-gradient)"
              strokeWidth={hoveredCard === "voice" ? 6 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={hoveredCard === "voice" ? "url(#glow)" : undefined}
              style={{
                strokeDasharray: 180,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(voiceProgress, [0, 1], [180, 0]),
              }}
              className="transition-all duration-300"
            />

            {/* Music Line - converges to center */}
            <motion.path
              id="music-line"
              d="M 420 410 Q 480 380 540 280"
              stroke="url(#music-gradient)"
              strokeWidth={hoveredCard === "music" ? 6 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={hoveredCard === "music" ? "url(#glow)" : undefined}
              style={{
                strokeDasharray: 200,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(musicProgress, [0, 1], [200, 0]),
              }}
              className="transition-all duration-300"
            />

            {/* Style Line - converges to center */}
            <motion.path
              id="style-line"
              d="M 420 460 Q 480 420 540 280"
              stroke="url(#style-gradient)"
              strokeWidth={hoveredCard === "style" ? 6 : 3}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter={hoveredCard === "style" ? "url(#glow)" : undefined}
              style={{
                strokeDasharray: 230,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(styleProgress, [0, 1], [230, 0]),
              }}
              className="transition-all duration-300"
            />

            {/* Final convergence line - from center to video */}
            <motion.path
              id="final-line"
              d="M 540 280 Q 560 280 580 280"
              stroke="url(#final-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={{
                strokeDasharray: 50,
                strokeDashoffset: prefersReducedMotion
                  ? 0
                  : useTransform(scrollYProgress, [0.6, 0.75], [50, 0]),
              }}
              className="transition-all duration-300"
            />
          </svg>

          {/* Right Side - Video Preview */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              style={{
                opacity: prefersReducedMotion ? 1 : videoOpacity,
                scale: prefersReducedMotion ? 1 : videoScale,
                y: prefersReducedMotion ? 0 : videoY,
              }}>
              <div className="h-96 w-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800 to-black shadow-2xl">
                {/* Video Content */}
                <div className="relative h-full bg-gradient-to-b from-blue-900/30 via-purple-900/30 to-black">
                  {/* Moon */}
                  <div className="absolute right-8 top-16 h-20 w-20 rounded-full bg-yellow-200 shadow-lg"></div>

                  {/* Stars */}
                  <div className="absolute left-6 top-20 h-1 w-1 rounded-full bg-white"></div>
                  <div className="absolute left-12 top-12 h-1 w-1 rounded-full bg-white"></div>
                  <div className="absolute right-16 top-24 h-1 w-1 rounded-full bg-white"></div>

                  {/* Mysterious Figure */}
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2 transform">
                    <div className="h-24 w-16 rounded-full bg-black opacity-80"></div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-8 left-4 right-4">
                    <div className="text-lg font-bold text-yellow-400">
                      mysterious
                    </div>
                    <div className="-mt-1 text-lg font-bold text-white">
                      man
                    </div>
                    <div className="-mt-1 text-lg font-bold text-white">
                      who
                    </div>
                  </div>

                  {/* Video Connection Point */}
                  <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              </div>

              {/* Lightning Bolt Icon */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 shadow-lg">
                  <div className="text-xl font-bold text-black">⚡</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Actions */}
        <motion.div
          className="mt-12 flex justify-center"
          style={{
            opacity: prefersReducedMotion ? 1 : videoOpacity,
          }}>
          <button
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Generate video from current settings">
            <DownloadIcon className="h-4 w-4" />
            Generate Video
          </button>
        </motion.div>

        {/* Screen Reader Announcements */}
        <div className="sr-only" aria-live="polite" id="video-status">
          {/* This will announce when video is revealed */}
        </div>
      </div>
    </div>
  );
}
