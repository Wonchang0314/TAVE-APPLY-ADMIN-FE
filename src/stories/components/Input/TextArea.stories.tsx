import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "@/components/Input/TextArea";

const meta = {
  title: "Components/Input/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "내용을 입력하세요",
    width: "w-80",
    height: "h-32",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 텍스트 영역",
    disabled: true,
    width: "w-80",
    height: "h-32",
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: "최대 100자까지 입력 가능합니다",
    maxLength: 100,
    width: "w-80",
    height: "h-32",
  },
};

export const WithValue: Story = {
  args: {
    value: "미리 입력된 텍스트입니다.\n여러 줄 입력이 가능합니다.",
    width: "w-80",
    height: "h-32",
  },
};

export const CustomSize: Story = {
  args: {
    placeholder: "크기 조절된 텍스트 영역",
    width: "w-[400px]",
    height: "h-[200px]",
  },
};
