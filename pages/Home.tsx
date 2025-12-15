import React from 'react';
import { HeroText } from '../components/HeroText';
import { FeatureCard } from '../components/FeatureCard';
import { MaterialsCard } from '../components/MaterialsCard';
import { StatsSection } from '../components/StatsSection';

export const Home: React.FC = () => {
  return (
    <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 px-6 md:px-16 py-8 lg:py-16">
      {/* Left Column: Hero Text + Material Card */}
      <div className="lg:col-span-5 flex flex-col gap-24">
        {/* Top: Typography */}
        <div className="mt-4 lg:mt-12">
          <HeroText />
        </div>

        {/* Bottom: Material Card */}
        <div className="w-full max-w-sm hidden lg:block ml-1">
          <MaterialsCard />
        </div>
      </div>

      {/* Right Column: Feature Card + Stats */}
      <div className="lg:col-span-7 flex flex-col justify-between gap-16">
        
        {/* Top Right: Feature Card */}
        <div className="lg:mt-4">
           <FeatureCard />
        </div>

        {/* Bottom Right: Stats Area */}
        <div className="mt-auto pb-4 lg:pb-0">
           <StatsSection />
        </div>
      </div>

      {/* Mobile Only: Material Card */}
      <div className="lg:hidden col-span-1 mt-8">
        <MaterialsCard />
      </div>
    </div>
  );
};