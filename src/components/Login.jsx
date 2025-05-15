import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import RHFTextField from "../ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";


const options = [
  { id: 1, language: "English", value: "en" },
  { id: 2, language: "Persian ", value: "fa" },
];

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("نام ضروری است"),
  })
  .required();

function Login() {
  return (
    <div className=" w-full flex-col h-screen bg-[#f5f9fc] flex justify-center items-center">
      <div className="  w-7/12 bg-[#fff] rounded-xl overflow-hidden shadow-lg">
        <div className=" grid grid-cols-2">
          <Input />
          <ImageBox />
        </div>
      </div>
      <ChangeLanguage />
    </div>
  );
}

export default Login;

function Input() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { loginUser, logoutUser, user } = useUser();
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="  flex p-10 space-y-32 flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className=" flex w-full  flex-col items-center gap-y-6">
          <p className=" text-xl font-bold">Login</p>
          <RHFTextField
            name="name"
            register={register}
            required
            errors={errors}
            placeholder="Enter Your Name"
          />
        </div>
        <button
          onClick={() => loginUser(value)}
          className=" w-full rounded-lg py-2 bg-[#009cdb] text-white text-sm"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

function ChangeLanguage() {
  const [lang, setLang] = useState("en");

  return (
    <div className=" flex justify-center items-center py-8 w-full">
      <div className=" flex flex-col gap-y-1">
        <p className=" text-gray-500 text-xs">Language</p>
        <select
          className=" outline-none shadow-md p-2 w-48 text-sm"
          onChange={(e) => setLang(e.target.value)}
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
  return <div className=" bg-black">pic</div>;
}
