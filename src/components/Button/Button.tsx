import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  className?: string;
}

const Button = ({
  text,
  width,
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
      {text}
    </button>
  );
};

export default Button;
