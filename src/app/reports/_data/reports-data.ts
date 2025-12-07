// 报告数据类型定义
export type ReportCategory = "消费者洞察" | "设计趋势" | "市场分析";

export interface IReportItem {
  id: number;
  slug: string;              // URL 路径标识，如 "2025-10-middleeast"
  title: string;             // 报告标题
  subtitle?: string;         // 副标题（可选）
  category: ReportCategory;  // 分类
  coverImage: string;        // 封面图（用于网格列表和 Slider 缩略图）
  bannerImage: string;       // 横幅大图（用于 Slider 背景）
  year: string;              // 发布年份
  month: string;             // 发布月份
  date: string;              // 完整发布日期 YYYY-MM-DD
  description: string;       // 简短描述
}

// 分类筛选用的 CSS class 映射
export const categoryClassMap: Record<ReportCategory, string> = {
  "消费者洞察": "cat1",
  "设计趋势": "cat2",
  "市场分析": "cat3",
};

// 默认占位图（可替换为自定义图片）
// 使用模版现有图片作为临时占位
const DEFAULT_COVER = "/assets/img/inner-project/portfolio-col-2/port-1.jpg";
const DEFAULT_BANNER = "/assets/img/home-11/port-1.jpg";

// 报告数据（30条样例数据）
const reports_data: IReportItem[] = [
  // ========== 2025 年报告 (精选 5 篇) ==========
  {
    id: 1,
    slug: "2025-10-middleeast",
    title: "中东香水市场洞察",
    subtitle: "沙特阿联酋市场深度分析",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "10",
    date: "2025-10-15",
    description: "深入分析中东地区香水消费习惯、市场规模及增长趋势，揭示阿拉伯香水文化的独特魅力。",
  },
  {
    id: 2,
    slug: "2025-09-genz-fragrance",
    title: "Z世代香水消费报告",
    subtitle: "年轻消费者的嗅觉偏好",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "09",
    date: "2025-09-20",
    description: "基于社交媒体数据分析Z世代消费者的香水选择偏好、购买渠道及品牌认知。",
  },
  {
    id: 3,
    slug: "2025-08-sustainable-packaging",
    title: "可持续包装设计趋势",
    subtitle: "环保材料与创新结构",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "08",
    date: "2025-08-10",
    description: "探索香水行业可持续包装解决方案，从材料选择到结构设计的全面趋势分析。",
  },
  {
    id: 4,
    slug: "2025-07-color-trends",
    title: "2025色彩趋势预测",
    subtitle: "香水包装色彩指南",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "07",
    date: "2025-07-05",
    description: "基于全球时尚趋势和消费者心理研究，预测香水包装的主流色彩方向。",
  },
  {
    id: 5,
    slug: "2025-06-asia-pacific",
    title: "亚太市场年度报告",
    subtitle: "中日韩东南亚市场全景",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "06",
    date: "2025-06-18",
    description: "亚太地区香水市场规模、竞争格局及消费趋势的全面分析报告。",
  },
  // ========== 2025 年其他报告 ==========
  {
    id: 6,
    slug: "2025-05-social-media-analysis",
    title: "社交媒体香水话题分析",
    subtitle: "TikTok/Instagram/小红书",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "05",
    date: "2025-05-22",
    description: "追踪全球主要社交平台上的香水相关话题，分析消费者讨论热点和情感倾向。",
  },
  {
    id: 7,
    slug: "2025-04-bottle-design",
    title: "瓶身造型创新报告",
    subtitle: "从经典到前卫",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "04",
    date: "2025-04-12",
    description: "收集全球最具创意的香水瓶设计案例，分析造型趋势和工艺创新。",
  },
  {
    id: 8,
    slug: "2025-03-europe-market",
    title: "欧洲市场季度报告",
    subtitle: "法国意大利英国市场",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "03",
    date: "2025-03-28",
    description: "欧洲主要香水市场的最新动态、品牌表现及消费趋势分析。",
  },
  {
    id: 9,
    slug: "2025-02-luxury-consumer",
    title: "高端香水消费者画像",
    subtitle: "奢侈品消费心理研究",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "02",
    date: "2025-02-15",
    description: "深入分析高端香水消费群体的购买动机、决策因素和品牌忠诚度。",
  },
  {
    id: 10,
    slug: "2025-01-material-innovation",
    title: "包装材质创新趋势",
    subtitle: "玻璃/金属/生物材料",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2025",
    month: "01",
    date: "2025-01-08",
    description: "探索香水包装材质的最新创新，从传统玻璃到新型环保材料。",
  },
  // ========== 2024 年报告 ==========
  {
    id: 11,
    slug: "2024-12-year-review",
    title: "2024年度趋势总结",
    subtitle: "香水行业年度回顾",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "12",
    date: "2024-12-20",
    description: "回顾2024年香水行业的重大事件、趋势变化和市场表现。",
  },
  {
    id: 12,
    slug: "2024-11-niche-brands",
    title: "小众香水品牌崛起",
    subtitle: "独立品牌市场分析",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "11",
    date: "2024-11-15",
    description: "分析小众独立香水品牌的市场表现、成功因素和发展趋势。",
  },
  {
    id: 13,
    slug: "2024-10-gift-packaging",
    title: "礼盒包装设计趋势",
    subtitle: "节日季礼品包装",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "10",
    date: "2024-10-25",
    description: "分析香水礼盒包装的设计趋势，从结构创新到视觉表现。",
  },
  {
    id: 14,
    slug: "2024-09-male-fragrance",
    title: "男士香水消费洞察",
    subtitle: "男性消费者行为研究",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "09",
    date: "2024-09-10",
    description: "深入了解男性香水消费者的购买习惯、品牌偏好和产品期望。",
  },
  {
    id: 15,
    slug: "2024-08-minimalist-design",
    title: "极简主义设计趋势",
    subtitle: "Less is More",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "08",
    date: "2024-08-18",
    description: "探索香水包装中的极简主义设计语言及其市场接受度。",
  },
  {
    id: 16,
    slug: "2024-07-china-market",
    title: "中国市场深度报告",
    subtitle: "国内香水消费全景",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "07",
    date: "2024-07-22",
    description: "中国香水市场的消费特征、渠道分布和品牌竞争格局分析。",
  },
  {
    id: 17,
    slug: "2024-06-emotional-marketing",
    title: "情感营销与香水消费",
    subtitle: "消费心理学研究",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "06",
    date: "2024-06-05",
    description: "研究香水品牌如何通过情感营销触达消费者，建立品牌连接。",
  },
  {
    id: 18,
    slug: "2024-05-cap-closure",
    title: "瓶盖设计创新报告",
    subtitle: "功能与美学的结合",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "05",
    date: "2024-05-12",
    description: "分析香水瓶盖的设计创新趋势，从材质选择到开合体验。",
  },
  {
    id: 19,
    slug: "2024-04-us-market",
    title: "北美市场季度报告",
    subtitle: "美国加拿大市场分析",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "04",
    date: "2024-04-28",
    description: "北美香水市场的最新动态、消费趋势和品牌表现分析。",
  },
  {
    id: 20,
    slug: "2024-03-celebrity-fragrance",
    title: "名人香水品牌分析",
    subtitle: "明星效应与市场表现",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2024",
    month: "03",
    date: "2024-03-15",
    description: "分析名人香水品牌的市场策略、消费者接受度和成功因素。",
  },
  // ========== 2023 年报告 ==========
  {
    id: 21,
    slug: "2023-12-annual-design",
    title: "2023设计趋势总结",
    subtitle: "年度设计回顾",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "12",
    date: "2023-12-18",
    description: "回顾2023年香水包装设计的重要趋势和标志性作品。",
  },
  {
    id: 22,
    slug: "2023-10-travel-retail",
    title: "旅游零售市场报告",
    subtitle: "免税渠道深度分析",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "10",
    date: "2023-10-20",
    description: "分析机场免税店等旅游零售渠道的香水销售特点和发展趋势。",
  },
  {
    id: 23,
    slug: "2023-08-unisex-trend",
    title: "无性别香水趋势",
    subtitle: "Gender Neutral Fragrance",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "08",
    date: "2023-08-15",
    description: "探索无性别香水的市场接受度、消费群体和设计表现。",
  },
  {
    id: 24,
    slug: "2023-06-texture-finish",
    title: "表面工艺趋势报告",
    subtitle: "磨砂/镀金/喷涂",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "06",
    date: "2023-06-25",
    description: "分析香水瓶身表面处理工艺的创新趋势和视觉效果。",
  },
  {
    id: 25,
    slug: "2023-04-ecommerce",
    title: "电商渠道消费分析",
    subtitle: "线上购买行为研究",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "04",
    date: "2023-04-10",
    description: "分析香水电商渠道的消费特点、用户行为和营销策略。",
  },
  {
    id: 26,
    slug: "2023-02-japan-market",
    title: "日本市场专题报告",
    subtitle: "日本香水文化研究",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2023",
    month: "02",
    date: "2023-02-20",
    description: "深入研究日本香水市场的独特文化背景和消费特征。",
  },
  // ========== 2022 年报告 ==========
  {
    id: 27,
    slug: "2022-11-refillable",
    title: "可替换装设计趋势",
    subtitle: "环保与便携的结合",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2022",
    month: "11",
    date: "2022-11-15",
    description: "分析香水可替换装设计的创新方案和市场接受度。",
  },
  {
    id: 28,
    slug: "2022-08-post-pandemic",
    title: "后疫情消费变化",
    subtitle: "香水消费新常态",
    category: "消费者洞察",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2022",
    month: "08",
    date: "2022-08-22",
    description: "分析疫情后香水消费行为的变化和新兴趋势。",
  },
  {
    id: 29,
    slug: "2022-05-global-overview",
    title: "全球市场概览",
    subtitle: "年中市场分析",
    category: "市场分析",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2022",
    month: "05",
    date: "2022-05-18",
    description: "全球主要香水市场的规模、增长和竞争格局分析。",
  },
  {
    id: 30,
    slug: "2022-02-typography",
    title: "字体设计趋势报告",
    subtitle: "包装字体应用研究",
    category: "设计趋势",
    coverImage: DEFAULT_COVER,
    bannerImage: DEFAULT_BANNER,
    year: "2022",
    month: "02",
    date: "2022-02-10",
    description: "分析香水包装中字体设计的趋势和品牌表达方式。",
  },
];

// 获取精选报告（用于 Banner 轮播，按时间排序取最新5篇）
export const getFeaturedReports = (): IReportItem[] => {
  return [...reports_data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
};

// 获取所有报告（按时间倒序）
export const getAllReports = (): IReportItem[] => {
  return [...reports_data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// 按分类获取报告
export const getReportsByCategory = (category: ReportCategory): IReportItem[] => {
  return reports_data
    .filter((report) => report.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 根据 slug 获取单个报告
export const getReportBySlug = (slug: string): IReportItem | undefined => {
  return reports_data.find((report) => report.slug === slug);
};

export default reports_data;
