import CartContainer from "../components/CartContainer";
import Header from "../components/Header";
// import InputField from "../components/InputField";
// import InputFormik from "../components/InputFormik";

import SubmitCartFormik from "../components/SubmitCartFormik";

const SubmitACart = () => {
  return (
    <div>
      <Header />
      <div className=" max-w-4xl m-auto py-2">
        <SubmitCartFormik />
        <CartContainer submitOrder={"submitOrder"} />
      </div>
    </div>
  );
};

export default SubmitACart;
