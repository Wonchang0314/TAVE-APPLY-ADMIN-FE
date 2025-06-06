import { useState } from "react";
import FlexBox from "@/components/Layout/FlexBox";
import Input from "@/components/Input/Input";
import DatePicker from "@/components/DatePicker/DatePicker";
import Button from "@/components/Button/Button";
import { formatDateTimeInput } from "@/utils/formatDate";
import ToastMessage from "@/components/Modal/ToastMessage";
import Body from "@/components/Layout/Body";

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
            message={"설정이 저장되었습니다."}
            isOpen={isToastOpen}
            setIsOpen={setIsToastOpen}
          />
        </div>
      </Body>
    </div>
  );
};
