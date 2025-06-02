import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  className?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder,
  width,
  type = "text",
  className,
  disabled = false,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`px-4 py-3 text-base text-black leading-[135%] tracking-[-0.56px] focus:border-black bg-white border border-gray-300 rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${width} ${className}`}
    />
  );
};

export default Input;
