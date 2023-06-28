import { createReducer, on } from '@ngrx/store';
import { Question } from 'src/interfaces/ask question/question.interface';
import { updateQuestion } from './updateQuestion.actions';

export interface QuestionState {
  questions: Question[];
}

export const initialState: QuestionState = {
  questions: [],
};

export const questionReducer = createReducer(
  initialState,
  on(updateQuestion, (state, { questionId, updatedQuestion }) => {
    
    const updatedQuestions = state.questions.map(question => {
      if (question.questionId === questionId) {
        return { ...question, ...updatedQuestion };
      }
      return question;
    });

    return {
      ...state,
      questions: updatedQuestions,
    };
  })
);
