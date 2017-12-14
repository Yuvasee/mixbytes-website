export const DEFAULT_LOCALE = 'RU';
const SUPPORTED_LANGUAGES = ['RU', 'EN'];
const LOCAL_STORAGE_LANGUAGE_PARAM_NAME = 'mixLocale';

export const getLanguage = () => {
  let lang;

  if (navigator.languages && navigator.languages.length) {
    lang = navigator.languages[0];
  } else if (navigator.userLanguage) {
    lang = navigator.userLanguage;
  } else {
    lang = navigator.language;
  }

  if (lang) {
    lang = lang.slice(0, 2);
  }

  lang = localStorage.mixLocale || lang.toUpperCase() || DEFAULT_LOCALE;

  return SUPPORTED_LANGUAGES.indexOf(lang) >=0 ? lang : DEFAULT_LOCALE;
}

export const setLanguage = (language) => {
  localStorage.setItem(LOCAL_STORAGE_LANGUAGE_PARAM_NAME, language);
}
