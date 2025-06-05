import { isChartDataWithCount } from "@/types/chart";

/** 도넛 차트를 위한 SVG 경로 계산 */
const createPath = (
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number,
  isSelected: boolean
) => {
  const radius = isSelected ? outerRadius + 8 : outerRadius;
  const innerR = innerRadius;

  const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
  const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

  const x1 = 200 + radius * Math.cos(startAngleRad);
  const y1 = 200 + radius * Math.sin(startAngleRad);
  const x2 = 200 + radius * Math.cos(endAngleRad);
  const y2 = 200 + radius * Math.sin(endAngleRad);

  const x3 = 200 + innerR * Math.cos(endAngleRad);
  const y3 = 200 + innerR * Math.sin(endAngleRad);
  const x4 = 200 + innerR * Math.cos(startAngleRad);
  const y4 = 200 + innerR * Math.sin(startAngleRad);

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
};

/** 텍스트와 연결선을 위한 좌표 계산 */
const getTextPosition = (angle: number, isSelected: boolean) => {
  const chartRadius = isSelected ? 108 : 100;
  const lineStartRadius = chartRadius + 5;
  const lineEndRadius = lineStartRadius + 20;
  const textRadius = lineEndRadius + 10;

  const angleRad = ((angle - 90) * Math.PI) / 180;

  return {
    lineStart: {
      x: 200 + lineStartRadius * Math.cos(angleRad),
      y: 200 + lineStartRadius * Math.sin(angleRad),
    },
    lineEnd: {
      x: 200 + lineEndRadius * Math.cos(angleRad),
      y: 200 + lineEndRadius * Math.sin(angleRad),
    },
    text: {
      x: 200 + textRadius * Math.cos(angleRad),
      y: 200 + textRadius * Math.sin(angleRad),
    },
  };
};

const getTotalCount = (data: any[]) => {
  if (isChartDataWithCount(data[0])) {
    return data.reduce((sum, item) => sum + item.count, 0);
  }
  return null;
};

export { createPath, getTextPosition, getTotalCount };
