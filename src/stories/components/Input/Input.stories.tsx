import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "@/components/Input/Input";

const meta = {
  title: "Components/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: "기본 입력",
    width: "w-80",
  },
};
