import React from "react";
import { useLang } from "../context/LangContext";

function Layout({ children }) {
  const { setLanguage, lang } = useLang();
  return <div dir={lang==="fa"?"rtl":"ltr"}>{children}</div>;
}

export default Layout;
