import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutYecoHero() {
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
        <h6>关于YECO</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            向下滚动探索
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
              <span className="ab-inner-hero-subtitle" style={{ marginBottom: '20px', display: 'block' }}>
                香水包装设计制造专家
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation" style={{ fontSize: '84px' }}>
                世界文化交融的设计力量
              </h1>
              <p>以东方美学融合全球视野，创造触动人心的包装设计</p>
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
                YECO专注于香水包装设计领域，为全球品牌提供从创意设计到生产制造的全链路设计服务
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
