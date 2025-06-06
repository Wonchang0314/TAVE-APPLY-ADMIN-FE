import { http, HttpResponse } from "msw";

const mockQuestions = [
  {
    id: "q1",
    question: "지원 동기와 TAVE 활동을 통해 얻고 싶은 것을 적어주세요.",
    maxLength: 700,
    required: true,
  },
  {
    id: "q2",
    question: "3개의 키워드로 자신을 표현해주세요.",
    maxLength: 500,
    required: true,
  },
  {
    id: "q3",
    question: "이번 학기 계획이 있으신가요?",
    maxLength: 700,
    required: true,
  },
  {
    id: "q4",
    question:
      "아래의 목록 중 홍길동님께서 소유하고 있으신 것이 있다면 자유롭게 첨부해주세요. :)",
    maxLength: 700,
    required: false,
  },
  {
    id: "q5",
    question: "가능한 오프라인 면접 시간",
    required: true,
  },
];

const getQuestions = http.get("/api/setting/document", () => {
  return HttpResponse.json(mockQuestions, { status: 200 });
});

export { getQuestions };
