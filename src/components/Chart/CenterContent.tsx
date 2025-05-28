import { isChartDataWithCount } from "@/types/chart";
import { getTotalCount } from "@/utils/chart";

interface CenterContentProps<T> {
  data: T[];
  selectedSegment: null | any;
}

const CenterContent = ({ data, selectedSegment }: CenterContentProps<any>) => {
  if (selectedSegment !== null) {
    const selected = data[selectedSegment];
    return (
      <div className="text-center">
        <div className="text-gray-500 text-sm mb-1">{selected.label}</div>
        <div className="text-xl font-bold text-gray-800">
          {isChartDataWithCount(selected)
            ? `${selected.count}명`
            : `${selected.ratio}%`}
        </div>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="text-center">
      <div className="text-gray-500 text-sm mb-1">전체</div>
      <div className="text-xl font-bold text-gray-800">
        {isChartDataWithCount(data[0]) ? `${getTotalCount(data)}명` : "100%"}
      </div>
    </div>
  );
};

export default CenterContent;
