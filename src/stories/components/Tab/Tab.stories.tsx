import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Tab from "@/components/Tab/Tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    categories: {
      description: "탭 메뉴 항목들",
      control: "object",
    },
    active: {
      description: "현재 활성화된 탭",
      control: "text",
    },
    onChange: {
      description: "탭 변경 시 호출되는 함수",
    },
    fitWidth: {
      description: "회색 border를 fit하게 맞출지의 유무",
      control: "boolean",
    },
    centerType: {
      description: "탭을 중앙 정렬할지 여부",
      control: "boolean",
    },
    className: {
      description: "추가 스타일 클래스",
      control: "text",
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 탭
export const Default: Story = {
  args: {
    categories: ["전체", "프론트엔드", "백엔드", "디자인"],
    active: "전체",
    onChange: () => {},
  },
  render: function Story(args) {
    const [activeTab, setActiveTab] = useState(
      args.active ?? args.categories[0]
    );

    return <Tab {...args} active={activeTab} onChange={setActiveTab} />;
  },
};

// 중앙 정렬 탭
export const Centered: Story = {
  args: {
    categories: ["전체", "프론트엔드", "백엔드", "디자인"],
    active: "프론트엔드",
    centerType: true,
    onChange: () => {},
  },
  render: function Story(args) {
    const [activeTab, setActiveTab] = useState(
      args.active ?? args.categories[0]
    );

    return <Tab {...args} active={activeTab} onChange={setActiveTab} />;
  },
};

// Fit Width 탭
export const FitWidth: Story = {
  args: {
    categories: ["진행중", "완료"],
    active: "진행중",
    fitWidth: true,
    onChange: () => {},
  },
  render: function Story(args) {
    const [activeTab, setActiveTab] = useState(
      args.active ?? args.categories[0]
    );

    return <Tab {...args} active={activeTab} onChange={setActiveTab} />;
  },
};
