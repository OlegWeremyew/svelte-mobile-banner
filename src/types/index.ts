export type TextsObj = {
  da: {},
  de: {},
  en: {},
  es: {},
  fr: {},
  hi: {},
  id: {},
  ja: {},
  ko: {},
  ms: {},
  nb: {},
  nl: {},
  pt: {},
  ru: {},
  sv: {},
  th: {},
  tr: {},
  'zh-Hans': {},
  'zh-Hant': {},
}

export type LocalizationReturnType = {
  lang: string,
  getText: (key) => string
}

export type LangType = {
  [p: string]: string
}

export type JsonCombineParams = {
  input: string[]
  fileName: string
  merge: (items: object) => object
}

export type FileNamesType = Promise<{ res: any, name: string }>

export type ReturnKeyType = 'fonts.sub.gr2.1w.3.trial_6' | 'fonts.sub.gr2.1w.3d.trial_5'
