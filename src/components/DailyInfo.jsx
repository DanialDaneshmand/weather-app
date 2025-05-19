import { t } from "i18next";
import { HiMapPin } from "react-icons/hi2";
import { useLang } from "../context/LangContext";

function DailyInfo({ todayInfo, location }) {
  const { setLanguage, lang } = useLang();

  return (
    <div className="col-span-12 lg:col-span-5  sm:p-5 text-gray-600 dark:text-gray-300">
      <div className=" w-full h-full dark:bg-[#3d4852]  bg-[#e1e9ee] p-5 rounded-2xl flex justify-between ">
        <div className=" flex flex-col justify-around">
          <div className=" rounded-full flex dark:text-gray-600 bg-[#cdd9e0] gap-x-2 px-2 py-1">
            <span className=" text-lg">
              <HiMapPin />
            </span>
            <span className=" text-sm">{location}</span>
          </div>
          <div>
            <p className=" text-lg sm:text-2xl font-bold">Monday</p>
            <div className=" text-xs flex justify-between gap-x-2">
              <span>24 Dc 2024</span>
              <span>11:45 Am</span>
            </div>
          </div>
          <div>
            <p className=" text-lg sm:text-2xl font-bold">{todayInfo.temp}°C</p>
            <div className=" text-xs flex gap-x-2">
              <span>
                {t("High")}:{todayInfo.tempmax}
              </span>
              <span>
                {t("Low")}:{todayInfo.tempmin}
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${todayInfo.icon}.png`}
            alt=""
            className=" mb-4"
          />
          <p className="text-xl font-bold">{todayInfo.conditions}</p>
          {lang === "en" ? (
            <p className=" text-xs flex items-center">
              <span>{t("Feels Likes")}</span> <span>{todayInfo.feelslike}</span>
            </p>
          ) : (
            <p className=" text-xs flex items-center">
              <span>{todayInfo.feelslike}</span>
              <span>{t("Feels Likes")}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DailyInfo;
