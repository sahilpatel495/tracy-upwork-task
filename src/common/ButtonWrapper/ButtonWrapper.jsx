import React from "react";

const ButtonWrapper = ({ className, children }) => {
  return (
    <button
      className={`px-8 py-4 w-[315px] h-[100px] rounded-xl text-primary-color text-small-size font-semibold text-center cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonWrapper;
