import React from "react";
import { CDN_URL } from "../utils/constants";

function RestroCardComponent(props) {
  const { resp } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } = resp?.info;
  const { deliveryTime } = resp?.info.sla;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <h5>
        <p className="rating">{avgRating}</p>
        <p>Just In {deliveryTime} minutes</p>
      </h5>

      <span className="costForTwo">{costForTwo} </span>
      <span className="area-name"> {areaName}</span>
    </div>
  );
}

export default RestroCardComponent;
