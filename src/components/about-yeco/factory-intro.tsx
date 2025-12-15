'use client';
import React from 'react';
import Image from 'next/image';

// 图片路径 - 可以修改为实际的工厂图片
const IMG_BASE = '/assets/img/about-yeco/factory';

type FactorySection = {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  reverse?: boolean; // 是否反转布局（右图左文）
};

// 工厂介绍数据 - 可以根据需要修改
const factory_sections: FactorySection[] = [
  {
    id: 1,
    image: `${IMG_BASE}/factory1.jpg`,
    title: '现代化生产基地',
    subtitle: 'Manufacturing Base',
    description: '占地面积超过20,000平方米的现代化生产基地，配备国际领先的自动化生产线，年产能达到5000万件，为全球客户提供高品质的包装解决方案。',
    reverse: false,
  },
  {
    id: 2,
    image: `${IMG_BASE}/factory2.jpg`,
    title: '精密制造工艺',
    subtitle: 'Precision Craftsmanship',
    description: '引进德国、日本等国的精密加工设备，从注塑成型到表面处理，每一道工序都经过严格的品质管控，确保产品精度达到行业顶级标准。',
    reverse: true,
  },
  {
    id: 3,
    image: `${IMG_BASE}/factory3.jpg`,
    title: '严苛品质管控',
    subtitle: 'Quality Control',
    description: '通过ISO9001、ISO14001等国际认证，建立完善的品质管理体系。每批产品都经过多道检测工序，确保出厂合格率达到99.8%以上。',
    reverse: false,
  },
];

type FactorySectionItemProps = {
  section: FactorySection;
};

function FactorySectionItem({ section }: FactorySectionItemProps) {
  const imageCol = (
    <div className="col-xl-6 col-lg-6 col-md-12">
      <div
        className="factory-intro-image"
        style={{
          position: 'relative',
          height: '450px',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <Image
          src={section.image}
          alt={section.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );

  const contentCol = (
    <div className="col-xl-6 col-lg-6 col-md-12">
      <div
        className="factory-intro-content"
        style={{
          padding: section.reverse ? '40px 60px 40px 0' : '40px 0 40px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {section.subtitle && (
          <span
            style={{
              fontSize: '14px',
              letterSpacing: '2px',
              color: '#888',
              marginBottom: '15px',
              textTransform: 'uppercase',
            }}
          >
            {section.subtitle}
          </span>
        )}
        <h3
          style={{
            fontSize: '36px',
            fontWeight: '600',
            marginBottom: '25px',
            lineHeight: '1.3',
            fontFamily: 'var(--tp-ff-noto-serif-sc), serif',
          }}
        >
          {section.title}
        </h3>
        <p
          style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#555',
          }}
        >
          {section.description}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="factory-intro-section"
      style={{ marginBottom: '100px' }}
    >
      <div className="row align-items-center">
        {section.reverse ? (
          <>
            {contentCol}
            {imageCol}
          </>
        ) : (
          <>
            {imageCol}
            {contentCol}
          </>
        )}
      </div>
    </div>
  );
}

type FactoryIntroProps = {
  sections?: FactorySection[];
  showTitle?: boolean;
  title?: string;
  subtitle?: string;
};

export default function FactoryIntro({
  sections = factory_sections,
  showTitle = true,
  title = '制造实力',
  subtitle = 'Manufacturing Excellence',
}: FactoryIntroProps) {
  return (
    <div
      className="factory-intro-area"
      style={{
        padding: '120px 0',
        fontFamily: 'var(--tp-ff-noto-serif-sc), serif',
      }}
    >
      <div className="container">
        {showTitle && (
          <div className="row justify-content-center" style={{ marginBottom: '80px' }}>
            <div className="col-xl-8 text-center">
              <span
                style={{
                  fontSize: '14px',
                  letterSpacing: '3px',
                  color: '#888',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '20px',
                }}
              >
                {subtitle}
              </span>
              <h2
                style={{
                  fontSize: '48px',
                  fontWeight: '600',
                  lineHeight: '1.2',
                }}
              >
                {title}
              </h2>
            </div>
          </div>
        )}

        {sections.map((section) => (
          <FactorySectionItem key={section.id} section={section} />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .factory-intro-content {
            padding: 40px 0 !important;
          }
          .factory-intro-section {
            margin-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
