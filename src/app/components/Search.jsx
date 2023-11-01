"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    // const res = await fetch(
    //   `https://dummyjson.com/products/search?q=` + search
    // );

    // const data = await res.json();

    router.push(`/menu/search?q=${search}`);

    // console.log("data from search", data);
    setSearch("");
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
          placeholder="Search"
          className=" border-2 rounded-lg text-center text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600  px-1  focus:ring-offset-2  "
        />
      </form>
    </div>
  );
};

export default Search;
