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

  // 保存语言偏好到 localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('yeco-language', lang);
    applyLanguage(lang);
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
