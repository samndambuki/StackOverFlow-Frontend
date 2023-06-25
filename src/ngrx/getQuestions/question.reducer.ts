import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/interfaces/question/question.interface';
import * as QuestionActions from './question.actions';

export interface QuestionState {
  questions: Question[];
  error: string | null;
}

export const initialState: QuestionState = {
  questions: [],
  error: null,
};

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.getQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    error: null,
  })),
  on(QuestionActions.getQuestionsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
