import { useQuery } from "@tanstack/react-query";
import { fetchChartData } from "@/api/DashBoard/fetchChartData";
import type { ChartData, ChartDataWithCount } from "@/types/chart";

export const useDashBoard = () => {
  const genderQuery = useQuery<ChartDataWithCount[]>({
    queryKey: ["chart-data", "gender"],
    queryFn: () => fetchChartData("gender"),
  });

  const skillQuery = useQuery<ChartData[]>({
    queryKey: ["chart-data", "skill"],
    queryFn: () => fetchChartData("skill"),
  });

  return {
    genderQuery,
    skillQuery,
  };
};
