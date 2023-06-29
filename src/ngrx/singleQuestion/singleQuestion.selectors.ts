import { createSelector } from '@ngrx/store';
import { SingleQuestionState } from './singleQuestion.reducer';
import { AppState } from '../app-state';

// Select the single question state
export const selectSingleQuestion = (state: AppState) => state.singleQuestion;

// Select the answers
export const selectAnswers = createSelector(
  selectSingleQuestion,
  (state: SingleQuestionState) => state.answers
);

// Select the loading state
export const selectLoading = createSelector(
  selectSingleQuestion,
  (state: SingleQuestionState) => state.loading
);

// Select the error message
export const selectError = createSelector(
  selectSingleQuestion,
  (state: SingleQuestionState) => state.error
);
