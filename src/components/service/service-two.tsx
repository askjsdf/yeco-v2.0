'use client';
import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
import { useTranslation } from "@/i18n/hooks/useTranslation";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const icons = [ser_1, ser_2, ser_3];

export default function ServiceTwo() {
  const { t } = useTranslation();

  const service_accordion = t.home.methodology.items.map((item, index) => ({
    id: index + 1,
    icon: icons[index],
    title: item.title,
    desc: item.desc,
  }));

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
                {t.home.methodology.subtitle}
              </span>
              <h4 className="tp-section-title-40">
                {t.home.methodology.title}
              </h4>
              <p className="tp-service-2-desc mt-20" style={{ fontSize: '28px', lineHeight: '1.8' }}>
                {t.home.methodology.description}
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
