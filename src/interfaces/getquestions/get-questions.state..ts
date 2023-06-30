import { GetQuestions } from './getQuestions.iterface';

export interface GetQuestionsState {
  questions: GetQuestions[] | null;
  loading: boolean;
  error: string | null;
}

export const initialGetQuestionsState: GetQuestionsState = {
  questions: null,
  loading: false,
  error: null,
};
