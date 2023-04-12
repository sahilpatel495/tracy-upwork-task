import React from "react";

const TitleOnPage = ({ title, className }) => {
  return (
    <div className={` font-bold text-primary-color px-7 ${className}`}>
      {title}
    </div>
  );
};

export default TitleOnPage;
