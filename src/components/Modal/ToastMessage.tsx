import { type Dispatch, type SetStateAction, useEffect } from "react";
import FlexBox from "@/components/Layout/FlexBox";
import Icon from "@/components/Icon/Icon";

interface ToastMessageProps {
  message: string;
  isError?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ToastMessage = ({
  message,
  isError = false,
  isOpen,
  setIsOpen,
}: ToastMessageProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setIsOpen(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);
  return (
    <div
      className={`fixed top-auto bottom-28 left-1/2 transform -translate-x-1/2 z-99 duration-700 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-[320px] md:w-[340px] rounded-3xl font-bold ${
          isError ? "bg-red-100 text-red-500" : "bg-blue-100 text-[#195BFF]"
        }`}
      >
        <FlexBox className="justify-center items-center gap-2 p-2 md:py-3 md:px-5">
          {isError ? (
            <Icon type="XCircle" size={20} />
          ) : (
            <Icon type={"CheckCircle"} size={20} />
          )}

          <span className="text-sm mg:text-lg">{message}</span>
        </FlexBox>
      </div>
    </div>
  );
};

export default ToastMessage;
