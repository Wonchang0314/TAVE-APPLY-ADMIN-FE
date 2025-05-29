// 빈 차트 (데이터 없음)
const EmptyChart = () => (
  <div className="w-[400px] h-[400px] flex items-center">
    <div className="relative w-48 h-48 mx-auto">
      <svg width="192" height="192">
        <circle
          cx="96"
          cy="96"
          r="80"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="32"
        />
      </svg>
    </div>
  </div>
);

export default EmptyChart;
