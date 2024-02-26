import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function HeaderComponent() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-blue-100 p-2 m-2 shadow-lg rounded-lg font-semibold">
      <div className="logo-container">
        <img className="w-20 rounded-xl" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery Store</Link>
          </li>

          {/* <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" /> */}
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
