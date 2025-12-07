'use client';
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useIsotop } from "@/hooks/use-isotop";
import Image from "next/image";
import Link from "next/link";
import usePagination from "@/hooks/use-pagination";
import PaginationCom from "../ui/pagination";
import { getAllReports, categoryClassMap, IReportItem, ReportCategory } from "@/data/reports-data";

// 获取所有报告数据
const allReports = getAllReports();

// 为每个报告生成筛选用的 class
const getFilterClasses = (category: ReportCategory): string => {
  return categoryClassMap[category] || "";
};

export default function ReportsGridArea() {
  const { initIsotop, isotopContainer } = useIsotop();
  const { currentItems, handlePageClick, pageCount } = usePagination<IReportItem>(allReports, 9);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  // 自定义分页点击处理：滚动到网格区域而不是页面顶部
  const handlePageClickWithScroll = useCallback((event: { selected: number }) => {
    handlePageClick(event);
    // 延迟滚动，确保内容已更新
    setTimeout(() => {
      if (gridSectionRef.current) {
        gridSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }, [handlePageClick]);

  useEffect(() => {
    // 延迟初始化 Isotope，确保 DOM 和容器尺寸已计算完成
    const timer = setTimeout(() => {
      initIsotop();
      setIsLayoutReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [initIsotop, currentItems]);

  return (
    <div ref={gridSectionRef} className="tp-project-5-2-area tp-project-5-2-pt pb-130" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
      <div className="container container-1530">
        {/* 分类筛选按钮 */}
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
              <button data-filter="*" className="active">
                <span>全部</span>
              </button>
              <button data-filter=".cat1">
                <span>消费者洞察</span>
              </button>
              <button data-filter=".cat2">
                <span>设计趋势</span>
              </button>
              <button data-filter=".cat3">
                <span>市场分析</span>
              </button>
            </div>
          </div>
        </div>

        {/* 报告网格 */}
        <div className="row grid" ref={isotopContainer}>
          {currentItems.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${getFilterClasses(item.category)}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="查看<br>详情">
                <Link href={`/reports/${item.slug}`} className="cursor-hide">
                  {/* 固定比例容器 5:6 (宽:高)，图片 cover 填充 */}
                  <div
                    className="report-cover-container"
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '5 / 6',
                      overflow: 'hidden',
                      background: '#f0f0f0',
                    }}
                  >
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}.{item.month}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                    {item.subtitle && (
                      <p className="tp-project-5-2-subtitle" style={{ fontSize: '14px', opacity: 0.8, marginTop: '5px' }}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 分页 */}
        <div className="row">
          <div className="col-xl-12">
            <div className="basic-pagination mt-50 d-flex justify-content-center">
              <nav>
                <PaginationCom
                  handlePageClick={handlePageClickWithScroll}
                  pageCount={pageCount}
                />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
