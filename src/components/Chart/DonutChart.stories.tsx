import type { Meta, StoryObj } from "@storybook/react";
import DonutChart from "./DonutChart";
import type { ChartData, ChartDataWithCount } from "@/types/chart";

const meta = {
  title: "Components/Chart/DonutChart",
  component: DonutChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const genderData: ChartDataWithCount[] = [
  { label: "남성", ratio: 75, count: 34 },
  { label: "여성", ratio: 25, count: 11 },
];

const skillData: ChartData[] = [
  { label: "프론트", ratio: 35 },
  { label: "백엔드", ratio: 25 },
  { label: "디자인", ratio: 20 },
  { label: "데브옵스", ratio: 13 },
  { label: "AI", ratio: 7 },
];

export const GenderRatio: Story = {
  args: {
    data: genderData,
    title: "남녀 비율",
    colors: ["#4F46E5", "#EC4899"],
  },
};

export const SkillRatio: Story = {
  args: {
    data: skillData,
    title: "파트별 비율",
    colors: ["#4F46E5", "#EC4899", "#F97316", "#EAB308", "#10B981"],
  },
}; 