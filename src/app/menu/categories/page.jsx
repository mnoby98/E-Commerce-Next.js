const Categories = () => {
  return <div>Categories</div>;
};

export default Categories;

// export async function getStaticPaths() {
//   const res = await fetch("https://dummyjson.com/products", {
//     next: { revalidate: 60 },
//   });
//   const data = await res.json();
//   console.log("data with param");

//   const paths = data.products.map((item) => ({
//     params: { id: item.id.toString() },
//   }));
//   return { paths, fallback: false };
// }
