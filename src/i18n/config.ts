// 支持的语言列表
export const languages = ['zh', 'en', 'ar'] as const;
export type Language = (typeof languages)[number];

// 默认语言
export const defaultLanguage: Language = 'zh';

// 语言配置（包含 RTL 支持）
export const languageConfig: Record<Language, {
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  fontFamily?: string;
}> = {
  zh: {
    name: 'Chinese',
    nativeName: '中文',
    dir: 'ltr',
    fontFamily: 'var(--tp-ff-noto-serif-sc), serif',
  },
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    fontFamily: 'var(--tp-ff-body)',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    fontFamily: "'Noto Sans Arabic', 'Tajawal', sans-serif",
  },
};
