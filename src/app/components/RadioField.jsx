import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";
import React from "react";

function RadioField(props) {
  const { options, name, mainLabel, id, error, table } = props;
  return (
    <div
      className={`relative mb-5 ${
        table
          ? "  grid grid-cols-[1fr_2fr]  items-center "
          : " flex flex-col  justify-between gap-2"
      }     `}
    >
      <label htmlFor={id} className="px-2 text-[18px] text-[#04749B]">
        {mainLabel}
      </label>
      <div className="flex h-12   items-center justify-between ">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <label htmlFor={option.value}>{option.key}</label>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    // checked={true}
                  />
                </React.Fragment>
              );
            });
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

export default RadioField;
