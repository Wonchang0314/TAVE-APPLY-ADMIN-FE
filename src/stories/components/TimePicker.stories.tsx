import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from "@/components/DatePicker/TimePicker";
import { useState } from "react";

const meta = {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
### TimePicker 컴포넌트

시간 선택을 위한 컴포넌트입니다.

#### 주요 기능
- 날짜별 시간대 선택
- 시간대 버튼 UI
- 선택된 시간 하이라이트
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [selectedTime, setSelectedTime] = useState<string>("");
    const timeSlots = [
      "09:00", "10:00", "11:00", "13:00",
      "14:00", "15:00", "16:00", "17:00"
    ];
    
    return (
      <TimePicker>
        <TimePicker.DateRow date="2024-03-20">
          {timeSlots.map((time) => (
            <TimePicker.TimeSlotButton
              key={time}
              time={time}
              isSelected={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            />
          ))}
        </TimePicker.DateRow>
      </TimePicker>
    );
  },
}; 