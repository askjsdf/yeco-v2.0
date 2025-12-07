import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";

const counter_data = [
  {
    id: 1,
    title: "完成项目",
    count: 500,
    text: "+",
  },
  {
    id: 2,
    title: "行业经验",
    count: 10,
    text: "年+",
  },
  {
    id: 3,
    title: "合作品牌",
    count: 50,
    text: "+",
  },
  {
    id: 4,
    title: "客户满意度",
    count: 98,
    text: "%",
  },
];

export default function FunFactYeco() {
  return (
    <div className="ab-funfact-area pb-40" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
                数据亮点
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                YECO <br /> 成长历程
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row gx-75">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        <CounterItem min={0} max={item.count} />
                        {item.text}
                      </span>
                      <p>{item.title}</p>
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
