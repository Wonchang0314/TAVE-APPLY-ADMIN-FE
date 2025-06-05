import type { Meta, StoryObj } from "@storybook/react";
import Switch from "@/components/Input/Switch";
import { useState } from "react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    actions: { disable: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="flex items-center gap-2">
        <Switch title="필수 질문" isOn={isChecked} setIsOn={setIsChecked} />
      </div>
    );
  },
};
