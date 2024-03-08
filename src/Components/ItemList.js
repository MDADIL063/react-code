import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function ItemList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    dispatch(addItem(data));
  };
  return (
    <div>
      {items.map((data) => (
        <div key={data?.card?.info?.id} className="m-2 p-2 border-b-2 border-solid border-gray-200">
          <div className="py-2 flex justify-between">
            <div className="list-none">
              <li className="text-yellow-500">
                {data?.card?.info?.ribbon?.text ? "⭐" : null} {data?.card?.info?.ribbon?.text}
              </li>
              <li className="text-blue-500 font-semibold">{data?.card?.info?.name}</li>
              <li className="m-4 text-green-700"> ₹ {data?.card?.info?.price / 100 || data?.card?.info?.defaultPrice / 100}</li>
            </div>
            <div>
              <div className="absolute">
                <button
                  className="shadow-lg p-1 bg-white rounded-lg text-sm mt-[70] text-green-500 hover:bg-gray-200"
                  onClick={() => handleAddItem(data)}
                >
                  Add +
                </button>
              </div>

              <img className="w-32 h-24  rounded-md" src={CDN_URL + data?.card?.info?.imageId} />
            </div>
          </div>

          <p className="text-xs ">{data?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
