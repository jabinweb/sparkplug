import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import SignatureExperiences from '@/components/sections/SignatureExperiences';
import VideoReels from '@/components/sections/VideoReels';
import WhyTeamsLove from '@/components/sections/WhyTeamsLove';
import ClientLogos from '@/components/sections/ClientLogos';
import { getAllSiteContent } from '@/lib/getContent';

export const revalidate = 0; // Revalidate on every request (for now)

export default async function Home() {
  const siteContent = await getAllSiteContent();
  
  return (
    <div className="bg-[var(--color-bg-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <Hero siteContent={siteContent} />

      {/* What We Do - Interactive description */}
      <WhatWeDo siteContent={siteContent} />

      {/* Signature Experiences - Interactive Cards */}
      <SignatureExperiences siteContent={siteContent} />

      {/* Why Teams Love Us - Animated Benefits */}
      <WhyTeamsLove siteContent={siteContent} />
      
      {/* Client Logos & Cities */}
      <ClientLogos siteContent={siteContent} />


      {/* Video Reels - Showcase our events */}
      <VideoReels siteContent={siteContent} />

    </div>
  );
}
