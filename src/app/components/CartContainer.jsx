"use client";
import CartItem from "./CartItem";
import { DeleteUserCart } from "../api/cart/delete/route";
import { useEffect, useState } from "react";
import Link from "next/link";
import { addCart } from "../api/cart/add/route";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, setCart } from "../redux/features/userSlice";
import toast from "react-hot-toast";

const CartContainer = ({ cart }) => {
  const dispatch = useDispatch();

  // dispatch(setCart(cart?.carts?.[0]));
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log("cartItems", cartItems);
    dispatch(setCart(cartItems));
  }, [dispatch]);
  const products = useSelector(getCart);
  const totalPrice = useSelector((state) => state?.user?.cart?.total);
  const cartId = useSelector((state) => state?.user?.cart?.userId);
  console.log("cartId", cartId);
  const totalQuantity = useSelector(
    (state) => state?.user?.cart?.totalQuantity
  );
  const totalProducts = useSelector(
    (state) => state?.user?.cart?.totalProducts
  );
  //////
  // const products = cart?.carts?.[0]?.products;
  // const cartId = cart?.carts?.[0]?.id;
  const [deleted, setDeleted] = useState(false);
  console.log("cart", products);

  async function deleteCart() {
    const data = await DeleteUserCart(cartId);
    dispatch(clearCart());
    toast.success("cart is deleted");
    // setDeleted(data.isDeleted);
  }
  async function submitCart() {
    const productsAndUserId = { products, cartId };
    const data = await addCart(productsAndUserId);
    if (data) {
      toast.success("cart is submited");
    }
  }
  return (
    <div className=" text-xl   ">
      {products?.length === 0 ? (
        <p className="flex justify-center items-center mt-20 pt-2">
          Cart is empty , buy now
          <Link
            className=" text-blue-600 px-2"
            href={"/menu"}>
            Menu
          </Link>
        </p>
      ) : (
        <div className="flex flex-col   divide-y-2 text-xl    gap-5">
          {products?.map((product) => (
            <CartItem
              key={product?.id}
              product={product}
            />
          ))}
          <div className="flex  justify-center text-2xl  ">
            <p className="px-1 py-1 border-x-2 border-b-2 ">
              total Price: {totalPrice} $
            </p>
            <p className=" py-1 px-1 border-b-2 ">
              total Quantity: {totalQuantity}{" "}
            </p>
            <p className="px-1 py-1 border-x-2 border-b-2">
              total Products: {totalProducts}{" "}
            </p>
          </div>
          <div className="flex justify-center gap-3 items-center pt-2">
            <button
              onClick={submitCart}
              className="bg-yellow-300  px-3 py-1 my-3 hover:bg-yellow-400  text-black rounded-md">
              Submit Cart
            </button>
            <button
              onClick={deleteCart}
              className="bg-red-500 hover:bg-red-600  px-3 py-1 my-3 text-white rounded-md">
              Delete Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
