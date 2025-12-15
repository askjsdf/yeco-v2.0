// 报告数据类型定义
import { Language } from '@/i18n/config';

// 多语言文本类型
export type LocalizedText = {
  zh: string;
  en: string;
  ar: string;
};

// 报告分类（多语言）
export type ReportCategoryKey = "trend_insight" | "consumer_understanding" | "case_analysis";

// 分类显示名称映射
export const categoryNames: Record<ReportCategoryKey, LocalizedText> = {
  trend_insight: {
    zh: "趋势洞察",
    en: "Trend Insight",
    ar: "رؤى الاتجاهات",
  },
  consumer_understanding: {
    zh: "消费者理解",
    en: "Consumer Understanding",
    ar: "فهم المستهلك",
  },
  case_analysis: {
    zh: "优秀案例分析",
    en: "Case Analysis",
    ar: "تحليل الحالات",
  },
};

export interface IReportItem {
  id: number;
  slug: string;              // URL 路径标识，如 "2025-10-middleeast"
  title: LocalizedText;      // 报告标题（多语言）
  subtitle?: LocalizedText;  // 副标题（可选，多语言）
  category: ReportCategoryKey;  // 分类键
  coverImage: string;        // 封面图（用于网格列表和 Slider 缩略图）
  bannerImage: string;       // 横幅大图（用于 Slider 背景）
  year: string;              // 发布年份
  month: string;             // 发布月份
  date: string;              // 完整发布日期 YYYY-MM-DD
  description: LocalizedText; // 简短描述（多语言）
}

// 本地化后的报告数据类型（用于组件显示）
export interface ILocalizedReportItem {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryKey: ReportCategoryKey;
  coverImage: string;
  bannerImage: string;
  year: string;
  month: string;
  date: string;
  description: string;
}

// 分类筛选用的 CSS class 映射
export const categoryClassMap: Record<ReportCategoryKey, string> = {
  trend_insight: "cat1",
  consumer_understanding: "cat2",
  case_analysis: "cat3",
};

// 报告数据（真实报告）
const reports_data: IReportItem[] = [
  // ========== 2025 年报告 ==========
  {
    id: 1,
    slug: "2025-10-middleeast",
    title: {
      zh: "2025中东香水设计趋势洞察",
      en: "2025 Middle East Perfume Design Trends",
      ar: "اتجاهات تصميم العطور في الشرق الأوسط 2025",
    },
    subtitle: {
      zh: "沙特阿联酋市场深度分析",
      en: "Saudi & UAE Market Deep Dive",
      ar: "تحليل معمق لسوق السعودية والإمارات",
    },
    category: "consumer_understanding",
    coverImage: "/assets/reports/2025-10-middleeast/cover.png",
    bannerImage: "/assets/reports/2025-10-middleeast/banner.jpg",
    year: "2025",
    month: "10",
    date: "2025-10-15",
    description: {
      zh: "深入分析中东地区香水消费习惯、市场规模及增长趋势，揭示阿拉伯香水文化的独特魅力。",
      en: "In-depth analysis of Middle East perfume consumption habits, market size and growth trends, revealing the unique charm of Arabian perfume culture.",
      ar: "تحليل معمق لعادات استهلاك العطور في الشرق الأوسط وحجم السوق واتجاهات النمو، يكشف عن السحر الفريد لثقافة العطور العربية.",
    },
  },
  {
    id: 2,
    slug: "2025-12-us-beauty-ipfication",
    title: {
      zh: "香水设计IP化趋势洞察",
      en: "Beauty & Fragrance IP-fication Trends",
      ar: "اتجاهات تحويل تصميم العطور إلى IP",
    },
    subtitle: {
      zh: "2024-2026深度战略报告",
      en: "2024-2026 Strategic Deep Dive",
      ar: "تقرير استراتيجي معمق 2024-2026",
    },
    category: "trend_insight",
    coverImage: "/assets/reports/2025-12-us-beauty-ipfication/cover.jpg",
    bannerImage: "/assets/reports/2025-12-us-beauty-ipfication/banner.jpg",
    year: "2025",
    month: "12",
    date: "2025-12-09",
    description: {
      zh: "揭示美妆行业从极简实用性向高情感物质性的范式转移,深度解析大小孩经济、包装玩具化与IP化战略的融合趋势。",
      en: "Revealing the beauty industry's paradigm shift from minimalist utility to high emotional materiality, with deep analysis of kidult economy, packaging toy-fication and IP-fication strategy trends.",
      ar: "كشف تحول صناعة التجميل من البساطة العملية إلى المادية العاطفية العالية، مع تحليل معمق لاقتصاد الكبار الصغار واتجاهات تحويل العبوات إلى ألعاب واستراتيجية IP.",
    },
  },
];

// 将报告数据本地化的辅助函数
export const getLocalizedReport = (report: IReportItem, language: Language): ILocalizedReportItem => {
  return {
    id: report.id,
    slug: report.slug,
    title: report.title[language],
    subtitle: report.subtitle?.[language],
    category: categoryNames[report.category][language],
    categoryKey: report.category,
    coverImage: report.coverImage,
    bannerImage: report.bannerImage,
    year: report.year,
    month: report.month,
    date: report.date,
    description: report.description[language],
  };
};

// 获取精选报告（用于 Banner 轮播，按时间排序取最新5篇）
export const getFeaturedReports = (): IReportItem[] => {
  return [...reports_data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
};

// 获取本地化的精选报告
export const getLocalizedFeaturedReports = (language: Language): ILocalizedReportItem[] => {
  return getFeaturedReports().map(report => getLocalizedReport(report, language));
};

// 获取所有报告（按时间倒序）
export const getAllReports = (): IReportItem[] => {
  return [...reports_data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// 获取本地化的所有报告
export const getLocalizedAllReports = (language: Language): ILocalizedReportItem[] => {
  return getAllReports().map(report => getLocalizedReport(report, language));
};

// 按分类获取报告
export const getReportsByCategory = (categoryKey: ReportCategoryKey): IReportItem[] => {
  return reports_data
    .filter((report) => report.category === categoryKey)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 根据 slug 获取单个报告
export const getReportBySlug = (slug: string): IReportItem | undefined => {
  return reports_data.find((report) => report.slug === slug);
};

// 获取本地化的单个报告
export const getLocalizedReportBySlug = (slug: string, language: Language): ILocalizedReportItem | undefined => {
  const report = getReportBySlug(slug);
  return report ? getLocalizedReport(report, language) : undefined;
};

// 获取所有分类（本地化）
export const getLocalizedCategories = (language: Language): { key: ReportCategoryKey; name: string; className: string }[] => {
  return Object.entries(categoryNames).map(([key, names]) => ({
    key: key as ReportCategoryKey,
    name: names[language],
    className: categoryClassMap[key as ReportCategoryKey],
  }));
};

export default reports_data;
