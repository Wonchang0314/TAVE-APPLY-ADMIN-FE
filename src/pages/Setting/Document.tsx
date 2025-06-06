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

const DocumentSetting = () => {
  const [selectedTab, setSelectedTab] = useState("지원서 질문");
  const [selectedSide, setSelectedSide] = useState<SideBarLabel>("");
  const [questions, setQuestions] = useState<any[]>([]);

  const fetchItems = async () => {
    try {
      const res = await axiosInstance.get(`/api/setting/document`);
      return res.data;
    } catch (error) {
      return error;
    }
  };

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

  useEffect(() => {
    const fetcher = async () => {
      const items = await fetchItems();
      const editableItems = items.map((item: any) => {
        return { ...item, mode: "default" };
      });
      setQuestions(editableItems);
    };
    fetcher();
  }, []);

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
            onItemClick={setSelectedSide}
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
