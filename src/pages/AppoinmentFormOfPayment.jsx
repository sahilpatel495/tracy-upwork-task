import React from "react";
import HeadContent from "../components/HeadContent/Index";
import UserDetailCard from "../components/UserDetailCard/Index";
import TitleOnPage from "../components/TitleSelectedServcies/Index";
import ServicesDetailCard from "../components/ServicesDetailCard/Index";
import InputWrapper from "../common/InputWrapper/InputWrapper";
import ButtonGroup from "../components/ButtonGroup/Index";
import Decalaration from "../components/Declaratioon";
import BottomButtons from "../components/BottomButtons/Index";

const AppoinmentFormOfPayment = () => {
  return (
    <div className="w-[390px] border border-primary-color">
      <HeadContent />

      <UserDetailCard />

      <TitleOnPage
        className="text-biggest-font-size-size"
        title="Selected services"
      />

      <ServicesDetailCard />

      <TitleOnPage
        className="text-primary-font-size font-semibold text-primary-color"
        title="Enter your location"
      />

      <InputWrapper placeholder="Enter address" type="email" />

      <TitleOnPage
        className="text-primary-font-size font-semibold text-primary-color"
        title="Note (optional)"
      />

      <InputWrapper placeholder="Enter text here" type="text" />

      <TitleOnPage
        className="text-biggest-font-size font-bold text-primary-color"
        title="Choose a way to pay"
      />

      <ButtonGroup />

      <Decalaration />

      <hr />

      <BottomButtons />
    </div>
  );
};

export default AppoinmentFormOfPayment;
