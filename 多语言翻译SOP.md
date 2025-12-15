# YECO 报告多语言翻译 SOP

本文档说明如何为新报告添加多语言支持，包括报告详情页内容和报告列表页元数据。

---

## 目录

1. [概述](#概述)
2. [文件结构](#文件结构)
3. [步骤一：创建报告内容多语言版本](#步骤一创建报告内容多语言版本)
4. [步骤二：添加报告元数据翻译](#步骤二添加报告元数据翻译)
5. [检查清单](#检查清单)

---

## 概述

YECO 网站支持三种语言：
- **zh** - 中文（默认）
- **en** - 英文
- **ar** - 阿拉伯语（RTL 布局）

每篇报告需要完成两部分翻译：
1. **报告详情页内容** - 完整的报告正文、图表、分析等
2. **报告列表元数据** - 标题、副标题、分类、描述（显示在列表页卡片上）

---

## 文件结构

```
src/
├── app/
│   └── reports/
│       └── _content/
│           └── {报告slug}/          # 例如: 2025-12-us-beauty-ipfication
│               ├── index.tsx        # 语言路由器（自动切换语言）
│               ├── zh.tsx           # 中文版报告内容
│               ├── en.tsx           # 英文版报告内容
│               └── ar.tsx           # 阿拉伯语版报告内容
│
│       └── _data/
│           └── reports-data.ts      # 报告元数据（标题、描述等）
```

---

## 步骤一：创建报告内容多语言版本

### 1.1 准备中文版本

假设你已经完成了中文版报告 `zh.tsx`，文件位于：
```
src/app/reports/_content/{报告slug}/zh.tsx
```

### 1.2 创建语言路由器 `index.tsx`

在报告目录下创建 `index.tsx`，用于根据当前语言自动加载对应版本：

```tsx
'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/i18n/LanguageContext';

// 动态加载各语言版本的报告内容
const ReportZh = dynamic(() => import('./zh'), { ssr: false });
const ReportEn = dynamic(() => import('./en'), { ssr: false });
const ReportAr = dynamic(() => import('./ar'), { ssr: false });

// 语言到组件的映射
const reportComponents = {
  zh: ReportZh,
  en: ReportEn,
  ar: ReportAr,
};

export default function Report{报告名称}() {
  const { language } = useLanguage();

  // 获取对应语言的组件，默认使用中文
  const ReportComponent = reportComponents[language] || ReportZh;

  return <ReportComponent />;
}
```

**注意：** 将 `Report{报告名称}` 替换为实际的组件名，如 `ReportUSBeautyIPfication`。

### 1.3 创建英文版本 `en.tsx`

复制 `zh.tsx` 并翻译内容：

```tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function ReportEn() {
  return (
    <div className="report-content-area" style={{ background: '#000', color: '#fff' }}>
      {/* 报告头部 */}
      <div className="report-header" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ color: '#999', fontSize: '14px' }}>2025.12 | Trend Insight</span>
          <h1 style={{ fontSize: '48px', margin: '20px 0' }}>
            English Report Title
          </h1>
          <p style={{ color: '#999', fontSize: '18px' }}>
            English subtitle description
          </p>
        </div>
      </div>

      {/* 报告正文 */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* 翻译后的内容... */}
      </div>
    </div>
  );
}
```

### 1.4 创建阿拉伯语版本 `ar.tsx`

阿拉伯语版本需要添加 RTL 支持：

```tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function ReportAr() {
  return (
    // 重要：添加 dir="rtl" 启用从右到左布局
    <div
      className="report-content-area"
      dir="rtl"
      style={{
        background: '#000',
        color: '#fff',
        fontFamily: "'Noto Sans Arabic', 'Tajawal', sans-serif"
      }}
    >
      {/* 报告头部 */}
      <div className="report-header" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ color: '#999', fontSize: '14px' }}>2025.12 | رؤى الاتجاهات</span>
          <h1 style={{ fontSize: '48px', margin: '20px 0' }}>
            عنوان التقرير بالعربية
          </h1>
          <p style={{ color: '#999', fontSize: '18px' }}>
            وصف العنوان الفرعي بالعربية
          </p>
        </div>
      </div>

      {/* 报告正文 */}
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* 翻译后的内容... */}
      </div>
    </div>
  );
}
```

**阿拉伯语 RTL 注意事项：**
- 根元素添加 `dir="rtl"`
- 设置阿拉伯语字体 `fontFamily: "'Noto Sans Arabic', 'Tajawal', sans-serif"`
- 图片和图表布局会自动镜像
- 如果某些元素不需要镜像，可以添加 `dir="ltr"` 覆盖

---

## 步骤二：添加报告元数据翻译

### 2.1 打开报告数据文件

编辑文件：`src/app/reports/_data/reports-data.ts`

### 2.2 添加新报告数据

在 `reports_data` 数组中添加新报告：

```typescript
const reports_data: IReportItem[] = [
  // ... 现有报告 ...

  // 新报告
  {
    id: 3,  // 递增的唯一 ID
    slug: "2026-01-new-report",  // URL 路径，需与 _content 目录名一致
    title: {
      zh: "报告中文标题",
      en: "Report English Title",
      ar: "عنوان التقرير بالعربية",
    },
    subtitle: {
      zh: "中文副标题",
      en: "English Subtitle",
      ar: "العنوان الفرعي بالعربية",
    },
    category: "trend_insight",  // 分类键，见下方说明
    coverImage: "/assets/reports/2026-01-new-report/cover.jpg",
    bannerImage: "/assets/reports/2026-01-new-report/banner.jpg",
    year: "2026",
    month: "01",
    date: "2026-01-15",  // 发布日期，用于排序
    description: {
      zh: "报告的简短描述，显示在列表页卡片上，建议50-100字。",
      en: "Brief description of the report, displayed on list page cards, recommended 50-100 words.",
      ar: "وصف موجز للتقرير، يظهر على بطاقات صفحة القائمة، يوصى بـ 50-100 كلمة.",
    },
  },
];
```

### 2.3 分类说明

可用的分类键（`category`）：

| 分类键 | 中文 | 英文 | 阿拉伯语 |
|--------|------|------|----------|
| `trend_insight` | 趋势洞察 | Trend Insight | رؤى الاتجاهات |
| `consumer_understanding` | 消费者理解 | Consumer Understanding | فهم المستهلك |
| `case_analysis` | 优秀案例分析 | Case Analysis | تحليل الحالات |

分类名称的多语言翻译已在 `categoryNames` 对象中定义，无需额外处理。

### 2.4 准备图片资源

将报告图片放置在对应目录：
```
public/assets/reports/{报告slug}/
├── cover.jpg    # 封面图（列表卡片和缩略图，建议比例 5:6）
├── banner.jpg   # 横幅大图（轮播背景，建议宽度 1920px）
├── img1.jpg     # 报告内容图片
├── img2.jpg
└── ...
```

---

## 检查清单

完成翻译后，请确认以下事项：

### 报告内容文件
- [ ] `index.tsx` - 语言路由器已创建
- [ ] `zh.tsx` - 中文版内容完成
- [ ] `en.tsx` - 英文版内容完成
- [ ] `ar.tsx` - 阿拉伯语版内容完成，已添加 `dir="rtl"`

### 报告元数据
- [ ] `reports-data.ts` 中已添加新报告数据
- [ ] `id` 唯一且递增
- [ ] `slug` 与 `_content` 目录名一致
- [ ] `title` 三种语言都已填写
- [ ] `subtitle` 三种语言都已填写（可选）
- [ ] `category` 使用正确的分类键
- [ ] `description` 三种语言都已填写
- [ ] `date` 格式正确（YYYY-MM-DD）

### 图片资源
- [ ] `cover.jpg` 封面图已上传
- [ ] `banner.jpg` 横幅大图已上传
- [ ] 所有报告内容图片已上传

### 测试验证
- [ ] 中文站点能正确显示报告列表和详情
- [ ] 英文站点能正确显示报告列表和详情
- [ ] 阿拉伯语站点能正确显示报告列表和详情（RTL 布局正常）
- [ ] 语言切换后内容正确切换

---

## 常见问题

### Q: 阿拉伯语版本布局混乱怎么办？
A: 确保根元素添加了 `dir="rtl"`，并检查是否有硬编码的 `left`/`right` 样式需要调整。

### Q: 报告没有出现在列表页？
A: 检查 `reports-data.ts` 中的 `slug` 是否与 `_content` 目录名完全一致。

### Q: 如何让报告出现在首页轮播？
A: 报告按 `date` 倒序排列，最新的5篇会自动出现在轮播中。

---

## 示例参考

参考现有报告实现：
- `src/app/reports/_content/2025-10-middleeast/` - 中东香水设计趋势洞察
- `src/app/reports/_content/2025-12-us-beauty-ipfication/` - 香水设计IP化趋势洞察
