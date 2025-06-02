import Icon from "@/components/Icon/Icon";
import FlexBox from "@/components/Layout/FlexBox";

interface IconLabledDatePickerProps {
  label: string;
  iconColor: "blue" | "gray";
  children: React.ReactNode;
}

const IconLabledWrapper = ({
  label,
  iconColor,
  children,
}: IconLabledDatePickerProps) => {
  return (
    <div>
      <FlexBox className="w-[560px] justify-start gap-2">
        <Icon
          type={`${iconColor === "blue" ? "CheckCircle" : "ClockCircle"}`}
          size={20}
        />
        <label className="text-gray-900 font-semibold">{label}</label>
      </FlexBox>
      <FlexBox className="gap-2 w-[500px] mx-auto">{children}</FlexBox>
    </div>
  );
};

export default IconLabledWrapper;
