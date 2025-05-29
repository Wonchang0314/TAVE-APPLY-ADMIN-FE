interface ChartData {
  label: string;
  ratio: number;
}

interface ChartDataWithCount extends ChartData {
  count: number;
}

function isChartDataWithCount(
  data: ChartData | ChartDataWithCount
): data is ChartDataWithCount {
  return "count" in data && typeof data.count === "number";
}
export type { ChartData, ChartDataWithCount };
export { isChartDataWithCount };
