import { createReducer, on } from '@ngrx/store';
import * as GetQuestionsActions from './get-questions.actions';
import { initialGetQuestionsState } from 'src/interfaces/getquestions/get-questions.state.';

export const getQuestionsReducer = createReducer(
  initialGetQuestionsState,
  on(GetQuestionsActions.loadGetQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(GetQuestionsActions.loadGetQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    loading: false,
  })),
  on(GetQuestionsActions.loadGetQuestionsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
