const fetchChartData = async (type: string) => {
  try {
    const res = await fetch(`/api/chart-data?type=${type}`);
    if (!res.ok) {
      throw new Error(`response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch chart data`, error);
  }
};

export { fetchChartData };
