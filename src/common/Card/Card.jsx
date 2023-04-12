import React from "react";
import { ReactComponent as CalenderIcon } from "../../assets/vector/Calender.svg";
import { ReactComponent as PlaceIcon } from "../../assets/vector/Place.svg";

const Card = ({
  image,
  title,
  dateOfService,
  placeOfService,
  priceOfService,
  className,
}) => {
  return (
    <div className=" p-7 ">
      <div
        className={`bg-secondary-color rounded-xl border p-4 border-border-primary flex ${className}`}
      >
        <img
          src={image}
          alt={title}
          className=" items-center h-16 rounded-xl mt-4"
        />
        <div className="px-4">
          <h2 className=" font-semibold text-secondary-font-size text-primary-color ">
            {title}
          </h2>
          <div className=" pt-1 flex font-medium text-tertiary-font-size items-center gap-2 text-tertiary-color">
            <CalenderIcon /> <p>{dateOfService}</p>
          </div>
          <div className="pt-1  flex font-medium text-tertiary-font-size items-center gap-2 text-tertiary-color">
            <PlaceIcon /> <p>{placeOfService}</p>
          </div>
          <div className="pt-1  font-semibold text-secondary-font-size text-primary-color">
            {priceOfService}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
