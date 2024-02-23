import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
}

export default useRestaurantMenu;