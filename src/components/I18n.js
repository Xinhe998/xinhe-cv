import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      // backend: {
      //   loadPath: '../../locale/{{lng}}/{{ns}}.json',
      // }
      en: {
        translation: {
          skill: "Skill",
          experience: "Experience",
          present: "present"
        },
      },
      tw: {
        translation: {
          skill: "技能",
          experience: "經歷",
          present: "進行中"
        },
      },
    },
    debug: true,

    react: {
      wait: true,
    }
  })

export default i18n