'use client';
import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";
import { useTranslation } from "@/i18n/hooks/useTranslation";

export default function FunFactYeco() {
  const { t } = useTranslation();

  const counter_data = t.about.funFact.items.map((item, index) => ({
    id: index + 1,
    title: item.label,
    count: item.count,
    text: item.suffix,
  }));
  return (
    <div className="ab-funfact-area pb-40" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
                {t.about.funFact.subtitle}
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                {t.about.funFact.title} <br /> {t.about.funFact.titleLine2}
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
