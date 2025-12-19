"use client";

import { useEffect } from "react";
import Hero from "@/components/hero";
import FeaturesAutoshorts from "@/components/features-autoshorts";
import CTASection from "@/components/cta-section";
import FAQ from "@/components/faq";
import { VideoCreationSteps } from "@/components/video-creation-steps";

export default function AutoshortsPage() {
  useEffect(() => {
    if (window.location.hash === "#features") {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen text-brand-black font-sans selection:bg-brand-blue selection:text-white">
      <main>
        <Hero
          title={<>Create <span className="text-brand-blue">Faceless Shorts</span><br />in minutes</>}
          subtitle="Generate viral faceless videos from text prompts. AI writes the script, generates visuals, adds voiceovers and captions automatically."
          ctaText="Create Faceless Short"
          ctaLink="https://app.cursorshorts.com/create-video"
          images={[
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=1000&fit=crop", // Nature
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=1000&fit=crop", // Tech
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=1000&fit=crop", // City
            "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=1000&fit=crop", // Abstract
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=1000&fit=crop", // Food
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=1000&fit=crop"  // Cat
          ]}
        />

        <FeaturesAutoshorts />

        <VideoCreationSteps />

        <CTASection />

        <FAQ />
      </main>
    </div>
  );
}
