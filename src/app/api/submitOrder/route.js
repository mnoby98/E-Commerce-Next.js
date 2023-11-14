import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { values, userId, total } = reqBody;
    const {
      name,
      email,
      cart_description,
      phoneNumber,
      street1,
      city,
      state,
      country,
      zip,
    } = values;
    console.log(values);
    console.log(userId);
    console.log(total);
    const res = await fetch(
      "https://secure-egypt.paytabs.com/payment/request",
      {
        method: "POST",
        headers: {
          authorization: "SHJ99HT9G6-JH6W9L2DHL-JWR99DLMRL",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          profile_id: 133729,
          tran_type: "sale",
          tran_class: "ecom",
          cart_id: userId.toString(), //
          cart_currency: "EGP", //
          cart_amount: total, // total cart $
          cart_description: cart_description, //
          paypage_lang: "en",
          customer_details: {
            // need after cart page with add a cart req.
            name: name,
            email: email,
            phone: phoneNumber,
            street1: street1,
            city: city,
            state: state,
            country: country,
            zip: zip,
          },
          shipping_details: {
            // no need
            name: "name1 last1",
            email: "email1@domain.com",
            phone: "971555555555",
            street1: "street2",
            city: "dubai",
            state: "dubai",
            country: "AE",
            zip: "54321",
          },
          callback: "https://yourdomain.com/yourcallback",
          return: "http://localhost:3000",
        }),
      }
    );
    const data = await res.json();
    console.log("data", data);

    const response = NextResponse.json({ data: data }, { status: 200 });

    response.cookies.set("token", data.token, {
      httpOnly: true,
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    });
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
