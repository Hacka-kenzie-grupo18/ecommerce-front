import { ReactNode, useState } from "react";
import {
  inserMaskInPhone,
  insertMaskInCEP,
  insertMaskInCpf,
} from "../../../functions/Masks";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email" | "tel" | "number" | "cpf";
  maxLength?: number;
  defaultValue?: string;
  register?: object;
  error?: ReactNode;
}

export function Input({
  id,
  label,
  type,
  placeholder,
  maxLength,
}: //   defaultValue,
//   register,
//   error,
InputProps) {
  const [value, setValue] = useState("");

  const isCPF = type === "cpf";
  const isPhone = type === "tel";
  const isCEP = id === "cep";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isCPF) {
      const newValue = insertMaskInCpf(event.target.value);
      setValue(newValue);
    } else if (isPhone) {
      const newValue = inserMaskInPhone(event.target.value);
      setValue(newValue);
    } else if (isCEP) {
      const newValue = insertMaskInCEP(event.target.value);
      setValue(newValue);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <fieldset className="relative flex flex-col gap-2 border-none">
      <label htmlFor={id} className="font-500 text-[14px] text-[#2563eb]">
        {label}
      </label>
      <input
        className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
      />
      {/* {error} */}
    </fieldset>
  );
}
