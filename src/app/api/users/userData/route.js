import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const token = req.cookies.get("token");
    console.log("allcookies", token);
    const res = await fetch("https://dummyjson.com/auth/RESOURCE", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("dataFormHaeder", data);
    return NextResponse.json({ message: "test success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
