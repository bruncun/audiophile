import PurchaseFormContext from "contexts/PurchaseFormContext";
import { useContext } from "react";

interface InputProps {
  name: keyof IPurchaseFieldsValues;
  type?: HTMLInputElement["type"];
  autocomplete?: HTMLInputElement["autocomplete"];
  autofocus?: boolean;
  pattern?: RegExp;
  id: string;
  label: string;
}

function Input({
  name,
  id,
  label,
  type = "text",
  pattern = undefined,
  autocomplete,
  autofocus,
}: InputProps) {
  const purchaseFormContext = useContext(PurchaseFormContext)!;
  const { register, errors } = purchaseFormContext;
  const error = errors[name];

  return (
    <div data-cy="input">
      <div className="d-flex justify-content-between lh-0">
        <label
          htmlFor={id}
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
        id={id}
        type={type}
        autoComplete={autocomplete}
        autoFocus={autofocus}
        data-cy={name}
        pattern={typeof pattern === "object" ? pattern.toString() : undefined}
        className={`form-control ${error ? "border-danger border-2" : ""}`}
        {...register(name, { required: true, pattern })}
      />
    </div>
  );
}

export default Input;
