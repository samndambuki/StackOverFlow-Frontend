import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionState } from 'src/interfaces/ask question/questionState';

const getQuestionState = createFeatureSelector<QuestionState>('question');

export const getQuestion = createSelector(
  getQuestionState,
  (state) => state.question
);
export const getLoading = createSelector(
  getQuestionState,
  (state) => state.loading
);
export const getError = createSelector(
  getQuestionState,
  (state) => state.error
);
