"use client";
// https://dummyjson.com/docs/products
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
    <div className="flex  flex-col items-center text-white  bg-slate-300 justify-center min-h-screen py-2">
      <h1 className="text-5xl text-black">Home Page</h1>

      <div className="text-black text-xl text-center">
        <h1>
          Welcome to E-commerce Next, your one-stop shop for all things
          [products or services]!
        </h1>
        <p>
          We offer a wide variety of products to choose from, all at competitive
          prices. Our website is easy to navigate, and our checkout process is
          quick and easy.
        </p>
        <hr />
        <h3>
          Sign up for our newsletter to be the first to know about new products,
          sales, and promotions!
        </h3>
      </div>
      <Link
        className=" bg-yellow-300 text-black font-semibold px-2 py-1 rounded-md"
        href="/menu">
        Shop Now
      </Link>
      <button
        onClick={logout}
        className="bg-orange-500 text-xl p-1 rounded my-3">
        Logout
      </button>
    </div>
  );
};

export default Home;
