import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { IconPlayerPlay, IconPlayerPause } from "@tabler/icons-react";
import { Compare } from "@/components/ui/compare";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Super simple editor",
      description:
        "Edit image, animate, change captions, add effects with just one click",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Realistic Voice, Music, AI Images & videos",
      description:
        "Create stunning, photorealistic images with advanced AI models. Perfect for any video style or genre.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "AI Script Generation",
      description:
        "Generate compelling scripts with AI. Choose a style, voice, and background to create engaging video content in seconds.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Create in 29 Languages",
      description:
        "Create stories in any languages powered by Elevenlabs & Openai.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      <motion.div
        className="px-8"
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}>
        <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white lg:text-5xl lg:leading-tight">
          Everything you need to create a viral video
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 dark:text-neutral-300 lg:text-base">
          From idea to viral video, our AI does it all giving you plug-and-play
          tools to create content that spreads in minutes.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          className="mt-12 grid grid-cols-1 rounded-md dark:border-neutral-800 lg:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={feature.className}>
              <FeatureCard>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative h-full overflow-hidden p-4 sm:p-8">{children}</div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black dark:text-white md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm",
      )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="group mx-auto h-full w-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          {/* AI Script Generation Interface */}

          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-bottom-left relative bottom-8 h-full w-full object-cover">
            <source
              src="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/Video%20Editor%20Demo%20Compressed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="group/image relative flex h-full gap-10 overflow-hidden rounded-lg">
      <div className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative bottom-12 h-full w-full rounded-lg object-cover object-center">
          <source
            src="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/Script%20Writing%20Demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const components = [VoiceSelector, ImageVideoCompare, VoiceSelector];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      <div className="-ml-20 flex flex-row">
        {components.map((Component, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <Component />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {components.map((Component, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="-mr-4 mt-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <Component />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent dark:bg-transparent md:h-60">
      <Globe className="absolute -bottom-80 -right-10 md:-bottom-72 md:-right-10" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export const ImageVideoCompare = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
      <ImageVideoCompareComponent />
    </div>
  );
};

const ImageVideoCompareComponent = () => {
  return (
    <div className="relative size-40 select-none overflow-hidden rounded-lg">
      <Compare
        firstImage="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/JohnWickCathedral.jpg"
        secondImage=""
        className="size-40 rounded-lg"
        slideMode="hover"
        showHandlebar={true}
        autoplay={false}
      />
      {/* Video element positioned as the second "image" */}
      <video
        className="absolute left-0 top-0 z-[18] h-full w-full rounded-lg object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/JohnWickCathedral.jpg">
        <source
          src="https://assets.cursorshorts.com/cursorshorts/assets/landingPage/John%20Wick%20Cathedral%20Video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const VoiceSelector = () => {
  const voices = [
    { name: "Antoni", description: "Deep and rich", isPlaying: false },
    { name: "Domi", description: "Confident and strong", isPlaying: false },
    { name: "Bella", description: "Warm and friendly", isPlaying: true },
    // { name: "Bryan", description: "Male, old", isPlaying: false },
    // { name: "Audrey", description: "Female, middle-aged", isPlaying: false },
  ];

  return (
    <div className="mx-auto overflow-hidden rounded-lg bg-white p-2 shadow-lg dark:bg-neutral-900 md:h-40 md:w-40">
      <div className="space-y-4">
        {voices.map((voice) => (
          <VoiceItem key={voice.name} voice={voice} />
        ))}
      </div>
    </div>
  );
};

const VoiceItem = ({
  voice,
}: {
  voice: { name: string; description: string; isPlaying: boolean };
}) => {
  return (
    <div className="rounded-lgtransition-colors flex select-none items-center justify-between rounded-lg p-1 hover:bg-neutral-50 dark:hover:bg-neutral-800">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {voice.name}
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {voice.description}
        </p>
      </div>

      <div className="">
        {voice.isPlaying ? (
          <button
            className="rounded-full p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700"
            onClick={() => {
              // No action when pressed as requested
            }}>
            <IconPlayerPause className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          </button>
        ) : (
          <button
            className="rounded-full p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700"
            onClick={() => {
              // No action when pressed as requested
            }}>
            <IconPlayerPlay className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          </button>
        )}
      </div>
    </div>
  );
};
