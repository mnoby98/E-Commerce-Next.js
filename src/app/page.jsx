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
      <div className="absolute  w-full h-full min-h-screen z-[-2] blur-[3px] bg-home bg-cover   "></div>
      <div className="absolute bg-black min-h-screen w-full h-full z-[-1]  opacity-60  bg-cover   "></div>
      <div className="flex   flex-col items-center text-white px-5   m-auto max-w-5xl  text-2xl     justify-center min-h-screen py-2">
        <h1 className="text-5xl text-center pb-5 ">E-Commerce Next</h1>
        <div className=" text-2xl sm:text-xl text-center">
          <h1>Welcome to E-commerce Next, your one-stop shop for all things</h1>
          <p>
            We offer a wide variety of products to choose from, all at
            competitive prices.
          </p>
          <p>
            Our website is easy to navigate, and our checkout process is quick
            and easy.
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
