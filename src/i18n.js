import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Welcome to React": "my name is danial daneshmand"
    }
  },
  fa: {
    translation: {
      "Welcome to React": "نام من دانیال دانشمند است"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;