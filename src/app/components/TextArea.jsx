import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";
function TextArea(props) {
  const { name, placeholder, id, label, error, table } = props;

  return (
    <div
      className={`relative mb-5 ${
        table ? " grid grid-cols-[1fr_2fr] " : " flex flex-col gap-2"
      }     `}
    >
      <label htmlFor={id} className="px-2 text-[18px] text-[#04749B]">
        {label}
      </label>
      <div className="h-15 flex flex-col">
        <Field name={name}>
          {(props) => {
            const { meta, field } = props;
            return (
              <textarea
                placeholder={placeholder}
                id={id}
                className={`w-40 grow rounded-[8px] border-[1px] ${
                  (meta.touched && meta.error) || error != null
                    ? " border-red-500"
                    : " border-stone-400 "
                }  px-1  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
                {...field}
              />
            );
          }}
        </Field>
        {error == null ? (
          <ErrorMessage name={name} component={ErrorText} />
        ) : (
          <ErrorText>{error} </ErrorText>
        )}
      </div>
    </div>
  );
}

export default TextArea;
