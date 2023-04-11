import React from "react";
import { RxCross2 } from "react-icons/rx";

const HeadContent = () => {
  return (
    <div className="bg-primary-color w-100 h-56 top-0 left-0 px-10 py-7">
      <div className="flex">
        <div className="text-secondary-color text-biggest-size text-start font-bold	w-[570px] leading-[68px]">
          Choose the form of payment
        </div>
        <div className="text-secondary-color text-biggest-size mt-[10px] ml-11 cursor-pointer">
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
