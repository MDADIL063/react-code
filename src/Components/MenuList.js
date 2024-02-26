import React from "react";
import { CDN_URL } from "../utils/constants";

function MenuList(props) {
  const { resp } = props;
  const { imageId, name, price, defaultPrice, category } = resp?.card?.info;
  const { text } = resp?.card?.info?.ribbon;

  return (
    <div className=" border-b-2 border-gray-400 pt-4 pb-20 my-2 mr-28 ml-44 ">
      <img className="w-44 h-36 float-right ml-64  scale-90 rounded-md hover:scale-100" src={CDN_URL + imageId} />

      <div className="pt-4 ">
        <p className="text-center text-yellow-500">
          {text ? "⭐" : null}
          {text}
        </p>
        <h4 className="text-center font-semibold text-blue-500">{name}</h4>

        <p className="text-center text-green-700">₹{price / 100 || defaultPrice / 100}</p>
        <p className="text-center">{category}</p>
      </div>
    </div>
  );
}

export default MenuList;
