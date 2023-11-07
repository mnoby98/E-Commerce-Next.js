/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getTotalCartQuantity,
  increaseItemQuantity,
} from "../redux/features/userSlice";
import toast from "react-hot-toast";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(Number(product.quantity));
  const totalPrice = useSelector((state) => state.user?.cart.total);

  function IncQuantity() {
    dispatch(increaseItemQuantity(product.id));

    // e.preventDefault();
    // if (maxQu) return;
    // setQuantity(quantity + 1);
  }
  function DecQuantity() {
    dispatch(decreaseItemQuantity(product.id));
    // e.preventDefault();
    // if (minQu) return;
    // setQuantity(quantity - 1);
  }
  return (
    <div className="grid grid-cols-2 items-center  justify-center px-4 py-5 max-w-4xl ">
      <div className="flex flex-col gap-3">
        <p>Product : {product.title}</p>
        <p>Price : {product.price}</p>
        <div>
          Quantity : <button onClick={DecQuantity}>-</button>
          <span> {product.quantity} </span>
          <button onClick={IncQuantity}>+</button>
          {/* <button onClick={(e) => IncQuantity(e)}>+</button> */}
          {/* {maxQu && (
              <p className="text-red-500 font-semibold ">Max Quantity</p>
            )} */}
        </div>
        {/* <p>Total Price : {quantity * Number(product.price)}</p> */}
        <p>Total Price : {product.total}</p>
      </div>
      <div className=" flex  justify-end">
        <img
          className=" w-36 h-36 rounded-lg"
          src={product.thumbnail}
          alt="Thumbnail"
        />
      </div>
    </div>
  );
};

export default CartItem;
