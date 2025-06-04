import type { ButtonHTMLAttributes } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  isPending?: boolean;
  className?: string;
}

const Button = ({
  text,
  width,
  isPending,
  className,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-3 text-semibold text-white bg-blue-600 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white font-semibold ${width} ${className}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick}
      disabled={disabled}
    >
      {isPending && isPending ? <LoadingSpinner /> : <span>{text}</span>}
    </button>
  );
};

export default Button;
