"use client";
import { gsap } from "gsap";
import { useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "@/plugins";
import Link from "next/link";
import dynamic from "next/dynamic";
gsap.registerPlugin(ScrollTrigger, SplitText);

// ==================== YECO REPORT DETAIL PAGE ====================
// Header: header-one
import HeaderOne from "@/layouts/headers/header-one";

// Footer: footer-4 (深色主题)
import FooterFour from "@/layouts/footers/footer-four";

// Contact Section
import ContactTwo from "@/components/contact/contact-two";

// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";

// data
import { getReportBySlug } from "../_data/reports-data";

// Props 接口 - 支持从 App Router 传入 slug
interface ReportDetailPageProps {
  slug?: string;
}

// ==================== 报告内容渲染组件 ====================
// 自动根据 slug 加载 _content 目录下对应的报告组件
// 新建报告只需在 _content 目录创建对应文件夹即可，无需修改此文件
const ReportContentRenderer = ({ slug, report }: { slug: string; report: ReturnType<typeof getReportBySlug> }) => {
  // 使用 useMemo 缓存动态组件，避免重复创建
  const DynamicReportContent = useMemo(() => {
    return dynamic(
      () => import(`../_content/${slug}`).catch(() => {
        // 如果找不到对应组件，返回占位组件
        return {
          default: () => (
            <div className="report-content-area pt-120 pb-120">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="report-intro mb-60">
                      <h3 style={{ marginBottom: '30px', fontSize: '32px' }}>报告简介</h3>
                      <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#666' }}>
                        {report?.description}
                      </p>
                    </div>
                    <div
                      className="report-placeholder"
                      style={{
                        background: '#f5f5f5',
                        padding: '100px 40px',
                        textAlign: 'center',
                        borderRadius: '8px',
                        marginBottom: '60px',
                      }}
                    >
                      <p style={{ fontSize: '24px', color: '#999', marginBottom: '20px' }}>
                        报告内容区域
                      </p>
                      <p style={{ color: '#bbb' }}>
                        此处将展示报告的详细内容<br/>
                        包括数据图表、分析结论、设计案例等
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      }),
      {
        ssr: false,
        loading: () => (
          <div style={{ padding: '100px', textAlign: 'center' }}>
            加载报告内容...
          </div>
        )
      }
    );
  }, [slug, report?.description]);

  return <DynamicReportContent />;
};

const ReportDetailPage = ({ slug: propSlug }: ReportDetailPageProps) => {
  // 优先使用 props 传入的 slug
  const slug = propSlug;

  // 获取当前报告数据
  const report = slug ? getReportBySlug(slug as string) : null;

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  }, [report]);

  // 加载中状态
  if (!report) {
    return (
      <div>
        <HeaderOne />
        <main>
          <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
            <h2>加载中...</h2>
          </div>
        </main>
        <FooterFour />
      </div>
    );
  }

  return (
    <div>
      {/* ==================== HEADER ==================== */}
      <HeaderOne />

      <main style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
        {/* ==================== REPORT CONTENT ==================== */}
        {/* 自动加载 _content/{slug} 目录下的报告组件 */}
        {slug && <ReportContentRenderer slug={slug} report={report} />}

        {/* 返回按钮 */}
        <div style={{ textAlign: 'center', padding: '60px 0', background: '#000' }}>
          <Link
            href="/reportsList"
            style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: '#ffffffff',
              color: '#000000ff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 600,
            }}
          >
            返回报告列表
          </Link>
        </div>

        {/* ==================== CONTACT SECTION ==================== */}
        {/* 联系我们标题 */}
        <div className="tm-hero-area tm-hero-ptb p-relative" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
          <style jsx>{`
            .contact-title {
              font-size: 120px;
              letter-spacing: 0.05em;
            }
            @media (max-width: 991px) {
              .contact-title {
                font-size: 72px;
                letter-spacing: 0.08em;
              }
            }
            @media (max-width: 767px) {
              .contact-title {
                font-size: 48px;
                letter-spacing: 0.1em;
              }
            }
            @media (max-width: 480px) {
              .contact-title {
                font-size: 36px;
                letter-spacing: 0.12em;
              }
            }
          `}</style>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tm-hero-content">
                  <span className="tm-hero-subtitle" style={{ marginBottom: '30px', display: 'block' }}>YECO Studio</span>
                  <h4 className="tm-hero-title-big tp-char-animation contact-title" style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
                    建立连结，共创非凡
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactTwo />
      </main>

      {/* ==================== FOOTER ==================== */}
      <FooterFour />
    </div>
  );
};

export default ReportDetailPage;
