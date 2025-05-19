import { t } from "i18next";
import { HiMapPin } from "react-icons/hi2";
import { useLang } from "../context/LangContext";
import { useEffect, useState } from "react";
import jalaliMoment from "jalali-moment";

function DailyInfo({ todayInfo, location }) {
  const { setLanguage, lang } = useLang();
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  useEffect(() => {
    if (lang === "en") {
      // catch date
      const date = new Date();

      const day = date.getDate();

      const monthsEnglish = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const monthName = monthsEnglish[date.getMonth()];
      const year = date.getFullYear();

      setDate(`${day} ${monthName} ${year}`);
      // catch day
      const englishDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date();
      const dayIndex = today.getDay();

      setDay(englishDays[dayIndex]);
      // catch hour
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();

      const amPm = hours >= 12 ? "pm" : "am";

      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      const time12HourFormat = `${hours}:${minutesStr} ${amPm}`;
      setHour(time12HourFormat);
    } else {
      // catch date
      const date = jalaliMoment();
      const dayOfWeek = date.locale("fa").format("dddd");
      const day = date.date();
      const month = date.locale("fa").format("MMM");
      const year = date.format("YYYY");

      const formattedDate = `${dayOfWeek} ${day} ${month} ${year}`;
      setDate(formattedDate);
      // catch day
      const iranianDays = [
        "یک‌شنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهار‌شنبه",
        "پنج‌شنبه",
        "جمعه",
        "شنبه",
      ];
      const today = new Date();
      const dayIndex = today.getDay();
      setDay(iranianDays[dayIndex]);
      // catch hour
      const now = new Date();

      let hours = now.getHours();
      const minutes = now.getMinutes();

      const amPm = hours >= 12 ? "ب.ظ" : "ق.ظ";

      hours = hours % 12;
      hours = hours ? hours : 12;

      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      const timeFarsi = `${hours}:${minutesStr} ${amPm}`;

      setHour(timeFarsi);
    }
  }, [lang]);

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
            <p className=" text-lg sm:text-2xl font-bold">{day}</p>
            <div className=" text-xs flex justify-between gap-x-2">
              <span>{date}</span>
              <span>{hour}</span>
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
              <span>{t("Feels Likes")}</span>{" "}
              <span>{t(todayInfo.feelslike)}</span>
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
