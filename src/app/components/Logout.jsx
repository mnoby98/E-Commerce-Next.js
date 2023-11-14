"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Logout = () => {
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
    <button
      onClick={logout}
      className="bg-red-400 text-xl px-4 font-semibold p-1 rounded-lg my-3">
      Logout
    </button>
  );
};

export default Logout;
