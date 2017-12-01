const DEFAULT_LOCALE = 'ru';

export default () => {
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

  lang = localStorage.mixLocale || lang || DEFAULT_LOCALE;
  localStorage.setItem('mixLocale', lang);
  return lang;
}
