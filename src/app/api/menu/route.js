import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const reqBody = await request.json();
    const { searchItem } = reqBody;
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${searchItem}`
    );
    const data = await res.json();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
