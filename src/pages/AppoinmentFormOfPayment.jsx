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
    <div className="w-[750px] border border-primary-color m-10">
      <HeadContent />

      <UserDetailCard />

      <TitleOnPage className="text-medium-size" title="Selected services" />

      <ServicesDetailCard />

      <TitleOnPage
        className="text-small-size font-semibold text-primary-color"
        title="Enter your location"
      />

      <InputWrapper placeholder="Enter address" type="email" />

      <TitleOnPage
        className="text-small-size font-semibold text-primary-color"
        title="Note (optional)"
      />

      <InputWrapper placeholder="Enter text here" type="text" />

      <TitleOnPage
        className="text-biggest-size font-bold text-primary-color"
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
