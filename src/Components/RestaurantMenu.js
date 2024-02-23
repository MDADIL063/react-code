import { CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;
  const { name, cloudinaryImageId, cuisines, city, locality, totalRatingsString, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { maxDeliveryTime, minDeliveryTime } = resInfo?.cards[2]?.card?.card?.info?.sla;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card);
  // console.log("gghfgfy", itemCards);
  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <img src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>

        <p className="cuisines">{cuisines.join(", ")}</p>

        <p className="cuisiness">
          {locality}, {city}
        </p>

        <p className="ratings">{totalRatingsString}</p>
        <p className="ratingss">{avgRating} Star</p>

        <div className="delivery">
          <p>{costForTwoMessage}</p>
          <p>
            🕐 {minDeliveryTime}-{maxDeliveryTime} MINS
          </p>
        </div>
      </div>
      <p className="border"></p>
      <div className="menu-list">
        {itemCards?.map((item) => (
          <div key={item.card.info.id} className="menu-data">
            <img src={CDN_URL + item.card.info.imageId} />
            <p className="bestseller">{item.card.info.ribbon.text}</p>
            <h4>{item.card.info.name}</h4>

            <p>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            <p>{item.card.info.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
