"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base max-w-sm text-left mx-0 text-muted-foreground my-2">
      {children}
    </p>
  );
};

const TextToVideoSkeleton = () => (
  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black">
    <div className="absolute inset-4">
      <div className="mb-4 flex gap-2">
        <div className="rounded bg-white/20 px-2 py-1 text-xs text-white">1m</div>
        <div className="rounded bg-white/20 px-2 py-1 text-xs text-white">2m</div>
        <div className="rounded bg-white/20 px-2 py-1 text-xs text-white">3m</div>
      </div>
      <div className="mb-2 text-sm text-white">Generate</div>
      <div className="flex h-16 items-center justify-center rounded bg-white/10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
      </div>
    </div>
  </div>
);

const AIPhotoSkeleton = () => (
  <div className="grid h-full w-full grid-cols-2 gap-2">
    <div className="rounded-lg bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500" />
    <div className="rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500" />
    <div className="rounded-lg bg-gradient-to-br from-green-400 via-teal-500 to-blue-500" />
    <div className="rounded-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500" />
  </div>
);

const VideoSkeleton = () => (
  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
    <div className="absolute bottom-4 left-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
    </div>
  </div>
);

const VoiceoverSkeleton = () => (
  <div className="h-full w-full rounded-lg bg-card border border-border p-4">
    <div className="space-y-3">
      {[
        { name: "Adam", desc: "Male, middle-aged", status: "▶" },
        { name: "Charlotte", desc: "Female, young", status: "▶" },
        { name: "Will", desc: "Male, young", status: "Playing..." },
        { name: "Bryan", desc: "Male, old", status: "▶" },
        { name: "Audrey", desc: "Female, middle-aged", status: "▶" },
      ].map((voice, i) => (
        <div key={i} className="flex items-center justify-between text-sm">
          <div>
            <div className="font-semibold text-foreground">{voice.name}</div>
            <div className="text-xs text-muted-foreground">{voice.desc}</div>
          </div>
          <div className="rounded bg-green-100 px-2 py-1 text-xs">{voice.status}</div>
        </div>
      ))}
    </div>
  </div>
);

const CaptionsSkeleton = () => (
  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute bottom-4 left-4 right-4">
      <div className="rounded-lg bg-white/90 px-4 py-2 text-center font-semibold text-black">
        Beautiful captions overlay
      </div>
    </div>
  </div>
);

export default function FeaturesSection() {
  const features = [
    {
      title: "The most powerful Text to Video tool",
      description: "Generate a script with AI, choose a style, a voice and a background and get a video in seconds.",
      skeleton: <TextToVideoSkeleton />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-border",
    },
    {
      title: "AI Photo (realistic images)",
      description: "Generate realistic images with advanced AI models for your videos.",
      skeleton: <AIPhotoSkeleton />,
      className: "col-span-1 lg:col-span-2 border-b border-border",
    },
    {
      title: "Turn images into videos",
      description: "Make your videos more engaging by turning AI images into videos.",
      skeleton: <VideoSkeleton />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-b border-border",
    },
    {
      title: "Automatic Voiceover",
      description: "Use ElevenLabs & OpenAI voices to generate videos with real human voices.",
      skeleton: <VoiceoverSkeleton />,
      className: "col-span-1 lg:col-span-3 border-border",
    },
    {
      title: "Beautiful customizable captions",
      description: "Your videos come with beautiful, customizable captions.",
      skeleton: <CaptionsSkeleton />,
      className: "col-span-1 lg:col-span-2 border-border",
    },
  ];

  return (
    <section className="w-full px-4 py-20 lg:py-40">
      <motion.div
        className="relative z-20 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-6xl">
            Telling Stories has never been this easy
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            From image generation to video generation, StoryShort can generate any style of video in seconds.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 border border-border rounded-md lg:grid-cols-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
