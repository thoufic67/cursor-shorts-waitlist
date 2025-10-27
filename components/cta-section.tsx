"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import posthog from "posthog-js";

export default function CTASection() {
  const handleGetStarted = () => {
    posthog?.capture("cta_section_get_started_clicked", {
      location: "cta_section",
    });
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    if (appUrl) {
      window.location.href = appUrl;
    }
  };

  return (
    <div className="relative z-20 mx-auto max-w-7xl px-8 py-20 lg:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Content Creation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-200 sm:text-lg md:text-xl">
              Experience AI-powered video creation for TikTok and YouTube. Start
              creating engaging content in minutes.
            </p>
            <Button
              onClick={handleGetStarted}
              className="z-50 mt-8 bg-white px-8 py-6 text-base font-semibold text-slate-900 hover:bg-neutral-100 sm:text-lg">
              Get Started
            </Button>
          </div>
        </WobbleCard>
      </motion.div>
    </div>
  );
}
