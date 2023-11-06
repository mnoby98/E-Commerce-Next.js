import { NextRequest, NextResponse } from "next/server";
import { useSelector } from "react-redux";

export async function GET(request) {
  try {
    const reqBody = await request.json();
    const { cartId } = reqBody;
    const res = await fetch(`https://dummyjson.com/carts/user/5`);
    const cart = await res.json();
    const response = NextResponse.json({ data: cart }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
