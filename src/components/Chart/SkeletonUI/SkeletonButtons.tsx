import FlexBox from "@/components/Layout/FlexBox";

// 스켈레톤 버튼들
const SkeletonButtons = () => (
  <FlexBox className="gap-2">
    {[1, 2, 3, 4, 5].map((index) => (
      <div
        key={index}
        className="flex items-center gap-2 p-3 rounded-lg animate-pulse"
      >
        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        <div className="w-16 h-5 bg-gray-200 rounded"></div>
      </div>
    ))}
  </FlexBox>
);

export default SkeletonButtons;
