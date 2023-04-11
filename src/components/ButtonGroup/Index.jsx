import React from "react";
import ButtonWrapper from "../../common/ButtonWrapper/ButtonWrapper";

const ButtonGroup = () => {
  return (
    <div className="p-12 flex flex-wrap justify-between">
      <ButtonWrapper
        children="Cash"
        className="border-2 border-primary-color "
      />
      <ButtonWrapper children="Credit card" className=" bg-button-primary " />
      <ButtonWrapper
        children={`eWallet/${" "} Virtualbank`}
        className=" bg-button-primary mt-4 flex  items-center"
      />
    </div>
  );
};

export default ButtonGroup;
