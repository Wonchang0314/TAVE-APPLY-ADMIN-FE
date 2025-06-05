import CheckBox from "@/components/Input/CheckBox";

interface CheckBoxPopoverProps {
  contents: string[];
  checkedList: any[];
  setCheckedList: (value: any) => void;
}

const CheckBoxPopover = ({
  contents,
  checkedList,
  setCheckedList,
}: CheckBoxPopoverProps) => {
  const handleToggle = (value: any) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
    } else {
      setCheckedList([...checkedList, value]);
    }
  };
  return (
    <div className="w-[222px] h-[296px] bg-white rounded-xl p-4 absolute bottom-35 border border-gray-100">
      {contents.map((content) => (
        <CheckBox
          key={content}
          text={content}
          isChecked={checkedList.includes(content)}
          onChange={() => handleToggle(content)}
        />
      ))}
    </div>
  );
};

export default CheckBoxPopover;
