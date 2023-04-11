import React from "react";
import "./../../App.css";

const InputWrapper = ({ placeholder, value, type, className }) => {
  return (
    <div className="px-12 py-6">
      <input
        className={`border border-border-primary rounded-xl w-full h-[100px] py-3 px-4 font-normal text-small-size text-primary-color leading-10 focus:outline-none focus:shadow-outline  ${className} `}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputWrapper;
