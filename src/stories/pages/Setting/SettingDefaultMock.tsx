import { useState } from "react";
import FlexBox from "@/components/Layout/FlexBox";
import LabeledWrapper from "@/pages/Setting/CustomComponents/LabledInput";
import IconLabledWrapper from "@/pages/Setting/CustomComponents/IconLabledDatePicker";
import Input from "@/components/Input/Input";
import DatePicker from "@/components/DatePicker/DatePicker";
import Button from "@/components/Button/Button";
import { formatDateTimeInput } from "@/utils/formatDate";
import ToastMessage from "@/components/Modal/ToastMessage";

export const SettingDefaultMock = () => {
  const [nextGeneration, setNextGeneration] = useState("16");
  const [documentStartDate, setDocumentStartDate] = useState("2025-06-01");
  const [documentEndDate, setDocumentEndDate] = useState("2025-06-07");
  const [documentResultDateTime, setDocumentResultDateTime] =
    useState("2025.06.10 10:00");
  const [interviewStartDate, setInterviewStartDate] = useState("2025-06-13");
  const [interviewEndDate, setInterviewEndDate] = useState("2025-06-15");
  const [finalResultDateTime, setFinalResultDateTime] =
    useState("2025.06.18 10:00");
  const [homepageOpenStartDate, setHomepageOpenStartDate] =
    useState("2025-05-30");
  const [homepageOpenEndDate, setHomepageOpenEndDate] = useState("2025-06-20");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleUpdate = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsToastOpen(true);
      setIsPending(false);
    }, 1000);
  };

  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">신규 지원 초기 설정</h1>
        <h2 className="font-semibold text-xl">{nextGeneration}기</h2>
      </FlexBox>

      <section className="min-h-[calc(100vh-244px)] bg-gray-100 flex flex-col">
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
            text="저장하기"
            isPending={isPending}
            onClick={handleUpdate}
            className="w-[100px]"
          />
          <ToastMessage
            message="설정이 저장되었습니다."
            isOpen={isToastOpen}
            setIsOpen={setIsToastOpen}
          />
        </div>
      </section>
    </div>
  );
};
