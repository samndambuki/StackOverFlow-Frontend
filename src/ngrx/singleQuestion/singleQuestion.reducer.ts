import { createReducer, on } from '@ngrx/store';
import * as SingleQuestionActions from './singleQuestion.actions';
import { getAnswerByQuestionId } from 'src/interfaces/singlequestion/getAnswerByQuestionIdResponse';

export interface SingleQuestionState {
  answers: getAnswerByQuestionId[];
  loading: boolean;
  error: string;
}

export const initialSingleQuestionState: SingleQuestionState = {
  answers: [],
  loading: false,
  error: '',
};

export const singleQuestionReducer = createReducer(
  initialSingleQuestionState,
  on(SingleQuestionActions.loadAnswersByQuestionId, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),
  on(SingleQuestionActions.loadAnswersByQuestionIdSuccess, (state, { answers }) => ({
    ...state,
    answers,
    loading: false,
    error: '',
  })),
  on(SingleQuestionActions.loadAnswersByQuestionIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(SingleQuestionActions.postAnswer, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),
  on(SingleQuestionActions.postAnswerSuccess, (state) => ({
    ...state,
    loading: false,
    error: '',
  })),
  on(SingleQuestionActions.postAnswerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
