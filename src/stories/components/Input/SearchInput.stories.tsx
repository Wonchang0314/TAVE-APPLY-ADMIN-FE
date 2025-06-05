import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from "@/components/Input/SearchInput";

const meta = {
  title: "Components/Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    width: "w-80",
  },
};
