import { createReducer, on } from '@ngrx/store';
import { AdminViewAllQuestions } from 'src/interfaces/adminviewallquestions/adminviewallquestions';
import * as AdminViewAllQuestionsActions from '../adminviewallquestions/adminviewallquestions.actions';

export interface AdminViewAllQuestionsState {
  questions: AdminViewAllQuestions[];
  loading: boolean;
  error: any;
}

const initialState: AdminViewAllQuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

export const adminViewAllQuestionsReducer = createReducer(
  initialState,
  on(AdminViewAllQuestionsActions.loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    AdminViewAllQuestionsActions.loadQuestionsSuccess,
    (state, { questions }) => ({
      ...state,
      questions,
      loading: false,
    })
  ),
  on(AdminViewAllQuestionsActions.loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AdminViewAllQuestionsActions.deleteQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    AdminViewAllQuestionsActions.deleteQuestionSuccess,
    (state, { questionId }) => ({
      ...state,
      questions: state.questions.filter(
        (question) => question.questionId !== questionId
      ),
      loading: false,
    })
  ),
  on(
    AdminViewAllQuestionsActions.deleteQuestionFailure,
    (state, { error }) => ({
      ...state,
      error,
      loading: false,
    })
  )
);
