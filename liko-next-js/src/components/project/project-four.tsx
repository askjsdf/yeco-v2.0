import React from "react";
import Image from "next/image";

// images
import port_1 from "@/assets/img/home-13/file2.jpg";
import port_2 from "@/assets/img/home-13/file7.jpg";
import port_3 from "@/assets/img/home-13/file1.jpg";
import port_4 from "@/assets/img/home-13/file5.jpg";
import port_5 from "@/assets/img/home-13/file4.jpg";
import port_6 from "@/assets/img/home-13/file6.jpg";
import port_7 from "@/assets/img/home-13/file3.jpg";
import port_8 from "@/assets/img/home-13/file8.jpg";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    title: "多元共生",
    subtitle: "置身于世界的广角，汲取全球文化的土壤",
    description: "打破疆界，重组异质美学。我们在差异中寻找和谐，创造出跨越国界、能被全人类共同理解的设计语言。",
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    title: "功能诗意",
    subtitle: "功能是理性的骨骼，诗意是感性的血肉",
    description: "解决需求仅是起点。在严谨逻辑中注入感性温度，把交互转化为优雅体验，赋予日常使用不可复制的仪式感。",
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    title: "情绪美学",
    subtitle: "设计不仅被看见，更需被感知",
    description: "物体是心境的投射。深挖潜意识需求，让设计成为承载情绪的容器，于喧嚣中构建人与物之间深层的精神共鸣。",
  },
  {
    id: 4,
    img_1: port_7,
    img_2: port_8,
    title: "进化与共振",
    subtitle: "洞察趋势的流动，预判前沿的变化",
    description: "敏锐捕捉时代脉搏，将前瞻需求转化为设计动力。在回应商业渴望的同时，以进化的姿态，持续定义未来生活。",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <style jsx>{`
                  .responsive-title {
                    white-space: normal;
                    font-family: var(--tp-ff-noto-serif-sc), serif;
                    font-size: 140px;
                    line-height: 1.4;
                    letter-spacing: normal;
                  }
                  @media (max-width: 1399px) {
                    .responsive-title {
                      font-size: 110px;
                    }
                  }
                  @media (max-width: 1199px) {
                    .responsive-title {
                      font-size: 90px;
                    }
                  }
                  @media (max-width: 991px) {
                    .responsive-title {
                      font-size: 70px;
                    }
                  }
                  @media (max-width: 767px) {
                    .responsive-title {
                      font-size: 50px;
                    }
                  }
                  .responsive-line {
                    white-space: nowrap;
                    display: block;
                  }
                  .responsive-line-left {
                    text-align: left;
                    padding-left: 160px;
                  }
                  .responsive-line-right {
                    text-align: right;
                    padding-right: 160px;
                  }
                  @media (max-width: 1399px) {
                    .responsive-line-left {
                      padding-left: 120px;
                    }
                    .responsive-line-right {
                      padding-right: 120px;
                    }
                  }
                  @media (max-width: 1199px) {
                    .responsive-line-left {
                      padding-left: 80px;
                    }
                    .responsive-line-right {
                      padding-right: 80px;
                    }
                  }
                  @media (max-width: 991px) {
                    .responsive-line-left {
                      padding-left: 50px;
                    }
                    .responsive-line-right {
                      padding-right: 50px;
                    }
                  }
                  @media (max-width: 767px) {
                    .responsive-line-left {
                      padding-left: 20px;
                    }
                    .responsive-line-right {
                      padding-right: 20px;
                    }
                  }
                  .english-text {
                    font-family: var(--tp-ff-marcellus), serif;
                    font-size: 0.5em;
                    padding-left: 0;
                    display: inline;
                    color: #999999;
                    letter-spacing: 0.05em;
                  }
                `}</style>
                <h4 className="tp-section-title-200 tp_reveal_anim responsive-title">
                  <span className="responsive-line responsive-line-left">设计 <span className="english-text">Design</span></span>
                  <br />
                  <span className="responsive-line responsive-line-right"><span className="english-text">Principle</span> 准则</span>
                </h4>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm" style={{ marginTop: '80px', marginBottom: '50px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif', fontSize: '70px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '28px', lineHeight: '1.6', color: '#999999', padding: '0 20px', marginBottom: '180px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                        {item.subtitle}
                      </p>
                      <p style={{ fontSize: '20px', lineHeight: '2', color: '#cccccc', padding: '0 20px', fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                        {item.description}
                      </p>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
