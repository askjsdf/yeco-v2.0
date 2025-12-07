"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/img/home-01/award/award-1.png";
import a_2 from "@/assets/img/home-01/award/award-2.png";
import a_3 from "@/assets/img/home-01/award/award-3.png";
import a_4 from "@/assets/img/home-01/award/award-4.png";
import a_5 from "@/assets/img/home-01/award/award-5.png";
import a_6 from "@/assets/img/home-01/award/award-6.png";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: a_1,
    title: "10年行业深耕经验",
    date: "始于2014年",
  },
  {
    id: 2,
    img: a_2,
    title: "跨国专业设计团队",
    date: "跨国人才",
  },
  {
    id: 3,
    img: a_3,
    title: "10000平方米生产基地",
    date: "宁波总部",
  },
  {
    id: 4,
    img: a_4,
    title: "全球合作品牌",
    date: "遍布30+国家",
  },
  {
    id: 5,
    img: a_5,
    title: "ISO质量管理体系认证",
    date: "ISO 9001",
  },
  {
    id: 6,
    img: a_6,
    title: "FSC环保材料认证",
    date: "可持续发展",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const AwardYeco = ({cls="pt-125 pb-125", abStyle=false}: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`} style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  荣誉 <br /> <span>与认可</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  制造实力
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <Image
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="获奖作品"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardYeco;
