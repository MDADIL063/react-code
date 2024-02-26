import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import MenuList from "./MenuList";

function RestaurantMenu() {
  const { resId } = useParams();
  const [onlyVeg, setOnlyVeg] = useState([]);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  const { name, cloudinaryImageId, cuisines, city, locality, totalRatingsString, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { maxDeliveryTime, minDeliveryTime } = resInfo?.cards[2]?.card?.card?.info?.sla;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log("gghfgfy", item.card.info.itemAttribute.vegClassifier);
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
      <div className="text-center border-b-2 border-solid border-gray-400 p-4 mr-28 ml-44 ">
        Click Here For
        {onlyVeg?.length !== 0 ? (
          <button
            className=" border border-solid border-black p-1 ml-1 rounded-md text-sm bg-orange-400"
            onClick={() => {
              setOnlyVeg([]);
            }}
          >
            ALL Menu
          </button>
        ) : (
          <button
            className="border border-solid border-black p-1  ml-1 rounded-md text-sm bg-green-400"
            onClick={() => {
              filterData = itemCards?.filter((item) => item.card.info.itemAttribute.vegClassifier == "VEG");
              setOnlyVeg(filterData);
            }}
          >
            Only Veg
          </button>
        )}
      </div>

      <div>
        {onlyVeg?.length !== 0
          ? onlyVeg?.map((item) => <MenuList resp={item} key={item.card.info.id} />)
          : itemCards?.map((item) => <MenuList resp={item} key={item.card.info.id} />)}
      </div>
    </div>
  );
}

export default RestaurantMenu;
