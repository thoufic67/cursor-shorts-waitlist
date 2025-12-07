import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import VideoGallery from '@/components/video-gallery';
import Features from '@/components/features';
import Footer from '@/components/footer';
import ModelShowcase from '@/components/ui/model-showcase';
import CTASection from '@/components/cta-section';
import FAQ from '@/components/faq';

function App() {
  return (
    <div className="min-h-screen text-brand-black font-sans selection:bg-brand-blue selection:text-white">
      {/* <Navbar /> */}
      <main>
        <Hero />
        <VideoGallery />
        <Features />
        <CTASection />
        <FAQ />
        {/* <ModelShowcase /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;