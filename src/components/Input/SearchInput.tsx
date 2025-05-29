import { Search } from "@/assets/Icons";
import React from "react";

interface SearchInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  width?: string;
}

const SearchInput = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  className = "",
  disabled = false,
  width = "w-full",
}: SearchInputProps) => {
  return (
    <div
      className={`flex items-center gap-2 py-5 px-4 text-base leading-[135%] tracking-[-0.56px] bg-white border border-[#E5E7EB] rounded-lg ${width} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <Search className="w-5 h-5 text-[#9DA3AE]" />
      <input
        type="text"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full text-black placeholder-gray-400 bg-transparent border-none focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
