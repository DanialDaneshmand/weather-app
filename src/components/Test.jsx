import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useTranslation } from "react-i18next";
import { useLang } from "../context/LangContext";

function Test() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { setLanguage, lang } = useLang();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div  className=" bg-red-200">
      <p className=" dark:text-4xl">{t("Welcome to React")}</p>
      {/* <button onClick={toggleDarkMode}>dark</button> */}
      <div className=" flex items-center gap-x-8 ">
        <button type="button" onClick={() => changeLanguage("fa")}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          en
        </button>
      </div>
    </div>
  );
}

export default Test;
