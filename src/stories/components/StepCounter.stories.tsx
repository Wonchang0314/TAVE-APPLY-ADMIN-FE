import type { Meta, StoryObj } from "@storybook/react";
import StepCounter from "@/components/StepCounter/StepCounter";
import { useState } from "react";

const meta = {
  title: "Components/StepCounter",
  component: StepCounter,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
### StepCounter 컴포넌트

단계별 진행 상태를 표시하는 컴포넌트입니다.

#### 주요 기능
- 현재 단계와 전체 단계 수를 시각적으로 표현
- 완료된 단계, 현재 단계, 대기 중인 단계를 구분하여 표시
- 사용자 친화적인 단계별 진행률 표시

#### 사용 예시
\`\`\`tsx
<StepCounter 
  currentStep={2} 
  totalSteps={5} 
  steps={['정보 입력', '확인', '결제', '검토', '완료']}
/>
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof StepCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

function setFn(num: number) {
  console.log(num);
  return;
}

export const Default: Story = {
  args: {
    title: "Steps",
    maxStep: 5,
    currentStep: 1,
    stepLabels: ["단계1", "단계2", "단계3", "단계4", "단계5"],
    setCurrentStep: () => setFn(1),
  },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(1);
    return (
      <div className="min-w-[500px]">
        <StepCounter
          {...args}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    );
  },
};
