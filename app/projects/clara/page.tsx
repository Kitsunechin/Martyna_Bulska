"use client";

import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import ClaraContent from "@/components/clara-content";
import PortfolioNav from "@/components/portfolio-nav";

export default function ClaraPage() {
  return (
    <>
      <PortfolioNav />
      <HeroScrollAnimation
        videoSrc="/images/Clara.png"
        titleLine1="AI Recruiter Clara"
        titleLine2="Unified Recruitment Experience"
        isImage={true}
      >
        <ClaraContent />
      </HeroScrollAnimation>
    </>
  );
}