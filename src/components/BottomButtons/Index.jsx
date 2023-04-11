import React from "react";
import ButtonWrapper from "../../common/ButtonWrapper/ButtonWrapper";

const BottomButtons = () => {
  return (
    <div className="p-12">
      <div className="flex justify-between items-center">
        <div className="text-small-size text-primary-color font-medium ">
          Previous
        </div>
        <div>
          <ButtonWrapper
            children="Next"
            className="bg-button-secondary text-secondary-color w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;
