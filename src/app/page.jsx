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
    <div className="flex  flex-col items-center text-white bg-slate-700 justify-center min-h-screen py-2">
      <h1 className="text-5xl">Home Page</h1>
      <button
        onClick={logout}
        className="bg-orange-700 text-3xl p-1 rounded my-3">
        Logout
      </button>
      <Link href="/menu">Shopping Now</Link>
    </div>
  );
};

export default Home;
