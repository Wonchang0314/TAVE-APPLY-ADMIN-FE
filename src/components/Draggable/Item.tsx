import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useRef, useState } from "react";
import FlexBox from "../Layout/FlexBox";
import Icon from "@/components/Icon/Icon";
import Switch from "../Input/Switch";

interface DraggableItemProps {
  item: any;
  startEditItem: (itemId: string) => void;
  endEditItem: () => void;
  deleteItem: (item: any) => void;
  updateItem: (itemId: string, value: string) => void;
}
const DraggableItem = ({
  item,
  deleteItem,
  startEditItem,
  endEditItem,
  updateItem,
}: DraggableItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(item.question);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const [isRequired, setIsRequired] = useState(item.required);

  const handleFocus = () => {
    if (inputRef.current && item.mode === "default") {
      startEditItem(item.id);
      inputRef.current.focus();
    } else endEditItem();
  };

  return (
    <li
      onKeyDown={(e) => e.key === "Enter" && updateItem(item.id, inputValue)}
      className={`flex items-center w-full border border-gray-300 rounded-xl bg-white pr-4 justify-between hover:bg-gray-100 ${
        item.mode === "focused"
          ? "outline outline-blue-500 shadow-lg scale-103"
          : item.mode === "blurred"
          ? "opacity-50"
          : ""
      }
      `}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div
        className={`flex items-center rounded-lg p-4 ${
          !isDragging && "hover:outline-2 hover:outline-blue-500"
        } ${
          isDragging
            ? "cursor-grabbing outline-2 outline-blue-500"
            : "cursor-pointer"
        }`}
        {...listeners}
      >
        <Icon type="Menu" size={20} className="mr-2" />
        <input
          ref={inputRef}
          readOnly={item.mode !== "focused"}
          value={inputValue}
          className={`text-gray-900 font-medium ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          onChange={(e) => {
            setInputValue(e.target.value);
            e.target.style.width = `${e.target.value.length + 5}ch`; // 텍스트 길이 + 여유
          }}
          style={{ width: `${item.question.length + 5}ch` }}
        />
        {item.maxLength && (
          <p className="text-gray-500 text-sm">{`(${item.maxLength}자 이내)`}</p>
        )}
      </div>

      <FlexBox className="gap-4">
        <Switch
          title="필수 질문"
          isOn={isRequired}
          setIsOn={() => setIsRequired(!isRequired)}
        />

        <button
          className="p-2 border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer"
          onClick={() => handleFocus()}
        >
          <Icon type="Pen" size={20} />
        </button>
        {item.maxLength && (
          <button
            className="p-2 border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer"
            onClick={() => deleteItem(item)}
          >
            <Icon type="TextLength" size={20} />
          </button>
        )}
        <button
          className="p-2 border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer"
          onClick={() => deleteItem(item)}
        >
          <Icon type="Trash" size={20} />
        </button>
      </FlexBox>
    </li>
  );
};

export default DraggableItem;
