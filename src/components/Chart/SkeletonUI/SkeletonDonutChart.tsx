import FlexBox from "@/components/Layout/FlexBox";
import EmptyChart from "./EmptyChart";
import SkeletonButtons from "./SkeletonButtons";

const SkeletonDonutChart = () => {
  return (
    <FlexBox direction="col" className="py-4">
      <div className="w-20 h-7 bg-gray-200 rounded-lg"></div>
      <FlexBox direction="col">
        <FlexBox className="relative justify-center mb-6">
          <EmptyChart />
        </FlexBox>
        <SkeletonButtons />
      </FlexBox>
    </FlexBox>
  );
};

export default SkeletonDonutChart;
