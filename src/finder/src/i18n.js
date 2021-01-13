import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './constants.js'
import en from './lang/en.json'
import zh from './lang/zh.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { en, zh },
})
