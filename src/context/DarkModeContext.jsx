import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStoragesTate";

const DarkModeContext = createContext();

export function DarkModeProvier({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMoode",
    window.matchMedia("(prefers-color-scheme: dark)").matches // true, false
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvier");

  return context;
}


