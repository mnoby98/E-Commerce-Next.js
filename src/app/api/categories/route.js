import { NextResponse } from "next/server";

export async function GET() {
  try {
    const req = await fetch(`https://dummyjson.com/products/categories`);

    const data = await req.json();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
