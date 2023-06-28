import { createReducer, on } from '@ngrx/store';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';
import { loadMyQuestions, loadMyQuestionsFailure, loadMyQuestionsSuccess, loadQuestionById, loadQuestionByIdFailure, loadQuestionByIdSuccess } from './myquestions.actions';
import { Question } from 'src/interfaces/ask question/question.interface';

export interface MyQuestionsState {
  questions: GetQuestions[] | null;
  selectedQuestion: Question | null;
  loading: boolean;
  error: string | null;
}

export const initialMyQuestionsState: MyQuestionsState = {
  questions: null,
  selectedQuestion: null,
  loading: false,
  error: null,
};

export const myQuestionsReducer = createReducer(
  initialMyQuestionsState,
  on(loadMyQuestions, (state) => ({ ...state, loading: true, error: null })),
  on(loadMyQuestionsSuccess, (state, { questions }) => ({ ...state, questions, loading: false, error: null })),
  on(loadMyQuestionsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(loadQuestionById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadQuestionByIdSuccess, (state, { question }) => ({
    ...state,
    selectedQuestion: question,
    loading: false,
    error: null,
  })),
  on(loadQuestionByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
