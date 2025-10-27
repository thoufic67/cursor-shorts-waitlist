"use client";

import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeaturesSectionDemo from "@/components/features-section-demo-1";
import BillingFAQ from "@/components/billing-faq";
import Particles from "@/components/ui/particles";

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

      <div id="features">
        <FeaturesSectionDemo />
      </div>

      <BillingFAQ />

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
