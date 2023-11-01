"use client";
import * as Yup from "yup";
import InputFormik from "../components/InputFormik";
import InputField from "../components/InputField";
import axios from "axios";
import login from "@/app/api/users/login/route";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Required field"),
    password: Yup.string().required("Required field"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    const req = await axios.post("/api/users/login", values);
    console.log("req", req);
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
