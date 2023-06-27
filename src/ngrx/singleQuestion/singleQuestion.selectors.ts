import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { singleQuestionState } from './singleQuestion.reducer';
import { singleQuestion } from 'src/interfaces/singlequestion/singleQuestion';
import { singleQuestionAnswer } from 'src/interfaces/singlequestion/singleQuestionAnswer';

// Select the single question feature state
export const selectSingleQuestionState = (state: AppState) => state.singleQuestion;

// Select the question
export const selectQuestion = createSelector(
  selectSingleQuestionState,
  (state: singleQuestionState) => state.question
);

// Select the loading status
export const selectLoading = createSelector(
  selectSingleQuestionState,
  (state: singleQuestionState) => state.loading
);

// Select the error status
export const selectError = createSelector(
  selectSingleQuestionState,
  (state: singleQuestionState) => state.error
);

// Select the answer
export const selectAnswer = createSelector(
  selectSingleQuestionState,
  (state: singleQuestionState) => state.answer
);

// Select the question by ID
export const selectQuestionById = (questionId: string) =>
  createSelector(
    selectSingleQuestionState,
    (state: singleQuestionState) => {
      if (state.question && state.question.questionId === questionId) {
        return { ...state.question };
      }
      return null;
    }
  );

  // Select the answer by ID
export const selectAnswerById = (answerId: string) =>
createSelector(
  selectSingleQuestionState,
  (state: singleQuestionState) => {
    if (state.answer && state.answer.answerId === answerId) {
      return { ...state.answer };
    }
    return null;
  }
);
