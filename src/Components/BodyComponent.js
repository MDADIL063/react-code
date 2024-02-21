import React from "react";
import SearchComponent from "./SearchComponent";
import RestroCardComponent from "./RestroCardComponent";
import { API_DATA_URL, SAD_IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

function BodyComponent() {
  const [data, setData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState([]);
  console.log("rendering");

  const filter = () => {
    setData(data.filter((res) => res.info.avgRating >= 4.2));
    console.log(data);
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
          filteredRestaurant?.map((restaurant) => <RestroCardComponent resp={restaurant} key={restaurant.info.id} />)
        )}
      </div>
    </div>
  );
}

export default BodyComponent;
