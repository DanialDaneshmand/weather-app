import React from "react";

function Button({children,onclick,isActive,classes}) {
  return (
    <button
      onClick={onclick}
      className={`flex border ${
        isActive
          ? "text-blue-400 border-blue-400  "
          : " border-gray-400 text-gray-400 "
      } hover:border-blue-400  hover:text-blue-400 py-2 px-6 text-xs ${classes}  items-center gap-x-2`}
    >
      {children}
    </button>
  );
}

export default Button;
