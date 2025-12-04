'use client';

import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import SignatureExperiences from '@/components/sections/SignatureExperiences';
import VideoReels from '@/components/sections/VideoReels';
import WhyTeamsLove from '@/components/sections/WhyTeamsLove';
import ClientLogos from '@/components/sections/ClientLogos';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* What We Do - Interactive description */}
      <WhatWeDo />

      {/* Signature Experiences - Interactive Cards */}
      <SignatureExperiences />

      {/* Video Reels - Showcase our events */}
      <VideoReels />

      {/* Why Teams Love Us - Animated Benefits */}
      <WhyTeamsLove />

      {/* Client Logos & Cities */}
      <ClientLogos />


    </div>
  );
}
