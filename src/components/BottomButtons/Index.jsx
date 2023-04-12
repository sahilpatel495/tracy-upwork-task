import React from "react";
import ButtonWrapper from "../../common/ButtonWrapper/ButtonWrapper";

const BottomButtons = () => {
  return (
    <div className="p-7">
      <div className="flex justify-between items-center">
        <div className="text-primary-font-size text-primary-color font-medium cursor-pointer ">
          Previous
        </div>
        <div>
          <ButtonWrapper
            children="Next"
            className="bg-button-secondary text-secondary-color"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;
