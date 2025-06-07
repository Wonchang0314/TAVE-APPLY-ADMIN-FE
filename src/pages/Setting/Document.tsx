import { useCallback, useEffect, useState } from "react";
import FlexBox from "@/components/Layout/FlexBox";
import Body from "@/components/Layout/Body";
import Tab from "@/components/Tab/Tab";
import {
  Sidebar,
  SidebarItems,
  type SideBarLabel,
} from "@/components/Layout/Sidebar";
import DraggableList from "@/components/Draggable/List";
import { axiosInstance } from "@/api/axiosInstance";
import type { RoleType } from "@/types/role";

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
const DocumentSetting = () => {
  const [selectedTab, setSelectedTab] = useState("지원서 질문");
  const [selectedSide, setSelectedSide] = useState<SideBarLabel>("");
  const [questions, setQuestions] = useState<any[]>([]);

  const fetchItems = async (roleType: RoleType) => {
    try {
      const res = await axiosInstance.get(
        `/api/setting/document/${documentMap[roleType]}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const fetchNewItems = async (roleType: RoleType) => {
    const items = await fetchItems(roleType);
    const editableItems = items.map((item: any) => {
      return { ...item, mode: "default" };
    });
    setQuestions(editableItems);
    setSelectedSide(items);
  };

  useEffect(() => {
    const fetcher = async () => {
      const items = await fetchItems("백엔드");
      const editableItems = items.map((item: any) => {
        return { ...item, mode: "default" };
      });
      setQuestions(editableItems);
    };
    fetcher();
  }, []);

  const addNewQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "",
      required: false,
    };
    const temp = [...questions, newQuestion];
    setQuestions(temp);
  };

  const deleteQuestion = (item: any) => {
    const temp = questions.filter((question) => question.id !== item.id);
    setQuestions(temp);
  };

  const startEditQuestion = useCallback((itemId: string) => {
    setQuestions((prev) =>
      prev.map((item) => ({
        ...item,
        mode: item.id === itemId ? "focused" : "blurred",
      }))
    );
  }, []);

  const endEditQuestion = useCallback(() => {
    setQuestions((prev) =>
      prev.map((item) => ({
        ...item,
        mode: "default",
      }))
    );
  }, []);

  return (
    <div className="text-white">
      <FlexBox className="gap-8 px-16 pb-8 items-start" direction="col">
        <h1 className="font-bold text-4xl">서류 설정</h1>
      </FlexBox>
      <Body className="pt-4">
        <Tab
          categories={["지원서 질문", "지원 완료 안내"]}
          active={selectedTab}
          onChange={setSelectedTab}
          centerType={true}
        />
        <div className="flex items-start w-full">
          <Sidebar
            items={SidebarItems}
            selectedItem={selectedSide}
            onSectionClick={setSelectedSide}
            onItemClick={fetchNewItems}
          />
          <DraggableList
            items={questions}
            setItems={setQuestions}
            addItem={addNewQuestion}
            deleteItem={deleteQuestion}
            startEditItem={startEditQuestion}
            endEditItem={endEditQuestion}
          />
        </div>
      </Body>
    </div>
  );
};

export default DocumentSetting;
