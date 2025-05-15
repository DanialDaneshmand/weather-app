import { createContext, useContext, useState } from "react";

const LangContext = createContext();

function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const setLanguage = (lang) => {
    setLang(lang);
  };
  
  return <LangContext.Provider value={{setLanguage,lang}}>{children}</LangContext.Provider>;
}

export default LangProvider;

export function useLang() {
  const context = useContext(LangContext);

  if (context === undefined)
    throw new Error("LangContext was used outside of LangProvier");

  return context;
}
