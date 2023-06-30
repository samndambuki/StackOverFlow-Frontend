import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GetQuestionsState } from 'src/interfaces/getquestions/get-questions.state.';

export const selectGetQuestionsState =
  createFeatureSelector<GetQuestionsState>('getQuestions');

export const selectGetQuestions = createSelector(
  selectGetQuestionsState,
  (state) => state.questions || []
);

export const selectGetQuestionsLoading = createSelector(
  selectGetQuestionsState,
  (state) => state.loading
);

export const selectGetQuestionsError = createSelector(
  selectGetQuestionsState,
  (state) => state.error
);
