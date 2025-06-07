import type { Meta, StoryObj } from "@storybook/react";

import { DocumentSetting } from "@/pages/Setting";
import { SettingDefaultMock } from "./SettingDefaultMock";

const meta = {
  title: "Pages/Setting/Document",
  component: DocumentSetting,
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

export const 서류설정: Story = {};
