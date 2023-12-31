export const i18n = {
  defaultLocale: "en",
  locales: ["en", "jp", "cn"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dict/en.json").then((module) => module.default),
  cn: () => import("./dict/cn.json").then((module) => module.default),
  jp: () => import("./dict/jp.json").then((module) => module.default),
};
export const getDictionary = async (locale: Locale) => {
  return locale == "en"
    ? dictionaries.en()
    : locale == "cn"
    ? dictionaries.cn()
    : dictionaries.jp();
};
