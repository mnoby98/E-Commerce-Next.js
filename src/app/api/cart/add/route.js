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
    const { products, cartId } = productsAndUserId;
    console.log("userId", cartId);
    // const test = products.map((product) => {
    //   product.id, product.quantity;
    // });
    // console.log(test);
    const res = await fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: cartId,
        products: [
          {
            id: 1,
            quantity: 1,
          },
          {
            id: 50,
            quantity: 2,
          },
        ],
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error with Api");
  }
}
