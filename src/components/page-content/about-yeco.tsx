"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";

// ==================== YECO ABOUT PAGE ====================
// Header: header-one (和 home-13 一致)
import HeaderOne from "@/layouts/headers/header-one";

// Footer: footer-four (和 home-13 一致)
import FooterFour from "@/layouts/footers/footer-four";

// YECO About 组件 (中文版)
import AboutYecoHero from "@/components/about-yeco/about-yeco-hero";
import AboutYecoArea from "@/components/about-yeco/about-yeco-area";
import FunFactYeco from "@/components/about-yeco/fun-fact-yeco";
import AwardYeco from "@/components/about-yeco/award-yeco";
import MissionOne from "@/components/mission/mission-one";

// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";

const AboutYecoMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* ==================== HEADER ==================== */}
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <AboutYecoHero />
            {/* about hero */}

            {/* about area */}
            <AboutYecoArea />
            {/* about area */}

            {/* mission area - 大图+文字描述 */}
            <MissionOne />
            {/* mission area */}

            {/* fun fact area */}
            <FunFactYeco />
            {/* fun fact area */}

            {/* 制造实力 area */}
            <AwardYeco cls="ab-award-style pt-120 pb-120" abStyle={true} />
            {/* 制造实力 area */}
          </main>

          {/* ==================== FOOTER ==================== */}
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutYecoMain;
