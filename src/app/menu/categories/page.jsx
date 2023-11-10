import Card from "@/app/components/item";
import Link from "next/link";

const Categories = async () => {
  const categories = await getData();
  return (
    <div className=" max-w-7xl m-auto  mt-10 py-2 ">
      <div className="grid grid-cols-4 gap-8">
        {categories.map((item) => (
          <Link
            key={item}
            href={`/menu/categories/${item}`}
            className=" border-2 bg-[#e2eff1] gap-10  w-[300px] shadow-lg rounded-md flex flex-col   items-center">
            <p className="text-xl capitalize font-medium flex justify-center items-center px-2  py-4  mt-2">
              {item}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

export async function getData() {
  const res = await fetch("https://dummyjson.com/products/categories", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data;
}
