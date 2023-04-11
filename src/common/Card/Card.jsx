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
    <div className=" p-12 ">
      <div
        className={`bg-secondary-color rounded-[20px] border p-8 border-border-primary flex ${className}`}
      >
        <img
          src={image}
          alt={title}
          className=" items-center py-12 pl-3 pr-2  rounded-xl"
        />
        <div className="p-4">
          <h2 className=" font-semibold text-small-size text-primary-color ">
            {title}
          </h2>
          <div className=" pt-2 flex font-medium text-smallest-size items-center gap-2 text-tertiary-color">
            <CalenderIcon /> <p>{dateOfService}</p>
          </div>
          <div className="pt-2  flex font-medium text-smallest-size items-center gap-2 text-tertiary-color">
            <PlaceIcon /> <p>{placeOfService}</p>
          </div>
          <div className="pt-2  font-semibold text-small-size text-primary-color">
            {priceOfService}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
