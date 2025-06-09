import { axiosInstance } from "../axiosInstance";
import type { DocumentKey, DocumentType } from "@/types/document";

const documentMap: Record<DocumentKey, DocumentType> = {
  "공통 질문": "COMMON",
  "앱 프론트": "APPFRONTEND",
  "웹 프론트": "WEBFRONTEND",
  백엔드: "BACKEND",
  디자인: "DESIGN",
  "데이터 분석": "DATAANALYSIS",
  딥러닝: "DEEPLEARNING",
};

export const fetchItems = async (roleType: DocumentKey) => {
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
