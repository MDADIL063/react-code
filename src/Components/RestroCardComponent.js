import React from "react";
import { CDN_URL } from "../utils/constants";

function RestroCardComponent(props) {
  const { resp } = props;
  // console.log(resp);
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } = resp?.info;
  const { deliveryTime } = resp?.info.sla;
  return (
    <div className="m-4 p-2    w-[190px] rounded-md border border-solid border-blue-200 h-[450px] scale-100    hover:border hover:border-solid  hover:border-cyan-400">
      <img className="rounded-md h-[200px] " src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3 className=" text-center text-lg font-semibold py-2">{name}</h3>
      <h4 className=" text-sm text-gray-400">{cuisines.join(", ")}</h4>

      <div className="flex  m-1">
        <p className="mr-2 p-0.5 bg-green-600 text-sm rounded-md text-center">{avgRating}</p>
        <p className="text-sm">Just In {deliveryTime} minutes</p>
      </div>
      <div className="flex my-2">
        <p className="text-sm mr-2  text-green-500">{costForTwo} </p>
        <p className="text-sm  text-gray-500"> {areaName}</p>
      </div>
    </div>
  );
}

export const Discount = (RestroCardComponent) => {
  return (props) => {
    const { header, subHeader } = props?.resp?.info?.aggregatedDiscountInfoV3;

    return (
      <div>
        <label className="absolute flex z-10 bg-slate-800 opacity-80 text-white pl-1  ml-5  w-[175px] my-[184px] rounded-lg font-semibold ">
          <p className="text-white mr-3">{header}</p>
          <p className="text-white">{subHeader}</p>
        </label>
        <RestroCardComponent {...props} />
      </div>
    );
  };
};

export default RestroCardComponent;
