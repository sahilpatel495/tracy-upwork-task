import React from "react";
import "./../../App.css";

const InputWrapper = ({ placeholder, value, type, className }) => {
  return (
    <div className="px-7 py-3">
      <input
        className={`border border-border-primary rounded-xl w-full  py-3 px-4 font-normal text-primary-font-size text-primary-color  focus:outline-none focus:shadow-outline  ${className} `}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputWrapper;
