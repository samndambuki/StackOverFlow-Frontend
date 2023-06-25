import { createReducer, on } from '@ngrx/store';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';
import { loadMyQuestions, loadMyQuestionsFailure, loadMyQuestionsSuccess } from './myquestions.actions';

export interface MyQuestionsState {
  questions: GetQuestions[] | null;
  loading: boolean;
  error: string | null;
}

export const initialMyQuestionsState: MyQuestionsState = {
  questions: null,
  loading: false,
  error: null,
};

export const myQuestionsReducer = createReducer(
  initialMyQuestionsState,
  on(loadMyQuestions, (state) => ({ ...state, loading: true, error: null })),
  on(loadMyQuestionsSuccess, (state, { questions }) => ({ ...state, questions, loading: false, error: null })),
  on(loadMyQuestionsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
