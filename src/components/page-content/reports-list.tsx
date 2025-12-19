"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "@/plugins";
import { useTranslation } from "@/i18n/hooks/useTranslation";
import { useLanguage } from "@/i18n/LanguageContext";
gsap.registerPlugin(ScrollTrigger, SplitText);

// ==================== YECO REPORTS LIST PAGE ====================
// Header: header-one
import HeaderOne from "@/layouts/headers/header-one";

// Reports Banner Slider (报告精选轮播)
import ReportsBannerSlider from "@/components/reports/reports-banner-slider";

// Reports Grid (报告网格组件 - 带翻页)
import ReportsGridArea from "@/components/reports/reports-grid-area";

// Footer: footer-4 (深色主题)
import FooterFour from "@/layouts/footers/footer-four";

// animation
import { charAnimation, fadeAnimation, zoomAnimation } from "@/utils/title-animation";

const ReportsListMain = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      zoomAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      {/* ==================== HEADER ==================== */}
      <HeaderOne />

      <main>
        {/* ==================== REPORTS SLIDER ==================== */}
        {/* key={language} 强制在语言切换时完全重新挂载组件，避免 react-slick DOM 冲突 */}
        <ReportsBannerSlider key={`banner-slider-${language}`} />

        {/* ==================== HERO SECTION ==================== */}
        <div className="tm-hero-area tm-hero-ptb" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle" style={{ marginBottom: '30px', display: 'block' }}>{t.reports.hero.subtitle}</span>
                  <h4 className="tm-hero-title tp-char-animation" style={{ fontSize: '120px' }}>
                    {t.reports.hero.title}
                  </h4>
                </div>
                <div className="tm-hero-text tp_title_anim">
                  <p>
                    {t.reports.hero.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== REPORTS GRID ==================== */}
        <ReportsGridArea />
      </main>

      {/* ==================== FOOTER ==================== */}
      <FooterFour />
    </div>
  );
};

export default ReportsListMain;
