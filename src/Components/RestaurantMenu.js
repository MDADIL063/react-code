import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import MenuList from "./MenuList";
import { useState } from "react";

function RestaurantMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  const { name, cloudinaryImageId, cuisines, city, locality, totalRatingsString, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { maxDeliveryTime, minDeliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;

  const allCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(allCards);

  return (
    <div>
      <div className="menu">
        <h1 className="text-2xl text-center m-8 font-bold">{name}</h1>
        <img className="w-52 float-right mr-28 rounded-md " src={CDN_URL + cloudinaryImageId} />
        <h3 className="text-center text-xl">{name}</h3>

        <p className="text-center my-2 text-gray-500">{cuisines.join(", ")}</p>

        <div className="flex ml-[380px]">
          <p className=" ">{locality}, </p>
          <p className="text-green-600 text-center ml-0.5">{city}</p>
        </div>

        <p className="float-right mr-32 p-1 border border-solid border-green-600">{totalRatingsString}</p>
        <p className="float-right mr-4 p-1 border border-solid border-green-600 bg-green-600 text-white rounded-md">{avgRating} ⭐</p>

        <p className="text-center ml-28 my-2 text-orange-400">{costForTwoMessage}</p>
        <div className="text-center border-y border-dotted border-gray-400 mx-[340px] p-6  my-4">
          <p>
            Delivered Just In 🕐 {minDeliveryTime}-{maxDeliveryTime} MINS
          </p>
        </div>
      </div>
      <div className="text-center border-b-2 border-solid border-gray-400 p-4 mr-28 ml-44 "></div>

      <div>
        {allCards?.map((item, index) => (
          <MenuList
            data={item?.card?.card}
            setShowIndex={() => setShowIndex(index)}
            showList={index === showIndex ? true : false}
            key={item?.card?.card?.title}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
