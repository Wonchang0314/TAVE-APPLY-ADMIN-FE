import { Icon } from "@/components/Icon/Icon";
import type { IconType } from "@/components/Icon/Icon";

type StandardIconType = Exclude<IconType, "TaveLogo">;

const iconNames: StandardIconType[] = [
  "Trash",
  "Dots",
  "Pen",
  "Calendar",
  "Filter",
  "XSquare",
  "X",
  "ZoomIn",
  "ZoomOut",
  "Up",
  "UpLeft",
  "Upload",
  "UpRight",
  "XCircle",
  "ShoppingBag",
  "Star",
  "Tool",
  "Trash2",
  "Save",
  "Search",
  "Share",
  "Plus",
  "Right",
  "MoreVertical",
  "Paperclip",
  "PlusCircle",
  "PlusSquare",
  "MinusCircle",
  "MinusSquare",
  "Minus",
  "MoreHorizontal",
  "MicOff",
  "Mic",
  "List",
  "Loader",
  "Mail",
  "Italic",
  "Left",
  "Link2",
  "Link",
  "Heart",
  "Home",
  "Inbox",
  "Down",
  "DownLeft",
  "Download",
  "DownRight",
  "CheckSquare",
  "Check",
  "Delete",
  "CameraOff",
  "Camera",
  "CheckCircle",
  "Box",
  "Bell",
  "BookOpen",
  "Bookmark",
  "BarChart2",
  "BarChart",
  "BellOff",
  "AlignRight",
  "Archive",
  "Arrow",
  "AlignJustify",
  "AlignLeft",
  "AlignCenter",
  "ChevronDown",
] as const;

export const IconGallery = () => {
  return (
    <div className="px-12 py-6 bg-gray-900">
      <h1 className="text-2xl font-bold mb-6">Icon Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {iconNames.map((iconName) => (
          <>
            <div
              key={iconName}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg"
            >
              <Icon type={iconName} size={24} />
              <span className="text-base text-white">{iconName}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
