import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineMagnifyingGlass,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import Button from "../ui/Button";
import { useLang } from "../context/LangContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/locationContext";
import useOutsideClick from "../pages/useOutsideClick";

function HeaderDashboard() {
  const { setLanguage, lang } = useLang();
  const { loginUser, logoutUser, user } = useUser();

  return (
    <div className=" w-full  shadow-lg flex  flex-col md:flex-row gap-y-8 md:gap-y-0 justify-between items-center py-4  px-6">
      <div>
        
          <p className=" flex gap-x-2 items-center text-gray-400">
            <span>
              <img
                src="/images/5.jpg"
                className="w-14 h-14 rounded-full"
                alt=""
              />
            </span>
            <span>{t("weather Dashboard")}</span>
          </p>
        
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
  const { handleSetLocation, location } = useLocation();
  const { setLanguage, lang } = useLang();

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(location);
  }, []);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSetLocation(value);
  };
  return (
    <div className=" flex justify-center items-center  w-full">
      <form className=" flex flex-col gap-y-1 relative" onSubmit={handleSubmit}>
        <label
          className={`absolute -top-3 ${
            lang === "fa" ? "right-2" : "left-2"
          } block p-1 bg-[#f1f9fc] dark:bg-[#1c1b22] text-xs text-gray-500`}
        >
          {t("search your location")}
        </label>
        <input
          className=" p-2 outline-none text-gray-400 border-gray-300 border text-sm rounded-md w-64"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button
          className={`${
            lang === "fa" ? "left-2 " : "right-2"
          } cursor-pointer absolute top-2 text-gray-400  text-xl  z-5`}
        >
          <HiOutlineMagnifyingGlass />
        </button>
      </form>
    </div>
  );
}

function Setting() {
  const [isShow, setIsShow] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { setLanguage, lang } = useLang();
  const { loginUser, logoutUser, user } = useUser();
  const navigate = useNavigate();
  const ref = useOutsideClick(() => setIsShow(false));

  const handleDarkMode = (theme) => {
    if (theme === "light" && isDarkMode) {
      toggleDarkMode();
    }
    if (theme === "dark" && !isDarkMode) {
      toggleDarkMode();
    }
  };
  const handleLang = (lng) => {
    console.log(lng);
    setLanguage(lng);
  };
  const handleExit = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div className=" relative">
      <button
        className=" cursor-pointer p-2"
        onClick={() => setIsShow(!isShow)}
      >
        <div
          className={`${
            isShow
              ? "border-[#57c0e9]  bg-[#cfedfa] dark:bg-[#62707c]  text-[#57c0e9]"
              : "text-gray-300"
          } border  p-2 rounded-md text-xl `}
        >
          <HiOutlineCog6Tooth />
        </div>
      </button>
      {isShow && (
        <div
          ref={ref}
          className={`p-4 space-y-4 absolute top-12 bg-white dark:bg-[#62707c] rounded-lg ${
            lang === "fa" ? "left-0" : "right-0"
          } border border-gray-300 dark:border-gray-400 shadow-lg`}
        >
          {/* dark mode box */}
          <div className=" space-y-2 border-b-2 dark:border-gray-400 border-gray-200 pb-3">
            <p className=" dark:text-gray-300">{t("Mode")}</p>
            {lang === "en" ? (
              <div className=" flex">
                <Button
                  onclick={() => handleDarkMode("light")}
                  isActive={!isDarkMode}
                  classes={`rounded-l-lg ${isDarkMode && "border-r-0"}`}
                >
                  <span>
                    <HiOutlineSun />
                  </span>
                  <span>{t("Light")}</span>
                </Button>
                <Button
                  onclick={() => handleDarkMode("dark")}
                  isActive={isDarkMode}
                  classes={`rounded-r-lg ${!isDarkMode && "border-l-0"}`}
                >
                  <span>
                    <HiOutlineMoon />
                  </span>
                  <span>{t("Dark")}</span>
                </Button>
              </div>
            ) : (
              <div className=" flex">
                <Button
                  onclick={() => handleDarkMode("dark")}
                  isActive={isDarkMode}
                  classes={`rounded-r-lg ${!isDarkMode && "border-l-0"}`}
                >
                  <span>
                    <HiOutlineMoon />
                  </span>
                  <span>{t("Dark")}</span>
                </Button>
                <Button
                  onclick={() => handleDarkMode("light")}
                  isActive={!isDarkMode}
                  classes={`rounded-l-lg ${isDarkMode && "border-r-0"}`}
                >
                  <span>
                    <HiOutlineSun />
                  </span>
                  <span>{t("Light")}</span>
                </Button>
              </div>
            )}
          </div>
          {/* language box */}
          <div className=" space-y-2 w-full border-b-2 dark:border-gray-400 border-gray-200 pb-3 ">
            <p className=" dark:text-gray-300">{t("Language")}</p>
            <div dir="ltr" className=" flex">
              <Button
                onclick={() => handleLang("en")}
                isActive={lang === "en"}
                classes={`rounded-l-lg w-full flex justify-center  ${
                  lang === "en" ? "border-r border-blue-400" : "border-r-0"
                }`}
              >
                {t("En")}
              </Button>
              <Button
                onclick={() => handleLang("fa")}
                isActive={lang === "fa"}
                classes={`rounded-r-lg w-full flex justify-center ${
                  lang === "en" && "border-l-0"
                }`}
              >
                {t("Fa")}
              </Button>
            </div>
          </div>
          <button
            onClick={handleExit}
            className=" flex items-center gap-x-2 text-red-600"
          >
            <span className=" text-2xl">
              <HiOutlineArrowRightStartOnRectangle />
            </span>
            <span>{t("Exit")}</span>
          </button>
        </div>
      )}
    </div>
  );
}

{
  /* language box */
}
{
  /* <div className=" space-y-2 w-full border-b-2 dark:border-gray-400 border-gray-200 pb-3">
  <p className=" dark:text-gray-300">{t("Language")}</p>
  {lang === "en" ? (
    <div className=" flex">
      <Button
        onclick={() => handleLang("en")}
        isActive={lang === "en"}
        classes={`rounded-l-lg w-full flex justify-center  ${
          lang === "en" && "border-r border-blue-400"
        }`}
      >
        {t("En")}
      </Button>
      <Button
        onclick={() => handleLang("fa")}
        isActive={lang === "fa"}
        classes={`rounded-r-lg w-full flex justify-center ${
          lang === "en" && "border-l-0"
        }`}
      >
        {t("Fa")}
      </Button>
    </div>
  ) : (
    <div className=" flex">
      <Button
        onclick={() => handleLang("fa")}
        isActive={lang === "fa"}
        classes={`rounded-r-lg w-full flex justify-center ${
          !isDarkMode && "border-l-0"
        }`}
      >
        {t("Fa")}
      </Button>
      <Button
        onclick={() => handleLang("en")}
        isActive={lang === "en"}
        classes={`rounded-l-lg w-full flex justify-center ${
          isDarkMode && "border-r-0"
        } `}
      >
        {t("En")}
      </Button>
    </div>
  )}
</div>; */
}
