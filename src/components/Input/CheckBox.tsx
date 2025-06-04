import type { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  isChecked?: boolean;
}

const CheckBox = ({ text, isChecked, onChange }: CheckBoxProps) => {
  return (
    <label className="flex gap-2 p-2">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className="text-gray-700 font-base">{text}</span>
    </label>
  );
};

export default CheckBox;
