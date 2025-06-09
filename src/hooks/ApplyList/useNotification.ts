import { axiosInstance } from "@/api/axiosInstance";
import type { NotificationItem } from "@/types/applylist";
import { useEffect, useState } from "react";

export const useNotification = () => {
  const [notificationList, setNotificationList] = useState<NotificationItem[]>(
    []
  );
  const [isPending, setIsPending] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      const list = await fetchNotificationList();
      setNotificationList(list);
    };
    fetcher();
  }, []);

  const fetchNotificationList = async () => {
    try {
      const res = await axiosInstance.get("/v1/admin/notification");
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const postNotification = async () => {
    setIsPending(true);
    try {
      const res = await axiosInstance.post(
        "/v1/admin/notification/reservation"
      );
      setToastMessage("전체 메일 전송했습니다");
      setIsToastOpen(true);
      return res.data;
    } catch (error) {
      return error;
    } finally {
      setIsPending(false);
    }
  };

  const postIndividual = async (id: string | number) => {
    try {
      const res = await axiosInstance.post(
        `/v1/admin/notification/individual?id=${id}`
      );
      setToastMessage(`${id}번 회원에 대해 메일 전송했습니다`);
      setIsToastOpen(true);
      return res.data;
    } catch (error) {
      return error;
    }
  };

  return {
    notificationList,
    isPending,
    isToastOpen,
    toastMessage,
    setIsToastOpen,
    postNotification,
    postIndividual,
  };
};
