"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { useState, useEffect } from "react";

const videoTypes = [
  {
    name: "Faceless",
    icon: "👤",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "UGC",
    icon: "📱",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "ASMR",
    icon: "🎧",
    gradient: "from-green-500 to-emerald-500",
  },
];

const VideoTypeSelector = ({ selectedType }: { selectedType: string }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-full w-full overflow-hidden rounded-lg p-8">
        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-md text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
              Select Video Type
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {videoTypes.map((type) => {
                const isSelected = type.name === selectedType;
                return (
                  <button
                    key={type.name}
                    className={`group relative flex items-center gap-4 rounded-full p-4 transition-all duration-500 ${
                      isSelected
                        ? `bg-gradient-to-r ${type.gradient} scale-105 shadow-lg`
                        : "bg-neutral-700/50 hover:scale-105 hover:bg-neutral-700 hover:shadow-lg"
                    }`}>
                    <div className="text-left">
                      <p className="text-lg font-semibold">{type.name}</p>
                    </div>
                    {isSelected && (
                      <svg
                        className="h-6 w-6 animate-in fade-in"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function VideoCreationSteps() {
  const [selectedVideoType, setSelectedVideoType] = useState("");
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  // Update selected video type based on scroll position
  useEffect(() => {
    if (activeStepIndex === 0) {
      setSelectedVideoType("UGC");
    }
  }, [activeStepIndex]);

  const content = [
    {
      title: "1. Select Video Type",
      description:
        "Choose from various video types and preview your selection. Each type comes with optimized templates and options tailored for different content styles and platforms.",
      content: <VideoTypeSelector selectedType={selectedVideoType} />,
    },
    {
      title: "2. Enter Your Script",
      description:
        "Write or paste your video script. Our AI will analyze your content to ensure optimal pacing, timing, and voice-over synchronization for maximum viewer engagement.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full overflow-hidden rounded-lg p-8">
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-3">
                <div className="h-3 w-3/4 rounded bg-neutral-600"></div>
                <div className="h-3 w-full rounded bg-neutral-600"></div>
                <div className="h-3 w-5/6 rounded bg-neutral-600"></div>
                <div className="h-3 w-full rounded bg-neutral-600"></div>
                <div className="h-3 w-2/3 rounded bg-neutral-600"></div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
                <p className="text-xs">AI analyzing script...</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. Select Music and Voice",
      description:
        "Choose from curated music options and AI voices tailored to your video type. Each combination is optimized to enhance your content's mood and bring your script to life with the perfect narration.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full overflow-hidden rounded-lg p-8">
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-4">
                {/* Voice Selection */}
                <div className="mb-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    AI Voice
                  </p>
                  <div className="flex items-center gap-4 rounded-lg bg-neutral-700/50 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 h-3 w-32 rounded bg-neutral-600"></div>
                      <div className="h-2 w-24 rounded bg-neutral-700"></div>
                    </div>
                  </div>
                </div>
                {/* Music Selection */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Background Music
                  </p>
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="mb-3 flex items-center gap-4 rounded-lg bg-neutral-700/50 p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path d="M9 18.7l.7-.7L4 12.3V12l5.7-5.7-.7-.7L3 12z" />
                          <path d="M9 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 h-3 w-32 rounded bg-neutral-600"></div>
                        <div className="h-2 w-24 rounded bg-neutral-700"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. Video Generated",
      description:
        "Your complete video is ready! Our AI has combined your script, selected visuals, and music to create a polished, engaging video ready to share with your audience.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full overflow-hidden rounded-lg p-8">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="relative mb-4">
                <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <svg
                    className="h-20 w-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="mb-2 text-lg font-semibold">Video Complete!</p>
              <p className="text-sm">Ready to download & share</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen w-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Create Videos in 4 Easy Steps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our AI-powered platform makes video creation effortless. From
            selection to generation, create professional videos in minutes.
          </p>
        </div>
      </div>
      <StickyScroll
        content={content}
        onActiveIndexChange={setActiveStepIndex}
      />
    </section>
  );
}
