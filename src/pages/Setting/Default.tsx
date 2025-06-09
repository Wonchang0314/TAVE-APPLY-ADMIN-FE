import { useEffect, useState } from "react";
import Body from "@/components/Layout/Body";
import FlexBox from "@/components/Layout/FlexBox";
import Input from "@/components/Input/Input";
import DatePicker from "@/components/DatePicker/DatePicker";
import Button from "@/components/Button/Button";
import { useDefaultSetting } from "@/hooks/Setting/useDefault";
import { formatDateTimeInput } from "@/utils/formatDate";

import ToastMessage from "@/components/Modal/ToastMessage";

const DefaultSetting = () => {
  const {
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

  const handleUpdate = () => {
    updateDefaultSetting();
  };

  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">신규 지원 초기 설정</h1>
        <h2 className="font-semibold text-xl">15기</h2>
      </FlexBox>

      <Body>
        <FlexBox
          direction="col"
          className="gap-4 justify-center w-2xl mx-auto pt-8 gap-8"
        >
          <Input.WithNumber number={1} className="items-start">
            <Input.WithTitle
              title="다음 기수를 입력해주세요"
              className="pt-1 mb-4"
            >
              <Input
                placeholder="기수를 입력해주세요"
                value={nextGeneration}
                onChange={(e) => setNextGeneration(e.target.value)}
                className="w-full"
              />
            </Input.WithTitle>
          </Input.WithNumber>

          <Input.WithNumber number={2} className="items-start">
            <Input.WithTitle
              title="앞으로의 모집 일정을 알려주세요"
              className="pt-1 mb-4"
            >
              <Input.WithLabel
                label="서류 모집"
                iconType="CheckCircle"
                labelColor="text-gray-900"
                className="mb-2"
              >
                <FlexBox className="gap-4">
                  <DatePicker
                    value={documentStartDate}
                    setValue={setDocumentStartDate}
                  />
                  <div className="text-gray-300 font-bold w-5 border border-t" />
                  <DatePicker
                    value={documentEndDate}
                    setValue={setDocumentEndDate}
                  />
                </FlexBox>
              </Input.WithLabel>
              <Input.WithLabel
                iconType="ClockCircle"
                label="서류 발표"
                labelColor="text-gray-900"
                className="mb-4"
              >
                <Input
                  placeholder="YYYY.MM.DD HH:MM"
                  className="mt-2 w-full"
                  value={documentResultDateTime}
                  onChange={(e) =>
                    formatDateTimeInput(e, setDocumentResultDateTime)
                  }
                />
              </Input.WithLabel>
              <Input.WithLabel
                label="면접 기간"
                iconType="CheckCircle"
                labelColor="text-gray-900"
                className="mb-2"
              >
                <FlexBox className="gap-4">
                  <DatePicker
                    value={interviewStartDate}
                    setValue={setInterviewStartDate}
                  />
                  <div className="text-gray-300 font-bold w-5 border border-t" />
                  <DatePicker
                    value={interviewEndDate}
                    setValue={setInterviewEndDate}
                  />
                </FlexBox>
              </Input.WithLabel>

              <Input.WithLabel
                iconType="ClockCircle"
                label="최종 발표"
                labelColor="text-gray-900"
              >
                <Input
                  placeholder="YYYY.MM.DD HH:MM"
                  className="mt-2 w-full"
                  value={finalResultDateTime}
                  onChange={(e) =>
                    formatDateTimeInput(e, setFinalResultDateTime)
                  }
                />
              </Input.WithLabel>
            </Input.WithTitle>
          </Input.WithNumber>

          <Input.WithNumber number={3} className="items-start">
            <Input.WithHelperText
              title="홈페이지 공개"
              helperText="신규 기수 지원 안내를 포함한 홈페이지에 접근이 가능한 일정입니다 :)"
            >
              <FlexBox className="gap-4">
                <DatePicker
                  value={homepageOpenStartDate}
                  setValue={setHomepageOpenStartDate}
                />
                <div className="text-gray-300 font-bold w-5 border border-t" />
                <DatePicker
                  value={homepageOpenEndDate}
                  setValue={setHomepageOpenEndDate}
                />
              </FlexBox>
            </Input.WithHelperText>
          </Input.WithNumber>
        </FlexBox>
        <div className="w-[100px] mx-auto mt-12 mb-[300px]">
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
