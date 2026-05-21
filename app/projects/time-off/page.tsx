"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import TimeOffContent from "@/components/time-off-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function TimeOffPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/time_off.MP4"
        titleLine1="Time-Off System"
        titleLine2="Absence Reporting & Scheduling"
        subtitle="Scroll to explore the design process and impact of the time-off reporting system"
      >
        <TimeOffContent />
      </HeroScrollAnimation>
    </>
  );
}