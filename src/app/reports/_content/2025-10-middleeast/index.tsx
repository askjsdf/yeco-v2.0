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

export default function Report2025MiddleEast() {
  const { language } = useLanguage();

  // 获取对应语言的组件，默认使用中文
  const ReportComponent = reportComponents[language] || ReportZh;

  return <ReportComponent />;
}
