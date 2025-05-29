import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input/Input";

const meta = {
  title: "Components/Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "기본 입력",
    width: "w-80",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화된 입력",
    disabled: true,
    width: "w-80",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호 입력",
    width: "w-80",
  },
};

export const WithValue: Story = {
  args: {
    value: "미리 입력된 값",
    width: "w-80",
  },
};
