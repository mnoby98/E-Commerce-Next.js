"use client";
import InputField from "./InputField";
import InputFormik from "./InputFormik";
import * as Yup from "yup";
import TextArea from "./TextArea";
import axios from "axios";
import { useRouter } from "next/navigation";

const SubmitCartFormik = () => {
  const OrderData = localStorage.getItem("order");
  const Order = JSON.parse(OrderData);
  const router = useRouter();
  const {
    discountedTotal,
    id,
    products,
    total,
    totalProducts,
    totalQuantity,
    userId,
  } = Order;

  const initialValues = {
    name: "",
    email: "",
    cart_description: "",
    phoneNumber: "",
    street1: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required field")
      .matches(
        /^[a-zA-Z]+\s[a-zA-Z]+$/,
        "Please enter both first and last names with a space in between"
      ),
    email: Yup.string().email().required("Required field"),
    cart_description: Yup.string().required("Required field"),
    phoneNumber: Yup.number().required("Required field"),
    street1: Yup.string().required("Required field"),
    city: Yup.string().required("Required field"),
    state: Yup.string().required("Required field"),
    country: Yup.string().required("Required field"),
    zip: Yup.string().required("Required field"),
  });
  const onSubmit = async (values) => {
    const payment = await axios.post("/api/submitOrder", {
      values,
      userId,
      total,
    });
    console.log("payment", payment.data.data.redirect_url);
    //
    router.push(`${payment.data.data.redirect_url}`);
  };

  return (
    <InputFormik
      initialValues={initialValues}
      validationSchema={validationSchema}
      submitOrder="submitOrder"
      onSubmit={onSubmit}>
      <InputField
        placeholder="Mahmoud"
        type="text"
        label="Name"
        table
        name="name"
        id="name"
      />
      <InputField
        placeholder="example@email.com"
        type="text"
        label="E-mail"
        table
        name="email"
        id="email"
      />
      <InputField
        placeholder="01234567890"
        type="text"
        label="Phone Number"
        table
        name="phoneNumber"
        id="phoneNumber"
      />
      <InputField
        placeholder="Street1"
        type="text"
        label="Street "
        table
        name="street1"
        id="street1"
      />
      <InputField
        placeholder="City"
        type="text"
        label="City"
        table
        name="city"
        id="city"
      />
      <InputField
        placeholder="Cairo"
        type="text"
        label="State"
        table
        name="state"
        id="state"
      />
      <InputField
        placeholder="Egypt"
        type="text"
        label="Country"
        table
        name="country"
        id="country"
      />
      <TextArea
        placeholder=" 1-Blue shirt 4-Pants"
        type="text"
        label="Cart Description"
        table
        name="cart_description"
        id="cart_description"
      />
      <InputField
        placeholder="12345"
        type="text"
        label="Zip"
        table
        name="zip"
        id="zip"
      />
    </InputFormik>
  );
};

export default SubmitCartFormik;
