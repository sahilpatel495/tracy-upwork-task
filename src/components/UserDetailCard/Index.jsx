import React from "react";

const UserDetailCard = () => {
  return (
    <div className=" p-12 ">
      <div className=" h-[164px] bg-card-color border border-border-primary rounded-2xl p-9 flex justify-between items-center">
        <div className="flex items-center">
          {/* The logo div for J */}
          <div className="w-[90px] h-[90px] bg-button-primary rounded-full">
            <div className="text-medium-size font-bold text-primary-color m-5 flex justify-center ">
              J
            </div>
          </div>
          {/* Name and number div */}
          <div className="flex flex-col text-start p-5">
            <div className="text-medium-size font-semibold text-primary-color">
              John
            </div>
            <div className="text-tertiary-color font-medium text-smaller-size">
              (88) 99602-2404
            </div>
          </div>
        </div>
        {/* logout button */}
        <div className="left-[467px] top-9">
          <button className="bg-button-primary w-36 h-20 rounded-xl text-primary-color font-semibold text-smaller-size">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailCard;
