import { ReactNode } from "react";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "tel" | "number";
  defaultValue?: string;
  register?: object;
  error?: ReactNode;
}

export function Input({
  id,
  label,
  type,
  placeholder,
}: //   defaultValue,
//   register,
//   error,
InputProps) {
  return (
    <fieldset className="relative flex flex-col gap-2 border-none">
      <label htmlFor={id} className="font-500 text-[15px] text-[#2563eb]">
        {label}
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus:border-[#2563eb] px-4 font-semibold"
        type={type}
        placeholder={placeholder}
        id={id}
        // defaultValue={defaultValue}
        // {...register}
      />
      {/* {error} */}
    </fieldset>
  );
}
