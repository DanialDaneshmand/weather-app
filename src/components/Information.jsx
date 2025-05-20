import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiMapPin } from "react-icons/hi2";
import { t } from "i18next";
import toast from "react-hot-toast";
import { useLocation } from "../context/locationContext";
import AverageMonthyTemprature from "./AverageMonthyTemprature";
import TwoWeeksForecast from "./TwoWeeksForecast";
import DailyInfo from "./DailyInfo";

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [todayInfo, setTodayInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleSetLocation, location } = useLocation();

  const apiKey = "PUNN7W7KPNSHDUYN24EG3B372";
  const loc = location;
  const daysCount = 14;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${apiKey}&contentType=json`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const days = response.data.days.slice(0, daysCount);
        setForecast(days);
        setTodayInfo(days[0]);
        console.log(days);

        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت اطلاعات آب‌وهوا:", err);
        setError(t("Receive Error"));
        setLoading(false);
      });
  }, [location]);

  if (loading)
    return (
      <div className=" w-full flex justify-center mt-8 dark:text-gray-300">
        <p>{t("Receive Data")}</p>
      </div>
    );
  if (error) return toast.error(error);

  return (
    <div className=" p-5 sm:p-10 ">
      <div className=" grid grid-cols-12">
        <DailyInfo todayInfo={todayInfo} location={location} />
        <AverageMonthyTemprature />
      </div>
      <div className="sm:px-5">
        <TwoWeeksForecast forecast={forecast} />
      </div>
    </div>
  );
};

export default WeatherForecast;
