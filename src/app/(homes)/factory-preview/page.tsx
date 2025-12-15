"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterFour from "@/layouts/footers/footer-four";

// ==================== 适合展示工厂的组件 ====================

// Project 组件 - 适合展示工厂图片
import ProjectOne from "@/components/project/project-one";
import ProjectThree from "@/components/project/project-three";
import ProjectFive from "@/components/project/project-five";

// Portfolio 组件 - 网格展示
import PortfolioGridColThreeArea from "@/components/portfolio/portfolio-grid-col-3-area";

// Gallery 组件 - 轮播展示
import GalleryOne from "@/components/gallery/gallery-one";

// Mission 组件 - 图文结合
import MissionOne from "@/components/mission/mission-one";

// Service 组件 - 服务/能力列表
import ServiceTwo from "@/components/service/service-two";
import ServiceThree from "@/components/service/service-three";

// Fun Fact 组件 - 数据展示
import FunFactOne from "@/components/fun-fact/fun-fact-one";

// Instagram 组件 - 图片散落布局
import InstagramArea from "@/components/instagram/instagram-area";

// About 组件 - 文字+能力描述
import AboutFour from "@/components/about/about-four";

// animation
import { charAnimation, fadeAnimation, titleAnimation, revelAnimationOne } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { projectThreeAnimation } from "@/utils/project-anim";

// 分隔线组件
const SectionDivider = ({ title, description }: { title: string; description?: string }) => (
  <div style={{
    background: 'linear-gradient(90deg, #1a5f2a, #2d8a3e, #1a5f2a)',
    padding: '60px 20px',
    textAlign: 'center',
    margin: '0',
  }}>
    <h2 style={{
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      margin: 0,
      fontFamily: 'var(--tp-ff-noto-serif-sc), serif',
    }}>
      {title}
    </h2>
    {description && (
      <p style={{
        color: 'rgba(255,255,255,0.8)',
        fontSize: '16px',
        marginTop: '15px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {description}
      </p>
    )}
  </div>
);

const FactoryPreviewPage = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
      revelAnimationOne();
      hoverBtn();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* ==================== PROJECT 组件 - 适合展示工厂大图 ==================== */}

            <SectionDivider
              title="ProjectOne - 交错布局大图展示"
              description="适合展示工厂环境、生产车间的大幅图片，左右交错排列"
            />
            <ProjectOne style_2={true} />

            <SectionDivider
              title="ProjectThree - 全屏横向滑动"
              description="全屏宽度的图片滑动展示，适合震撼的工厂全景图"
            />
            <ProjectThree />

            <SectionDivider
              title="ProjectFive - 双列网格展示"
              description="两列网格布局，适合展示多个生产环节或设备"
            />
            <ProjectFive style_2={true} />

            {/* ==================== GALLERY 组件 - 无限滚动 ==================== */}

            <SectionDivider
              title="GalleryOne - 无限滚动轮播"
              description="自动滚动的图片轮播，适合展示工厂产品线或生产流程"
            />
            <GalleryOne />

            {/* ==================== PORTFOLIO 组件 - 网格筛选 ==================== */}

            <SectionDivider
              title="PortfolioGridColThreeArea - 三列网格 + 筛选"
              description="带分类筛选的三列网格，适合展示不同类型的生产能力"
            />
            <PortfolioGridColThreeArea />

            {/* ==================== MISSION 组件 - 图文结合 ==================== */}

            <SectionDivider
              title="MissionOne - 大图 + 文字描述"
              description="左图右文布局，适合介绍工厂愿景和生产理念"
            />
            <MissionOne />

            {/* ==================== SERVICE 组件 - 能力列表 ==================== */}

            <SectionDivider
              title="ServiceTwo - 手风琴列表"
              description="可展开的列表，适合详细介绍各项生产能力"
            />
            <ServiceTwo />

            <SectionDivider
              title="ServiceThree - 卡片滑动"
              description="横向滑动的卡片，适合展示多项服务或工艺"
            />
            <ServiceThree />

            {/* ==================== FUN FACT 组件 - 数据展示 ==================== */}

            <SectionDivider
              title="FunFactOne - 数字统计"
              description="大数字展示，适合展示工厂产能、年产量、客户数等"
            />
            <FunFactOne />

            {/* ==================== ABOUT 组件 - 能力描述 ==================== */}

            <SectionDivider
              title="AboutFour - 能力分类 + 描述"
              description="左侧能力标签，右侧详细描述，适合介绍生产能力分类"
            />
            <AboutFour />

            {/* ==================== INSTAGRAM 组件 - 散落图片 ==================== */}

            <SectionDivider
              title="InstagramArea - 图片散落布局"
              description="图片散落在中心大图周围，适合创意展示"
            />
            <InstagramArea />

          </main>

          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default FactoryPreviewPage;
