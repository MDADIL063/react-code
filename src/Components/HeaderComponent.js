import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function HeaderComponent() {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-100 p-2 m-2 shadow-lg rounded-lg font-semibold">
      <div className="logo-container">
        <img className="w-20 rounded-xl hover:scale-90" src={LOGO_URL} alt="" />
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
          <div className="flex">
            <Link to="/cart" className="pl-4  font-bold">
              <img
                className="w-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/938px-Shopping_cart_icon.svg.png"
              />
            </Link>

            <Link to="/cart" className="bg-black rounded-3xl w-6 h-6 pl-1.5  text-white ">
              {cartItems.length}
            </Link>
          </div>
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
