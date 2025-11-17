'use client';

import StoriesUpdates from '../components/sections/StoriesUpdates';
import Challenge from '@/components/sections/Challenge';
import Hero from '@/components/sections/Hero';
import TheoryOfChange from '@/components/sections/TheoryOfChange';
import VideoReels from '@/components/sections/VideoReels';
import RootCause from '@/components/sections/RootCause';


export default function Home() {

  return (
    <div className="bg-white">
      {/* Hero Section - Minimal Design Like Educate Girls */}
      <Hero />

      {/* Challenge Section - Professional NGO Design */}
      <Challenge />

      {/* Root Causes - Clean analysis */}
      <RootCause />

      {/* Video Reels Section */}
      <VideoReels />

      {/* Theory of Change - Elegant timeline */}
      <TheoryOfChange />

      {/* Stories & Updates Section */}
      <StoriesUpdates />
    </div>
  );
}