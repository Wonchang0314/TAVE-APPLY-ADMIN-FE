import FlexBox from "@/components/Layout/FlexBox";
import CountCard from "@/components/CountCard";

export const Page = () => {
  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">DashBoard</h1>
        <FlexBox className="w-full justify-between">
          <h2 className="font-semibold text-xl">16기 지원 현황</h2>
          <p className="text-gray-500">2025.08.11 14:00 기준</p>
        </FlexBox>
      </FlexBox>

      <section className="min-h-[calc(100vh-244px)] bg-gray-100">
        <FlexBox className="w-full pt-8 justify-center gap-4">
          <CountCard text="현재 지원자수" boxColor="blue" count={200} />
          <CountCard text="전 기수 대비" boxColor="green" count="+10%" />
          <CountCard text="현재 지원자수" boxColor="orange" count={100} />
        </FlexBox>
      </section>
    </div>
  );
};
