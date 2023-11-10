"use client";
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [caregories, setCategories] = useState([]);

  const user = useSelector((state) => state.user.user);

  async function handleCart() {
    console.log("user", user.id);
  }

  async function handleCategories() {
    setShowCategories((show) => !show);
    // setShowCategories(true);

    if (showCategories === false) {
      const req = await axios.get("/api/categories");
      setCategories(req.data.data);
    }
    console.log("showCategories", showCategories);
  }
  function handlecloseCat() {
    setShowCategories(false);
  }
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* <div className="  bg-white text-black"> */}
      {/* <div className=" bg-[#296073]"> */}
      <div className=" text-white  transition-all   duration-300   flex justify-around py-5  font-semibold max-w-6xl m-auto ">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Search />
        </div>
        <div className="flex  gap-4">
          <Link
            className=" transition-all duration-300  hover:bg-purple-400 px-2 py-1  rounded-lg"
            href={"/"}>
            Home
          </Link>
          <Link
            className=" transition-all   duration-300 hover:bg-purple-400 px-2 py-1  visited:bg-purple-400  focus:bg-purple-400 active:bg-yellow-300  rounded-lg"
            href={"/menu"}>
            menu
          </Link>
          <div
            className=" relative "
            id="list">
            <button
              className=" transition-all   duration-300 hover:bg-purple-400 px-2 py-1 visited:bg-purple-400  focus:bg-purple-400 active:bg-purple-400  rounded-lg"
              onClick={handleCategories}>
              Categories
            </button>
            <Link
              className=" transition-all   duration-300 hover:bg-purple-400 px-2 py-1 visited:bg-purple-400  focus:bg-purple-400 active:bg-purple-400  rounded-lg"
              href={`/cart`}>
              Cart
            </Link>
            <ul
              className={`${
                showCategories === true ? "absolute" : " hidden"
              }  text-black capitalize divide-y-2 divide-orange-700  rounded-lg  bg-yellow-300 w-[200px] scroll-smooth  text-xl font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
              {caregories.map((category, i) => (
                <Link
                  key={caregories[i]}
                  href={`/menu/categories/${category}`}>
                  <li className=" hover:bg-purple-400 py-1 px-1">{category}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
