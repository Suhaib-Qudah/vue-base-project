import type { i18n, InitOptions } from 'i18next';
import i18next from 'i18next';
import { LanguagesEnum } from '../../enums/languages.enum.ts';

export const getInitialLanguage = (): string => {
  const url = window.location.href;
  const language = url.split('language=')[1];
  return language === LanguagesEnum.ARABIC || language === LanguagesEnum.ENGLISH
    ? language
    : localStorage.getItem(LanguagesEnum.LOCALE_STORAGE_KEY) ||
        LanguagesEnum.ENGLISH;
};

export const initializeI18n = async (
  initialLanguage: string
): Promise<i18n> => {
  const i18nOptions: InitOptions = {
    lng: initialLanguage,
    fallbackLng: LanguagesEnum.ENGLISH,
    preload: [LanguagesEnum.ENGLISH, LanguagesEnum.ARABIC],
    initImmediate: true,
    resources: {
      en: { translation: {} },
      ar: { translation: {} },
    },
    interpolation: {
      format: (value, format, lng) => {
        if (!value) return;
        if (format === 'lowercase') {
          return value.toLowerCase();
        }
        if (format === 'firstLetterUpperCase') {
          return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        if (format === 'removeTheForArabic' && lng === 'ar') {
          return value.startsWith('ال') ? value.slice(2) : value;
        }
        if (format === 'addTheForArabic' && lng === 'ar') {
          return value.startsWith('ال') ? value : `ال${value}`;
        }
        return value;
      },
    },
  };
  await i18next.init(i18nOptions);
  return i18next;
};

const i18nInstance = async (): Promise<i18n> => {
  try {
    const initialLanguage = getInitialLanguage();
    return await initializeI18n(initialLanguage);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default i18nInstance;
