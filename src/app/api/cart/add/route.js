products: [
  {
    id: 1,
    quantity: 1,
  },
  {
    id: 50,
    quantity: 2,
  },
];

export async function addCart(productsAndUserId) {
  try {
    const { addNewCart, cartId } = productsAndUserId;
    console.log("userId", cartId);
    console.log("addNewCart", addNewCart);
    // const test = products.map((product) => {
    //   product.id, product.quantity;
    // });
    // console.log(test);
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: cartId,
        products: addNewCart,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error with Api");
  }
}
