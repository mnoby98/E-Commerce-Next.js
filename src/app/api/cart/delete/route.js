import { NextResponse } from "next/server";

export async function DeleteUserCart(cartId) {
  try {
    // const data = await request.json();
    console.log("reqBody", cartId);
    const res = await fetch("https://dummyjson.com/carts/1", {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error with Api");
  }
}
