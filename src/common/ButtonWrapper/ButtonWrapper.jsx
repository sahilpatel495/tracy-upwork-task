import React from "react";

const ButtonWrapper = ({ className, children }) => {
  return (
    <button
      className={`px-5 py-3 rounded-xl text-primary-color text-primary-font-size font-semibold text-center cursor-pointer w-40 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
