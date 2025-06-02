import type { Meta, StoryObj } from "@storybook/react";
import { SettingDefaultMock } from "./SettingDefaultMock";

const meta = {
  title: "Pages/Setting",
  component: SettingDefaultMock,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen pt-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SettingDefaultMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
