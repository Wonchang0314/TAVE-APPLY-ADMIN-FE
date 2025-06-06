import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import DraggableItem from "./Item";
import Icon from "@/components/Icon/Icon";

interface DraggableListProps {
  items: any[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  addItem: () => void;
  deleteItem?: (item: any) => void;
  startEditItem: (itemId: string) => void;
  endEditItem: () => void;
}

const DraggableList = ({
  items,
  setItems,
  addItem,
  deleteItem,
  startEditItem,
  endEditItem,
}: DraggableListProps) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    setItems(() => arrayMove(items, oldIndex, newIndex));
  };

  const updateItem = (itemId: string, updatedQuestion: string) => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        question: item.id === itemId ? updatedQuestion : item.question,
      }))
    );
  };

  return (
    <ul
      className="flex flex-col items-center p-8 gap-4 w-full"
      onKeyDown={(e) => {
        e.key === "Enter" && endEditItem();
      }}
    >
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {deleteItem &&
            items.map((item) => (
              <DraggableItem
                key={item.id}
                item={item}
                updateItem={updateItem}
                deleteItem={deleteItem}
                startEditItem={startEditItem}
                endEditItem={endEditItem}
              />
            ))}
        </SortableContext>
      </DndContext>
      <li
        className="w-full flex items-center border border-dotted border-gray-300 rounded-xl bg-white p-4 justify-center text-gray-900 gap-2 cursor-pointer hover:bg-gray-100"
        onClick={addItem}
      >
        <Icon type="Plus" size={20} className="text-gray-900" />
        질문 추가하기
      </li>
    </ul>
  );
};

export default DraggableList;
