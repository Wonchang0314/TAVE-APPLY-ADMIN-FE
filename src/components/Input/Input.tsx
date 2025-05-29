interface InputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  width?: string;
  //height?: string;
  className?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  defaultValue,
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
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`px-4 py-5 text-base text-black leading-[135%] tracking-[-0.56px] gray-placeholder bg-white border border-[#E5E7EB] rounded-lg ${width} ${className}`}
    />
  );
};

export default Input;
