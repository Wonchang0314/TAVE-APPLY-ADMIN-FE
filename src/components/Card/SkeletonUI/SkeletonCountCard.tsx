import FlexBox from "@/components/Layout/FlexBox";

const CountCardSkeleton = () => {
  return (
    <FlexBox className="bg-white rounded-xl px-4 py-5 justify-between w-[420px] border border-gray-200">
      <FlexBox className="gap-2">
        <div className="w-[5px] h-[20px] rounded-xl bg-gray-200" />
        <span className="text-gray-500 font-semibold">
          <div className="w-20 h-8 bg-gray-200 rounded-lg"></div>
        </span>
      </FlexBox>
      <span className="font-bold text-black text-4xl">-</span>
    </FlexBox>
  );
};

export default CountCardSkeleton;
