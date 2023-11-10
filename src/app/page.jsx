"use client";
// https://dummyjson.com/docs/products
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Header from "./components/Header";

const Home = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const req = await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="   ">
      {/* <div className="  bg-gradient-to-r from-[#C4FCEF] via-[#00C9A7] to-[#7ad5c3] min-h-screen   "> */}
      <div className="absolute min-h-screen w-full h-full z-[-2] blur-[3px] bg-home bg-cover   "></div>
      <div className="absolute bg-black min-h-screen w-full h-full z-[-1]  opacity-60  bg-cover   "></div>
      <div className="flex   flex-col items-center text-white   m-auto max-w-5xl  text-2xl     justify-center min-h-screen py-2">
        {/* <div className="flex   flex-col items-center text-white     bg-home  bg-cover   justify-center min-h-screen py-2"> */}
        {/* <div className="flex  justify-center py-2 flex-col items-center"> */}
        <h1 className="text-5xl ">E-Commerce Next</h1>
        <div className=" text-2xl text-center">
          <h1>Welcome to E-commerce Next, your one-stop shop for all things</h1>
          <p>
            We offer a wide variety of products to choose from, all at
            competitive prices. Our website is easy to navigate, and our
            checkout process is quick and easy.
          </p>
          <h3>
            Sign up for our newsletter to be the first to know about new
            products, sales, and promotions!
          </h3>
        </div>
        <Link
          className=" bg-white text-black font-semibold px-8 py-1 mt-3 rounded-md"
          href="/menu">
          Shop Now
        </Link>
        <button
          onClick={logout}
          className="bg-red-400 text-xl px-4 font-semibold p-1 rounded-lg my-3">
          Logout
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
