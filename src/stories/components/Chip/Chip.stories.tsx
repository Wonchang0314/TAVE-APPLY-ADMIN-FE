import type { Meta, StoryObj } from "@storybook/react";
import Chip from "@/components/Chip/Chip";
import type { RoleType } from "@/types/role";

const roles: RoleType[] = [
  "웹 프론트",
  "백엔드",
  "디자인",
  "데이터 분석",
  "딥러닝",
  "앱 프론트",
] as const;

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    actions: { disable: true },
  },
  argTypes: {
    title: {
      control: { type: "radio" },
      options: roles,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    title: "웹 프론트",
  },
};
