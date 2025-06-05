import FlexBox from "../Layout/FlexBox";

interface CountCardProps {
  text: string;
  boxColor: "blue" | "green" | "orange";
  count: number | string;
}

/** 지원자 수와 같은 숫자를 보여주는 컴포넌트 */
const CountCard = ({ text, boxColor, count }: CountCardProps) => {
  return (
    <FlexBox className="bg-white rounded-xl px-4 py-5 justify-between w-[420px] border border-gray-200">
      <FlexBox className="gap-2">
        <div
          className={`w-[5px] h-[20px] rounded-xl ${
            boxColor === "blue"
              ? "bg-blue-500"
              : boxColor === "green"
              ? "bg-green-500"
              : "bg-orange-500"
          }`}
        />
        <span className="text-gray-500 font-semibold">{text}</span>
      </FlexBox>
      <span className="font-bold text-black text-3xl">{count}</span>
    </FlexBox>
  );
};

export default CountCard;
