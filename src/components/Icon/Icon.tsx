import React from "react";
import * as icons from "@/assets/Icons";

type IconType =
  | "TaveLogo"
  | "XSquare"
  | "X"
  | "ZoomIn"
  | "ZoomOut"
  | "Up"
  | "UpLeft"
  | "Upload"
  | "UpRight"
  | "XCircle"
  | "ShoppingBag"
  | "Star"
  | "Tool"
  | "Trash2"
  | "Save"
  | "Search"
  | "Share"
  | "Plus"
  | "Right"
  | "MoreVertical"
  | "Paperclip"
  | "PlusCircle"
  | "PlusSquare"
  | "MinusCircle"
  | "MinusSquare"
  | "Minus"
  | "MoreHorizontal"
  | "MicOff"
  | "Mic"
  | "List"
  | "Loader"
  | "Mail"
  | "Italic"
  | "Left"
  | "Link2"
  | "Link"
  | "Heart"
  | "Home"
  | "Inbox"
  | "Down"
  | "DownLeft"
  | "Download"
  | "DownRight"
  | "CheckSquare"
  | "Check"
  | "Delete"
  | "CameraOff"
  | "Camera"
  | "CheckCircle"
  | "Box"
  | "Calendar"
  | "Bell"
  | "BookOpen"
  | "Bookmark"
  | "BarChart2"
  | "BarChart"
  | "BellOff"
  | "AlignRight"
  | "Archive"
  | "Arrow"
  | "AlignJustify"
  | "AlignLeft"
  | "AlignCenter"
  | "ChevronDown";

type IconSize = "S" | "M" | "L";

interface BaseIconProps {
  type: IconType;
  isBlack?: boolean;
}

interface StandardIconProps extends BaseIconProps {
  type: Exclude<IconType, "TaveLogo">;
  size?: IconSize;
}

interface TaveLogoIconProps extends BaseIconProps {
  type: "TaveLogo";
  width: number;
  height: number;
}

type IconProps = StandardIconProps | TaveLogoIconProps;

const sizeMap = {
  S: "24px",
  M: "40px",
  L: "64px",
};

export const Icon: React.FC<IconProps> = (props) => {
  const { type, isBlack = false } = props;
  const IconComponent = icons[type];

  if (!IconComponent) {
    return null;
  }

  if (type === "TaveLogo") {
    const { width, height } = props as TaveLogoIconProps;
    return (
      <IconComponent
        style={{
          width: `${width}px`,
          height: `${height}px`,
          stroke: isBlack ? "#121212" : undefined,
        }}
      />
    );
  }

  const { size = "M" } = props as StandardIconProps;
  return (
    <IconComponent
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        stroke: isBlack ? "#121212" : undefined,
      }}
    />
  );
};

export default Icon;
