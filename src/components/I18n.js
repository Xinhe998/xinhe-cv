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
          present: "present",
          role: "Role",
          web_front_end_dev: "Web Front-End Develop",
          web_front_end: "Web Front-End",
          back_end_dev: "Back-End Develop",
          web_back_end_dev: "Web Back-End Develop",
          web_back_end: "Web Back-End",
          database: "Database",
          medium_article: "Medium Article",
          what_i_learn_in_adv: "What I Learn From Advantech IOT Internship",
          nutc: "National Taichung University of Science and Technology",
          student_elite_award: "Student Elite Award",
          first_prize: "First Prize",
          third_prize: "Third Prize",
          honorable_mention: "Honorable Mention",
          innoserve: "International ICT Innovative Services Awards",
          egd_category: "Economic Goegraphy Database category",
          titansoft_agile: "Titansoft Pte Ltd Agile development category",
          campus_4g: "Campus 4G mobile application category",
          feng_chia: "Feng Chia Shopping Area Entrepreneurial Competition",
          project_information_distribution_science: "Undergraduate Project of College of Information and Distribution Science",
          web_app_creative_competition: "Web&App Creative competition in National Taipei University of Education",
          sent_me_email: "If you're interested in learning more about me, send me an email and I would love to chat!",
          advantech: "Advantech",
          trunk_studio: "Trunk Studio",
          taiwan_cloud: "Taiwan Cloud",
          advantech_dutie1: "Responsible for developing and maintaining <1>{{marketplace}}Marketplace</1> project with ASP.NETMVC5.",
          advantech_dutie2: "Successfully imported Coded UI Test with Selenium and completed CI process on my own in a week.",
          advantech_dutie3: "Shared UI Test experience on technical conferences with IT colleagues and QAcolleagues who is work in Kunshan, China."
        },
      },
      tw: {
        translation: {
          skill: "技能",
          experience: "經歷",
          present: "進行中",
          role: "角色",
          web_front_end_dev: "網頁前端開發",
          web_front_end: "網頁前端",
          back_end_dev: "後端開發",
          web_back_end_dev: "網頁後端開發",
          web_back_end: "網頁後端",
          database: "資料庫",
          medium_article: "Medium 文章",
          what_i_learn_in_adv: "研華物聯網實習計畫：半年實習過程分享",
          nutc: "國立臺中科技大學",
          student_elite_award: "學生菁英獎",
          first_prize: "第一名",
          third_prize: "第三名",
          honorable_mention: "佳作",
          innoserve: "大專校院資訊應用服務創新競賽",
          egd_category: "經濟地理資料庫",
          titansoft_agile: "鈦坦敏捷開發特別獎",
          campus_4g: "校園4G行動應用組",
          feng_chia: "逢甲商圈創業競賽",
          project_information_distribution_science: "資訊與流通學院專題成果展",
          web_app_creative_competition: "國立臺北教育大學 Web&App 創作競賽",
          sent_me_email: "如果",
          advantech: "Advantech 研華股份有限公司",
          trunk_studio: "Trunk Studio 創科資訊股份有限公司",
          taiwan_cloud: "Taiwan Cloud 臺灣寬雲股份有限公司",
          advantech_dutie1: "主要負責開發與維護研華<1>{{marketplace}}軟體市集</1>網站系統",
          advantech_dutie2: "僅耗費一星期，獨自研究並首度成功為研華導入網頁自動化測試與完成持續整合(CI)流程",
          advantech_dutie3: "舉辦技術分享會教導中國大陸昆山QA同仁及總部IT同仁自動化測試代碼撰寫及相關經驗"
        },
      },
    },
    debug: true,

    react: {
      wait: true,
    }
  })

export default i18n