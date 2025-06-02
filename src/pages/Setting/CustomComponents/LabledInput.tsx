import FlexBox from "@/components/Layout/FlexBox";
import Icon from "@/components/Icon/Icon";

interface LabeledInputProps {
  label: string;
  id?: string;
  index?: number | string;
  children: React.ReactNode;
  hasHelperContent?: boolean;
  helperText?: string;
  className?: string;
}

const LabeledWrapper = ({
  label,
  index,
  hasHelperContent = false,
  helperText = "신규 기수 지원 안내를 포함한 홈페이지에 접근이 가능한 일정입니다 :)",
  children,
  className = "",
}: LabeledInputProps) => {
  return (
    <div className={`w-full`}>
      <FlexBox className="gap-4 text-gray-900 font-semibold w-full mb-2">
        {index !== undefined && (
          <div className="bg-gray-200 py-2 px-4 rounded-xl text-gray-400">
            {index}
          </div>
        )}
        <label>{label}</label>
        {hasHelperContent && (
          <div className="relative inline-block group">
            <Icon type="HelperCircle" size={16} className="cursor-help" />
            <div className="absolute z-10 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none before:content-[''] before:absolute before:top-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white">
              {helperText}
            </div>
          </div>
        )}
      </FlexBox>
      <FlexBox direction="col" className={`w-[560px] mx-auto ${className}`}>
        {children}
      </FlexBox>
    </div>
  );
};

export default LabeledWrapper;
