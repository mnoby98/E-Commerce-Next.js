import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

function InputField(props) {
  const { name, placeholder, id, type, label, error, table } = props;

  return (
    <div
      className={`relative mb-5 ${
        table
          ? "  grid grid-cols-[1fr_2fr] items-center "
          : " flex flex-col mb-8 justify-between gap-2"
      }     `}>
      <label
        htmlFor={id}
        className="px-2  text-black">
        {label}
      </label>
      <div className="flex h-6  flex-col ">
        <Field name={name}>
          {(props) => {
            const { meta, field } = props;
            return (
              <input
                placeholder={placeholder}
                id={id}
                type={type}
                className={`w-40 grow rounded-[8px] border-[1px] text-sm  font-medium text-black ${
                  (meta.touched && meta.error) || error != null
                    ? " border-red-500"
                    : " border-stone-400 "
                }  px-3  py-1   font-normal focus:outline-none    sm:w-auto`}
                {...field}
              />
            );
          }}
        </Field>
        {error == null ? (
          <ErrorMessage
            name={name}
            component={ErrorText}
          />
        ) : (
          <ErrorText>{error} </ErrorText>
        )}
      </div>
    </div>
  );
}

export default InputField;
