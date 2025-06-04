import { useEffect, useState } from "react";
import Body from "@/components/Layout/Body";
import FlexBox from "@/components/Layout/FlexBox";
import LabeledWrapper from "./CustomComponents/LabledInput";
import IconLabledWrapper from "./CustomComponents/IconLabledDatePicker";
import Input from "@/components/Input/Input";
import DatePicker from "@/components/DatePicker/DatePicker";
import Button from "@/components/Button/Button";
import { useDefaultSetting } from "@/hooks/Setting/useDefault";
import DefaultLoading from "./Loading/DefaultLoading";
import { formatDateTimeInput } from "@/utils/formatDate";

import ToastMessage from "@/components/Modal/ToastMessage";

const DefaultSetting = () => {
  const {
    isLoading,
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
    updateDefaultSetting,
    mutationData,
    isPending,
    isSuccess,
    isError,
  } = useDefaultSetting();
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    if (isSuccess || isError) {
      setIsToastOpen(true);
    }
  }, [isSuccess, isError]);

  if (!nextGeneration || isLoading) return <DefaultLoading />;

  const handleUpdate = () => {
    updateDefaultSetting();
  };

  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">신규 지원 초기 설정</h1>
        <h2 className="font-semibold text-xl">{nextGeneration}기</h2>
      </FlexBox>

      <Body>
        <FlexBox
          direction="col"
          className="gap-4 justify-center w-2xl mx-auto pt-8 gap-8"
        >
          <LabeledWrapper index={1} label="다음 기수를 입력해주세요">
            <Input
              placeholder="기수를 입력해주세요."
              className="w-full"
              value={nextGeneration}
              onChange={(e) => setNextGeneration(e.target.value)}
            />
          </LabeledWrapper>

          <LabeledWrapper
            index={2}
            label="앞으로의 모집 일정을 알려주세요"
            className="gap-4"
          >
            <IconLabledWrapper label="서류 모집" iconColor="blue">
              <DatePicker
                value={documentStartDate}
                setValue={setDocumentStartDate}
              />
              <span className="text-gray-300 font-bold">-</span>
              <DatePicker
                value={documentEndDate}
                setValue={setDocumentEndDate}
              />
            </IconLabledWrapper>

            <IconLabledWrapper label="서류 발표" iconColor="gray">
              <Input
                placeholder="YYYY.MM.DD HH:MM"
                className="mt-2 w-full"
                value={documentResultDateTime}
                onChange={(e) =>
                  formatDateTimeInput(e, setDocumentResultDateTime)
                }
              />
            </IconLabledWrapper>

            <IconLabledWrapper label="면접 기간" iconColor="blue">
              <DatePicker
                value={interviewStartDate}
                setValue={setInterviewStartDate}
              />
              <span className="text-gray-300 font-bold">-</span>
              <DatePicker
                value={interviewEndDate}
                setValue={setInterviewEndDate}
              />
            </IconLabledWrapper>

            <IconLabledWrapper label="최종 발표" iconColor="gray">
              <Input
                placeholder="YYYY.MM.DD HH:MM"
                className="mt-2 w-full"
                value={finalResultDateTime}
                onChange={(e) => formatDateTimeInput(e, setFinalResultDateTime)}
              />
            </IconLabledWrapper>
          </LabeledWrapper>

          <LabeledWrapper
            index={3}
            label="홈페이지 공개"
            hasHelperContent={true}
          >
            <FlexBox className="gap-2 w-[500px] mx-auto">
              <DatePicker
                value={homepageOpenStartDate}
                setValue={setHomepageOpenStartDate}
              />
              <span className="text-gray-300 font-bold">-</span>
              <DatePicker
                value={homepageOpenEndDate}
                setValue={setHomepageOpenEndDate}
              />
            </FlexBox>
          </LabeledWrapper>
        </FlexBox>
        <div className="w-[100px] mx-auto my-12">
          <Button
            isPending={isPending}
            disabled={isPending}
            className="w-[100px]"
            onClick={handleUpdate}
          >
            저장하기
          </Button>
          <ToastMessage
            message={mutationData ? mutationData.message : ""}
            isOpen={isToastOpen}
            isError={isError}
            setIsOpen={setIsToastOpen}
          />
        </div>
      </Body>
    </div>
  );
};

export default DefaultSetting;
