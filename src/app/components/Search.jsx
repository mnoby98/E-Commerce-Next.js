"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    router.push(`/menu/search?q=${search}`);
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
          className=" border-2 border-yellow-300  rounded-lg text-center text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400  px-1  focus:ring-offset-2  "
        />
      </form>
    </div>
  );
};

export default Search;
