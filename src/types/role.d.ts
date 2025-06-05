export type RoleType =
  | "웹 프론트"
  | "백엔드"
  | "디자인"
  | "데이터 분석"
  | "딥러닝"
  | "앱 프론트";

export type Application = {
  id: string;
  name: string;
  fieldType: string;
  sex: string;
  school: string;
  recruitTime: string;
  isEvaluated: boolean;
};
