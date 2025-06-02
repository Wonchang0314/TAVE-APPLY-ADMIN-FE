import { delay, http, HttpResponse } from "msw";
import type {
  SettingDefaultResponse,
  SettingDefaultErrorResponse,
} from "@/api/Setting/types";

const BASE_URL = "/v1/admin/apply/setting";

// 성공 응답 데이터
const mockSettingResponse: SettingDefaultResponse = {
  generation: "15",
  documentRecruitStartDate: "2025-06-01T09:00:00",
  documentRecruitEndDate: "2025-06-07T23:59:59",
  documentAnnouncementDate: "2025-06-10T10:00:00",
  interviewStartDate: "2025-06-13T09:00:00",
  interviewEndDate: "2025-06-15T18:00:00",
  lastAnnouncementDate: "2025-06-18T10:00:00",
  accessStartDate: "2025-05-30T00:00:00",
  accessEndDate: "2025-06-20T23:59:59",
};

// 에러 응답 데이터
const mockSettingErrorResponse: SettingDefaultErrorResponse = {
  code: 400,
  message: "지원 초기 설정을 찾을 수 없습니다.",
  data: null,
};

// MSW 핸들러
const settingHandler = http.get(BASE_URL, async () => {
  // 임의로 50% 확률로 성공/실패 응답 반환
  const shouldSucceed = Math.random() > 0.2;

  if (shouldSucceed) {
    return HttpResponse.json(mockSettingResponse, { status: 200 });
  } else {
    return HttpResponse.json(mockSettingErrorResponse, { status: 400 });
  }
});

const postSettingDefault = http.post(BASE_URL, async ({ request }) => {
  const body = await request.json();
  const shouldSucceed = Math.random() > 0.3;

  await delay(2000);

  if (shouldSucceed) {
    return HttpResponse.json(
      {
        message: "지원 초기 설정 저장에 성공했습니다",
        body: body,
      },
      { status: 200 }
    );
  } else {
    return HttpResponse.json(
      {
        message: "지원 초기 설정 저장에 실패했습니다",
        body: body,
      },
      { status: 400 }
    );
  }
});

export { settingHandler, postSettingDefault };
