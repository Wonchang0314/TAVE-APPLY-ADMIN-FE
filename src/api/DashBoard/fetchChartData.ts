import { axiosInstance } from "@/api/axiosInstance";
import type { ChartData, ChartDataWithCount } from "@/types/chart";

const fetchChartData = async (
  type: string
): Promise<ChartData[] | ChartDataWithCount[]> => {
  try {
    const res = await axiosInstance.get(`/api/chart-data?type=${type}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch chart data`, error);
    throw error;
  }
};

export { fetchChartData };
