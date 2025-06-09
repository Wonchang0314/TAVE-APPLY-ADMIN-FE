import { useState } from "react";
import DatePicker from "@/components/DatePicker/DatePicker";
import FlexBox from "@/components/Layout/FlexBox";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import Icon from "@/components/Icon/Icon";

import ToastMessage from "@/components/Modal/ToastMessage";

const options = ["15분", "20분", "25분", "30분"];

const InterviewScheduleModal = ({
  ref,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
}) => {
  const [interviewStartDate, setInterviewStartDate] = useState("");
  const [interviewEndDate, setInterviewEndDate] = useState("");

  const [selected, setSelected] = useState("15분");
  const [open, setOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const updateInterviewSchedule = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsToastOpen(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Modal
      dialogRef={ref}
      title="면접 시간 설정"
      buttonCount={2}
      confirmText="등록"
      isPending={isLoading}
      onConfirm={updateInterviewSchedule}
      width=""
    >
      <FlexBox direction="col" className="p-2 gap-4">
        {/* Step 1 */}
        <div className="w-full">
          <FlexBox className="gap-2 mb-2 text-gray-900">
            <div className="bg-gray-200 py-2 px-4 rounded-full font-semibold min-w-[32px] text-center">
              1
            </div>
            <h3 className="font-semibold text-base">면접 진행 일자</h3>
          </FlexBox>

          <div className="pl-12">
            <FlexBox className="gap-2 w-full">
              <DatePicker
                value={interviewStartDate}
                setValue={setInterviewStartDate}
              />
              <DatePicker
                value={interviewEndDate}
                setValue={setInterviewEndDate}
              />
            </FlexBox>
          </div>
        </div>

        {/* Step 2 */}
        <div className="w-full">
          <FlexBox className="gap-2 text-gray-900">
            <div className="bg-gray-200 py-2 px-4 rounded-full font-semibold min-w-[32px] text-center">
              2
            </div>
            <h3 className="font-semibold text-base">타임별 진행 시간</h3>
          </FlexBox>

          <div className="pl-12">
            <p className="text-gray-500 text-sm mb-2">
              면접 진행 시간 + 면접 평가 시간을 모두 포함한 시간입니다.
            </p>

            <div className="relative w-72">
              <button
                onClick={() => setOpen(!open)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-left flex justify-between items-center bg-white"
              >
                <span>{selected}</span>
                <Icon type="ChevronUp" size={20} className="rotate-180" />
              </button>

              {open && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSelected(option);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="time"
                        checked={selected === option}
                        onChange={() => setSelected(option)}
                      />
                      <label>{option}</label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className="w-full">
          <FlexBox className="gap-2 text-gray-900">
            <div className="bg-gray-200 py-2 px-4 rounded-full font-semibold min-w-[32px] text-center">
              3
            </div>
            <h3 className="font-semibold text-base">면접 시간대</h3>
          </FlexBox>

          <FlexBox className="pl-12 gap-2">
            <Input.WithLabel label="면접 시작 시간" iconType="ClockCircle">
              <Input
                placeholder="24시간 기준으로 작성 (예시 - 12:00)"
                className="w-full"
              />
            </Input.WithLabel>

            <Input.WithLabel label="면접 종료 시간" iconType="ClockCircle">
              <Input
                placeholder="24시간 기준으로 작성 (예시 - 12:00)"
                className="w-full"
              />
            </Input.WithLabel>
          </FlexBox>
        </div>
      </FlexBox>
      <ToastMessage
        message="면접 시간을 변경하셨습니다"
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
      />
    </Modal>
  );
};

export default InterviewScheduleModal;
