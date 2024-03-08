import React, { useState } from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  let price = 0;
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  const handleClick = () => {
    dispatch(clearCart());
  };

  if (cartItems) {
    cartItems.forEach((item) => {
      price = price + +(+item?.card?.info?.price / 100 || +item?.card?.info?.defaultPrice / 100);
    });
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button className="m-2 p-1 bg-black text-white rounded-lg" onClick={handleClick}>
        Clear Cart
      </button>
      <div>{cartItems?.length === 0 && <h1>Your Cart is Empty! Please Add Some Items</h1>}</div>
      <div>
        {cartItems.length !== 0 ? (
          <div className="flex">
            <div className="w-6/12 mx-10 border border-dotted border-blue-500">
              <ItemList items={cartItems} />
            </div>
            <div className="h-40 mx-10 w-4/12 border border-dotted border-blue-500">
              <h1 className="border-dotted border-b-2 border-blue-300">Total Price</h1>
              <div className="flex justify-between mx-3">
                <h2>Price</h2>
                <h2>₹{price}</h2>
              </div>
              <div className="flex justify-between mx-3">
                <h2>Discount</h2>
                <h2 className="text-green-500">FLAT 20% OFF</h2>
              </div>
              <div className="flex justify-between mx-3">
                <h2>Delivery Charges</h2>
                <h2 className="text-red-500">+₹{price + 50 - (price * 20) / 100 >= 599 ? 0 : 50}</h2>
              </div>
              <div className="flex justify-between  border-dotted border-b-2 border-blue-300 mx-3">
                <h2>Total Price</h2>
                <h2>₹{price + (price + 50 - (price * 20) / 100 >= 599 ? 0 : 50) - (price * 20) / 100}</h2>
              </div>
              <div className="flex justify-between mx-3 ">
                <h2 className="font-bold text-xl">Total Price</h2>
                <h2 className="font-bold text-xl text-blue-500">
                  ₹{~~(price + (price + 50 - (price * 20) / 100 >= 599 ? 0 : 50) - (price * 20) / 100)}.00/-
                </h2>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
