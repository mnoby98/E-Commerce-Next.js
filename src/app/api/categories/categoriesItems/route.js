import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const reqBody = await request.json();
    const { category } = reqBody;
    console.log("reqBody", category);
    const req = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    const data = await req.json();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
