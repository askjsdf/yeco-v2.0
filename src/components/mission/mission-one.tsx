'use client';
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/hooks/useTranslation";

export default function MissionOne() {
  const { t, language, isRTL } = useTranslation();
  return (
    <div className="tp-mission-area pt-120 pb-120 mb-110 p-relative" style={{ position: 'relative', minHeight: '800px' }}>
      {/* 背景图 + 黑色蒙版 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}>
        <Image
          src="/assets/img/home-05/mission/image 33.png"
          alt="背景"
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* 黑色半透明蒙版 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }} />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-mission-title-box mb-80 text-center">
              {/* 非中文语言下 subtitle 显示在标题上方避免重叠 */}
              {language !== 'zh' && (
                <span className="tp-about-5-subtitle d-none d-lg-block tp_fade_left" style={{ position: 'static', display: 'block', marginBottom: '20px' }}>
                  {t.about.mission.subtitle}
                </span>
              )}
              <h4 className="tp-about-5-title tp_fade_bottom p-relative">
                {/* 中文保持原有绝对定位样式 */}
                {language === 'zh' && (
                  <span className="tp-about-5-subtitle d-none d-lg-block tp_fade_left">
                    {t.about.mission.subtitle}
                  </span>
                )}
                {t.about.mission.title} <br /> {t.about.mission.titleLine2}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-thumb">
              <Image
                data-speed=".8"
                src="/assets/img/home-05/mission/image 34.png"
                alt="thumb-img"
                width={600}
                height={400}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-content">
              <p className="tp_fade_bottom">
                {t.about.mission.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-mission-right-thumb" style={{ zIndex: 1 }}>
        <Image
          data-speed=".9"
          src="/assets/img/home-05/mission/image 36.png"
          alt="thumb-img"
          width={400}
          height={500}
          style={{ height: "auto" }}
        />
      </div>
    </div>
  );
}
