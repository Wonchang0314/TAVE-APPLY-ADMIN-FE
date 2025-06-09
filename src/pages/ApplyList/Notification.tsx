import Button from "@/components/Button/Button";
import NotificationTable from "@/components/ApplicationTable/NotificationTable";
import FlexBox from "@/components/Layout/FlexBox";
import ToastMessage from "@/components/Modal/ToastMessage";
import { useNotification } from "@/hooks/ApplyList/useNotification";
import Icon from "@/components/Icon/Icon";

const Notification = () => {
  const {
    notificationList,
    postIndividual,
    postNotification,
    isPending,
    toastMessage,
    isToastOpen,
    setIsToastOpen,
  } = useNotification();

  return (
    <div className="px-12">
      <FlexBox className="justify-end py-8">
        <Button
          className="w-[150px]"
          isPending={isPending}
          onClick={() => postNotification()}
        >
          <Icon type="Email" size={18} />
          전체 메일 발송
        </Button>
      </FlexBox>

      <NotificationTable
        rows={["이메일", "신청 날짜", ""]}
        applications={notificationList}
        onClick={postIndividual}
      />
      <ToastMessage
        message={toastMessage}
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
      />
    </div>
  );
};

export default Notification;
