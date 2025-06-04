import type { InputHTMLAttributes } from "react";
import { useRef } from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
  value?: string; // 파일이 아닌 경우만 사용
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  className?: string;
  disabled?: boolean;
  allowFile?: boolean; // 파일 input으로 동작할지 여부
}

const Input = ({
  value,
  onChange,
  placeholder,
  width,
  type = "text",
  className = "",
  disabled = false,
  allowFile = false,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isFileInput = allowFile || type === "file";

  return (
    <input
      ref={inputRef}
      type={isFileInput ? "file" : type}
      value={isFileInput ? undefined : value} // file input은 value 제어 불가
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`px-4 py-3 text-base text-black leading-[135%] tracking-[-0.56px] focus:border-black bg-white border border-gray-300 rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${width} ${className}`}
      {...rest}
    />
  );
};

export default Input;
