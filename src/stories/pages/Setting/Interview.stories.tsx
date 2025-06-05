import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import InterviewSettingMock from "./InterviewMock";
import { DetailMock } from "./Interview/DetailMock";

const meta = {
  title: "Pages/Setting/Interview",
  component: InterviewSettingMock,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
### 면접 관리 페이지

면접 관리자가 면접 일정과 장소를 관리하고, 지원자들의 면접 시간을 배정할 수 있는 페이지입니다.

#### 주요 기능
- 면접 시간표 등록 및 관리
- 면접 장소 설정
- 오픈채팅방 링크 및 비밀번호 관리
- 지원자별 상세 정보 조회 및 면접 시간 배정

#### 구성 요소
1. **시간표 등록**: CSV 파일을 통한 면접자/면접관 시간표 업로드
2. **기본 설정**: 면접 장소 및 오픈채팅방 정보 설정
3. **지원자 관리**: 지원자 목록 조회 및 필터링
4. **상세 정보**: 지원자별 상세 정보 및 면접 시간 배정
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 min-h-screen pt-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InterviewSettingMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InterviewSetting: Story = {
  name: "면접 설정",
  parameters: {
    docs: {
      description: {
        story: `
### 면접 기본 설정 페이지

면접 장소와 오픈채팅방 정보를 설정하는 페이지입니다.

#### 기능
- 면접 장소 등록 (주소 및 상세 주소)
- 일자별 오픈채팅방 링크 및 비밀번호 설정
- 설정 정보 저장
        `,
      },
    },
  },
  render: () => (
    <MemoryRouter>
      <div className="bg-gray-900 min-h-screen">
        <InterviewSettingMock />
      </div>
    </MemoryRouter>
  ),
};

export const ApplicantDetail: Story = {
  name: "지원자 상세 정보",
  parameters: {
    docs: {
      description: {
        story: `
### 지원자 상세 정보 페이지

개별 지원자의 상세 정보를 조회하고 면접 시간을 배정하는 페이지입니다.

#### 기능
- 지원자 기본 정보 조회
- 공통 질문 및 답변 확인
- 파트별 질문 및 답변 확인
- 면접 시간 선택 및 배정
        `,
      },
    },
  },
  render: () => (
    <MemoryRouter initialEntries={["/setting/interview/1"]}>
      <div className="bg-gray-900 min-h-screen">
        <DetailMock />
      </div>
    </MemoryRouter>
  ),
};
