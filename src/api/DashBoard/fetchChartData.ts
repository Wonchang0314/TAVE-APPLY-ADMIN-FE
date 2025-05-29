import { axiosInstance } from "@/api/axiosInstance";

const fetchChartData = async (type: string) => {
  try {
    const res = await axiosInstance.get(`/api/chart-data?type=${type}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch chart data`, error);
    throw error;
  }
};

export { fetchChartData };
