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
      "Persian ": "Persian ",
      success: "login is success",
      "weather Dashboard": "weather Dashboard",
      "search your location": "search your location",
      Mode: "Mode",
      Dark: "Dark",
      Light: "Light",
      En: "En",
      Fa: "Fa",
      Exit: "Exit",
      "Feels Likes": "Feels Likes",
      "Weeks Forecast": "2 Weeks Forecast",
      "Average Monthly Temprature": "Average Monthly Temprature",
      "High":"High",
      Low:"Low",
      Clear:"Clear",
      "Receive Data":"data is loading ...",
      "Receive Error":"error in data receiving ..."
    },
  },
  fa: {
    translation: {
      "name is nesseccary": "نام الزامی است",
      login: "ورود",
      "Enter Your Name": "نام خود را وارد کنید",
      Language: "زبان",
      English: "انگلیسی",
      "Persian ": "فارسی",
      success: "ورود با موفقیت انجام شد",
      "weather Dashboard": "داشبورد اب و هوا ",
      "search your location": "مکان مورد نظر را جستجو کنید",
      Mode: "حالت روز و شب",
      Dark: "شب",
      Light: "روز",
      En: "انگلیسی",
      Fa: "فارسی",
      Exit: "خروج",
      "Feels Likes": "درجه احساس می شود",
      "Weeks Forecast": "پیش بینی دو هفته",
      "Average Monthly Temprature": "میانگین دمای ماهانه",
      High:"بیشینه",
      Low:"کمینه",
      Clear:"صاف",
    "Receive Data":"در حال بارگذاری اطلاعات...",
    "Receive Error":"خطا در دریافت اطلاعات"
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
