import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import InterviewSettingMock from "./Interview/InterviewMock";
import { DetailMock } from "./Interview/DetailMock";

const meta = {
  title: "Pages/설정/면접 설정",
  component: InterviewSettingMock,
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
} satisfies Meta<typeof InterviewSettingMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InterviewSetting: Story = {
  name: "면접",
  render: () => (
    <MemoryRouter>
      <div className="bg-gray-900 min-h-screen">
        <InterviewSettingMock />
      </div>
    </MemoryRouter>
  ),
};

export const ApplicantDetail: Story = {
  name: "지원자 상세 정보",
  render: () => (
    <MemoryRouter initialEntries={["/setting/interview/1"]}>
      <div className="bg-gray-900 min-h-screen">
        <DetailMock />
      </div>
    </MemoryRouter>
  ),
};
