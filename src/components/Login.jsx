import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import RHFTextField from "../ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useLang } from "../context/LangContext";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function Login() {
  const { t, i18n } = useTranslation();
  const schema = yup
    .object({
      name: yup.string().required(t("name is nesseccary")),
    })
    .required();
  return (
    <div className=" order-2 md:order-1 w-full flex-col min-h-screen py-10 bg-[#f5f9fc] dark:bg-[#1c1b22] flex justify-center items-center">
      <div className=" w-9/12 md:w-7/12 bg-[#fff] dark:bg-[#25262e] rounded-xl overflow-hidden shadow-lg">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <Input schema={schema} />
          <ImageBox />
        </div>
      </div>
      <ChangeLanguage />
    </div>
  );
}

export default Login;

function Input({ schema }) {
  const navigate=useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { loginUser, logoutUser, user } = useUser();
  const submitHandler = (data) => {
    loginUser(data)
    toast.success(t("success"))
    navigate("/dashboard")
  };

  return (
    <div className=" order-1 md:order-2 flex py-5 md:py-10 px-10 space-y-10 md:space-y-32 flex-col justify-center items-center">
      <form className="w-full dark:text-gray-300" onSubmit={handleSubmit(submitHandler)}>
        <div className=" flex  w-full  flex-col items-center md:gap-y-6">
          <p className=" text-xl dark:text-gray-300 font-bold">{t("login")}</p>
          <RHFTextField
            name="name"
            register={register}
            required
            errors={errors}
            placeholder={t("Enter Your Name")}
          />
        </div>
        <button
          className=" w-full rounded-lg py-2 bg-[#009cdb] text-white text-sm"
        >
          {t("login")}
        </button>
      </form>
    </div>
  );
}

function ChangeLanguage() {
  const [value, setValue] = useState("en");
  const { setLanguage, lang } = useLang();
  const options = [
    { id: 1, language: t("English"), value: "en" },
    { id: 2, language: t("Persian "), value: "fa" },
  ];
  const handleChange = (e) => {
    setValue(e.target.value);
    setLanguage(e.target.value||"en");
    
  };
  return (
    <div className=" flex justify-center items-center py-8 w-full">
      <div className=" flex flex-col gap-y-1">
        <p className=" text-gray-500 text-xs">{t("Language")}</p>
        <select
          className=" dark:text-gray-400 outline-none shadow-md  py-2 w-48 text-sm"
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

function ImageBox() {
  return <div className=" ">
    <img src="images/1.jpg" className=" w-full h-full" alt="" />
  </div>;
}
