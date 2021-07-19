import { UseFormRegister, FieldError } from "react-hook-form";
import { ICheckoutFormValues } from "types";

interface InputProps {
  register: UseFormRegister<ICheckoutFormValues>;
  error?: FieldError;
  name: keyof ICheckoutFormValues;
  type?: HTMLInputElement["type"];
  autocomplete?: HTMLInputElement["autocomplete"];
  pattern?: RegExp;
  label: string;
}

function Input({
  register,
  error,
  name,
  label,
  type = "text",
  pattern = undefined,
  autocomplete,
}: InputProps) {
  return (
    <>
      <div className="d-flex justify-content-between lh-0">
        <label
          htmlFor={name}
          className={`form-label ${error ? "text-danger" : ""}`}
        >
          {label}
        </label>
        <span className="form-label text-danger fw-normal">
          {error?.type === "required" && "Required field"}
          {error?.type === "pattern" && "Wrong format"}
        </span>
      </div>
      <input
        type={type}
        autoComplete={autocomplete}
        pattern={typeof pattern === "object" ? pattern.toString() : undefined}
        className={`form-control ${error ? "border-danger border-2" : ""}`}
        {...register(name, { required: true, pattern })}
      />
    </>
  );
}

export default Input;
