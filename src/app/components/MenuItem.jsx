"use client";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/features/userSlice";
import toast from "react-hot-toast";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = {
    id: item.id,
    title: item.title,
    price: item.price,
    quantity: 1,
    total: item.price,
    discountPercentage: item.discountPercentage,
    discountPrice: Number(item.price) * (Number(item.discountPercentage) / 100),
    thumbnail: item.thumbnail,
  };
  const newProduct = useSelector((state) =>
    state.user?.cart?.products?.find((product) => product.id === item.id)
  );
  function addCart() {
    if (newProduct) return toast.error("Product is already in cart");

    dispatch(addItemToCart(cartItem));
    toast.success("Product is in Cart");
    console.log(newProduct);
    console.log("addToCart");
  }
  return (
    <div>
      <h1 className="text-4xl mb-8 flex  justify-center">{item.title}</h1>
      <div className="flex    justify-center items-center gap-4 bg-gray-10 ">
        {item.images.map((image, i) => (
          <div
            className="snap-center"
            key={i}>
            <img
              src={image}
              alt={item.title}
              className=" flex  justify-between items-center w-72 h-52 shadow-xl "
            />
          </div>
        ))}
      </div>
      <div className=" capitalize text-2xl flex flex-col mb-4 gap-3 shadow-xl p-2 mt-5 bg-gray-50 rounded">
        <p>Title : {item.title}</p>
        <p>description : {item.description}</p>
        <p>price : {item.price} $</p>
        <p>discountPercentage: {item.discountPercentage}</p>
        <p>rating: {item.rating} &#9733;</p>
        <p>stock: {item.stock}</p>
        <p>brand: {item.brand}</p>
        <p>category: {item.category}</p>
        <div className="flex justify-center items-center ">
          <button
            onClick={addCart}
            className="bg-yellow-300 hover:bg-yellow-400 px-3 py-1 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
