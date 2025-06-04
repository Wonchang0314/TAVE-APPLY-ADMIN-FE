import type { ButtonHTMLAttributes } from "react";
import LoadingSpinner from "../LoadingSpinner";
import FlexBox from "../Layout/FlexBox";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  isPending?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  width,
  isPending,
  children,
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
      {isPending && isPending ? (
        <LoadingSpinner />
      ) : (
        <FlexBox className="gap-2 justify-between">{children}</FlexBox>
      )}
    </button>
  );
};

export default Button;
