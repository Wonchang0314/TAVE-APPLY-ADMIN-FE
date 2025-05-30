import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "@/components/Accordion/Accordion";
import TextArea from "@/components/Input/TextArea";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    actions: { disable: true },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "지원 동기와 TAVE 활동을 통해 얻고 싶은 것을 적어주세요. *",
    className: "w-[560px]",
    children: <TextArea width="w-full" height="h-[200px]" />,
  },
};
