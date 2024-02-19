import React from "react";
import SearchComponent from "./SearchComponent";
import RestroCardComponent from "./RestroCardComponent";
import respList from "../utils/mockData";
import { useState } from "react";

function BodyComponent() {
  const [data, setData] = useState(respList);

  const filter = () => {
    // e.preventdefault();
    setData(data.filter((res) => res.info.avgRating > 4.5));
    console.log(data);
  };
  return (
    <div>
      {/* <SearchComponent /> */}
      <div className="filter-btn">
        <button onClick={() => filter()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {data?.map((returent) => (
          <RestroCardComponent resp={returent} key={returent.info.id} />
        ))}
      </div>
    </div>
  );
}

export default BodyComponent;
