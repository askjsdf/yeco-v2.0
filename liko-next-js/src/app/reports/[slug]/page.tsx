"use client";
import React from "react";
import { useParams } from "next/navigation";
import ReportDetailMain from "../_components/report-detail";

export default function ReportDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  return <ReportDetailMain slug={slug} />;
}
