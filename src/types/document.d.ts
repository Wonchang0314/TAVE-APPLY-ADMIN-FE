import { RoleType } from "./role";

type DocumentType =
  | "common"
  | "design"
  | "web-front"
  | "app-front"
  | "backend"
  | "data-analysis"
  | "deep-learning";

type DocumentKey = RoleType | "공통 질문";

export type { DocumentType, DocumentKey };
