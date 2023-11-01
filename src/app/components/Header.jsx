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
      console.log("req", caregories);
    }
    console.log("showCategories", showCategories);
  }
  function handlecloseCat() {
    setShowCategories(false);
  }
  return (
    <div className="  bg-black text-white flex justify-around py-5  font-semibold">
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
            }  text-white capitalize divide-y-2 divide-purple-600  rounded-lg bg-purple-500 w-[200px] scroll-smooth  text-xl font-medium text-center cursor-pointer h-[200px] overflow-y-scroll`}>
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
  );
};

export default Header;
