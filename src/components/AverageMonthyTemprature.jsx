import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useLang } from "../context/LangContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display:false,
      maxHeight:"100px"
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: "#555",
          font: {
            size: 12,
          },
        },
      },
    },

    tooltip: {
      enabled: true,
    },
  },
};

function AverageMonthyTemprature() {
  const { setLanguage, lang } = useLang();
  const data =
    lang === "fa"
      ? {
          labels: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "ابان",
            "اذر",
            "دی",
            "بهمن",
            "اسفند",
          ],
          datasets: [
            {
              label: "Temprature",
              data: [10, 30, 40, 20, 30, 20, 20, 30, 20, 30, 20, 30],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3,
            },
          ],
        }
      : {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Temprature",
              data: [10, 30, 40, 20, 30, 20, 20, 30, 20, 30, 20, 30],
              
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.3,
            },
          ],
        };
  return (
    <div className=" col-span-12 lg:col-span-7 py-5  sm:p-5">
      <div className=" w-full dark:bg-[#3d4852]  bg-[#e1e9ee] py-2 px-5 rounded-2xl">
        <p className=" text-lg mb-4 font-bold text-gray-600 dark:text-gray-300">
          Average Monthly Temprature
        </p>
        <Line className="w-full text-white" data={data} options={options} />
      </div>
    </div>
  );
}

export default AverageMonthyTemprature;
