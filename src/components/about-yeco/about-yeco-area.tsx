'use client';
import React from "react";
import Image from "next/image";
import { Hand } from "../svg";
import { useTranslation } from "@/i18n/hooks/useTranslation";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/about-yeco/about-1.png";
import ab_2 from "@/assets/img/about-yeco/about-3.png";
import ab_3 from "@/assets/img/about-yeco/about-2.png";

export default function AboutYecoArea() {
  const { t, isRTL } = useTranslation();

  // RTL 模式下 greeting 标签位置调整
  const greetingStyle: React.CSSProperties = isRTL ? {
    left: 'auto',
    right: '20px',
  } : {};

  // RTL 模式下箭头图片水平翻转并调整位置
  const shapeStyle: React.CSSProperties = isRTL ? {
    transform: 'scaleX(-1)',
    left: '5%',
    right: 'auto',
  } : {};

  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="YECO设计作品"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="YECO设计作品"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="YECO设计作品"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span style={greetingStyle}>
                <Hand />
                {t.about.intro.greeting}
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                {t.about.intro.paragraph}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    {t.about.intro.servicesTitle} <br />
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                    style={shapeStyle}
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        {t.about.intro.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
