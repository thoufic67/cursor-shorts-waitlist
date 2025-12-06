"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {Button} from '@/components/ui/button';
import { PlayCircle, Sparkles, TrendingUp } from 'lucide-react';

// Specific high-quality images for the cards
const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=1000&fit=crop", // Hat guy
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=1000&fit=crop", // Model
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=1000&fit=crop", // Fashion
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=1000&fit=crop", // Portrait
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&h=1000&fit=crop", // Lifestyle
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=1000&fit=crop"  // White dress (Center/Top)
];

const HeroCard = ({ 
  image, 
  finalPosition, 
  rotation,
  views, 
  step,
  floatAnimation,
  index
}: { 
  image: string; 
  finalPosition: string;
  rotation: string; // e.g., 'rotate-12'
  views?: string;
  step: number; // 0: center, 1: explode, 2: float
  floatAnimation: string;
  index: number;
}) => {
  // Base state: Center of screen
  const isCentered = step === 0;
  
  // Z-index handling: When centered, reverse index so the last item (White dress) is on top
  const zIndex = isCentered ? 50 + index : 10;
  
  // Opacity handling: When centered, maybe hide lower cards slightly or keep them fully stacked
  // We keep them stacked to create the "deck" feel
  
  return (
    <div 
      className={`absolute transition-all cubic-bezier(0.25, 0.8, 0.25, 1) ${
        isCentered 
          ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[220px]' 
          : `${finalPosition} w-[70px] sm:w-[160px] lg:w-[180px]`
      }`}
      style={{ zIndex, transitionDuration: '3000ms' }}
    >
      {/* Rotation Wrapper - Rotates from 0 to final rotation */}
      <div className={`transition-transform ease-out w-full h-full ${isCentered ? 'rotate-0 scale-100' : `${rotation} scale-100`}`} style={{ transitionDuration: '3000ms' }}>
        
        {/* Float Animation Wrapper - Only active in step 2 */}
        <div className={`w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white bg-black relative ${step === 2 ? floatAnimation : ''}`}>
           {/* Inner container for shadow to rotate with the card */}
           <div className={`w-full h-full ${isCentered ? 'shadow-2xl' : 'shadow-xl'}`}>
              <Image 
                src={image} 
                alt="Short" 
                fill
                className="object-cover opacity-90" 
              />
              
              {/* Views Badge */}
              {views && (
                <div className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full flex items-center gap-1 text-[8px] sm:text-[10px] text-white font-medium transition-opacity duration-500 ${isCentered ? 'opacity-0' : 'opacity-100'}`}>
                  <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-brand-blue" />
                  {views}
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence:
    // 0ms: Initial Render (Center stacked)
    // 200ms: Trigger Explosion (Move to positions)
    // 1200ms: Trigger Float (Start bobbing)
    
    const timer1 = setTimeout(() => setStep(1), 300);
    const timer2 = setTimeout(() => setStep(2), 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradients - Fade in */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${step > 0 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-100/40 rounded-full blur-[60px] sm:blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-100/40 rounded-full blur-[60px] sm:blur-[100px]"></div>
      </div>
      
      {/* Floating Cards Container */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none z-10">
        
        {/* Card 1: Top Left */}
        <HeroCard 
          index={0}
          step={step}
          image={CARD_IMAGES[0]}
          finalPosition="top-[15%] left-[5%]"
          rotation="-rotate-12"
          floatAnimation="animate-float-slow"
          views="2.4M"
        />

        {/* Card 2: Middle Left (Smaller, blurred) */}
        <HeroCard 
          index={1}
          step={step}
          image={CARD_IMAGES[1]}
          finalPosition="top-[45%] left-[2%] opacity-80"
          rotation="-rotate-6"
          floatAnimation="animate-float-medium"
          views="850K"
        />

        {/* Card 3: Bottom Left */}
        <HeroCard 
          index={2}
          step={step}
          image={CARD_IMAGES[2]}
          finalPosition="bottom-[15%] left-[12%]"
          rotation="-rotate-12"
          floatAnimation="animate-float-fast"
          views="1.1M"
        />

        {/* Card 4: Top Right */}
        <HeroCard 
          index={3}
          step={step}
          image={CARD_IMAGES[3]}
          finalPosition="top-[12%] right-[8%]"
          rotation="rotate-12"
          floatAnimation="animate-float-medium"
          views="3.2M"
        />

         {/* Card 5: Middle Right (Smaller, blurred) */}
         <HeroCard 
          index={4}
          step={step}
          image={CARD_IMAGES[4]}
          finalPosition="top-[48%] right-[3%] opacity-80"
          rotation="rotate-6"
          floatAnimation="animate-float-fast"
          views="400K"
        />

        {/* Card 6: Bottom Right (The 'Center' card initially) */}
        {/* We put this last in the array so it is physically last in DOM => Top of stack in CSS usually, 
            but our Z-index logic handles stacking order explicitly. */}
        <HeroCard 
          index={5}
          step={step}
          image={CARD_IMAGES[5]} // Lady in white dress
          finalPosition="bottom-[12%] right-[10%]"
          rotation="rotate-12"
          floatAnimation="animate-float-slow"
          views="5.6M"
        />
      </div>

      {/* Main Content - Blurs In */}
      <div className={`relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 delay-300 ease-out ${step >= 1 ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-lg translate-y-12'}`}>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary/90 backdrop-blur-sm border border-gray-200 shadow-sm text-xs sm:text-sm font-medium text-gray-600 mb-6 sm:mb-8 hover:border-brand-blue transition-colors cursor-default">
          <Sparkles size={14} className="text-brand-blue" />
          <span>Powered by <span className="text-brand-black font-semibold">Veo 3.1</span> & <span className="text-brand-black font-semibold">Sora 2 Pro</span></span>
        </div>
        
        {/* Main Headline */}
        <h1 
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-brand-black tracking-tight mb-6 sm:mb-8 leading-[1] md:leading-[0.9]"
          style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.29), 0 0 15px rgba(255, 255, 255, 0.43), 0 0 5px rgba(255,255,255,0.8)" }}
        >
          Create shorts <br />
          <span className="text-4xl sm:text-5xl md:text-7xl">10x faster</span> <span className="font-serif italic font-normal text-4xl sm:text-5xl md:text-7xl text-brand-blue">using AI</span>
        </h1>
        
        {/* Subheadline */}
        <p 
          className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-2"
          style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.33), 0 0 10px rgba(255, 255, 255, 0.6)" }}
        >
          The all-in-one generative video platform. 
          <span className="block mt-1">
             Featuring <strong className="text-brand-black">Nano Banana Pro</strong> for high-CTR thumbnails.
          </span>
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button 
            variant="default" 
            size="lg" 
            className="w-full sm:w-auto px-10 h-12 sm:h-14 text-base sm:text-lg z-30 relative"
            onClick={() => window.location.href = 'https://app.cursorshorts.com'}
          >
            Create Your AI Short
          </Button>
          {/* <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 sm:h-14 z-30 relative">
            <PlayCircle className="mr-2 w-5 h-5" />
            View Showcase
          </Button> */}
        </div>

        {/* Social Proof / Trust */}
        <div 
          className="mt-12 sm:mt-16 flex flex-col items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 relative z-20"
          style={{ textShadow: "0 0 20px rgba(255,255,255,1)" }}
        >
           <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-gray-400">Trusted by creators from</p>
           <div className="flex gap-6 sm:gap-8 items-center">
              <span className="font-bold text-lg sm:text-xl text-gray-400">YOUTUBE</span>
              <span className="font-bold text-lg sm:text-xl text-gray-400">TIKTOK</span>
              <span className="font-bold text-lg sm:text-xl text-gray-400">INSTAGRAM</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;