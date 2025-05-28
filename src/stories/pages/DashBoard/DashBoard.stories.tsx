import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "@/pages/DashBoard/index";
import { http, HttpResponse } from "msw";

const meta = {
  title: "Pages/DashBoard",
  component: Page,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
    msw: {
      handlers: [
        http.get("/api/dashboard", () => {
          return HttpResponse.json({
            totalApplicants: 200,
            growthRate: "+10%",
            passedApplicants: 100,
            genderRatio: [
              { label: "남성", ratio: 75, count: 34 },
              { label: "여성", ratio: 25, count: 11 },
            ],
            skillRatio: [
              { label: "프론트", ratio: 35 },
              { label: "백엔드", ratio: 25 },
              { label: "디자인", ratio: 20 },
              { label: "데브옵스", ratio: 13 },
              { label: "AI", ratio: 7 },
            ],
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-900 pt-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/dashboard", async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return HttpResponse.json({
            totalApplicants: 200,
            growthRate: "+10%",
            passedApplicants: 100,
            genderRatio: [
              { label: "남성", ratio: 75, count: 34 },
              { label: "여성", ratio: 25, count: 11 },
            ],
            skillRatio: [
              { label: "프론트", ratio: 35 },
              { label: "백엔드", ratio: 25 },
              { label: "디자인", ratio: 20 },
              { label: "데브옵스", ratio: 13 },
              { label: "AI", ratio: 7 },
            ],
          });
        }),
      ],
    },
  },
};

export const Error: Story = {
  args: {},
};
