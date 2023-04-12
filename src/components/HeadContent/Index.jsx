import React from "react";
import { RxCross2 } from "react-icons/rx";

const HeadContent = () => {
  return (
    <div className="bg-primary-color top-0 left-0 px-6 py-4">
      <div className="flex">
        <div className="text-secondary-color text-biggest-font-size text-start font-bold ">
          Choose the form of payment
        </div>
        <div className="text-secondary-color text-ideal-font-size mt-2 cursor-pointer">
          <RxCross2 />
        </div>
      </div>
    </div>
  );
};

export default HeadContent;
