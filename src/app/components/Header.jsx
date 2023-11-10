"use client";
import Link from "next/link";
import Search from "./Search";
import { useEffect, useState } from "react";
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
  const handleClickOutside = (event) => {
    const listContainer = document.getElementById("list");

    // Check if the clicked element is outside the list container
    if (listContainer && !listContainer.contains(event.target)) {
      setShowCategories(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    // <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div className=" bg-[#54878f]">
      {/* <div className="  bg-white text-black"> */}
      {/* <div className=" bg-[#296073]"> */}
      <div className=" text-white  transition-all  items-center  duration-300   flex justify-around py-5  font-semibold max-w-6xl m-auto ">
        <div>
          <Link
            href={"/"}
            className="text-2xl">
            E-commerce Next
          </Link>
        </div>
        <div>
          <Search />
        </div>
        <div className="flex  gap-4">
          <Link
            className=" transition-all duration-300  hover:bg-[#74bec1] px-2 py-1  rounded-lg"
            href={"/"}>
            Home
          </Link>
          <Link
            className=" transition-all     duration-300 hover:bg-[#74bec1] px-2 py-1  visited:bg-[#74bec1] focus:bg-[#74bec1]  active:bg-[#74bec1]  rounded-lg"
            href={"/menu"}>
            Menu
          </Link>
          <div
            className=" relative "
            id="list">
            <button
              className=" transition-all outline-none focus:outline-none    duration-300 hover:bg-[#74bec1] px-2 py-1 visited:bg-[#74bec1]  focus:bg-[#74bec1] active:bg-[#74bec1]  rounded-lg"
              onClick={handleCategories}>
              Categories
            </button>
            <Link
              className=" transition-all   focus:outline-none   duration-300 hover:bg-[#74bec1] px-2 py-1 visited:bg-[#74bec1]  focus:bg-[#74bec1] active:[#74bec1]  rounded-lg"
              href={`/cart`}>
              Cart
            </Link>
            <ul
              className={`${
                showCategories === true ? "absolute" : " hidden"
              }  text-white   top-8 capitalize divide-y-2 border-[1px] border-[#74bec1]   rounded-lg  bg-[#98c6c0] w-[200px] scroll-smooth  text-xl font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
              {caregories.map((category, i) => (
                <Link
                  key={caregories[i]}
                  href={`/menu/categories/${category}`}>
                  <li className=" hover:bg-[#74bec1] py-1 px-1">{category}</li>
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
