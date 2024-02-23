import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function HeaderComponent() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header">
      <div className="Logo-Container">
        <img className="Logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>

          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" />
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
