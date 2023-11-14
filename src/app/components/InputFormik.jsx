import { Form, Formik } from "formik";
import Button from "./Button";
import Link from "next/link";

function InputFormik(props) {
  const { initialValues, validationSchema, onSubmit, submitOrder } = props;
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize>
      <Form className="  rounded-lg border-2 border-gray-300 bg-white pb-4">
        <div className=" flex items-center  justify-center ">
          <h1 className="text-3xl   text-[#74bec1]  px-4 my-2 rounded py-1">
            {submitOrder ? "Final Stage" : "Login"}
          </h1>
          {/* <p className="mb-8 mt-6  text-lg">Currencies</p> */}
        </div>
        <div className=" px-8 pb-8">{props.children}</div>
        <div className="flex  items-center   justify-center mx-8 ">
          <button
            className="   px-10 rounded-lg  bg-[#74bec1] hover:bg-[#385a5c] text-xl focus:outline-none  focus:ring  focus:ring-offset-1 focus:ring-[#74bec1]  py-1 text-center   text-white "
            type="submit">
            {submitOrder ? "Submit Order" : "Login"}
          </button>
        </div>
        {!submitOrder && (
          <Link
            href={"/forget-password"}
            className="text-blue-700 pl-2 mt-2">
            Forget password
          </Link>
        )}
      </Form>
    </Formik>
  );
}

export default InputFormik;
