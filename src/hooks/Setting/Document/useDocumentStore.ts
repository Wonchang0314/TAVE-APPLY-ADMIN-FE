import { create } from "zustand";

interface DocumentStates {
  questions: any[];
  wordLimitModalRef: HTMLDialogElement | null;
  interviewSceduleModalRef: HTMLDialogElement | null;
}

interface DocumentActions {
  setQuestions: (questions: any[]) => void;
  resetStore: () => void;
}

type DocumentStore = DocumentStates & DocumentActions;

const initialState: DocumentStates = {
  questions: [],
  wordLimitModalRef: null,
  interviewSceduleModalRef: null,
};
const useDocumentStore = create<DocumentStore>((set) => ({
  ...initialState,
  setQuestions: (questions: any[]) => set({ questions }),
  resetStore: () => set(initialState),
}));

export default useDocumentStore;
