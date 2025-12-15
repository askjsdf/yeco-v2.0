'use client';
import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import { useTranslation } from "@/i18n/hooks/useTranslation";

export default function AboutYecoHero() {
  const { t, isRTL } = useTranslation();

  // RTL 模式下竖条装饰线样式调整
  const subtitleStyle: React.CSSProperties = isRTL ? {
    paddingLeft: 0,
    paddingRight: '14px',
  } : { marginBottom: '20px', display: 'block' };

  // RTL 模式下滚动提示位置调整
  const scrollStyle: React.CSSProperties = isRTL ? {
    left: '60px',
    right: 'auto',
  } : {};

  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{
        backgroundImage: "url(/assets/img/about-yeco/banner.png)",
        fontFamily: 'var(--tp-ff-noto-serif-sc), serif'
      }}
    >
      <div className="breadcurmb-site d-none">
        <h6>{t.about.hero.breadcrumb}</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth" style={scrollStyle}>
        <a className="pointer" onClick={scrollTo}>
          <span>
            {t.about.hero.scrollHint}
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span
                className={isRTL ? '' : 'ab-inner-hero-subtitle'}
                style={isRTL ? {
                  fontSize: '15px',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textTransform: 'uppercase' as const,
                  color: '#fff',
                  display: 'inline-block',
                  position: 'relative' as const,
                  paddingRight: '14px',
                  marginBottom: '20px',
                  borderRight: '2px solid #fff',
                } : { marginBottom: '20px', display: 'block' }}
              >
                {t.about.hero.subtitle}
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation" style={{ fontSize: '84px' }}>
                {t.about.hero.title}
              </h1>
              <p>{t.about.hero.tagline}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
                {t.about.hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
