"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Sparkles, Mic2, Bot, Paperclip, ArrowUp, Globe } from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible to run animation only once
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
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Feature 1: Main Header Card */}
        <FadeInWhenVisible>
          <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 md:p-16 mb-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[450px]">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                The most realistic and <br />
                <span className="italic font-serif font-light text-gray-200">captivating AI Actors</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                The best AI UGC library with 1,000+ AI Actors
              </p>
              <Button
                variant="secondary"
                className="bg-white/10 text-white border-white/10 hover:bg-white/20 backdrop-blur-sm pl-4 pr-6"
                onClick={() => window.location.href = 'https://app.cursorshorts.com'}
              >
                <Sparkles className="w-4 h-4 mr-2 text-white" />
                Create Your AI Video
              </Button>
            </div>
            {/* Visual representation of stacked cards */}
            <div className="relative mt-12 md:mt-0 w-full md:w-[45%] h-[300px] md:h-auto self-stretch flex items-center justify-center perspective-1000">

              {/* Mockup cards positioned absolutely with 3D transforms */}
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop"
                className="absolute right-0 w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover transform rotate-12 translate-x-10 shadow-2xl border-4 border-[#1a1a1a] z-10"
                alt="Face 1"
                width={500}
                height={500}
              />
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop"
                className="absolute right-12 w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover transform -rotate-6 translate-y-4 shadow-2xl border-4 border-[#1a1a1a] z-20"
                alt="Face 2"
                width={500}
                height={500}
              />
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop"
                className="absolute right-24 md:right-32 w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover transform rotate-[-15deg] -translate-x-4 -translate-y-8 shadow-2xl border-4 border-[#1a1a1a] z-30"
                alt="Face 3"
                width={500}
                height={500}
              />
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Feature 2: Create AI Actor */}
          <FadeInWhenVisible delay={200} className="h-full">
            <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col group overflow-hidden h-full">
              <div className="flex gap-4 mb-8 justify-center h-[320px] relative">
                {/* Vertical phone mocks */}
                <div className="w-[140px] h-[240px] rounded-xl overflow-hidden mt-8 opacity-50 transform -rotate-3 transition-transform duration-500 group-hover:-translate-x-2">
                  <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=500&fit=crop" className="w-full h-full object-cover grayscale" alt="Actor 1" width={300} height={500} />
                </div>
                <div className="w-[160px] h-[280px] rounded-xl overflow-hidden z-10 shadow-2xl border-2 border-gray-800">
                  <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=500&fit=crop" className="w-full h-full object-cover" alt="Actor 2" width={300} height={500} />
                </div>
                <div className="w-[140px] h-[240px] rounded-xl overflow-hidden mt-8 opacity-50 transform rotate-3 transition-transform duration-500 group-hover:translate-x-2">
                  <Image src="https://images.unsplash.com/photo-1528892952291-009c663ce843?w=300&h=500&fit=crop" className="w-full h-full object-cover grayscale" alt="Actor 3" width={300} height={500} />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <div className="flex gap-2 mb-3 justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
                <p className="text-xs text-center text-gray-500 uppercase tracking-widest mb-1">Actors holding your product</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Create your own <span className="font-serif italic font-normal text-gray-300">AI Actor</span></h3>
                <p className="text-gray-400 text-center max-w-sm mx-auto">Generate a face ... And make them hold your product, show your app, and wear your clothes.</p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Feature 3: Video Editing */}
          <FadeInWhenVisible delay={300} className="h-full">
            <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col relative group overflow-hidden h-full">

              <div className="flex gap-4 mb-8 justify-center h-[320px] items-center">
                <div className="w-[160px] h-[280px] rounded-xl overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=500&fit=crop" className="w-full h-full object-cover" alt="Edit 1" width={300} height={500} />
                </div>
                <div className="w-[160px] h-[280px] rounded-xl overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=500&fit=crop" className="w-full h-full object-cover opacity-80" alt="Edit 2" width={300} height={500} />
                  {/* Caption Overlay UI */}
                  <div className="absolute bottom-10 left-0 right-0 px-2 text-center">
                    <span className="bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md">
                      that something is wrong with the air
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">AI Video <span className="font-serif italic font-normal text-gray-300">Editing</span></h3>
                <p className="text-gray-400">Add B-Rolls, music, captions and transitions in one click.</p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Feature 4: Emotion Control */}
          <FadeInWhenVisible delay={200} className="h-full">
            <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col overflow-hidden h-full">
              <div className="flex gap-4 mb-8 justify-center h-[320px] items-center">
                <div className="w-[170px] h-[260px] rounded-2xl overflow-hidden transform -rotate-2 border border-gray-800">
                  <Image src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=500&fit=crop" className="w-full h-full object-cover" alt="Emotion 1" width={400} height={500} />
                </div>
                <div className="w-[170px] h-[260px] rounded-2xl overflow-hidden transform rotate-2 border border-gray-800">
                  <Image src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&h=500&fit=crop" className="w-full h-full object-cover" alt="Emotion 2" width={400} height={500} />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Emotion <span className="font-serif italic font-normal text-gray-300">control</span></h3>
                <p className="text-gray-400">You have full emotion control. Just write how you want it.</p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Feature 5: Localize */}
          <FadeInWhenVisible delay={300} className="h-full">
            <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col relative overflow-hidden h-full">
              {/* Background faint text */}
              <div className="absolute top-10 -left-10 text-5xl font-bold text-white/[0.03] whitespace-nowrap select-none rotate-12">Salut, ce mai faci?</div>
              <div className="absolute top-32 -right-10 text-5xl font-bold text-white/[0.03] whitespace-nowrap select-none -rotate-6">Hur mår du?</div>
              <div className="absolute top-64 left-10 text-5xl font-bold text-white/[0.03] whitespace-nowrap select-none rotate-3">Selam, nasılsın?</div>

              <div className="relative mx-auto mb-8 w-[200px] aspect-[9/16] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl z-10">
                <Image src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=700&fit=crop" className="w-full h-full object-cover" alt="Speaking" width={400} height={700} />
                {/* Speaker icon */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Mic2 size={14} className="text-white" />
                </div>
                {/* Subtitle */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] text-center">
                  <span className="text-white text-[10px] font-bold bg-black/60 px-2 py-1 rounded backdrop-blur-md uppercase">
                    J&apos;AI ÉTÉ MÉCANICIEN
                  </span>
                </div>
              </div>

              <div className="mt-auto text-center relative z-10">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <span className="text-xs text-gray-400 font-medium">French</span>
                </div>
                <div className="flex justify-center gap-2 mb-4 text-sm grayscale hover:grayscale-0 transition-all">
                  <span>🇫🇷</span> <span>🇬🇧</span> <span>🇩🇪</span> <span>🇪🇸</span> <span>🇮🇹</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Localize in every <span className="font-serif italic font-normal text-gray-300">language</span></h3>
                <p className="text-gray-400">Accurate translation in more than 30 languages. Reach the world.</p>
              </div>
            </div>
          </FadeInWhenVisible>


          {/* Feature 6: AI Agent */}
          <FadeInWhenVisible delay={200} className="h-full md:col-span-2">
            <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col items-center justify-between relative overflow-hidden h-full group">

              <div className="flex flex-col gap-4 mb-8 w-full max-w-lg relative z-10 mt-8">
                {/* Mock Chat UI */}
                {/* Input Interface - Lovable Style */}
                <div className="w-full bg-[#1c1c1c] rounded-3xl border border-gray-800 p-6 shadow-2xl transition-all duration-500 hover:shadow-blue-900/10 group-hover:border-gray-700">

                  {/* Input Area */}
                  <div className="mb-12">
                    <p className="text-gray-400 text-lg font-light mb-2">Ask Agent to create a video...</p>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-sm">@Creative Assistant</span>
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="flex items-center justify-between">

                    {/* Left Actions */}
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 hover:bg-gray-800 text-gray-400 text-sm transition-colors border border-transparent hover:border-gray-700">
                        <Paperclip size={14} />
                        <span>Attach</span>
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 hover:bg-gray-800 text-gray-400 text-sm transition-colors border border-transparent hover:border-gray-700">
                        <Globe size={14} />
                        <span>Web Search</span>
                      </button>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <Mic2 size={20} />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <ArrowUp size={18} className="text-black" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              <div className="mt-8 text-center relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Smart <span className="font-serif italic font-normal text-gray-300">AI Agent</span></h3>
                <p className="text-gray-400">Chat with the agent to help you create prompts and breakdown the videos.</p>
              </div>
            </div>
          </FadeInWhenVisible>

        </div>
      </div>
    </section>
  );
};

export default Features;