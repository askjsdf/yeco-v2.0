"use client";
import React from "react";
import dynamic from "next/dynamic";

// 动态导入客户端组件，禁用 SSR 以避免 LanguageProvider 问题
const ReportsListMain = dynamic(
  () => import("@/components/page-content/reports-list"),
  { ssr: false }
);

export default function ReportsListPage() {
  return <ReportsListMain />;
}
