"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import ProductivityContent from "@/components/productivity-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function ProductivityPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/productivity.mp4"
        titleLine1="Productivity & Fill Rate"
        titleLine2="Client Performance Analytics"
        subtitle="Scroll to explore the design process and impact of productivity analytics features"
        isImage={false}
      >
        <ProductivityContent />
      </HeroScrollAnimation>
    </>
  );
}