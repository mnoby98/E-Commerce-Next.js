import Card from "@/app/components/item";
import axios from "axios";

const Category = async ({ params }) => {
  const category = params.category;
  console.log("params", category);

  const req = await fetch(
    `https://dummyjson.com/products/category/` + category
  );
  const data = await req.json();

  return (
    <div className=" max-w-7xl m-auto py-2">
      <div className="grid grid-cols-4 gap-5">
        {data.products.map((item) => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const reqCategories = await fetch(
    "https://dummyjson.com/products/categories",
    {
      next: { revalidate: 60 },
    }
  );

  const dataCategories = await reqCategories.json();
  console.log("dataaaa", dataCategories[0]);

  const paths = dataCategories.map((category) => ({
    params: { category: category.toString() },
  }));

  return { paths, fallback: false };
}
