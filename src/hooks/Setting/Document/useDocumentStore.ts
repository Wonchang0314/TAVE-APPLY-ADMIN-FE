import { create } from "zustand";

interface DocumentStates {
  questions: any[];
}

interface DocumentActions {
  setQuestions: (questions: any[]) => void;
  resetStore: () => void;
}

type DocumentStore = DocumentStates & DocumentActions;

const initialState: DocumentStates = {
  questions: [],
};
const useDocumentStore = create<DocumentStore>((set) => ({
  ...initialState,
  setQuestions: (questions: any[]) => set({ questions }),
  resetStore: () => set(initialState),
}));

export default useDocumentStore;
