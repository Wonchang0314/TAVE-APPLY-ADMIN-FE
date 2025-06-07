import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";

const WordLimitModal = ({
  ref,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) => {
  const [wordLimit, setWordLimit] = useState<string>();
  return (
    <Modal
      dialogRef={ref}
      title="글자 수 제한"
      buttonCount={2}
      onConfirm={() => {}}
      confirmText="수정"
      className="h-full!"
    >
      <Input
        value={wordLimit}
        placeholder="제한할 글자수를 입력하세요 (ex. 700자)"
        className="w-full"
        onChange={(e) => setWordLimit(e.target.value)}
      />
    </Modal>
  );
};

export default WordLimitModal;
