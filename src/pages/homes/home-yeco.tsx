"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "@/i18n/hooks/useTranslation";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne, charAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

// ==================== YECO SELECTED COMPONENTS ====================
// Header: header-one（将被修改为 YECO 样式）
import HeaderOne from "@/layouts/headers/header-one";

// 1. Hero: hero-4
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";

// 2. Gallery: gallery-1
import GalleryOne from "@/components/gallery/gallery-one";

// 3. About: about-3
import AboutThree from "@/components/about/about-three";

// 4. Project: project-4
import ProjectFour from "@/components/project/project-four";

// 5. Video: video-2
import VideoTwo from "@/components/video/video-three";

// 6. Service: service-2
import ServiceTwo from "@/components/service/service-two";

// 7. Contact: Get in Touch + Contact Form
import ContactTwo from "@/components/contact/contact-two";

// 8. Footer: footer-4 (深色主题)
import FooterFour from "@/layouts/footers/footer-four";

const HomeThirteenMain = () => {
  useScrollSmooth();
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
      charAnimation();
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
            {/* ==================== 1. HERO BANNER ==================== */}
            {/* ID: hero-4 - 大标题+彩色圆形 */}
            <HeroBannerFour />

            {/* ==================== 2. GALLERY ==================== */}
            {/* ID: gallery-1 - Marquee无限滚动 */}
            <GalleryOne />

            {/* ==================== 3. ABOUT ==================== */}
            {/* ID: about-3 - 卡片式 */}
            <AboutThree />

            {/* ==================== 4. PROJECT ==================== */}
            {/* ID: project-4 - 2x2网格 */}
            <ProjectFour />

            {/* ==================== 5. VIDEO ==================== */}
            {/* ID: video-2 - 全屏背景 */}
            <VideoTwo />

            {/* ==================== 6. SERVICE ==================== */}
            {/* ID: service-2 - 列表式 */}
            <ServiceTwo />

            {/* ==================== 7. CONTACT ==================== */}
            {/* Get in Touch + Contact Form */}
            <div id="contact" className="tm-hero-area tm-hero-ptb p-relative" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
              <style jsx>{`
                .contact-title {
                  font-size: 120px;
                  letter-spacing: 0.05em;
                }
                @media (max-width: 991px) {
                  .contact-title {
                    font-size: 72px;
                    letter-spacing: 0.08em;
                  }
                }
                @media (max-width: 767px) {
                  .contact-title {
                    font-size: 48px;
                    letter-spacing: 0.1em;
                  }
                }
                @media (max-width: 480px) {
                  .contact-title {
                    font-size: 36px;
                    letter-spacing: 0.12em;
                  }
                }
              `}</style>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle" style={{ marginBottom: '30px', display: 'block' }}>{t.home.contact.subtitle}</span>
                      <h4 className="tm-hero-title-big tp-char-animation contact-title" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                        {t.home.contact.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactTwo />

          </main>

          {/* ==================== 8. FOOTER ==================== */}
          {/* ID: footer-4 - 深色主题 ⭐ */}
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeThirteenMain;
