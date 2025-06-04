import type { Meta, StoryObj } from "@storybook/react";
import { DashBoardMock } from "./DashBoardMock";

const meta = {
  title: "Pages/DashBoard",
  component: DashBoardMock,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    controls: { disable: true },
    actions: { disable: true },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-900 pt-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DashBoardMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
