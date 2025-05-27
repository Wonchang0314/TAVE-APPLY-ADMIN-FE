import React from "react";
import type { SVGProps } from "react";
import * as icons from "@/assets/Icons";

export type IconType =
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
  | "Trash"
  | "ChevronDown"
  | "File"
  | "Pen"
  | "Filter"
  | "Dots";

interface BaseIconProps extends SVGProps<SVGSVGElement> {
  type: IconType;
  className?: string;
}

interface StandardIconProps extends BaseIconProps {
  type: Exclude<IconType, "TaveLogo">;
  size: number;
}

interface TaveLogoIconProps extends BaseIconProps {
  type: "TaveLogo";
  width: number;
  height: number;
}

type IconProps = StandardIconProps | TaveLogoIconProps;

export const Icon: React.FC<IconProps> = ({
  type,
  className = "",
  ...props
}) => {
  const IconComponent = icons[type];

  if (!IconComponent) {
    return null;
  }

  if (type === "TaveLogo") {
    const { width, height } = props as TaveLogoIconProps;
    return (
      <IconComponent
        width={width}
        height={height}
        className={className}
        {...props}
      />
    );
  }

  const { size } = props as StandardIconProps;
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};

export default Icon;
