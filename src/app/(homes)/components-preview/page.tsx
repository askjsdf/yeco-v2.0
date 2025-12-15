"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterFour from "@/layouts/footers/footer-four";

// ==================== CONTACT 组件 ====================
import ContactOne from "@/components/contact/contact-one";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import ContactLocation2 from "@/components/contact/contact-location-2";
import ContactForm from "@/components/form/contact-form";

// ==================== ABOUT 组件 ====================
import AboutOne from "@/components/about/about-one";
import AboutTwo from "@/components/about/about-two";
import AboutThree from "@/components/about/about-three";
import AboutFour from "@/components/about/about-four";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import AboutMeHero from "@/components/about/about-me-hero";
import AboutMeArea from "@/components/about/about-me-area";

// ==================== YECO ABOUT 组件 ====================
import AboutYecoHero from "@/components/about-yeco/about-yeco-hero";
import AboutYecoArea from "@/components/about-yeco/about-yeco-area";

// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";

// 分隔线组件
const SectionDivider = ({ title }: { title: string }) => (
  <div style={{
    background: 'linear-gradient(90deg, #333, #666, #333)',
    padding: '40px 20px',
    textAlign: 'center',
    margin: '0',
  }}>
    <h2 style={{
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      margin: 0,
      fontFamily: 'var(--tp-ff-noto-serif-sc), serif',
    }}>
      {title}
    </h2>
  </div>
);

const ComponentsPreviewPage = () => {
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
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* ==================== CONTACT 组件预览 ==================== */}

            <SectionDivider title="ContactOne - 联系方式卡片" />
            <ContactOne />

            <SectionDivider title="ContactTwo - 联系表单 + 信息" />
            <ContactTwo />

            <SectionDivider title="ContactLocation - 地图位置" />
            <ContactLocation />

            <SectionDivider title="ContactLocation2 - 地图位置2" />
            <ContactLocation2 />

            <SectionDivider title="ContactForm - 独立表单" />
            <div style={{ padding: '60px 0', background: '#f5f5f5' }}>
              <div className="container">
                <ContactForm />
              </div>
            </div>

            {/* ==================== ABOUT 组件预览 ==================== */}

            <SectionDivider title="AboutOne - 关于我们1" />
            <AboutOne />

            <SectionDivider title="AboutTwo - 关于我们2" />
            <AboutTwo />

            <SectionDivider title="AboutThree - 关于我们3" />
            <AboutThree />

            <SectionDivider title="AboutFour - 关于我们4" />
            <AboutFour />

            <SectionDivider title="AboutUsHero - 关于我们Hero" />
            <AboutUsHero />

            <SectionDivider title="AboutUsArea - 关于我们区域" />
            <AboutUsArea />

            <SectionDivider title="AboutMeHero - 个人介绍Hero" />
            <AboutMeHero />

            <SectionDivider title="AboutMeArea - 个人介绍区域" />
            <AboutMeArea />

            {/* ==================== YECO ABOUT 组件预览 ==================== */}

            <SectionDivider title="AboutYecoHero - YECO关于Hero" />
            <AboutYecoHero />

            <SectionDivider title="AboutYecoArea - YECO关于区域" />
            <AboutYecoArea />

          </main>

          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default ComponentsPreviewPage;
