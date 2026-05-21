"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import HumadroidContent from "@/components/humadroid-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function HumadroidPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/video/humadroid.mp4"
        titleLine1="Revamping Internal Management System"
        titleLine2="Enhanced Employee Management Experience"
        subtitle="Scroll to explore the design process and improvements of the internal management system redesign"
        isDesktop={true}
      >
        <HumadroidContent />
      </HeroScrollAnimation>
    </>
  );
}