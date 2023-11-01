"use client";
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [caregories, setCategories] = useState([]);

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
      <div className="   text-white flex justify-around py-5  font-semibold max-w-6xl m-auto ">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Search />
        </div>
        <div className="flex  gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>menu</Link>
          <div
            className=" relative"
            id="list">
            <button
              // onMouseUp={handlecloseCat}
              onClick={handleCategories}>
              Categories
            </button>
            <ul
              className={`${
                showCategories === true ? "absolute" : " hidden"
              }  text-black capitalize divide-y-2 divide-orange-700  rounded-lg bg-orange-400 w-[200px] scroll-smooth  text-xl font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
              {caregories.map((category, i) => (
                <Link
                  key={caregories[i]}
                  href={`/menu/categories/${category}`}>
                  <li className=" hover:bg-orange-300 py-1 px-1">{category}</li>
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
