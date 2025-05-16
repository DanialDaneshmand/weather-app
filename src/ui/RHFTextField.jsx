
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
    <div className=" w-full my-10">
      
      <input
        placeholder={placeholder}
        {...register(name, validationSchema)}
        type={type}
        id={name}
        className="w-full outline-none border border-gray-400 rounded-lg p-2 text-xs"
        // autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-xs block text-red-600 mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextFeild;
