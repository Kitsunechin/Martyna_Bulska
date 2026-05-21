"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import ShiftSatisfactionContent from "@/components/shift-satisfaction-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function ShiftSatisfactionPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/satisfaction.mp4"
        titleLine1="Shift Feedback System"
        titleLine2="Worker Satisfaction & Voice"
        subtitle="Scroll to explore the design process and impact of the shift feedback system"
      >
        <ShiftSatisfactionContent />
      </HeroScrollAnimation>
    </>
  );
}