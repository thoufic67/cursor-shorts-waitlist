"use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeaturesSectionDemo from "@/components/features-section-demo-1";
import CTASection from "@/components/cta-section";
import FAQ from "@/components/faq";
import Particles from "@/components/ui/particles";
import { VideoCreationSteps } from "@/components/video-creation-steps";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#features") {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col overflow-x-clip">
      <HeroSection />

      {/* Trust Badge Section */}
      <section className="w-full border-y border-border/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground md:text-base">
              Built by Engineer from
            </span>
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
        </div>
      </section>

      <div id="features">
        <FeaturesSectionDemo />
      </div>

      <VideoCreationSteps />

      <CTASection />

      <FAQ />

      {/* <VideoCreationDemo /> */}

      {/* <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#fff"}
        refresh
      /> */}
    </main>
  );
}
