"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { useState } from "react";
import { Youtube, Instagram, Share2, Play, Pause, SkipBack, SkipForward, Scissors } from "lucide-react";

export function VideoCreationSteps() {
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  const content = [
    {
      title: "1. Enter Your Script",
      description:
        "Write or paste your video script. Our AI will analyze your content to ensure optimal pacing, timing, and voice-over synchronization for maximum viewer engagement.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="w-full h-full bg-[#191919] rounded-xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col p-8 text-left">
            {/* Notion Header */}
            <div className="mb-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-neutral-100 mb-2 font-sans">Viral Script</h3>
              <div className="flex items-center gap-2 text-xs text-neutral-500 border-b border-neutral-800 pb-4 w-full">
                <span>Add cover</span>
                <span>•</span>
                <span>Add comment</span>
              </div>
            </div>

            {/* Notion Body */}
            <div className="text-sm text-neutral-300 space-y-4 font-sans leading-relaxed">
              <p className="text-neutral-400 font-medium"># Hook</p>
              <p>Did you know that 90% of people scroll past boring content?</p>
              <p className="flex items-center gap-2 p-2 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs">
                <span className="text-base">💡</span>
                Make this punchy!
              </p>
              <p>Here is how to fix it in 3 steps...</p>
              <div className="w-0.5 h-4 bg-neutral-400 animate-pulse inline-block align-middle ml-1"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2. Select Music and Voice",
      description:
        "Choose from curated music options and AI voices tailored to your video type. Each combination is optimized to enhance your content's mood and bring your script to life with the perfect narration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center text-center">

            {/* Voice Card */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-4 shadow-xl relative overflow-hidden group hover:border-brand-blue/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-0.5 items-end h-4">
                  <div className="w-1 h-2 bg-brand-blue animate-pulse"></div>
                  <div className="w-1 h-4 bg-brand-blue animate-pulse delay-75"></div>
                  <div className="w-1 h-3 bg-brand-blue animate-pulse delay-150"></div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-lg">🎙️</div>
                <div>
                  <div className="font-semibold text-sm">Adam (American)</div>
                  <div className="text-xs text-neutral-500">Deep & Authoritative</div>
                </div>
              </div>
              <div className="h-8 w-full bg-neutral-800/50 rounded flex items-center px-2 gap-1 overflow-hidden">
                {/* Fake Waveform */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="w-1 bg-neutral-600 rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                ))}
              </div>
            </div>

            {/* Music Card */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-4 shadow-xl flex items-center gap-3 group hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">🎵</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">Lo-Fi Chill Beats</div>
                <div className="text-xs text-neutral-500 truncate">Trending Now</div>
              </div>
              <div className="w-6 h-6 rounded-full border border-neutral-700 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
            </div>

          </div>
        </div>
      ),
    },
    {
      title: "3. Video Generated",
      description:
        "Your complete video is ready! Our AI has combined your script, selected visuals, and music to create a polished, engaging video ready to share with your audience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img
            src="/assets/features/ugc-gameplay.png"
            alt="Generated Video Preview"
            className="h-full object-cover rounded-2xl border-4 border-neutral-800 shadow-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6 rounded-2xl z-10">
            <p className="text-2xl font-bold text-white text-center drop-shadow-md bg-black/50 p-2 rounded-lg">
              Did you know that 90% of people scroll past boring content?
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "4. Edit & Publish",
      description:
        "Fine-tune your masterpiece with our built-in editor. Trim, cut, and adjust before publishing directly to YouTube, Instagram, and TikTok.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white p-2">
          <div className="w-full h-full bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col relative group">
            {/* Editor Preview Area */}
            <div className="flex-1 relative overflow-hidden bg-black">
              <img
                src="/assets/features/ugc-gameplay.png"
                alt="Editor Preview"
                className="h-full w-full object-cover opacity-80"
              />
              {/* Editor Overlays */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-800/80 backdrop-blur-md rounded-lg p-2 border border-neutral-700">
                {/* Timeline Mockup */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2 text-neutral-400">
                    <SkipBack size={14} />
                    <Play size={14} fill="currentColor" />
                    <SkipForward size={14} />
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">00:15 / 00:45</div>
                </div>
                <div className="h-8 bg-neutral-900 rounded border border-neutral-700 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-blue-500/30 border-r-2 border-blue-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 flex gap-0.5 opacity-30">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="p-2 bg-neutral-800/80 backdrop-blur-md rounded-lg border border-neutral-700 hover:bg-neutral-700 transition cursor-pointer">
                  <Scissors size={16} className="text-neutral-300" />
                </div>
              </div>

            </div>

            {/* Publish Bar */}
            <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-col gap-3">
              <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider text-center">Ready to share?</div>
              <div className="flex justify-center gap-4">
                <button className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-red-900/20">
                  <Youtube size={20} className="text-white" />
                </button>
                <button className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-purple-900/20">
                  <Instagram size={20} className="text-white" />
                </button>
                <button className="h-10 w-10 rounded-full bg-black border border-neutral-800 flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:border-neutral-600 relative overflow-hidden">
                  {/* Simple TikTok Icon Substitute as it's not in Lucide default sometimes, otherwise use SVG */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white z-10">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ea]/20 to-[#ff0050]/20 mix-blend-overlay"></div>
                </button>
              </div>
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
        contentClassName="w-[500px] h-[550px]"
        onActiveIndexChange={setActiveStepIndex}
      />
    </section>
  );
}
