"use client";
import Link from "next/link";
import Search from "./Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [caregories, setCategories] = useState([]);

  const user = useSelector((state) => state.user.user);

  async function handleCategories() {
    setShowCategories((show) => !show);
    // setShowCategories(true);

    if (showCategories === false) {
      const req = await axios.get("/api/categories");
      setCategories(req.data.data);
    }
  }
  function handleShowHeader() {
    setShowHeader((show) => !show);
  }

  const handleClickOutside = (event) => {
    const listContainer = document.getElementById("list");
    const headerContainer = document.getElementById("headerList");

    // Check if the clicked element is outside the list container
    if (listContainer && !listContainer.contains(event.target)) {
      setShowCategories(false);
    }

    if (headerContainer && !headerContainer.contains(event.target)) {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showHeader]);
  return (
    <div className=" bg-[#54878f]  ">
      <div className=" text-white  transition-all relative text-2xl sm:text-sm px-10 text-center  lg:items-center  duration-300   lg:flex lg:justify-around py-5  font-semibold  sm:max-w-7xl mx-auto ">
        <div className="flex gap-2 justify-center items-center">
          <Link
            href={"/"}
            className="sm:text-2xl text-3xl ">
            E-commerce Next
          </Link>
        </div>
        <div className="py-3 justify-center flex gap-4 lg:py-0">
          <button
            onClick={handleShowHeader}
            className="sm:hidden flex gap-1 justify-center flex-col">
            <div className=" w-6 bg-white h-1"></div>
            <div className=" w-3 bg-white h-1"></div>
            <div className=" w-6 bg-white h-1"></div>
          </button>
          <Search />
        </div>
        <div
          id="headerList"
          className={`sm:flex sm:items-center sm:justify-around   ${
            showHeader
              ? "flex flex-col absolute  right-0 w-full  top-0"
              : "hidden"
          } bg-[#54878f]  gap-4   py-3  `}>
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
          <Link
            className=" transition-all   focus:outline-none   duration-300 hover:bg-[#74bec1] px-2 py-1 visited:bg-[#74bec1]  focus:bg-[#74bec1] active:[#74bec1]  rounded-lg"
            href={`/cart`}>
            Cart
          </Link>
          <div
            className=" relative "
            id="list">
            <button
              className=" transition-all outline-none focus:outline-none    duration-300 hover:bg-[#74bec1] px-2 py-1 visited:bg-[#74bec1]  focus:bg-[#74bec1] active:bg-[#74bec1]  rounded-lg"
              onClick={handleCategories}>
              Categories
            </button>
            <ul
              className={`${
                showCategories === true ? "absolute z-10" : " hidden"
              }  text-white  right-10  top-8 capitalize divide-y-2 border-[1px] border-[#74bec1]   rounded-lg  bg-[#98c6c0] w-[200px] scroll-smooth   font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
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
