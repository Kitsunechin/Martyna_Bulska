"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import GamificationCaseStudyContent from "@/components/gamification-case-study-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function GamificationPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/Gamification.mp4"
        titleLine1="Worker Engagement"
        titleLine2="Gamification System"
        subtitle="Scroll to explore how we boosted worker motivation through achievement systems and progress tracking"
      >
        <GamificationCaseStudyContent />
      </HeroScrollAnimation>
    </>
  );
}