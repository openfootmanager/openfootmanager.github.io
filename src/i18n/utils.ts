import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

export function getLocalePath(lang: Lang, path: string = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return cleanPath;
  return `/${lang}${cleanPath}`;
}

export function getDateLocale(lang: Lang): string {
  const map: Record<Lang, string> = {
    en: 'en-US',
    'pt-br': 'pt-BR',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
  };
  return map[lang];
}

export function getHtmlLang(lang: Lang): string {
  const map: Record<Lang, string> = {
    en: 'en',
    'pt-br': 'pt-BR',
    es: 'es',
    fr: 'fr',
    de: 'de',
  };
  return map[lang];
}

export function getBaseSlug(slug: string): string {
  const langPrefixes = ['pt-br/', 'es/', 'fr/', 'de/'];
  for (const prefix of langPrefixes) {
    if (slug.startsWith(prefix)) {
      return slug.slice(prefix.length);
    }
  }
  return slug;
}
