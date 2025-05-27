import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="모달 제목"
        buttonCount={1}
        onConfirm={() => {
          setIsOpen(false);
        }}
      >
        <div className="min-h-[200px] flex items-center justify-center">
          모달 내용이 들어갈 자리입니다.
        </div>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    buttonCount: 2,
    title: "모달 제목",
    children: (
      <div className="min-h-[200px] flex items-center justify-center">
        모달 내용이 들어갈 자리입니다.
      </div>
    ),
    confirmText: "확인",
    onConfirm: () => alert("확인 버튼 클릭!"),
    cancelText: "취소",
  },
  render: () => ModalExample(),
};
