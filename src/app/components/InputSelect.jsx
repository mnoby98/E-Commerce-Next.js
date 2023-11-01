import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

function InputSelect(props) {
  const { name, id, label, error, table, options } = props;
  return (
    <div
      className={`relative mb-10 ${
        table ? " grid grid-cols-[1fr_2fr] " : " flex flex-col gap-2"
      }     `}
    >
      <label htmlFor={id} className="px-2 text-[18px] text-[#04749B]">
        {label}
      </label>
      <div className="grid h-4 grid-cols-[2fr_1fr]">
        <div className="flex h-4 flex-col">
          <Field
            name={name}
            as="select"
            className={`w-40 grow rounded-[8px] border-[1px] ${
              error != null ? " border-red-500" : " border-stone-400 "
            }  px-1  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
          >
            {options.map((option) => (
              <option value={option.value} key={option.key}>
                {option.key}
              </option>
            ))}

            {/* <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="Euro">Euro</option> */}
          </Field>
          {error == null ? (
            <ErrorMessage name={name} component={ErrorText} />
          ) : (
            <ErrorText>{error} </ErrorText>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputSelect;
