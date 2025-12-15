import { useLanguage } from '../LanguageContext';
import { dictionaries, Dictionary } from '../dictionaries';

export function useTranslation() {
  const { language, dir, isRTL } = useLanguage();
  const t: Dictionary = dictionaries[language];

  return { t, language, dir, isRTL };
}
