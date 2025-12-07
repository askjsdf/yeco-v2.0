import React from "react";
import Link from "next/link";
// internal imports
import { ArrowBg, RightArrowTwo } from "../svg";
import PerfumeBottle3D from "./perfume-bottle-3d";

export default function AboutThree() {

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
                  Design Philosophy
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                美，本无国界
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
                创作，是沉醉于跨越山川与湖海的连接，是痴迷于历史与未来的共鸣。我们享受着将多元的文化，融合编织进生活的每一个瞬间，那种让隔阂消弥、让共鸣发生的时刻，是我们创作中最耀眼的光芒。
              </p>
              <p className="mb-45 tp_fade_bottom">
                我们相信，最好的设计，是让全人类都能动容的语言。
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                About Us
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
