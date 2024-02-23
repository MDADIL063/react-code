import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

import RestroCardComponent from "./RestroCardComponent";
import { API_DATA_URL, SAD_IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

function BodyComponent() {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const onlineStatus = useOnlineStatus();
  const filter = () => {
    setData(data.filter((res) => res.info.avgRating >= 4.2));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_DATA_URL);
    const json = await data.json();
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

    setData(restaurants);
    setFilteredRestaurant(restaurants);
  };

  if (onlineStatus === false) {
    return (
      <div className="no-connection">
        <h1>Please Check Your Internet Connection</h1>
        <h3>🔄 Checking the network cables, modem, and router</h3>
        <h3>🔄 Reconnecting to Wi-Fi</h3>
        <h3>🔄 ERR_INTERNET_DISCONNECTED😔</h3>
      </div>
    );
  }

  return data.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input type="text" placeholder="Search Restaurants here..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button
            onClick={() => {
              const filteredValue = data.filter((resp) => resp.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilteredRestaurant(filteredValue);
            }}
          >
            Search
          </button>
        </div>

        <button onClick={() => filter()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurant.length === 0 ? (
          <div className="sad-img">
            <p className="no-result">No Result Found </p>
            <img src={SAD_IMG_URL} alt="" />
          </div>
        ) : (
          filteredRestaurant?.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
              <RestroCardComponent resp={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BodyComponent;
