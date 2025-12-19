"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { Sparkles, Play, Mic2, Type } from 'lucide-react';
import { cn } from "@/lib/utils";

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

const FeaturesAutoshorts: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-[#0a0a0a] text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Feature 1: Main Header Card - Script Writing */}
                <FadeInWhenVisible>
                    <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 md:p-16 mb-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[450px]">
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
                                AI Script Writer <br />
                                <span className="italic font-serif font-light text-gray-200">viral stories</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                AI that writes high quality viral scripts for your shorts.
                            </p>
                            <Button
                                variant="secondary"
                                className="bg-white/10 text-white border-white/10 hover:bg-white/20 backdrop-blur-sm pl-4 pr-6"
                                onClick={() => window.location.href = 'https://app.cursorshorts.com/create-video'}
                            >
                                <Sparkles className="w-4 h-4 mr-2 text-white" />
                                Write a Script
                            </Button>
                        </div>
                        {/* Visual representation */}
                        <div className="relative mt-12 md:mt-0 w-full md:w-[45%] h-[300px] md:h-[400px] self-stretch flex items-center justify-center">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/ai%20script.webp"
                                    className="object-cover w-full h-full"
                                    alt="AI Script Writer Interface"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Feature 2: Realistic AI Images & Videos */}
                    <FadeInWhenVisible delay={200} className="h-full">
                        <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col group overflow-hidden h-full">
                            <div className="flex gap-4 mb-8 justify-center h-[320px] relative">
                                {/* Image collage similar to original features but with new assets */}
                                <div className="w-[140px] h-[240px] rounded-xl overflow-hidden mt-8 opacity-50 transform -rotate-3 transition-transform duration-500 group-hover:-translate-x-2">
                                    <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=500&fit=crop" className="w-full h-full object-cover grayscale" alt="AI Image 1" width={300} height={500} />
                                </div>
                                <div className="w-[160px] h-[280px] rounded-xl overflow-hidden z-10 shadow-2xl border-2 border-gray-800">
                                    <Image src="https://images.unsplash.com/photo-1682687220015-186f63b8850a?w=300&h=500&fit=crop" className="w-full h-full object-cover" alt="AI Image 2" width={300} height={500} />
                                </div>
                                <div className="w-[140px] h-[240px] rounded-xl overflow-hidden mt-8 opacity-50 transform rotate-3 transition-transform duration-500 group-hover:translate-x-2">
                                    <Image src="https://images.unsplash.com/photo-1682687221038-404cb8830901?w=300&h=500&fit=crop" className="w-full h-full object-cover grayscale" alt="AI Image 3" width={300} height={500} />
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Realistic AI <span className="font-serif italic font-normal text-gray-300">Images & Videos</span></h3>
                                <p className="text-gray-400 text-center max-w-sm mx-auto">Generate stunning, photorealistic images and videos with advanced AI.</p>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Feature 3: Image to Video */}
                    <FadeInWhenVisible delay={300} className="h-full">
                        <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col relative group overflow-hidden h-full">

                            <div className="flex gap-4 mb-8 justify-center h-[320px] items-center">
                                <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-xl overflow-hidden relative shadow-2xl border-2 border-gray-800">
                                    <video
                                        className="absolute left-0 top-0 h-full w-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/JohnWickCathedral.jpg">
                                        <source
                                            src="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/John%20Wick%20Cathedral%20Video.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded">
                                        Image to Video
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Turn Images into <span className="font-serif italic font-normal text-gray-300">Videos</span></h3>
                                <p className="text-gray-400">Make your images move. Add motion to any photo instantly.</p>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Feature 4: Human-like Voiceovers */}
                    <FadeInWhenVisible delay={200} className="h-full">
                        <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col overflow-hidden h-full">
                            <div className="mb-8 flex flex-col gap-3 justify-center h-[320px] max-w-[300px] mx-auto w-full">
                                {/* Mock Voice Items */}
                                {[
                                    { name: "Antoni", desc: "Deep and rich", active: false },
                                    { name: "Bella", desc: "Warm and friendly", active: true },
                                    { name: "Adam", desc: "Bold and energetic", active: false }
                                ].map((voice, i) => (
                                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${voice.active ? 'bg-white/10 border-brand-blue/50' : 'bg-black/20 border-white/5'} backdrop-blur-sm transition-all`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${voice.active ? 'bg-brand-blue text-white' : 'bg-gray-800 text-gray-400'}`}>
                                                <Mic2 size={14} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">{voice.name}</div>
                                                <div className="text-[10px] text-gray-400">{voice.desc}</div>
                                            </div>
                                        </div>
                                        {voice.active && (
                                            <div className="flex gap-0.5 items-end h-4">
                                                <div className="w-0.5 h-2 bg-brand-blue animate-pulse"></div>
                                                <div className="w-0.5 h-4 bg-brand-blue animate-pulse delay-75"></div>
                                                <div className="w-0.5 h-3 bg-brand-blue animate-pulse delay-150"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Human-like <span className="font-serif italic font-normal text-gray-300">Voiceovers</span></h3>
                                <p className="text-gray-400">Add natural-sounding voices powered by ElevenLabs & OpenAI.</p>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Feature 5: Beautiful Captions */}
                    <FadeInWhenVisible delay={300} className="h-full">
                        <div className="rounded-3xl bg-[#111111] border border-gray-800 p-8 min-h-[500px] flex flex-col relative overflow-hidden h-full">

                            <div className="relative mx-auto mb-8 w-[200px] aspect-[9/16] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl z-10">
                                <Image src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=800&fit=crop" className="w-full h-full object-cover opacity-60" alt="Captions Preview" width={400} height={700} />

                                {/* Floating Captions */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
                                    <span className="text-2xl font-bold text-yellow-400 drop-shadow-md font-sans">
                                        DID YOU KNOW?
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center">
                                    <Type size={16} className="text-white" />
                                </div>
                            </div>

                            <div className="mt-auto text-center relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">Beautiful <span className="font-serif italic font-normal text-gray-300">Captions</span></h3>
                                <p className="text-gray-400">Every video includes customizable, engaging captions.</p>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                </div>
            </div>
        </section>
    );
};

export default FeaturesAutoshorts;
