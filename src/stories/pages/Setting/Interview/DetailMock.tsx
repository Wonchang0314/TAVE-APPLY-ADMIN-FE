import { useState } from "react";
import FlexBox from "@/components/Layout/FlexBox";
import Body from "@/components/Layout/Body";
import Tab from "@/components/Tab/Tab";
import Accordion from "@/components/Accordion/Accordion";
import TextArea from "@/components/Input/TextArea";
import TimePicker from "@/components/DatePicker/TimePicker";
import Button from "@/components/Button/Button";
import StepCounter from "@/components/StepCounter/StepCounter";
import ToastMessage from "@/components/Modal/ToastMessage";
import Icon from "@/components/Icon/Icon";

const mockApplicant = {
  id: "1",
  name: "홍길동",
  fieldType: "웹 프론트",
  sex: "MALE",
  school: "서울대학교",
  contact: "010-1234-5678",
  birthDate: "1998-01-01",
  major: "컴퓨터공학",
  subMajor: "경영학",
  email: "hong@example.com",
  commonQuestions: [
    {
      question: "지원 동기가 무엇인가요?",
      answer:
        "새로운 도전을 위해 지원하게 되었습니다. TAVE에서 제공하는 다양한 학습 기회와 프로젝트 경험을 통해 성장하고 싶습니다.",
    },
    {
      question: "본인의 장점은 무엇인가요?",
      answer:
        "문제 해결 능력이 뛰어나다고 생각합니다. 어려운 상황에서도 긍정적인 마인드로 해결책을 찾아내는 것이 저의 강점입니다.",
    },
  ],
  partQuestions: [
    {
      question: "의 기술 수준을 선택해주세요",
      answer: "",
    },
    {
      question: "프론트엔드 개발 경험을 설명해주세요",
      answer:
        "React를 사용하여 여러 프로젝트를 진행했습니다. 특히 상태 관리와 컴포넌트 설계에 중점을 두고 개발해왔습니다.",
    },
  ],
};

const schedules = [
  "2024-03-20T13:00:00",
  "2024-03-20T13:30:00",
  "2024-03-20T14:00:00",
  "2024-03-20T14:30:00",
  "2024-03-20T15:00:00",
  "2024-03-20T15:30:00",
  "2024-03-20T16:00:00",
  "2024-03-20T16:30:00",
];

const DetailMock = () => {
  const [activeTab, setActiveTab] = useState("공통 질문");
  const [selectedDate, setSelectedDate] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [postInterviewDataResult, setPostInterviewDataResult] = useState<{
    message: string;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);

  const formatMMDD = (isoString: string) => {
    const date = new Date(isoString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${mm}.${dd}`;
  };

  const formatHHMin = (isoString: string) => {
    const date = new Date(isoString);
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${hh}:${min}`;
  };

  const handleUpdateInterviewData = () => {
    setIsPending(true);
    setTimeout(() => {
      setPostInterviewDataResult({ message: "면접 시간이 등록되었습니다." });
      setIsToastOpen(true);
      setIsPending(false);
    }, 1000);
  };

  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <FlexBox className="gap-2">
          <Icon
            type="ChevronDown"
            size={40}
            className="rotate-90 cursor-pointer"
            onClick={() => {}}
          />
          <h1 className="font-bold text-4xl">
            {mockApplicant.name} ({mockApplicant.fieldType})
          </h1>
        </FlexBox>
      </FlexBox>
      <div className="px-16 pb-8 grid grid-cols-3 gap-4">
        <FlexBox className="gap-8">
          <label className="text-gray-400">성별</label>
          <span>{mockApplicant.sex === "MALE" ? "남자" : "여자"}</span>
        </FlexBox>

        <FlexBox className="gap-8">
          <label className="text-gray-400">학교</label>
          <span>{mockApplicant.school}</span>
        </FlexBox>

        <FlexBox className="gap-8">
          <label className="text-gray-400">연락처</label>
          <span>{mockApplicant.contact}</span>
        </FlexBox>

        <FlexBox className="gap-8">
          <label className="text-gray-400">생년월일</label>
          <span>{mockApplicant.birthDate}</span>
        </FlexBox>

        <FlexBox className="gap-8">
          <label className="text-gray-400">전공/부전공</label>
          <span>
            {mockApplicant.major} / {mockApplicant.subMajor}
          </span>
        </FlexBox>

        <FlexBox className="gap-8">
          <label className="text-gray-400">이메일 주소</label>
          <span>{mockApplicant.email}</span>
        </FlexBox>
      </div>
      <Body className="py-8 px-12">
        <Tab
          categories={["파트별 질문", "공통 질문"]}
          active={activeTab}
          onChange={setActiveTab}
        />
        <div className="flex gap-4">
          <FlexBox
            direction="col"
            className="gap-8 w-1/2 h-[650px] overflow-y-scroll px-4 py-6"
          >
            {activeTab === "공통 질문" &&
              mockApplicant.commonQuestions.map((q) => (
                <Accordion
                  key={q.question}
                  title={q.question}
                  className="w-full"
                >
                  <TextArea
                    value={q.answer}
                    readOnly={true}
                    className="w-full h-full"
                  />
                </Accordion>
              ))}
            {activeTab === "파트별 질문" &&
              mockApplicant.partQuestions.map((q, index) => (
                <Accordion
                  key={q.question}
                  title={
                    index === 0
                      ? mockApplicant.fieldType + q.question
                      : q.question
                  }
                  className="w-full"
                >
                  {index === 0 ? (
                    <StepCounter
                      title="Javascript"
                      currentStep={2}
                      setCurrentStep={() => {}}
                      maxStep={5}
                      stepLabels={["입문", "초급", "중급", "고급", "전문가"]}
                    />
                  ) : (
                    <TextArea
                      value={q.answer}
                      readOnly={true}
                      className="w-full h-full"
                    />
                  )}
                </Accordion>
              ))}
          </FlexBox>
          <div className="border border-gray-300 bg-white rounded-xl flex-1 rounded-xl min-h-[650px] px-6 py-5">
            <p className="text-gray-900 font-semibold text-lg">
              면접 일자 선택
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              {mockApplicant.name}님의 면접 시간을 선택해주세요
            </p>
            <FlexBox direction="col" className="gap-4">
              <div className="w-full border-t border-gray-300 mt-6"></div>
              <TimePicker>
                {Array.from({ length: 4 }, (_, index) => (
                  <TimePicker.DateRow
                    key={index}
                    date={formatMMDD(schedules[0])}
                  >
                    {schedules.map((timeSlot, index) => (
                      <TimePicker.TimeSlotButton
                        key={timeSlot + index}
                        time={formatHHMin(timeSlot)}
                        isSelected={selectedDate === formatHHMin(timeSlot)}
                        onClick={() => setSelectedDate(formatHHMin(timeSlot))}
                      />
                    ))}
                  </TimePicker.DateRow>
                ))}
              </TimePicker>
              <Button isPending={isPending} onClick={handleUpdateInterviewData}>
                완료
              </Button>
              {postInterviewDataResult && (
                <ToastMessage
                  message={postInterviewDataResult.message}
                  isOpen={isToastOpen}
                  isError={false}
                  setIsOpen={setIsToastOpen}
                />
              )}
            </FlexBox>
          </div>
        </div>
      </Body>
    </div>
  );
};

export { DetailMock };
