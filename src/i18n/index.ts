// 统一导出 i18n 相关模块
export { languages, defaultLanguage, languageConfig } from './config';
export type { Language } from './config';
export { LanguageProvider, useLanguage } from './LanguageContext';
export { useTranslation } from './hooks/useTranslation';
export { dictionaries } from './dictionaries';
export type { Dictionary } from './dictionaries';
