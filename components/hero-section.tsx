"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Form from "@/components/form";
import { useState, useRef, useEffect } from "react";
import { VolumeX, Volume2 } from "lucide-react";

const VIDEO_PREVIEW = [
  {
    thumbnail:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/Toy%20Story.webp",
    videoSrc:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/Toy%20Story%20Video.mp4",
    caption: "her summer in",
    subcaption: "the",
    category: "Fantasy",
    rotation: -15,
    zIndex: 10,
    translateX: -80,
    translateY: 0,
    gradient: "from-blue-200 via-cyan-300 to-blue-400",
  },
  {
    thumbnail:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/John%20Wick.webp",
    videoSrc:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/John%20Wick%20Video%20(1).mp4",
    caption: "Create viral",
    subcaption: "videos in Minutes",
    category: "Animation",
    rotation: 0,
    zIndex: 30,
    translateX: 0,
    translateY: 0,
    gradient: "from-orange-300 via-red-400 to-orange-500",
  },
  {
    thumbnail:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/Blind%20Man.webp",
    videoSrc:
      "https://assets.cursorshorts.com/cursorshorts/assets/landingPage/French%20Sad%20Story%20(1).mp4",
    caption: "French Man looses his sight in accident,",
    subcaption: "French Sad Story,",
    category: "Lifestyle",
    rotation: 15,
    zIndex: 20,
    translateX: 80,
    translateY: 0,
    gradient: "from-purple-400 via-pink-400 to-purple-500",
  },
];

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
    // Play the hovered video
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(() => {
        // Handle play promise rejection silently
      });
    }
  };

  const handleCardLeave = () => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        // video.currentTime = 0;
      }
    });
    setHoveredCard(null);
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    // Update all video elements
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = newMutedState;
      }
    });
  };

  const handleRedirect = () => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (appUrl) {
      window.location.href = appUrl;
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="opacity-10">
        <BackgroundRippleEffect rows={12} cols={20} cellSize={80} />
      </div>
      <HeroHighlight containerClassName="py-20 px-4 relative z-10">
        <motion.div
          className="mx-auto flex flex-col items-center justify-between gap-12 text-center lg:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {/* Left Content */}
          <motion.div className="flex-1 space-y-6" variants={itemVariants}>
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-start">
                <div className="flex w-fit items-center justify-center rounded-full border border-blue-200/20 bg-blue-100/10 backdrop-blur-sm"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl font-bold leading-tight text-foreground lg:text-7xl">
                Create <Highlight className="text-foreground">viral</Highlight>{" "}
                videos in minutes.
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-lg text-xl leading-relaxed text-muted-foreground">
                Create videos in minutes. Our AI creation tool creates viral
                videos for you.
              </p>
            </motion.div>

            {/* CTA Form */}
            <motion.div
              variants={itemVariants}
              className="mx-auto w-full max-w-md">
              <Form handleRedirect={handleRedirect} />
            </motion.div>

            {/* Trust Indicators */}
            {/* <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-pink-400 dark:border-gray-900"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg text-blue-400">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground">
                Trusted by 27,000+ creators
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Video Player */}
          {true && (
            <motion.div className="h-full flex-1" variants={itemVariants}>
              <div className="relative mx-auto">
                {/* Interactive Video Demo Stack */}
                {isMobile ? (
                  /* Mobile: Single video without transforms */
                  <div className="mt-8 flex justify-center">
                    <div className="cursor-pointer overflow-hidden">
                      {/* Mobile Phone Frame */}
                      <div className="relative h-[400px] w-[200px] overflow-hidden">
                        {/* Phone Body */}
                        <div className="relative h-full w-full rounded-[32px] bg-gradient-to-b from-gray-800 to-gray-900 p-1 shadow-2xl">
                          {/* Screen */}
                          <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-black">
                            {/* Video Content */}
                            <div className="absolute inset-0">
                              <video
                                ref={(el) => {
                                  videoRefs.current[1] = el;
                                }}
                                poster={VIDEO_PREVIEW[1].thumbnail}
                                className="h-full w-full object-cover"
                                muted={isMuted}
                                loop
                                playsInline
                                // autoPlay
                                preload="metadata">
                                <source
                                  src={VIDEO_PREVIEW[1].videoSrc}
                                  type="video/mp4"
                                />
                              </video>

                              {/* Mute/Unmute Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMute();
                                }}
                                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70">
                                {isMuted ? (
                                  <VolumeX className="h-4 w-4 text-white" />
                                ) : (
                                  <Volume2 className="h-4 w-4 text-white" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Desktop: Full stacked video experience */
                  <div className="relative mx-auto mt-8 w-full">
                    {VIDEO_PREVIEW.map((card, index) => {
                      return (
                        <motion.div
                          key={index}
                          className="absolute left-1/2 top-1/2 cursor-pointer overflow-hidden"
                          style={{
                            transformOrigin: "center center",
                            zIndex: hoveredCard === index ? 50 : card.zIndex,
                          }}
                          initial={{
                            x: "-50%",
                            y: "-50%",
                            translateX: card.translateX,
                            translateY: card.translateY,
                            rotate: card.rotation,
                          }}
                          animate={{
                            x: "-50%",
                            y: "-50%",
                            translateX: card.translateX,
                            translateY: card.translateY,
                            rotate: card.rotation,
                            scale: hoveredCard === index ? 1.1 : 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          onMouseEnter={() => handleCardHover(index)}
                          onMouseLeave={handleCardLeave}>
                          {/* Mobile Phone Frame */}
                          <div className="relative h-[500px] w-[240px] overflow-hidden">
                            {/* Phone Body */}
                            <div className="relative h-full w-full rounded-[32px] bg-gradient-to-b from-gray-800 to-gray-900 p-1 shadow-2xl">
                              {/* Screen */}
                              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-black">
                                {/* Video Content */}
                                <div className="absolute inset-0">
                                  <video
                                    ref={(el) => {
                                      videoRefs.current[index] = el;
                                    }}
                                    poster={card.thumbnail}
                                    className="h-full w-full object-cover"
                                    muted={isMuted}
                                    loop
                                    playsInline
                                    autoPlay
                                    preload="metadata">
                                    <source
                                      src={card.videoSrc}
                                      type="video/mp4"
                                    />
                                  </video>

                                  {/* Mute/Unmute Button */}
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleMute();
                                    }}
                                    className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/70">
                                    {isMuted ? (
                                      <VolumeX className="h-4 w-4 text-white" />
                                    ) : (
                                      <Volume2 className="h-4 w-4 text-white" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </HeroHighlight>
    </section>
  );
}
