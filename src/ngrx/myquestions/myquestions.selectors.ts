import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MyQuestionsState } from './myquestions.reducer';

export const selectMyQuestionsState =
  createFeatureSelector<MyQuestionsState>('myQuestions');

export const selectQuestionById = (questionId: string) =>
  createSelector(
    selectMyQuestionsState,
    (state: MyQuestionsState) =>
      state.questions &&
      state.questions.find((question) => question.questionId === questionId)
  );
