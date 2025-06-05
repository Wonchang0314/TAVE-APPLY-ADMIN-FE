import type { Meta, StoryObj } from "@storybook/react";
import CheckBoxPopover from "@/components/Modal/Popover";
import { useState } from "react";

const meta = {
  title: "Components/Popover",
  component: CheckBoxPopover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
### CheckBoxPopover 컴포넌트

체크박스 목록을 포함한 팝오버 컴포넌트입니다.

#### 주요 기능
- 체크박스 목록 표시
- 다중 선택 가능
- 스크롤 가능한 목록
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBoxPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contents: ["프론트엔드", "백엔드", "디자인", "기획", "마케팅", "운영"],
    checkedList: [],
    setCheckedList: () => {},
  },
  render: () => {
    const [checkedList, setCheckedList] = useState<string[]>([]);
    return (
      <div className="relative h-[400px] flex items-end">
        <CheckBoxPopover
          contents={[
            "프론트엔드",
            "백엔드",
            "디자인",
            "기획",
            "마케팅",
            "운영",
          ]}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
      </div>
    );
  },
};
