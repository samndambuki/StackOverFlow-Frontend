import { QuestionResponse } from "./questionResponse";

export interface QuestionState {
    question: QuestionResponse | null;
    loading: boolean;
    error: string | null;
  }