import React from "react";
import { LOGO_URL } from "../utils/constants";

function HeaderComponent() {
  return (
    <div className="Header">
      <div className="Logo-Container">
        <img className="Logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" />
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
