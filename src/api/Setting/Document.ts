import type { RoleType } from "@/types/role";
import { axiosInstance } from "../axiosInstance";

type DocumentType =
  | "design"
  | "web-front"
  | "app-front"
  | "backend"
  | "data-analysis"
  | "deep-learning";

const documentMap: Record<RoleType, DocumentType> = {
  "앱 프론트": "app-front",
  "웹 프론트": "web-front",
  백엔드: "backend",
  디자인: "design",
  "데이터 분석": "data-analysis",
  딥러닝: "deep-learning",
};

export const fetchItems = async (roleType: RoleType) => {
  try {
    const res = await axiosInstance.get(
      `/api/setting/document/${documentMap[roleType]}`
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return [];
  }
};
