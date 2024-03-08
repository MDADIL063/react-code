import React, { useState } from "react";

import ItemList from "./ItemList";

function MenuList({ data, showList, setShowIndex }) {
  //  data?.itemCards.filter((i) => i?.card?.info?.itemAttribute?.vegClassifier == "VEG")

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4  shadow-lg p-4 cursor-pointer">
        <div className=" flex justify-between" onClick={handleClick}>
          <span className="font-bold ">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span> {showList ? "🔼" : "🔽"}</span>
        </div>
        {showList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default MenuList;
