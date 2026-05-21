"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import WebRedesignContent from "@/components/web-redesign-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function WebRedesignPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/web.mp4"
        titleLine1="Web Platform Redesign"
        titleLine2="Cross-Platform Experience"
        subtitle="Scroll to explore the design process and impact of the web platform redesign"
        isDesktop={true}
      >
        <WebRedesignContent />
      </HeroScrollAnimation>
    </>
  );
}