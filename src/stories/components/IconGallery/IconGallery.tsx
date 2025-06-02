import { Icon } from "@/components/Icon/Icon";
import type { IconType } from "@/components/Icon/Icon";

type StandardIconType = Exclude<IconType, "TaveLogo">;

const iconNames: StandardIconType[] = [
  "Trash",
  "Dots",
  "Calendar",
  "Filter",
  "Left",
  "CheckCircle",
  "X",
  "XCircle",  
  "ChevronDown",
  "ChevronUp",
  "Arrow",
  "File",
  "HelperCircle",
  "ClockCircle",
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
