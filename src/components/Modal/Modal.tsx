import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/Icon/Icon";
import Button from "@/components/Button/Button";

/** children으로 본문에 해당하는 내용 받아오기 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonCount: 1 | 2;
  title?: string;
  children: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
  cancelText?: string;
  width?: string;
}

const Modal = ({
  isOpen,
  onClose,
  buttonCount,
  title,
  children,
  confirmText = "확인",
  onConfirm,
  cancelText = "취소",
  width = "w-[480px]",
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`${width} bg-white rounded-2xl shadow-lg transform transition-all`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Icon type="X" size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-200">
            {buttonCount === 1 ? (
              <Button
                text={confirmText}
                onClick={onClose}
                className="w-full bg-blue-600 text-white"
              />
            ) : (
              <>
                <Button
                  text={cancelText}
                  onClick={onClose}
                  className="bg-gray-200 !text-gray-900 hover:bg-gray-300"
                />
                {onConfirm && (
                  <Button
                    text={confirmText}
                    onClick={onConfirm}
                    className="hover:bg-blue-700"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
