import { t } from 'i18next'
import React from 'react'
import { useLang } from '../context/LangContext'

function TwoWeeksForecast({forecast}) {
  const { setLanguage, lang }=useLang()
    return (
        <div className=" w-full dark:text-gray-300 text-gray-600 dark:bg-[#3d4852] bg-[#e1e9ee] rounded-2xl p-5">
      <p className=" text-lg font-black mb-4">{t("Weeks Forecast")}</p>
      <div className=" flex gap-x-3 overflow-x-scroll">
        {forecast.map((item) => (
          <div
            className="bg-[#cdd9e0] dark:bg-[#62707c] rounded-2xl py-5 px-3 space-y-4 flex flex-col items-center"
            key={item.datetime}
          >
            <div className=" border-b border-slate-400 pb-2">
              <p className=" text-xs">Monday</p>
            </div>
            <img
              src={`https://raw.githubusercontent.com/VisualCrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${item.icon}.png`}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <p className=" text-xs">{item.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
    )
}

export default TwoWeeksForecast
