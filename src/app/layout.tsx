import type { Metadata } from "next";
import {
  Syne,
  Aladin,
  Marcellus,
  Noto_Serif_SC,
  Noto_Sans_Arabic,
} from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import { LanguageProvider } from "@/i18n/LanguageContext";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
// const big_shoulders = Big_Shoulders_Display({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--tp-ff-shoulders",
// });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

// 思源宋体 - 优雅的中文衬线字体
const notoSerifSC = Noto_Serif_SC({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tp-ff-noto-serif-sc",
});

// Noto Sans Arabic - 阿拉伯语字体
const notoSansArabic = Noto_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--tp-ff-arabic",
});

export const metadata: Metadata = {
  title: "YECO - 香水设计专家",
  description: "YECO专注于香水包装设计，提供趋势洞察和专业设计服务",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable} ${notoSerifSC.variable} ${notoSansArabic.variable}`}
      >
        <LanguageProvider>
          <ThemeProvider defaultTheme="dark" forcedTheme="dark">
            <VideoProvider>
              {children}
            </VideoProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

