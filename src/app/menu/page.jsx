// "use client";
import axios from "axios";
import Item from "../components/item";
import Card from "../components/item";
import Search from "../components/Search";

const Menu = async () => {
  const menuList = await getData();

  return (
    <div className=" max-w-6xl m-auto my-10 py-2">
      <div className="grid  xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
        {menuList.map((item) => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;

export async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data.products;
  } catch (error) {
    return console.log(error);
  }
}
