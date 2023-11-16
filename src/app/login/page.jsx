"use client";
import * as Yup from "yup";
import InputFormik from "../components/InputFormik";
import InputField from "../components/InputField";
import axios from "axios";
import login from "@/app/api/users/login/route";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, setCart } from "../redux/features/userSlice";
import { getData } from "../cart/page";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = {
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required field"),
    password: Yup.string().required("Required field"),
  });
  const onSubmit = async (values) => {
    const req = await axios.post("/api/users/login", values);
    dispatch(currentUser(req.data.data));
    const cart = await getData(req.data.data.id);
    const cartString = cart?.carts?.[0];
    localStorage.setItem("cart", JSON.stringify(cartString));
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    console.log("cartItems", cartItems);
    dispatch(setCart(cartItems));
    router.push("/");
  };

  return (
    <div>
      <div className="absolute min-h-screen w-full h-full z-[-2] blur-[3px] bg-home bg-cover text-lg    "></div>
      <div className="absolute bg-black min-h-screen w-full h-full z-[-1]  opacity-60  bg-cover   "></div>
      <div className="flex  flex-col items-center text-white  justify-center min-h-screen py-2">
        <InputFormik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          <InputField
            name="userName"
            type="text"
            placeholder="Mahmoud Noby"
            id="userName"
            label="User Name"
          />
          <InputField
            name="password"
            type="password"
            placeholder="password"
            id="password"
            label="Password"
          />
        </InputFormik>
      </div>
    </div>
  );
};

export default Login;
