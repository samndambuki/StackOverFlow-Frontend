import { Action, createReducer, on } from '@ngrx/store';
import * as singleQuestionActions from './singleQuestion.actions';
import { singleQuestion } from 'src/interfaces/singlequestion/singleQuestion';
import { singleQuestionAnswer } from 'src/interfaces/singlequestion/singleQuestionAnswer';

export interface singleQuestionState {
  question: singleQuestion | null;
  answer: singleQuestionAnswer | null;
  loading: boolean;
  error: any;
}

const initialState: singleQuestionState = {
  question: null,
  answer: null,
  loading: false,
  error: null
};

export const singleQuestionReducer = createReducer(
  initialState,
  on(singleQuestionActions.loadQuestion, state => ({ ...state, loading: true, error: null })),
  on(singleQuestionActions.loadQuestionSuccess, (state, { question }) => ({ ...state, question, loading: false })),
  on(singleQuestionActions.loadQuestionFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(singleQuestionActions.addAnswer, state => ({ ...state, loading: true, error: null })),
  on(singleQuestionActions.addAnswerSuccess, state => ({ ...state, loading: false })),
  on(singleQuestionActions.addAnswerFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(singleQuestionActions.upvoteAnswer, state => ({ ...state, loading: true, error: null })),
  on(singleQuestionActions.upvoteAnswerSuccess, state => ({ ...state, loading: false })),
  on(singleQuestionActions.upvoteAnswerFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(singleQuestionActions.downvoteAnswer, state => ({ ...state, loading: true, error: null })),
  on(singleQuestionActions.downvoteAnswerSuccess, state => ({ ...state, loading: false })),
  on(singleQuestionActions.downvoteAnswerFailure, (state, { error }) => ({ ...state, loading: false, error })),

  on(singleQuestionActions.getAnswerById, state => ({ ...state, loading: true, error: null })),
  on(singleQuestionActions.getAnswerByIdSuccess, (state, { answer }) => ({ ...state, answer, loading: false })),
  on(singleQuestionActions.getAnswerByIdFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

export function reducer(state: singleQuestionState | undefined, action: Action): singleQuestionState {
  return singleQuestionReducer(state, action);
}
