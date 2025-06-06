import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/components/Icon/Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "Trash",
        "Dots",
        "Calendar",
        "Filter",
        "Left",
        "CheckCircle",
        "Upload",
        "Key",
        "Link",
        "X",
        "XCircle",
        "ChevronDown",
        "ChevronUp",
        "Arrow",
        "File",
        "Plus",
        "HelperCircle",
        "ClockCircle",
        "Alert",
      ],
    },
    size: {
      control: { type: "number", min: 16, max: 128, step: 8 },
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Trash",
    size: 64,
  },
};
