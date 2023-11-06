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
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    // email: Yup.string().email().required("Required field"),
    email: Yup.string().required("Required field"),
    password: Yup.string().required("Required field"),
  });
  const onSubmit = async (values) => {
    const req = await axios.post("/api/users/login", values);
    dispatch(currentUser(req.data.data));
    const cart = await getData(req.data.data.id);
    dispatch(setCart(cart?.carts?.[0]));
    console.log(cart.carts[0]);
    router.push("/");
  };

  return (
    <div className="flex  flex-col items-center text-white bg-black justify-center min-h-screen py-2">
      <h1 className="text-4xl  bg-orange-600 my-2 rounded p-1">Login</h1>
      <InputFormik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        <InputField
          name="email"
          type="text"
          placeholder="email@gmail.com"
          id="email"
          label="Email"
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
  );
};

export default Login;
