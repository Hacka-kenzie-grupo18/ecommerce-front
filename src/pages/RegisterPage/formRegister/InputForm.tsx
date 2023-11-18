import { ReactNode } from "react";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "tel" | "number" | "cpf";
  maxLength?: number;
  value?: string;
  register?: object;
  error?: ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export function Input({
  id,
  label,
  type,
  placeholder,
  defaultValue,
  register,
  disabled,
  error,
}: InputProps) {
  return (
    <fieldset className="relative flex flex-col gap-2 border-none">
      <label htmlFor={id} className="font-500 text-sm text-primary">
        {label}
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus:border-primary px-4"
        type={type}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue}
        disabled={disabled}
        {...register}
      />
      {error}
    </fieldset>
  );
}
