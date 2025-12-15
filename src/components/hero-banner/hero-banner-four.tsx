'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";
import SplineHeroBackground from "../spline/spline-hero-background";
import { useTranslation } from "@/i18n/hooks/useTranslation";

export default function HeroBannerFour() {
  const { t } = useTranslation();

  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Spline 3D 背景 */}
      <SplineHeroBackground />

      {/* 内容层 - 浮在 3D 背景上方 */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{t.home.hero.title}</span>
              </h4>
              <p className="tp-hero-3-description tp_reveal_anim">
                {t.home.hero.subtitle}
              </p>
              <Link className="tp-btn-black-2" href="/reportsList">
                {t.home.hero.cta}{" "}
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
