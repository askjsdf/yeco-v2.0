'use client';
import React from "react";
import Link from "next/link";
// internal imports
import { ArrowBg, RightArrowTwo } from "../svg";
import PerfumeBottle3D from "./perfume-bottle-3d";
import { useTranslation } from "@/i18n/hooks/useTranslation";

export default function AboutThree() {
  const { t } = useTranslation();

  return (
    <div className="tp-about-3-area pt-120 pb-110" style={{ position: 'relative' }}>
      {/* 3D 背景层 - 覆盖整个区域 */}
      <PerfumeBottle3D />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span className="tp-subtitle-text tp_text_invert">
                  {t.home.about.subtitle}
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                {t.home.about.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            {/* 占位空间,保持布局 */}
            <div style={{ minHeight: '600px' }}></div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-45 tp_fade_bottom">
                {t.home.about.paragraph1}
              </p>
              <p className="mb-45 tp_fade_bottom">
                {t.home.about.paragraph2}
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-yeco">
                {t.home.about.cta}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
