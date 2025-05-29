interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

const TextArea = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  width,
  height,
  maxLength,
  disabled = false,
  className,
}: TextAreaProps) => {
  return (
    <textarea
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className={`px-4 py-5 text-base text-black leading-[135%] tracking-[-0.56px] gray-placeholder bg-white border border-[#E5E7EB] rounded-lg ${width} ${height} ${className}`}
    />
  );
};

export default TextArea;
