import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { SettingDefaultResponse } from "@/api/Setting/types";
import { fetchSettingDefault } from "@/api/Setting/Default";
import { postSettingDefault } from "@/api/Setting/Default";
import { formatDateOnly, formatDateTime } from "@/utils/formatDate";

export const useDefaultSetting = () => {
  const { data, isLoading, error } = useQuery<SettingDefaultResponse>({
    queryKey: ["setting", "default"],
    queryFn: fetchSettingDefault,
  });

  const {
    mutate,
    isPending,
    data: mutationData,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: postSettingDefault,
  });

  const [nextGeneration, setNextGeneration] = useState("");
  const [documentStartDate, setDocumentStartDate] = useState("");
  const [documentEndDate, setDocumentEndDate] = useState("");
  const [documentResultDateTime, setDocumentResultDateTime] = useState("");
  const [interviewStartDate, setInterviewStartDate] = useState("");
  const [interviewEndDate, setInterviewEndDate] = useState("");
  const [finalResultDateTime, setFinalResultDateTime] = useState("");
  const [homepageOpenStartDate, setHomepageOpenStartDate] = useState("");
  const [homepageOpenEndDate, setHomepageOpenEndDate] = useState("");

  useEffect(() => {
    if (!data) return;
    setNextGeneration(data.generation || "");
    setDocumentStartDate(formatDateOnly(data.documentRecruitStartDate) || "");
    setDocumentEndDate(formatDateOnly(data.documentRecruitEndDate) || "");
    setDocumentResultDateTime(
      formatDateTime(data.documentAnnouncementDate) || ""
    );
    setInterviewStartDate(formatDateOnly(data.interviewStartDate) || "");
    setInterviewEndDate(formatDateOnly(data.interviewEndDate) || "");
    setFinalResultDateTime(formatDateTime(data.lastAnnouncementDate) || "");
    setHomepageOpenStartDate(formatDateOnly(data.accessStartDate) || "");
    setHomepageOpenEndDate(formatDateOnly(data.accessEndDate) || "");
  }, [data]);

  const updateDefaultSetting = () => {
    mutate({
      generation: nextGeneration,
      documentRecruitStartDate: documentStartDate,
      documentRecruitEndDate: documentEndDate,
      documentAnnouncementDate: documentResultDateTime,
      interviewStartDate,
      interviewEndDate,
      lastAnnouncementDate: finalResultDateTime,
      accessStartDate: homepageOpenStartDate,
      accessEndDate: homepageOpenEndDate,
    });
  };

  return {
    isLoading,
    isPending,
    isSuccess,
    mutationData,
    nextGeneration,
    setNextGeneration,
    documentStartDate,
    setDocumentStartDate,
    documentEndDate,
    setDocumentEndDate,
    documentResultDateTime,
    setDocumentResultDateTime,
    interviewStartDate,
    setInterviewStartDate,
    interviewEndDate,
    setInterviewEndDate,
    finalResultDateTime,
    setFinalResultDateTime,
    homepageOpenStartDate,
    setHomepageOpenStartDate,
    homepageOpenEndDate,
    setHomepageOpenEndDate,
    error,
    isError,
    updateDefaultSetting,
  };
};
