import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

import RestroCardComponent, { Discount } from "./RestroCardComponent";
import { API_DATA_URL, SAD_IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

function BodyComponent() {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const onlineStatus = useOnlineStatus();

  const DiscountOffer = Discount(RestroCardComponent);
  const filter = () => {
    setFilteredRestaurant(data.filter((res) => res?.info?.avgRating >= 4.2));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_DATA_URL);
    const json = await data.json();
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setData(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (onlineStatus === false) {
    return (
      <div className="justify-center">
        <h1 className="text-center mt-10 text-xl font-bold">Please Check Your Internet Connection</h1>
        <h3 className="text-center my-2  text-gray-500 "> Checking the network cables, modem, and router</h3>
        <h3 className="text-center my-2 mr-24  text-gray-500">🌑 Reconnecting to Wi-Fi</h3>
        <h3 className="text-center my-2   text-gray-500">🌑 ERR_INTERNET_DISCONNECTED😔</h3>
        <h3 className="text-center ">📶❌ </h3>
      </div>
    );
  }

  return data.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="flex p-4 m-4">
        <div className="search">
          <input
            className="border border-solid border-black w-300 rounded-md w-56 pl-2  "
            type="text"
            data-testid="searchInput"
            placeholder="Search Restaurants here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5  bg-green-200 border border-solid border-black rounded-md mr-10 ml-2"
            onClick={() => {
              const filteredValue = data.filter((resp) => resp?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

              if (filteredValue.length) {
                setFilteredRestaurant(filteredValue);
              }
            }}
          >
            Search
          </button>
        </div>

        <button className="px-5  bg-green-200 border border-solid border-black rounded-md" onClick={() => filter()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.length === 0 ? (
          <div className=" ">
            <p className="text-center ml-[500px] ">No Result Found </p>
            <img className="w-96 ml-[500px]" src={SAD_IMG_URL} alt="" />
          </div>
        ) : (
          filteredRestaurant?.map((restaurant) => (
            <div key={restaurant?.info?.id} data-testid="resCard">
              <Link to={"/restaurant/" + restaurant?.info?.id}>
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <div className="hover:scale-90">
                    <DiscountOffer resp={restaurant} />
                  </div>
                ) : (
                  <div className="hover:scale-90">
                    <RestroCardComponent resp={restaurant} />
                  </div>
                )}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BodyComponent;
