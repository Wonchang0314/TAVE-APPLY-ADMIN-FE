import type { RoleType } from "@/types/role";

interface ChipProps {
  title: RoleType;
}

const Chip = ({ title }: ChipProps) => {
  return (
    <label
      className={`w-[78px] h-[28px] text-sm flex items-center justify-center rounded-2xl font-semibold border
    ${title === "웹 프론트" && "bg-[#DEEAFC] text-[#375DD4]"}
    ${title === "백엔드" && "bg-[#FEEDE5] text-[#EE7036]"}
    ${title === "디자인" && "bg-[#FFE7F2] text-[#FF56A2]"}
    ${title === "데이터 분석" && "bg-[#FDEFD8] text-[#D9740F]"}
    ${title === "딥러닝" && "bg-[#E5F6E6] text-[#279634]"}
     ${title === "앱 프론트" && "bg-[#F4E7FF] text-[#A450EA]"}
    `}
    >
      {title}
    </label>
  );
};

export default Chip;
