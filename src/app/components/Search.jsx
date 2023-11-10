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
          className="  rounded-lg text-center text-[#54878f] focus:outline-none focus:ring-2 focus:ring-[#54878f]  px-1  focus:ring-offset-2  "
        />
      </form>
    </div>
  );
};

export default Search;
