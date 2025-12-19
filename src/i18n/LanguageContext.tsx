'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, defaultLanguage, languageConfig } from './config';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  // 从 localStorage 读取语言偏好
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('yeco-language') as Language;
    if (saved && languageConfig[saved]) {
      setLanguageState(saved);
      applyLanguage(saved);
    }
  }, []);

  // 应用语言设置到 HTML
  const applyLanguage = (lang: Language) => {
    const config = languageConfig[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = config.dir;

    // 设置字体
    if (config.fontFamily) {
      document.documentElement.style.setProperty('--current-font-family', config.fontFamily);
    }
  };

  // 保存语言偏好到 localStorage 并刷新页面
  // 刷新页面可以避免第三方库（react-slick, react-fast-marquee 等）的 DOM 操作与 React 状态更新冲突
  const setLanguage = (lang: Language) => {
    if (lang === language) return; // 相同语言不处理
    localStorage.setItem('yeco-language', lang);
    // 刷新页面以应用新语言，避免 DOM 冲突
    window.location.reload();
  };

  const dir = languageConfig[language].dir;
  const isRTL = dir === 'rtl';

  // 避免 hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: defaultLanguage, setLanguage, dir: 'ltr', isRTL: false }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
