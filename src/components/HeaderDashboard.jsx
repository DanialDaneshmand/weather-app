import { t } from "i18next";
import React, { useState } from "react";
import {
  HiOutlineCog6Tooth,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "../ui/Button";
import { useLang } from "../context/LangContext";

function HeaderDashboard() {
  const { setLanguage, lang } = useLang();
  return (
    <div className=" w-full  shadow-lg  flex justify-between items-center py-4  px-6">
      <div>
        <p className=" text-gray-400">Header Dashboard</p>
      </div>
      <div className=" flex items-center gap-x-6">
        <ChoseLocation />
        <Setting />
      </div>
    </div>
  );
}

export default HeaderDashboard;

function ChoseLocation() {
  const [value, setValue] = useState("en");
  const options = [
    { id: 1, language: t("English"), value: "en" },
    { id: 2, language: t("Persian "), value: "fa" },
  ];
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" flex justify-center items-center  w-full">
      <div className=" flex flex-col gap-y-1 relative">
        <label className=" absolute -top-3 left-2 block p-1 bg-[#f1f9fc] text-xs text-gray-500">
          search your location
        </label>
        <select
          className=" text-gray-800 outline-none border border-gray-300 rounded-lg py-2 w-64 text-sm"
          onChange={handleChange}
        >
          {options.map((item) => (
            <option key={item.id} value={item.value}>
              {item.language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Setting() {
  const [isShow, setIsShow] = useState(true);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { setLanguage, lang } = useLang();
  const handleDarkMode = (theme) => {
    if (theme === "light" && isDarkMode) {
      toggleDarkMode();
    }
    if (theme === "dark" && !isDarkMode) {
      toggleDarkMode();
    }
  };
  const handleLang = (lng) => {
    setLanguage(lng);
  };
  return (
    <div className=" relative">
      <button
        className=" cursor-pointer p-1"
        onClick={() => setIsShow(!isShow)}
      >
        <div
          className={`${
            isShow
              ? "border-[#57c0e9]  bg-[#cfedfa]  text-[#57c0e9]"
              : "text-gray-300"
          } border  p-2 rounded-md text-xl `}
        >
          <HiOutlineCog6Tooth />
        </div>
      </button>
      {isShow && (
        <div className=" p-4 space-y-4 absolute top-12 bg-white rounded-lg right-0 border border-gray-300 shadow-lg">
          {/* dark mode box */}
          <div className=" space-y-2 border-b-2 border-gray-200 pb-3">
            <p>Mode</p>
            <div className=" flex">
              <Button
                onclick={() => handleDarkMode("light")}
                isActive={!isDarkMode}
                classes={`rounded-l-lg ${isDarkMode && "border-r-0"}`}
              >
                <span>
                  <HiOutlineSun />
                </span>
                <span>Light</span>
              </Button>
              <Button
                onclick={() => handleDarkMode("dark")}
                isActive={isDarkMode}
                classes={`rounded-r-lg ${!isDarkMode && "border-l-0"}`}
              >
                <span>
                  <HiOutlineMoon />
                </span>
                <span>Dark</span>
              </Button>
            </div>
          </div>
          {/* language box */}
          <div className=" space-y-2 w-full border-b-2 border-gray-200 pb-3">
            <p>Language</p>
            <div className=" flex">
              <Button
                onclick={() => handleLang("en")}
                isActive={lang === "en"}
                classes={`rounded-l-lg w-full flex justify-center ${
                  isDarkMode && "border-r-0"
                }`}
              >
                En
              </Button>
              <Button
                onclick={() => handleLang("fa")}
                isActive={lang === "fa"}
                classes={`rounded-r-lg w-full flex justify-center ${
                  !isDarkMode && "border-l-0"
                }`}
              >
                Fa
              </Button>
            </div>
          </div>
          <button>exit</button>
        </div>
      )}
    </div>
  );
}
