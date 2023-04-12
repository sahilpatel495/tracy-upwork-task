import React from "react";

const UserDetailCard = () => {
  return (
    <div className=" p-7 ">
      <div className="  bg-card-color border border-border-primary rounded-2xl p-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* The logo div for J */}
          <div className="  bg-button-primary rounded-full p-4 ">
            <div className="text-primary-font-size font-bold text-primary-color w-6 pl-3 ">
              J
            </div>
          </div>
          {/* Name and number div */}
          <div className="flex flex-col text-start p-4">
            <div className="text-primary-font-size font-semibold text-primary-color">
              John
            </div>
            <div className="text-tertiary-color font-medium text-secondary-font-size">
              (88) 99602-2404
            </div>
          </div>
        </div>
        {/* logout button */}
        <div className="left-[467px] top-9">
          <button className="bg-button-primary rounded-lg text-primary-color font-semibold text-secondary-font-size px-4 py-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
