import { NextResponse } from "next/server";
const Url = "https://api-invoices.twice-m.com/api";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const res = await fetch(`${Url}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    const response = NextResponse.json(
      { message: "Post successful" },
      { status: 200 }
    );

    response.cookies.set("token", data.data.token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
