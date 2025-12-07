"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { DownArrow } from "../svg";
import { SlickNextArrow, SlickPrevArrow } from "../slick-arrow";
import { getFeaturedReports, IReportItem } from "@/data/reports-data";

// 获取精选报告数据
const featuredReports = getFeaturedReports();

// 主轮播设置
const slider_setting_one = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 1000,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};

// 缩略图导航设置
const slider_setting_two = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  focusOnSelect: true,
  centerPadding: "0",
  speed: 600,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
  ],
};

// Slider 组件类型处理
const TypedSlider = Slider as React.ComponentType<any>;

export default function ReportsBannerSlider() {
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(1);

  return (
    <div className="tp-portfolio-11-area fix" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="tp-portfolio-11-slider-wrap p-relative">
        {/* 主轮播 - 大图背景 */}
        <TypedSlider
          {...slider_setting_one}
          asNavFor={slider2}
          ref={(slider: any) => setSlider1(slider)}
          className="tp-portfolio-11-slider-active"
        >
          {featuredReports.map((item: IReportItem) => (
            <div key={item.id}>
              <div
                className="tp-portfolio-11-slider-bg pt-170 pb-150 d-flex align-items-end"
                style={{ backgroundImage: `url(${item.bannerImage})` }}
              >
                {/* 内容区域限制宽度，避免和右侧卡片重叠 */}
                <div className="tp-portfolio-11-slider-content" style={{ maxWidth: '500px' }}>
                  <div className="tp-portfolio-11-slider-link">
                    <Link href={`/reports/${item.slug}`}>
                      <DownArrow />
                    </Link>
                  </div>
                  <span className="tp-portfolio-11-slider-subtitle">
                    {item.year}.{item.month} <br /> {item.category}
                  </span>
                  <h3 className="tp-portfolio-11-slider-title" style={{ fontSize: '48px' }}>
                    <Link href={`/reports/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  {item.subtitle && (
                    <p style={{ color: '#fff', opacity: 0.7, fontSize: '18px', marginTop: '10px' }}>
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TypedSlider>

        <div className="dddd"></div>

        {/* 缩略图导航 */}
        <div className="tp-portfolio-11-slider-nav-wrap z-index-5">
          <div
            className="slides-numbers d-none d-lg-flex d-flex align-items-center"
            style={{ display: "inline-block" }}
          >
            <div className="slider-line"></div>
            <span className="active">
              {sliderIndex < 10 ? `0${sliderIndex}` : sliderIndex}
            </span>
          </div>
          <TypedSlider
            {...slider_setting_two}
            asNavFor={slider1}
            ref={(slider: any) => setSlider2(slider)}
            afterChange={(index: number) => setSliderIndex(index + 1)}
            className="tp-portfolio-11-slider-nav-active d-none d-lg-block"
          >
            {featuredReports.map((item: IReportItem) => (
              <div key={item.id}>
                <div
                  className="tp-portfolio-11-slider-nav-item p-relative"
                  style={{ margin: '0 10px' }}
                >
                  <div className="tp-portfolio-11-slider-nav-thumb">
                    {/* 固定比例容器，确保不同尺寸图片布局一致 */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '280 / 380' }}>
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        sizes="280px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="tp-portfolio-11-slider-nav-content-wrap">
                    <div className="tp-portfolio-11-slider-nav-content d-flex flex-column justify-content-between">
                      <div className="tp-portfolio-11-slider-nav-year">
                        <span>{item.year}.{item.month}</span>
                      </div>
                      <div className="tp-portfolio-11-slider-nav-tittle-box">
                        <span className="tp-portfolio-11-slider-nav-subtittle">
                          {item.category}
                        </span>
                        <h4 className="tp-portfolio-11-slider-nav-tittle">
                          <Link href={`/reports/${item.slug}`}>{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TypedSlider>
        </div>
      </div>
    </div>
  );
}
