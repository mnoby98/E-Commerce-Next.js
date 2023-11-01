"use client";
import Card from "@/app/components/item";
import { useEffect, useState } from "react";

const SearchPage = ({ searchParams }) => {
  const [items, setItems] = useState([]);
  const searchParam = searchParams.q;

  useEffect(() => {
    async function getItems() {
      const req = await fetch(
        `https://dummyjson.com/products/search?q=` + searchParam
      );
      const data = await req.json();

      setItems(data.products);
    }
    getItems();
  }, [searchParam]);

  return (
    <div className=" max-w-7xl m-auto py-2">
      <h1 className="text-4xl mb-4 flex justify-center">
        Search Page with {searchParam}
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {items.length === 0 && (
          <p className=" text-center text-2xl">
            No Product with =( {searchParam}
          </p>
        )}
        {items.map((item) => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
