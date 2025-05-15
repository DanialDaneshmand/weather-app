function TextFeild({
  errors,
  label = "",
  name,
  type = "text",
  register,
  required,
  validationSchema,
  placeholder
}) {
  return (
    <div className=" my-10">
      <label
        htmlFor={name}
        className="mb-4 text-slate-600 dark:text-slate-300 block"
      >
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        placeholder={placeholder}
        {...register(name, validationSchema)}
        type={type}
        id={name}
        className={` bg-slate-200 shadow-blue-300 border-slate-500 dark:text-slate-300  rounded-lg w-full dark:bg-slate-500 outline-none text-slate-800 border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm`}
        // autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-sm block text-red-600 mt-4">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextFeild;
