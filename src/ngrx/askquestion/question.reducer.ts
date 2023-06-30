import { createReducer, on } from '@ngrx/store';
import {
  askQuestion,
  askQuestionFailure,
  askQuestionSuccess,
} from './question.actions';
import { QuestionState } from 'src/interfaces/ask question/questionState';

const initialState: QuestionState = {
  question: null,
  loading: false,
  error: null,
};

export const questionReducer = createReducer(
  initialState,
  on(askQuestion, (state) => ({ ...state, loading: true, error: null })),
  on(askQuestionSuccess, (state, { response }) => ({
    ...state,
    question: response,
    loading: false,
    error: null,
  })),
  on(askQuestionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
