import FlexBox from "@/components/Layout/FlexBox";

const SkeletonBox = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-md ${className}`} />
);

const DefaultLoading = () => {
  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">신규 지원 초기 설정</h1>
        <h2 className="font-semibold text-xl">15기</h2>
      </FlexBox>

      <section className="min-h-[calc(100vh-244px)] bg-gray-100 flex flex-col">
        <FlexBox
          direction="col"
          className="gap-4 justify-center w-2xl mx-auto pt-8 gap-8"
        >
          <div className="space-y-2 w-full">
            <SkeletonBox className="h-5 w-60" />
            <SkeletonBox className="h-10 w-full" />
          </div>

          <div className="space-y-4 w-full">
            <SkeletonBox className="h-5 w-60" />
            <FlexBox className="gap-4">
              <SkeletonBox className="h-10 w-[200px]" />
              <SkeletonBox className="h-10 w-[20px]" />
              <SkeletonBox className="h-10 w-[200px]" />
            </FlexBox>

            <SkeletonBox className="h-5 w-60" />
            <SkeletonBox className="h-10 w-full" />

            <SkeletonBox className="h-5 w-60" />
            <FlexBox className="gap-4">
              <SkeletonBox className="h-10 w-[200px]" />
              <SkeletonBox className="h-10 w-[20px]" />
              <SkeletonBox className="h-10 w-[200px]" />
            </FlexBox>

            <SkeletonBox className="h-5 w-60" />
            <SkeletonBox className="h-10 w-full" />
          </div>

          <div className="space-y-2 w-[500px] mx-auto">
            <SkeletonBox className="h-5 w-60" />
            <FlexBox className="gap-2">
              <SkeletonBox className="h-10 w-[200px]" />
              <SkeletonBox className="h-10 w-[20px]" />
              <SkeletonBox className="h-10 w-[200px]" />
            </FlexBox>
          </div>
        </FlexBox>

        <div className="w-[100px] mx-auto my-12">
          <SkeletonBox className="w-full h-10" />
        </div>
      </section>
    </div>
  );
};

export default DefaultLoading;
