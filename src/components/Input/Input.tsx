interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password";
  width?: string;
  className?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  width,
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
      className={`px-3 py-4 text-base text-black leading-[135%] tracking-[-0.56px] focus:border-black bg-white border border-gray-400 rounded-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${width} ${className}`}
    />
  );
};

export default Input;
