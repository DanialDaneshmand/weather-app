import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiMapPin } from "react-icons/hi2";
import { t } from "i18next";
import toast from "react-hot-toast";

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([]);
  const [todayInfo,setTodayInfo]=useState()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "PUNN7W7KPNSHDUYN24EG3B372"; 
  const location = "اصفهان"; 
  const daysCount = 14; 

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const days = response.data.days.slice(0, daysCount); 
        setForecast(days);
        setTodayInfo(days[0])
        console.log(days);

        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت اطلاعات آب‌وهوا:", err);
        setError("خطا در دریافت اطلاعات");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری اطلاعات...</p>;
  if (error) return toast.error(error);

  return (
    <div className=" p-10">
      <div className=" grid grid-cols-12">
        <DailyInfo todayInfo={todayInfo} location={location}/>
        <AverageMonthyTemprature />
      </div>
      <div className="px-5">
        <TwoWeeksForecast forecast={forecast} />
      </div>
    </div>
  );
};

export default WeatherForecast;



function DailyInfo({todayInfo,location}) {
  return (
    <div className="col-span-5 p-5 text-gray-600">
      <div className=" w-full  bg-[#e1e9ee] p-5 rounded-2xl flex justify-between ">
        <div className=" space-y-4">
          <div className=" rounded-full flex bg-[#cdd9e0] gap-x-2 px-2 py-1">
            <span className=" text-lg">
              <HiMapPin />
            </span>
            <span className=" text-sm">{location}</span>
          </div>
          <div>
            <p className=" text-2xl font-bold">Monday</p>
            <div className=" text-xs flex justify-between gap-x-2">
              <span>24 Dc 2024</span>
              <span>11:45 Am</span>
            </div>
          </div>
          <div>
            <p className=" text-2xl font-bold">{todayInfo.temp}°C</p>
            <div className=" text-xs flex gap-x-2">
              <span>High:{todayInfo.tempmax}</span>
              <span>Low:{todayInfo.tempmin}</span>
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
          <p className=" text-xs flex items-center">{t("Feels Likes")} {todayInfo.feelslike}</p>
        </div>
      </div>
    </div>
  );
}

function AverageMonthyTemprature() {
  return (
    <div className=" col-span-7 p-5">
      <div className=" w-full bg-[#e1e9ee] ">zzzzzz</div>
    </div>
  );
}

function TwoWeeksForecast({ forecast }) {

  return (
    <div className=" w-full text-gray-600 bg-[#e1e9ee] rounded-2xl p-5">
      <p className=" text-lg font-black mb-4">2 Weeks Forecast</p>
      <div className=" flex gap-x-3 overflow-x-scroll">
        {forecast.map((item) => (
          <div
            className="bg-[#cdd9e0] rounded-2xl py-5 px-3 space-y-4 flex flex-col items-center"
            key={item.datetime}
          >
            <div className=" border-b border-slate-400 pb-2">
              <p className=" text-xs">Monday</p>
            </div>
            <img
              src={`https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${item.icon}.png`}
              alt=""
              className=" w-10 h-10"
            />
            <p className=" text-xs">{item.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
