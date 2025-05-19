import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n";

const LangContext = createContext();

function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  

  return (
    <LangContext.Provider value={{ setLanguage, lang }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangProvider;

export function useLang() {
  const context = useContext(LangContext);

  if (context === undefined)
    throw new Error("LangContext was used outside of LangProvier");

  return context;
}
