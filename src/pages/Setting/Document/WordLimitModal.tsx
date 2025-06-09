import { useState } from "react";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import ToastMessage from "@/components/Modal/ToastMessage";

const WordLimitModal = ({
  ref,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) => {
  const [wordLimit, setWordLimit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const updateWordLimit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsLoading(false);
      setWordLimit("");
    }, 1000);
  };

  return (
    <Modal
      dialogRef={ref}
      title="글자 수 제한"
      buttonCount={2}
      onConfirm={updateWordLimit}
      isPending={isLoading}
      onChange={(e) => console.log(e)}
      confirmText="수정"
      className="h-full!"
    >
      <Input
        type="number"
        value={wordLimit}
        placeholder="제한할 글자수를 입력하세요 (ex. 700)"
        className="w-full"
        onChange={(e) => setWordLimit(e.target.value)}
      />

      <ToastMessage
        message={"제한 글자수를 변경하셨습니다"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Modal>
  );
};

export default WordLimitModal;
