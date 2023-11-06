/* eslint-disable jsx-a11y/alt-text */

import MenuItem from "@/app/components/MenuItem";

/* eslint-disable @next/next/no-img-element */
const Item = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);

  const item = await res.json();
  return (
    <div className=" max-w-5xl m-auto py-2">
      <MenuItem item={item} />
    </div>
  );
};

export default Item;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const paths = data.products.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}
