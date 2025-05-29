import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/Modal/Modal";
import { useRef } from "react";

type ModalProps = React.ComponentProps<typeof Modal>;
type StoryModalProps = Omit<ModalProps, "dialogRef">;

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<StoryModalProps>;

export const Default: Story = {
  args: {
    buttonCount: 1,
    children: (
      <div className="min-h-[200px] flex items-center justify-center">
        모달 내용이 들어갈 자리입니다.
      </div>
    ),
    title: "모달 제목",
    confirmText: "확인",
    cancelText: "취소",
  },
  render: (args) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    return (
      <div>
        <button
          onClick={() => dialogRef.current?.showModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          모달 열기
        </button>
        <Modal {...args} dialogRef={dialogRef} />
      </div>
    );
  },
};
