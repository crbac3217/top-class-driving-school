import en from './en';
import zhHK from './zh-HK';
import zhCN from './zh-CN';

export const languages = {
  en: 'English',
  'zh-HK': '廣東話',
  'zh-CN': '普通话',
} as const;

export type Lang = keyof typeof languages;

const translations = { en, 'zh-HK': zhHK, 'zh-CN': zhCN };

export function t(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return 'en';
}
