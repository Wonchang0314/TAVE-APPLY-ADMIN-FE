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
      confirmText="수정"
    >
      <Input value={wordLimit} onChange={(e) => setWordLimit(e.target.value)} />
    </Modal>
  );
};

export default WordLimitModal;
