import type { Meta, StoryObj } from "@storybook/react";
import { SettingDefaultMock } from "./SettingDefaultMock";

const meta = {
  title: "Pages/설정",
  component: SettingDefaultMock,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen pt-12 mb-[200px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SettingDefaultMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitalSetting: Story = {
  name: "신규 지원 초기 설정",
};
