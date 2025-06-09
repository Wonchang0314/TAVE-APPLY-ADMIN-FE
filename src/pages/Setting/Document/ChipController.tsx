import Icon from "@/components/Icon/Icon";
import FlexBox from "@/components/Layout/FlexBox";

interface ChipControllerProps {
  chips: string[];
  setChips?: (chips: string[]) => void;
  focused?: boolean;
}

const ChipController = ({ chips, focused = false }: ChipControllerProps) => {
  return (
    <FlexBox className="border gap-2">
      {chips.map((chip) => (
        <label
          className={`py-1 px-2 text-sm flex items-center justify-center font-medium rounded-2xl border border-gray-300 bg-gray-100 text-gray-700
   
    `}
        >
          {chip}
        </label>
      ))}
      {focused && (
        <button className="border border-gray-300 rounded-full p-1 hover:bg-gray-200 cursor-pointer">
          <Icon type="Plus" size={16} className="text-gray-500" />
        </button>
      )}
    </FlexBox>
  );
};

export default ChipController;
