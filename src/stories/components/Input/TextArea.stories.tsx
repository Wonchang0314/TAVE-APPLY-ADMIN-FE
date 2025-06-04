import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "@/components/Input/TextArea";

const meta = {
  title: "Components/Input/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "내용을 입력하세요",
    width: "w-80",
    height: "h-32",
  },
};
