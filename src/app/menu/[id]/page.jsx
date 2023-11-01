/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const Item = async ({ params }) => {
  console.log("params", params);
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);

  const item = await res.json();
  return (
    <div className=" max-w-5xl m-auto py-2">
      <h1 className="text-4xl mb-8 flex  justify-center">{item.title}</h1>
      <div className="flex    justify-center items-center gap-4 bg-gray-10 ">
        {item.images.map((image, i) => (
          <div
            className="snap-center"
            key={i}>
            <img
              src={image}
              className=" flex  justify-between items-center w-72 h-52 shadow-xl "
            />
          </div>
        ))}
      </div>
      <div className=" capitalize text-2xl flex flex-col mb-4 gap-3 shadow-xl p-2 mt-5 bg-gray-50 rounded">
        <p>Title : {item.title}</p>
        <p>description : {item.description}</p>
        <p>price : {item.price} $</p>
        <p>discountPercentage: : {item.discountPercentage}</p>
        <p>rating: {item.rating}</p>
        <p>stock: {item.stock}</p>
        <p>brand: {item.brand}</p>
        <p>category: {item.category}</p>
      </div>
    </div>
  );
};

export default Item;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log("data with param");

  const paths = data.products.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}
