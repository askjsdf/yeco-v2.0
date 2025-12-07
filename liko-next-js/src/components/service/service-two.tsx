import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "社交聆听",
    desc: "深入 Instagram、TikTok 与 Reddit 的全球舆论场。我们在海量噪音中，捕捉用户未被满足的真实心声与审美潜流。",
  },
  {
    id: 2,
    icon: ser_2,
    title: "数据智能",
    desc: "自研AI 算法处理海量市场数据。从混沌的信息中识别增长模式，用理性的量化分析，为感性的设计直觉提供坚实支撑。",
  },
  {
    id: 3,
    icon: ser_3,
    title: "文化转译",
    desc: "既解码在地文化的隐喻，又重塑设计的表达。我们将理性的趋势洞察，「翻译」为可感知的视觉符号，让全球化设计在本土精准着陆。",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Research Methodology
              </span>
              <h4 className="tp-section-title-40">
                从数据到洞察 创造可预见的美
              </h4>
              <p className="tp-service-2-desc mt-20" style={{ fontSize: '28px', lineHeight: '1.8' }}>
                YECO 将严谨的数据科学与敏锐的文化直觉结合，把不确定的审美趋势，转化为可确定的商业增长。
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
