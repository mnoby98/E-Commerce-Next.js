import { Form, Formik } from "formik";
import Button from "./Button";
import Link from "next/link";

function InputFormik(props) {
  const { initialValues, validationSchema, onSubmit } = props;
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      enableReinitialize>
      <Form className="  rounded-lg border-2 border-gray-300 bg-white pb-4">
        <div className="mx-8 flex items-center justify-between ">
          <p className="mb-8 mt-6  text-lg">Currencies</p>
        </div>
        <div className=" px-8 pb-8">{props.children}</div>
        <div className="flex justify-center">
          <button
            className="mt-2  w-24 sm:w-32 rounded-full  bg-[#04749B] focus:outline-none  focus:ring  focus:ring-offset-1 focus:ring-[#04749B]  p-2 text-center   text-white "
            type="submit">
            Login
          </button>
        </div>
        <Link
          href={"/forget-password"}
          className="text-blue-700 pl-2 mt-2">
          Forget password
        </Link>
      </Form>
    </Formik>
  );
}

export default InputFormik;
