import { useQuery } from "@tanstack/react-query";
import { fetchChartData } from "@/api/DashBoard/fetchChartData";

export const useDashBoard = () => {
  const genderQuery = useQuery({
    queryKey: ["chart-data", "gender"],
    queryFn: () => fetchChartData("gender"),
  });

  const skillQuery = useQuery({
    queryKey: ["chart-data", "skill"],
    queryFn: () => fetchChartData("skill"),
  });

  return {
    genderQuery,
    skillQuery,
  };
};
