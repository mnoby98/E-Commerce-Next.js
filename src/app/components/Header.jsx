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
    <div className="bg-black">
      <div className="     text-white flex justify-around py-5  font-semibold max-w-6xl m-auto ">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Search />
        </div>
        <div className="flex  gap-4">
          <Link
            className=" hover:bg-yellow-300 px-2 py-1 hover:text-black rounded-lg"
            href={"/"}>
            Home
          </Link>
          <Link
            className=" hover:bg-yellow-300 px-2 py-1 hover:text-black rounded-lg"
            href={"/menu"}>
            menu
          </Link>
          <div
            className=" relative "
            id="list">
            <button
              className=" hover:bg-yellow-200 px-2 py-1 hover:text-black rounded-lg"
              // onMouseUp={handlecloseCat}
              onClick={handleCategories}>
              Categories
            </button>
            <Link
              className=" hover:bg-yellow-300 px-2 py-1 hover:text-black rounded-lg"
              // onMouseUp={handlecloseCat}
              // onClick={handleCart}>
              href={`/cart?c=${user.id}`}>
              Cart
            </Link>
            <ul
              className={`${
                showCategories === true ? "absolute" : " hidden"
              }  text-black capitalize divide-y-2 divide-orange-700  rounded-lg bg-yellow-300 w-[200px] scroll-smooth  text-xl font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
              {caregories.map((category, i) => (
                <Link
                  key={caregories[i]}
                  href={`/menu/categories/${category}`}>
                  <li className=" hover:bg-yellow-400 py-1 px-1">{category}</li>
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
