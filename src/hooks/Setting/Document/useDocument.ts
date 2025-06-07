import { useEffect } from "react";
import useDocumentStore from "./useDocumentStore";
import { fetchItems } from "@/api/Setting/Document";

const useDocument = () => {
  const { questions, setQuestions } = useDocumentStore();

  useEffect(() => {
    const initializeData = async () => {
      const items = await fetchItems("백엔드");
      const editableItems = items.map((item: any) => ({
        ...item,
        mode: "default",
      }));
      setQuestions(editableItems);
    };

    initializeData();
  }, []);

  const addNewQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "",
      maxLength: 100,
      required: false,
    };
    const temp = [...questions, newQuestion];
    setQuestions(temp);
  };

  const deleteQuestion = (itemId: string) => {
    const temp = questions.filter((question) => question.id !== itemId);
    setQuestions(temp);
  };

  const startEditQuestion = (itemId: string) => {
    const newQuestions = questions.map((question) => ({
      ...question,
      mode: question.id === itemId ? "focused" : "blurred",
    }));
    setQuestions(newQuestions);
  };

  const editQuestion = (itemId: string, updatedQuestion: string) => {
    const newQuestions = questions.map((item) => ({
      ...item,
      question: item.id === itemId ? updatedQuestion : item.question,
    }));
    setQuestions(newQuestions);
  };

  const endEditQuestion = () => {
    const newQuestions = questions.map((question) => ({
      ...question,
      mode: "default",
    }));
    setQuestions(newQuestions);
  };

  const toggleRequired = (itemId: string) => {
    const newQuestions = questions.map((question) => ({
      ...question,
      required: question.id === itemId ? !question.required : question.required,
    }));
    setQuestions(newQuestions);
  };

  return {
    questions,
    setQuestions,
    addNewQuestion,
    deleteQuestion,
    startEditQuestion,
    editQuestion,
    endEditQuestion,
    toggleRequired,
  };
};

export default useDocument;
