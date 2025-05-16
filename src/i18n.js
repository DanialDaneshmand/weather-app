import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "name is nesseccary": "name is nesseccary",
      login: "Login",
      "Enter Your Name": "Enter Your Name",
      Language: "Language",
      English: "English",
      "Persian ":"Persian "
    },
  },
  fa: {
    translation: {
      "name is nesseccary": "نام الزامی است",
      login: "ورود",
      "Enter Your Name": "نام خود را وارد کنید",
      Language: "زبان",
      English: "انگلیسی",
      "Persian ":"فارسی"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
